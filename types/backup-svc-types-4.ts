export interface backupsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface backupsvcCreateParams4 { value: number; }
export interface backupsvcUpdateParams4 { id: number; newValue: number; }
export type backupsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface backupsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
