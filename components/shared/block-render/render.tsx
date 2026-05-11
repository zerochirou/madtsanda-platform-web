import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlockRender({ md }: { md: string }) {
    return <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>;
}
