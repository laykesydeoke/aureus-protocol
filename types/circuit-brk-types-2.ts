export interface circuitbrkEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface circuitbrkCreateParams2 { value: number; }
export interface circuitbrkUpdateParams2 { id: number; newValue: number; }
export type circuitbrkStatus2 = 'active' | 'inactive' | 'pending';
export interface circuitbrkQueryResult2<T> { success: boolean; data?: T; error?: string; }
