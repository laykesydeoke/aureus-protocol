export interface eventsysEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface eventsysCreateParams5 { value: number; }
export interface eventsysUpdateParams5 { id: number; newValue: number; }
export type eventsysStatus5 = 'active' | 'inactive' | 'pending';
export interface eventsysQueryResult5<T> { success: boolean; data?: T; error?: string; }
