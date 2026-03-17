export interface circuitbrkEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface circuitbrkCreateParams3 { value: number; }
export interface circuitbrkUpdateParams3 { id: number; newValue: number; }
export type circuitbrkStatus3 = 'active' | 'inactive' | 'pending';
export interface circuitbrkQueryResult3<T> { success: boolean; data?: T; error?: string; }
