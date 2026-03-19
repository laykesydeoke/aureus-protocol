export interface archivesvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface archivesvcCreateParams3 { value: number; }
export interface archivesvcUpdateParams3 { id: number; newValue: number; }
export type archivesvcStatus3 = 'active' | 'inactive' | 'pending';
export interface archivesvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
