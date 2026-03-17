export interface circuitbrkEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface circuitbrkCreateParams4 { value: number; }
export interface circuitbrkUpdateParams4 { id: number; newValue: number; }
export type circuitbrkStatus4 = 'active' | 'inactive' | 'pending';
export interface circuitbrkQueryResult4<T> { success: boolean; data?: T; error?: string; }
