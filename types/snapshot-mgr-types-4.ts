export interface snapshotmgrEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface snapshotmgrCreateParams4 { value: number; }
export interface snapshotmgrUpdateParams4 { id: number; newValue: number; }
export type snapshotmgrStatus4 = 'active' | 'inactive' | 'pending';
export interface snapshotmgrQueryResult4<T> { success: boolean; data?: T; error?: string; }
