export interface backupsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface backupsvcCreateParams3 { value: number; }
export interface backupsvcUpdateParams3 { id: number; newValue: number; }
export type backupsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface backupsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
