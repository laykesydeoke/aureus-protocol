export interface eventsysEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eventsysCreateParams4 { value: number; }
export interface eventsysUpdateParams4 { id: number; newValue: number; }
export type eventsysStatus4 = 'active' | 'inactive' | 'pending';
export interface eventsysQueryResult4<T> { success: boolean; data?: T; error?: string; }
