export interface vaultsvcEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface vaultsvcCreateParams1 { value: number; }
export interface vaultsvcUpdateParams1 { id: number; newValue: number; }
export type vaultsvcStatus1 = 'active' | 'inactive' | 'pending';
export interface vaultsvcQueryResult1<T> { success: boolean; data?: T; error?: string; }
