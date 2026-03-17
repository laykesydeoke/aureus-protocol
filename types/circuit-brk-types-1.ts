export interface circuitbrkEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface circuitbrkCreateParams1 { value: number; }
export interface circuitbrkUpdateParams1 { id: number; newValue: number; }
export type circuitbrkStatus1 = 'active' | 'inactive' | 'pending';
export interface circuitbrkQueryResult1<T> { success: boolean; data?: T; error?: string; }
