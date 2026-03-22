export interface vaultsvcEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface vaultsvcCreateParams4 { value: number; }
export interface vaultsvcUpdateParams4 { id: number; newValue: number; }
export type vaultsvcStatus4 = 'active' | 'inactive' | 'pending';
export interface vaultsvcQueryResult4<T> { success: boolean; data?: T; error?: string; }
