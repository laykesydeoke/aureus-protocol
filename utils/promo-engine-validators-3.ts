export function validatepromoengineValue(val: number): { valid: boolean; error?: string } {
  if (typeof val !== 'number' || isNaN(val)) return { valid: false, error: 'Must be a number' };
  if (val <= 0) return { valid: false, error: 'Must be positive' };
  if (val > 1000000000) return { valid: false, error: 'Exceeds maximum' };
  return { valid: true };
}
export function validatepromoengineId(id: number): boolean {
  return Number.isInteger(id) && id > 0;
}
export function formatpromoengineValue(val: number): string {
  return val.toLocaleString('en-US');
}
