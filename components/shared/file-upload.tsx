"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Upload, Trash2, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NEWS_IMAGE_MAX_SIZE_MB } from "@/lib/upload";
import type { DropzoneInputProps } from "@/types/components";

export const DropzoneInput = React.forwardRef<
  HTMLInputElement,
  DropzoneInputProps
>(
  (
    {
      onChange,
      isInvalid,
      initialPreview,
      className,
      maxSizeMB = NEWS_IMAGE_MAX_SIZE_MB,
      ...props
    },
    ref,
  ) => {
  const internalInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [fileProgresses, setFileProgresses] = useState<Record<string, number>>({});

  const setRefs = (element: HTMLInputElement) => {
    internalInputRef.current = element;
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const singleFile = files[0];
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    if (singleFile.size > maxSizeBytes) {
      toast.error(`Ukuran gambar maksimal ${maxSizeMB}MB.`);
      setUploadedFiles([]);
      setFileProgresses({});
      onChange(null);
      if (internalInputRef.current) {
        internalInputRef.current.value = "";
      }
      return;
    }

    const newFiles = [singleFile];

    setUploadedFiles(newFiles);
    onChange(newFiles);

    setFileProgresses({ [singleFile.name]: 0 });

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setFileProgresses({ [singleFile.name]: progress });
    }, 200);
  };

  const handleBoxClick = () => {
    internalInputRef.current?.click();
  };

  const removeFile = (filename: string) => {
    setUploadedFiles((prev) => {
      const updatedFiles = prev.filter((file) => file.name !== filename);
      onChange(updatedFiles.length > 0 ? updatedFiles : null);
      return updatedFiles;
    });
    setFileProgresses({});
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors",
          isInvalid
            ? "border-red-500 bg-red-50 dark:bg-red-950/10"
            : "border-border hover:bg-muted/50",
        )}
        onClick={handleBoxClick}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFileSelect(e.dataTransfer.files);
        }}
      >
        <div className="mb-2 bg-muted rounded-full p-3">
          <Upload className={cn("h-5 w-5", isInvalid ? "text-red-500" : "text-muted-foreground")} />
        </div>
        <p className="text-sm font-medium">Upload image</p>
        <p className="text-sm text-muted-foreground mt-1">
          Drag and drop or <span className="text-primary font-medium">click to browse</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Maks. {maxSizeMB}MB
        </p>
        <input {...props} type="file" ref={setRefs} className="hidden" onChange={(e) => handleFileSelect(e.target.files)} />
      </div>

      {/* --- BAGIAN PREVIEW --- */}
      <div className="mt-4">
        {/* 1. Jika ada file baru yang diunggah */}
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => {
            const imageUrl = URL.createObjectURL(file);
            return (
              <div className="border border-border rounded-lg p-2 flex items-center gap-3" key={file.name + index}>
                <div className="w-14 h-14 bg-muted rounded-sm overflow-hidden shrink-0">
                  <Image
                    src={imageUrl}
                    alt="preview"
                    width={56}
                    height={56}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium truncate">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file.name);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-muted rounded-full flex-1 overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all" 
                        style={{ width: `${fileProgresses[file.name] || 0}%` }} 
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {Math.round(fileProgresses[file.name] || 0)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          /* 2. Jika tidak ada file baru, tapi ada initialPreview (Gambar Database) */
          initialPreview && (
            <div className="border border-border rounded-lg p-2 flex items-center gap-3 bg-muted/20">
              <div className="w-14 h-14 bg-muted rounded-sm overflow-hidden shrink-0 border">
                <Image
                  src={
                    initialPreview.startsWith("http://") || initialPreview.startsWith("https://")
                      ? initialPreview
                      : initialPreview.startsWith("/")
                        ? `${(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1").replace(/\/api\/v1\/?$/, "")}${initialPreview}`
                        : `${process.env.NEXT_PUBLIC_S3 || "http://localhost:9000/madtsanda-platform-storage"}/${initialPreview.replace(/^\//, "")}`
                  }
                  alt="Current"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-3 w-3" />
                  <span className="text-xs font-medium">Gambar saat ini di server</span>
                </div>
                <p className="text-[10px] text-muted-foreground">Tidak ada perubahan gambar dipilih</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
  },
);

DropzoneInput.displayName = "DropzoneInput";
