export interface eventsysEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eventsysCreateParams3 { value: number; }
export interface eventsysUpdateParams3 { id: number; newValue: number; }
export type eventsysStatus3 = 'active' | 'inactive' | 'pending';
export interface eventsysQueryResult3<T> { success: boolean; data?: T; error?: string; }
