export interface archivesvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface archivesvcCreateParams4 { value: number; }
export interface archivesvcUpdateParams4 { id: number; newValue: number; }
export type archivesvcStatus4 = 'active' | 'inactive' | 'pending';
export interface archivesvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
