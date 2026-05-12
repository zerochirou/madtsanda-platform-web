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
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { UserDTO } from "@/types/dto/user";
import z from "zod";
import { ResearchCreateSchema } from "@/types/dto/research";
import { createResearchService } from "../service";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ResearchEditor({ user }: { user: UserDTO }) {
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResearchCreateSchema>>({
    resolver: zodResolver(ResearchCreateSchema),
    defaultValues: {
      title: "",
      abstrack: "",
      file: null,
    },
  });

  const { handleSubmit, control } = form;

  function onSubmit(data: z.infer<typeof ResearchCreateSchema>) {
    startTransition(async () => {
      const rawFile = (data.file as FileList)?.[0];
      if (!rawFile) {
        toast.error("Silakan pilih file penelitian (PDF/DOC) terlebih dahulu");
        return;
      }
      const result = await createResearchService({
        title: data.title,
        abstract: data.abstrack,
        file: rawFile,
        userId: user.id,
      });

      if (result) {
        toast.success("Penelitian berhasil diunggah!");
      } else {
        toast.error("Gagal mengunggah penelitian.");
      }
    });
  }

  return (
    <form className="mx-auto max-w-3xl py-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <h1 className="text-4xl font-bold mt-4">Unggah Penelitian</h1>
      </div>
      <Separator className="mb-8 mt-4" />
      <FieldSet>
        <FieldLegend className="text-4xl">Detail Penelitian</FieldLegend>
        <FieldDescription>
          Maksimal ukuran file adalah 50MB.
        </FieldDescription>
        <FieldGroup>
          {/* TITLE */}
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="title">Judul</FieldLabel>
                <Input
                  {...field}
                  id="title"
                  placeholder="Masukkan judul penelitian..."
                  aria-invalid={fieldState.invalid}
                  className="rounded-sm"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* ABSTRACT */}
          <Controller
            name="abstrack"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="abstrack">Abstrak</FieldLabel>
                <Input
                  {...field}
                  id="abstrack"
                  placeholder="Masukkan abstrak..."
                  aria-invalid={fieldState.invalid}
                  className="rounded-sm"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* FILE */}
          <Controller
            name="file"
            control={control}
            render={({
              field: { onChange, ref, value, ...field },
              fieldState,
            }) => (
              <Field>
                <FieldLabel>
                  File Dokumen (PDF/DOC) <Badge className="ml-2">Max 50MB</Badge>
                </FieldLabel>
                <Input
                  {...field}
                  type="file"
                  id="file"
                  ref={ref}
                  onChange={(e) => {
                    onChange(e.target.files);
                  }}
                  aria-invalid={fieldState.invalid}
                  className="rounded-sm"
                  accept=".pdf,.doc,.docx"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Button type="submit" className="w-full mt-4" disabled={pending}>
            {pending ? "Mengunggah..." : "Unggah Penelitian"}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
