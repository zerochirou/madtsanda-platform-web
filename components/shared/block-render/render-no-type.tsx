import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlockRenderNoType({ md }: { md: string }) {
  return (
    <div className="prose dark:prose-invert max-w-none relative">
      <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>
    </div>
  );
}
