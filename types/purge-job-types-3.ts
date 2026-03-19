export interface purgejobEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface purgejobCreateParams3 { value: number; }
export interface purgejobUpdateParams3 { id: number; newValue: number; }
export type purgejobStatus3 = 'active' | 'inactive' | 'pending';
export interface purgejobQueryResult3<T> { success: boolean; data?: T; error?: string; }
