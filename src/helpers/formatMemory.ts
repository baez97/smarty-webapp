export function formatMemory(memory: number) {
  if (!memory) {
    return '';
  }
  return memory && memory >= 1024 ? `${memory/1024} Gb` : `${memory} Mb`;
}