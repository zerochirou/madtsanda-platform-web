"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { LibraryCreateSchema, LibraryItem } from "@/types/dto/library";
import { createLibraryService, updateLibraryService } from "../service";

export function LibraryForm({
  initialData,
}: {
  initialData?: LibraryItem | null;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<
    z.input<typeof LibraryCreateSchema>,
    unknown,
    z.output<typeof LibraryCreateSchema>
  >({
    resolver: zodResolver(LibraryCreateSchema),
    defaultValues: {
      title: initialData?.title ?? "",
      author: initialData?.author ?? "",
      category: initialData?.category ?? "",
      year: initialData?.year ?? new Date().getFullYear(),
      available: initialData?.available ?? true,
      description: initialData?.description ?? "",
    },
  });

  const { control, handleSubmit } = form;

  function onSubmit(values: z.output<typeof LibraryCreateSchema>) {
    startTransition(async () => {
      const result = initialData
        ? await updateLibraryService(initialData.id, values)
        : await createLibraryService(values);

      if (!result) {
        toast.error("Gagal menyimpan koleksi library");
        return;
      }

      toast.success("Koleksi library berhasil disimpan");
      router.push("/dashboard/library/table");
    });
  }

  return (
    <form className="mx-auto max-w-3xl py-10" onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldLegend className="text-4xl">
          {initialData ? "Edit Koleksi Library" : "Tambah Koleksi Library"}
        </FieldLegend>
        <FieldDescription>
          Data ini menjadi sumber utama katalog Digital Library publik.
        </FieldDescription>

        <FieldGroup>
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Judul Buku</FieldLabel>
                <Input
                  {...field}
                  placeholder="Masukkan judul buku..."
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Controller
              name="author"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Penulis</FieldLabel>
                  <Input
                    {...field}
                    placeholder="Nama penulis atau penerbit..."
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="category"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Kategori</FieldLabel>
                  <Input
                    {...field}
                    placeholder="Fiksi, Referensi, Keislaman..."
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Controller
              name="year"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Tahun Terbit</FieldLabel>
                  <Input
                    name={field.name}
                    ref={field.ref}
                    value={
                      typeof field.value === "string" ||
                      typeof field.value === "number"
                        ? field.value
                        : ""
                    }
                    onBlur={field.onBlur}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }
                    type="number"
                    min={1900}
                    max={2100}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="available"
              control={control}
              render={({ field }) => (
                <Field
                  orientation="horizontal"
                  className="mt-2 flex items-center justify-between gap-4 rounded-md border p-4"
                >
                  <div>
                    <FieldLabel htmlFor="available" className="mb-1">
                      Tersedia
                    </FieldLabel>
                    <FieldDescription>
                      Tampilkan status ketersediaan di katalog publik.
                    </FieldDescription>
                  </div>
                  <Switch
                    id="available"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Field>
              )}
            />
          </div>

          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Deskripsi</FieldLabel>
                <Textarea
                  {...field}
                  placeholder="Ringkasan koleksi dan manfaat bacaan..."
                  className="min-h-32"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Menyimpan..." : "Simpan Koleksi"}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
