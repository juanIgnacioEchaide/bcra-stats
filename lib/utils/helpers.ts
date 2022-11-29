const chunkItems = (items: any[]) =>
  items?.reduce((chunks: any[][], item: any, index) => {
    const chunk = Math.floor(index / 512);
    chunks[chunk] = ([] as any[]).concat(chunks[chunk] || [], item);
    return chunks;
  }, []);

  export { chunkItems }