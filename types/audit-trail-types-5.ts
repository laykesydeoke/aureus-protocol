export interface audittrailEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface audittrailCreateParams5 { value: number; }
export interface audittrailUpdateParams5 { id: number; newValue: number; }
export type audittrailStatus5 = 'active' | 'inactive' | 'pending';
export interface audittrailQueryResult5<T> { success: boolean; data?: T; error?: string; }
