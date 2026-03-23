export interface purgejobEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface purgejobCreateParams5 { value: number; }
export interface purgejobUpdateParams5 { id: number; newValue: number; }
export type purgejobStatus5 = 'active' | 'inactive' | 'pending';
export interface purgejobQueryResult5<T> { success: boolean; data?: T; error?: string; }
