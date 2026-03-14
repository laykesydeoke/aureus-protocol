export interface eventsysEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eventsysCreateParams2 { value: number; }
export interface eventsysUpdateParams2 { id: number; newValue: number; }
export type eventsysStatus2 = 'active' | 'inactive' | 'pending';
export interface eventsysQueryResult2<T> { success: boolean; data?: T; error?: string; }
