export interface complianceEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface complianceCreateParams5 { value: number; }
export interface complianceUpdateParams5 { id: number; newValue: number; }
export type complianceStatus5 = 'active' | 'inactive' | 'pending';
export interface complianceQueryResult5<T> { success: boolean; data?: T; error?: string; }
