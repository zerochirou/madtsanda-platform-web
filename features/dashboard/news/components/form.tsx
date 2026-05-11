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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserDTO } from "@/types/dto/user";
import { NewsCategoryDTO } from "@/types/dto/news-category";
import z from "zod";
import { NewsCreateSchema } from "@/types/dto/news";
import { createNewsService } from "../service";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Editor, EditorFrame } from "@/components/shared/block-editor";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function NewsEditor({
  user,
  category,
}: {
  user: UserDTO;
  category: NewsCategoryDTO[] | null;
}) {
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewsCreateSchema>>({
    resolver: zodResolver(NewsCreateSchema),
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
      image: null,
      pin: false,
    },
  });

  const { setValue, handleSubmit, control } = form;

  function onSubmit(data: z.infer<typeof NewsCreateSchema>) {
    startTransition(async () => {
      const rawFile = (data.image as FileList)?.[0];
      if (!rawFile) {
        toast.error("Silakan pilih gambar terlebih dahulu");
        return;
      }
      const result = await createNewsService({
        title: data.title,
        content: data.content,
        image: rawFile,
        categoryId: data.categoryId,
        pin: data.pin,
        userId: user.id,
      });
      if (result) {
        toast.success("Berita berhasil dibuat!");
      } else {
        toast.error("Gagal membuat berita. Silakan coba lagi.");
      }
    });
  }

  return (
    <form className="mx-auto max-w-3xl py-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <h1 className="text-4xl font-bold mt-4">Unggah Berita</h1>
      </div>
      <Separator className="mb-8 mt-4" />
      <FieldSet>
        <FieldLegend className="text-4xl">Buat Draft Berita</FieldLegend>
        <FieldDescription>
          Ini akan muncul pada judul, deskripsi, dan metadata.
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
                  placeholder="Masukkan judul berita..."
                  aria-invalid={fieldState.invalid}
                  className="rounded-sm"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          {/* CATEGORY - Fixed Integration */}
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Kategori Berita</FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ? String(field.value) : ""}
                >
                  <SelectTrigger className="w-full rounded-sm">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {category?.map((i) => (
                        <SelectItem key={i.id} value={`${i.id}`}>
                          {i.category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />

          {/* IMAGE URL - Fixed Integration */}
          <Controller
            name="image"
            control={control}
            render={({
              field: { onChange, ref, value, ...field },
              fieldState,
            }) => (
              <Field>
                <FieldLabel>
                  Gambar berita <Badge className="ml-2">Experimental</Badge>
                </FieldLabel>
                <Input
                  {...field} // menyebarkan name, onBlur, dll
                  type="file"
                  id="image"
                  ref={ref}
                  // JANGAN gunakan value={value} karena ini yang bikin error
                  onChange={(e) => {
                    // Kita ambil FileList-nya, bukan string value-nya
                    onChange(e.target.files);
                  }}
                  aria-invalid={fieldState.invalid}
                  className="rounded-sm"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <FieldSeparator />

          {/* CONTENT EDITOR - Fixed Integration */}
          <Controller
            name="content"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>
                  Konten Utama <Badge className="ml-2">Markdown</Badge>
                </FieldLabel>
                <FieldDescription>
                  Gunakan simbol markdown atau perintah menu &apos;/&apos;
                </FieldDescription>
                <EditorFrame className="mx-auto w-full border-2 border-dashed rounded-sm p-1 dark:bg-[#1f1f1f]">
                  <Editor onChange={(data) => setValue("content", data)} />
                </EditorFrame>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          {/* PIN SWITCH - Fixed Integration */}
          <Controller
            name="pin"
            control={control}
            render={({ field }) => (
              <Field
                orientation="horizontal"
                className="flex items-center gap-4"
              >
                <Switch
                  id="pin"
                  checked={field.value as boolean | undefined}
                  defaultChecked={true}
                  onCheckedChange={field.onChange}
                />
                <FieldLabel htmlFor="pin" className="mb-0">
                  Pin berita ini di posisi teratas
                </FieldLabel>
              </Field>
            )}
          />
          <Button type="submit" className="w-full mt-4">
            Publikasikan Berita
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
