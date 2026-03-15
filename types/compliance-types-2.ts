export interface complianceEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface complianceCreateParams2 { value: number; }
export interface complianceUpdateParams2 { id: number; newValue: number; }
export type complianceStatus2 = 'active' | 'inactive' | 'pending';
export interface complianceQueryResult2<T> { success: boolean; data?: T; error?: string; }
