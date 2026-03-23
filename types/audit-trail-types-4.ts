export interface audittrailEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface audittrailCreateParams4 { value: number; }
export interface audittrailUpdateParams4 { id: number; newValue: number; }
export type audittrailStatus4 = 'active' | 'inactive' | 'pending';
export interface audittrailQueryResult4<T> { success: boolean; data?: T; error?: string; }
