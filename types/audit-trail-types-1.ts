export interface audittrailEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface audittrailCreateParams1 { value: number; }
export interface audittrailUpdateParams1 { id: number; newValue: number; }
export type audittrailStatus1 = 'active' | 'inactive' | 'pending';
export interface audittrailQueryResult1<T> { success: boolean; data?: T; error?: string; }
