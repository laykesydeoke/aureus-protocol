export interface purgejobEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface purgejobCreateParams4 { value: number; }
export interface purgejobUpdateParams4 { id: number; newValue: number; }
export type purgejobStatus4 = 'active' | 'inactive' | 'pending';
export interface purgejobQueryResult4<T> { success: boolean; data?: T; error?: string; }
