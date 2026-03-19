export interface snapshotmgrEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface snapshotmgrCreateParams3 { value: number; }
export interface snapshotmgrUpdateParams3 { id: number; newValue: number; }
export type snapshotmgrStatus3 = 'active' | 'inactive' | 'pending';
export interface snapshotmgrQueryResult3<T> { success: boolean; data?: T; error?: string; }
