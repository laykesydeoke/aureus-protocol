export interface reportgenEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface reportgenCreateParams1 { value: number; }
export interface reportgenUpdateParams1 { id: number; newValue: number; }
export type reportgenStatus1 = 'active' | 'inactive' | 'pending';
export interface reportgenQueryResult1<T> { success: boolean; data?: T; error?: string; }
