export interface reportgenEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface reportgenCreateParams5 { value: number; }
export interface reportgenUpdateParams5 { id: number; newValue: number; }
export type reportgenStatus5 = 'active' | 'inactive' | 'pending';
export interface reportgenQueryResult5<T> { success: boolean; data?: T; error?: string; }
