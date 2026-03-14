export interface analyticsEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface analyticsCreateParams5 { value: number; }
export interface analyticsUpdateParams5 { id: number; newValue: number; }
export type analyticsStatus5 = 'active' | 'inactive' | 'pending';
export interface analyticsQueryResult5<T> { success: boolean; data?: T; error?: string; }
