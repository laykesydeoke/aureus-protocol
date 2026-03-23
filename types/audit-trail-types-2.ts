export interface audittrailEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface audittrailCreateParams2 { value: number; }
export interface audittrailUpdateParams2 { id: number; newValue: number; }
export type audittrailStatus2 = 'active' | 'inactive' | 'pending';
export interface audittrailQueryResult2<T> { success: boolean; data?: T; error?: string; }
