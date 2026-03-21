export interface assetpipeEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface assetpipeCreateParams3 { value: number; }
export interface assetpipeUpdateParams3 { id: number; newValue: number; }
export type assetpipeStatus3 = 'active' | 'inactive' | 'pending';
export interface assetpipeQueryResult3<T> { success: boolean; data?: T; error?: string; }
