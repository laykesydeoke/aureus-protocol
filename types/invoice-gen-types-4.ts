export interface invoicegenEntry4 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface invoicegenCreateParams4 { value: number; }
export interface invoicegenUpdateParams4 { id: number; newValue: number; }
export type invoicegenStatus4 = 'active' | 'inactive' | 'pending';
export interface invoicegenQueryResult4<T> { success: boolean; data?: T; error?: string; }
