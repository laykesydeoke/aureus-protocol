export interface backupsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface backupsvcCreateParams1 { value: number; }
export interface backupsvcUpdateParams1 { id: number; newValue: number; }
export type backupsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface backupsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
