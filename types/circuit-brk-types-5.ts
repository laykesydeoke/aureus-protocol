export interface circuitbrkEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface circuitbrkCreateParams5 { value: number; }
export interface circuitbrkUpdateParams5 { id: number; newValue: number; }
export type circuitbrkStatus5 = 'active' | 'inactive' | 'pending';
export interface circuitbrkQueryResult5<T> { success: boolean; data?: T; error?: string; }
