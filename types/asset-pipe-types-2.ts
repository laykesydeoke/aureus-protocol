export interface assetpipeEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface assetpipeCreateParams2 { value: number; }
export interface assetpipeUpdateParams2 { id: number; newValue: number; }
export type assetpipeStatus2 = 'active' | 'inactive' | 'pending';
export interface assetpipeQueryResult2<T> { success: boolean; data?: T; error?: string; }
