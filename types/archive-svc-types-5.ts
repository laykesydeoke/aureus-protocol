export interface archivesvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface archivesvcCreateParams5 { value: number; }
export interface archivesvcUpdateParams5 { id: number; newValue: number; }
export type archivesvcStatus5 = 'active' | 'inactive' | 'pending';
export interface archivesvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
