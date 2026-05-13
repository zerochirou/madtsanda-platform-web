"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { UserDTO } from "@/types/dto/user";
import z from "zod";
import {
  ResearchCreateSchema,
  ResearchTagResponseDTO,
} from "@/types/dto/research";
import { createResearchService } from "../service";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Pastikan path import benar
import { DatePicker } from "@/components/shared/date-picker/date";
import { Textarea } from "@/components/ui/textarea";

export function ResearchEditor({
  user,
  researchTag,
}: {
  user: UserDTO;
  researchTag: ResearchTagResponseDTO | null;
}) {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResearchCreateSchema>>({
    resolver: zodResolver(ResearchCreateSchema),
    resetOptions: {
      keepValues: true,
      keepErrors: true,
      keepTouched: true,
      keepIsSubmitted: true,
      keepIsValid: true,
    },
    defaultValues: {
      title: "",
      abstrack: "",
      document: undefined, // Gunakan undefined untuk file
      published_date: new Date(),
      researchTagId: "",
    },
  });

  const { handleSubmit, control } = form;

  function onSubmit(values: z.infer<typeof ResearchCreateSchema>) {
    startTransition(async () => {
      try {
        const rawFile =
          values.document instanceof FileList
            ? values.document[0]
            : values.document;

        if (!rawFile) {
          toast.error("Silakan pilih file penelitian terlebih dahulu");
          return;
        }

        // 1. Panggil service
        const result = await createResearchService({
          ...values,
          document: rawFile,
          status: "pending",
          user_id: user.id,
        });

        // 2. Jika sampai sini tanpa throw, berarti sukses
        toast.success("Penelitian berhasil diunggah!");
        // console.log("Success result:", result);
      } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Terjadi kesalahan";

        toast.error(msg);
        console.error("Detail Error:", error);
      }
    });
  }

  return (
    <form className="mx-auto max-w-3xl py-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-4xl font-bold mt-4">Unggah Penelitian</h1>
      </div>
      <Separator className="mb-8 mt-4" />

      <FieldSet>
        <FieldLegend className="text-2xl font-semibold">
          Detail Penelitian
        </FieldLegend>
        <FieldDescription>Maksimal ukuran file adalah 50MB.</FieldDescription>

        <FieldGroup>
          {/* TITLE */}
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Judul</FieldLabel>
                <Input
                  {...field}
                  placeholder="Masukkan judul penelitian..."
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DATE */}
            <Controller
              name="published_date"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Tanggal Publikasi</FieldLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* TAG */}
            <Controller
              name="researchTagId"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Kategori Penelitian</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {researchTag?.data?.map((i) => (
                          <SelectItem key={i.id} value={String(i.id)}>
                            {i.category}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          {/* ABSTRACT */}
          <Controller
            name="abstrack"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Abstrak</FieldLabel>
                <Textarea
                  {...field}
                  placeholder="Masukkan abstrak..."
                  className="min-h-[150px]"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* FILE - Perbaikan krusial pada value handling */}
          <Controller
            name="document"
            control={control}
            render={({ field: { onChange, value, ...field }, fieldState }) => (
              <Field>
                <FieldLabel>
                  File Dokumen (PDF/DOC)
                  <Badge variant="secondary" className="ml-2">
                    Max 50MB
                  </Badge>
                </FieldLabel>
                <Input
                  {...field}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  // Value harus di-reset atau dibiarkan kosong untuk input file
                  value={undefined}
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      onChange(files); // Simpan FileList ke RHF
                    }
                  }}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Button type="submit" className="w-full mt-6" disabled={pending}>
            {pending ? "Mengunggah..." : "Unggah Penelitian"}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
