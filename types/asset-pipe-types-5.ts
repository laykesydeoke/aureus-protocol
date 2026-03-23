export interface assetpipeEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface assetpipeCreateParams5 { value: number; }
export interface assetpipeUpdateParams5 { id: number; newValue: number; }
export type assetpipeStatus5 = 'active' | 'inactive' | 'pending';
export interface assetpipeQueryResult5<T> { success: boolean; data?: T; error?: string; }
