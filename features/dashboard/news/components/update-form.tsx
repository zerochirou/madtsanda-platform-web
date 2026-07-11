"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useEffect } from "react";
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
import { NewsUpdateSchema, NewsItem } from "@/types/dto/news";
import { updateNewsService } from "../service";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  EditorEdit,
  EditorFrame,
} from "@/components/shared/block-editor";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { DropzoneInput } from "@/components/shared/file-upload";
import { NEWS_IMAGE_MAX_SIZE_MB } from "@/lib/upload";

export function UpdateFormSkeleton() {
  return (
    <div className="animate-pulse">
      <FieldSet>
        {/* Header Skeleton */}
        <div className="space-y-3 mb-8">
          <div className="h-10 w-48 bg-muted rounded-md" /> {/* Legend */}
          <div className="h-4 w-64 bg-muted/60 rounded-md" /> {/* Description */}
        </div>

        <FieldGroup className="space-y-6">
          {/* TITLE SKELETON */}
          <div className="space-y-2">
            <div className="h-4 w-20 bg-muted rounded" /> {/* Label */}
            <div className="h-10 w-full bg-muted/50 rounded-sm" /> {/* Input */}
          </div>

          {/* CATEGORY SKELETON */}
          <div className="space-y-2">
            <div className="h-4 w-32 bg-muted rounded" /> {/* Label */}
            <div className="h-10 w-full bg-muted/50 rounded-sm" /> {/* Select */}
          </div>

          {/* IMAGE SKELETON */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-28 bg-muted rounded" /> {/* Label */}
              <div className="h-5 w-40 bg-muted/40 rounded-full" /> {/* Badge */}
            </div>
            <div className="h-32 w-full border-2 border-dashed border-muted rounded-md flex items-center justify-center">
               <div className="h-8 w-8 bg-muted rounded-full" />
            </div>
          </div>

          <FieldSeparator />

          {/* EDITOR SKELETON */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-muted rounded" /> {/* Label */}
            <div className="h-64 w-full bg-muted/30 border-2 border-dashed border-muted rounded-sm p-4">
               {/* Baris-baris teks simulasi dalam editor */}
               <div className="space-y-3">
                 <div className="h-3 w-[90%] bg-muted/40 rounded" />
                 <div className="h-3 w-[85%] bg-muted/40 rounded" />
                 <div className="h-3 w-[40%] bg-muted/40 rounded" />
               </div>
            </div>
          </div>

          {/* PIN SWITCH SKELETON */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-6 w-11 bg-muted rounded-full" /> {/* Switch */}
            <div className="h-4 w-48 bg-muted rounded" /> {/* Label */}
          </div>

          {/* BUTTON SKELETON */}
          <div className="h-10 w-full bg-muted rounded-md mt-4" />
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

export function UpdateForm({
  user,
  category,
  news,
}: {
  user: UserDTO;
  category: NewsCategoryDTO[] | null;
  news: NewsItem;
}) {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewsUpdateSchema>>({
    resolver: zodResolver(NewsUpdateSchema),
    defaultValues: {
      title: news.title,
      content: news.content,
      categoryId: String(news.categoryId), // Pastikan string untuk Select
      // Image default null karena input file tidak bisa diisi string URL
      image: null,
      pin: Boolean(news.pin),
    },
  });

  const { setValue, handleSubmit, control, reset } = form;

  // Re-sinkronisasi jika data news berubah (opsional)
  useEffect(() => {
    reset({
      title: news.title,
      content: news.content,
      categoryId: String(news.categoryId),
      pin: Boolean(news.pin),
      image: null,
    });
  }, [news, reset]);

  function onSubmit(data: z.infer<typeof NewsUpdateSchema>) {
    startTransition(async () => {
      const newFile = (data.image as unknown as File[])?.[0];

      const payload = {
        id: news.id,
        title: data.title,
        content: data.content,
        image: newFile || news.imageUrl,
        categoryId: data.categoryId,
        pin: data.pin,
        userId: user.id,
      };

      const result = await updateNewsService(payload, news.id);

      if (result) {
        toast.success("Perubahan berhasil disimpan!");
      } else {
        toast.error("Gagal menyimpan perubahan.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldLegend className="text-4xl">Edit Berita</FieldLegend>
        <FieldDescription>
          Perbarui informasi berita yang sudah ada.
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

          {/* CATEGORY */}
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Kategori Berita</FieldLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full rounded-sm">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {category?.map((i) => (
                        <SelectItem key={i.id} value={String(i.id)}>
                          {i.category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />

          {/* IMAGE - Dengan Initial Preview */}
          <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>
                  Gambar berita{" "}
                  <Badge className="ml-2">
                    Bisa dikosongkan jika tidak diubah
                  </Badge>
                </FieldLabel>

                <DropzoneInput
                  initialPreview={news.imageUrl as string}
                  name={field.name}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  onChange={(files) => field.onChange(files)}
                  isInvalid={!!fieldState.error}
                  accept="image/*"
                  multiple={false}
                  maxSizeMB={NEWS_IMAGE_MAX_SIZE_MB}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <FieldSeparator />

          {/* CONTENT EDITOR */}
            <Controller
              name="content"
              control={control}
              render={({ fieldState }) => (
                <Field>
                  <FieldLabel>Konten Utama</FieldLabel>
                  <EditorFrame className="mx-auto w-full border-2 border-dashed rounded-sm p-1 dark:bg-[#1f1f1f]">
                    <EditorEdit
                      initialContent={news.content} // Pastikan komponen Editor mendukung initialContent
                      onChange={(data) => setValue("content", data)}
                    />
                  </EditorFrame>
                  {fieldState.error && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

          {/* PIN SWITCH */}
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
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FieldLabel htmlFor="pin" className="mb-0">
                  Pin berita ini di posisi teratas
                </FieldLabel>
              </Field>
            )}
          />

          <Button type="submit" className="w-full mt-4" disabled={pending}>
            {pending ? <Spinner /> : "Simpan Perubahan"}
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
