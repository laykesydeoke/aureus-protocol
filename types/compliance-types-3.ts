export interface complianceEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface complianceCreateParams3 { value: number; }
export interface complianceUpdateParams3 { id: number; newValue: number; }
export type complianceStatus3 = 'active' | 'inactive' | 'pending';
export interface complianceQueryResult3<T> { success: boolean; data?: T; error?: string; }
