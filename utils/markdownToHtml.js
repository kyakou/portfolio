import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkMath) // Parse math syntax
    .use(remarkRehype) // Convert Markdown AST to HTML AST
    .use(rehypeKatex) // Render math syntax as HTML using KaTeX
    .use(rehypeStringify) // Serialize HTML AST to string
    .process(markdown);
  return result.toString();
}
