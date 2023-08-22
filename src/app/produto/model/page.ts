import { Produto } from "./produto";

export interface Page {
  content: any[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: any;
  numberOfElements: number;
  first: boolean;
  pages: number[]
}
