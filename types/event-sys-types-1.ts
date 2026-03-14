export interface eventsysEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eventsysCreateParams1 { value: number; }
export interface eventsysUpdateParams1 { id: number; newValue: number; }
export type eventsysStatus1 = 'active' | 'inactive' | 'pending';
export interface eventsysQueryResult1<T> { success: boolean; data?: T; error?: string; }
