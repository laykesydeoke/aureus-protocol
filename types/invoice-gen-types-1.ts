export interface invoicegenEntry1 {
  id: number;
  owner: string;
  value: number;
  active: boolean;
  createdAt: number;
}
export interface invoicegenCreateParams1 { value: number; }
export interface invoicegenUpdateParams1 { id: number; newValue: number; }
export type invoicegenStatus1 = 'active' | 'inactive' | 'pending';
export interface invoicegenQueryResult1<T> { success: boolean; data?: T; error?: string; }
