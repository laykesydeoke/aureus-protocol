export interface archivesvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface archivesvcCreateParams1 { value: number; }
export interface archivesvcUpdateParams1 { id: number; newValue: number; }
export type archivesvcStatus1 = 'active' | 'inactive' | 'pending';
export interface archivesvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
