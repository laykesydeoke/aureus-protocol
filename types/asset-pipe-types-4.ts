export interface assetpipeEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface assetpipeCreateParams4 { value: number; }
export interface assetpipeUpdateParams4 { id: number; newValue: number; }
export type assetpipeStatus4 = 'active' | 'inactive' | 'pending';
export interface assetpipeQueryResult4<T> { success: boolean; data?: T; error?: string; }
