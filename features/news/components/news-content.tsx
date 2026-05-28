interface NewsContentProps {
  content: string;
}

export function NewsContent({ content }: NewsContentProps) {
  const paragraphs = content
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl text-lg leading-8 text-zinc-800">
      {paragraphs.map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 24)}-${index}`} className="mb-6">
          {paragraph}
        </p>
      ))}
    </div>
  );
}