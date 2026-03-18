export interface reportgenEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface reportgenCreateParams2 { value: number; }
export interface reportgenUpdateParams2 { id: number; newValue: number; }
export type reportgenStatus2 = 'active' | 'inactive' | 'pending';
export interface reportgenQueryResult2<T> { success: boolean; data?: T; error?: string; }
