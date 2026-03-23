export interface vaultsvcEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface vaultsvcCreateParams2 { value: number; }
export interface vaultsvcUpdateParams2 { id: number; newValue: number; }
export type vaultsvcStatus2 = 'active' | 'inactive' | 'pending';
export interface vaultsvcQueryResult2<T> { success: boolean; data?: T; error?: string; }
