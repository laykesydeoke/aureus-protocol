export interface backupsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface backupsvcCreateParams5 { value: number; }
export interface backupsvcUpdateParams5 { id: number; newValue: number; }
export type backupsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface backupsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
