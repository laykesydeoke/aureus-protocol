export interface complianceEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface complianceCreateParams4 { value: number; }
export interface complianceUpdateParams4 { id: number; newValue: number; }
export type complianceStatus4 = 'active' | 'inactive' | 'pending';
export interface complianceQueryResult4<T> { success: boolean; data?: T; error?: string; }
