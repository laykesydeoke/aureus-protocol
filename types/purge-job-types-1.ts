export interface purgejobEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface purgejobCreateParams1 { value: number; }
export interface purgejobUpdateParams1 { id: number; newValue: number; }
export type purgejobStatus1 = 'active' | 'inactive' | 'pending';
export interface purgejobQueryResult1<T> { success: boolean; data?: T; error?: string; }
