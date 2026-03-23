export interface reportgenEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface reportgenCreateParams3 { value: number; }
export interface reportgenUpdateParams3 { id: number; newValue: number; }
export type reportgenStatus3 = 'active' | 'inactive' | 'pending';
export interface reportgenQueryResult3<T> { success: boolean; data?: T; error?: string; }
