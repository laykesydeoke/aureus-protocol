export interface archivesvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface archivesvcCreateParams2 { value: number; }
export interface archivesvcUpdateParams2 { id: number; newValue: number; }
export type archivesvcStatus2 = 'active' | 'inactive' | 'pending';
export interface archivesvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
