export interface backupsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface backupsvcCreateParams2 { value: number; }
export interface backupsvcUpdateParams2 { id: number; newValue: number; }
export type backupsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface backupsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
