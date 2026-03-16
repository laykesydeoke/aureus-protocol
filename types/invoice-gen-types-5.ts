export interface invoicegenEntry5 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface invoicegenCreateParams5 { value: number; }
export interface invoicegenUpdateParams5 { id: number; newValue: number; }
export type invoicegenStatus5 = 'active' | 'inactive' | 'pending';
export interface invoicegenQueryResult5<T> { success: boolean; data?: T; error?: string; }
