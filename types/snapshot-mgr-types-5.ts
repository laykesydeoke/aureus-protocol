export interface snapshotmgrEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface snapshotmgrCreateParams5 { value: number; }
export interface snapshotmgrUpdateParams5 { id: number; newValue: number; }
export type snapshotmgrStatus5 = 'active' | 'inactive' | 'pending';
export interface snapshotmgrQueryResult5<T> { success: boolean; data?: T; error?: string; }
