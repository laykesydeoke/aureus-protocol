export interface purgejobEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface purgejobCreateParams2 { value: number; }
export interface purgejobUpdateParams2 { id: number; newValue: number; }
export type purgejobStatus2 = 'active' | 'inactive' | 'pending';
export interface purgejobQueryResult2<T> { success: boolean; data?: T; error?: string; }
