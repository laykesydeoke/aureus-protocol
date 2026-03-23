export interface assetpipeEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface assetpipeCreateParams1 { value: number; }
export interface assetpipeUpdateParams1 { id: number; newValue: number; }
export type assetpipeStatus1 = 'active' | 'inactive' | 'pending';
export interface assetpipeQueryResult1<T> { success: boolean; data?: T; error?: string; }
