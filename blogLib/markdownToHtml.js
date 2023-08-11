//import { unified } from "unified";
//import remarkParse from "remark-parse";
//import remarkRehype from "remark-rehype";
//import rehypeRaw from "rehype-raw";
//import rehypeStringify from "rehype-stringify";
//import rehypeSanitize from "rehype-sanitize";
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .processSync(markdown);
  return result.toString();
}

/* export default async function markdownToHtml(markdown) {
  //let result = "";
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
    .then((file) => console.log(file))
    .catch((error) => {
      throw error;
    });

  return result;
} */
