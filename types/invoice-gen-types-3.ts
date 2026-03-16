export interface invoicegenEntry3 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface invoicegenCreateParams3 { value: number; }
export interface invoicegenUpdateParams3 { id: number; newValue: number; }
export type invoicegenStatus3 = 'active' | 'inactive' | 'pending';
export interface invoicegenQueryResult3<T> { success: boolean; data?: T; error?: string; }
