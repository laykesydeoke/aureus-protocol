export interface invoicegenEntry2 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface invoicegenCreateParams2 { value: number; }
export interface invoicegenUpdateParams2 { id: number; newValue: number; }
export type invoicegenStatus2 = 'active' | 'inactive' | 'pending';
export interface invoicegenQueryResult2<T> { success: boolean; data?: T; error?: string; }
