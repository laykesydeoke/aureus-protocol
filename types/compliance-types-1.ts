export interface complianceEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface complianceCreateParams1 { value: number; }
export interface complianceUpdateParams1 { id: number; newValue: number; }
export type complianceStatus1 = 'active' | 'inactive' | 'pending';
export interface complianceQueryResult1<T> { success: boolean; data?: T; error?: string; }
