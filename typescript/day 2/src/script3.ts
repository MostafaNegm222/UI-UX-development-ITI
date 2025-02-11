interface Blog {
    id: number;
    title: string;
    content: string;
    author: string;
  }
  
  type BlogSummary = Pick <Blog, "title" | "author">; // <- update this
  
  const summary: BlogSummary = { title: "TypeScript Tips", author: "Alice" };