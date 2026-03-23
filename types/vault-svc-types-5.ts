export interface vaultsvcEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface vaultsvcCreateParams5 { value: number; }
export interface vaultsvcUpdateParams5 { id: number; newValue: number; }
export type vaultsvcStatus5 = 'active' | 'inactive' | 'pending';
export interface vaultsvcQueryResult5<T> { success: boolean; data?: T; error?: string; }
