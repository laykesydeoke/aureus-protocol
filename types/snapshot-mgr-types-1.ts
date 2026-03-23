export interface snapshotmgrEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface snapshotmgrCreateParams1 { value: number; }
export interface snapshotmgrUpdateParams1 { id: number; newValue: number; }
export type snapshotmgrStatus1 = 'active' | 'inactive' | 'pending';
export interface snapshotmgrQueryResult1<T> { success: boolean; data?: T; error?: string; }
