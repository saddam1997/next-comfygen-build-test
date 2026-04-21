function normalizeHTML(content: string) {
  if (!content) return "";

  // if already HTML → keep
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return content;
  }

  // wrap plain text → ensures consistency
  return `<span>${content}</span>`;
}