export async function fetchi18nsvcCount(contractName: string): Promise<number> {
  // Placeholder for Stacks API call
  return 0;
}
export function calculatei18nsvcStats(entries: Array<{value: number; active: boolean}>) {
  const active = entries.filter(e => e.active);
  return {
    total: entries.length,
    active: active.length,
    totalValue: entries.reduce((sum, e) => sum + e.value, 0),
    avgValue: entries.length > 0 ? entries.reduce((s, e) => s + e.value, 0) / entries.length : 0,
  };
}
