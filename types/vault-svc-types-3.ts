export interface vaultsvcEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface vaultsvcCreateParams3 { value: number; }
export interface vaultsvcUpdateParams3 { id: number; newValue: number; }
export type vaultsvcStatus3 = 'active' | 'inactive' | 'pending';
export interface vaultsvcQueryResult3<T> { success: boolean; data?: T; error?: string; }
