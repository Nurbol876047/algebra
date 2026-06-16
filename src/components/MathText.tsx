"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function MathText({ content, className = "" }: { content: string; className?: string }) {
  return (
    <div className={`prose prose-blue max-w-none prose-p:leading-relaxed prose-pre:bg-gray-100 prose-pre:text-gray-800 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
