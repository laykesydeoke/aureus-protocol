export interface snapshotmgrEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface snapshotmgrCreateParams2 { value: number; }
export interface snapshotmgrUpdateParams2 { id: number; newValue: number; }
export type snapshotmgrStatus2 = 'active' | 'inactive' | 'pending';
export interface snapshotmgrQueryResult2<T> { success: boolean; data?: T; error?: string; }
