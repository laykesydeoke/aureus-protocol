export interface audittrailEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface audittrailCreateParams3 { value: number; }
export interface audittrailUpdateParams3 { id: number; newValue: number; }
export type audittrailStatus3 = 'active' | 'inactive' | 'pending';
export interface audittrailQueryResult3<T> { success: boolean; data?: T; error?: string; }
