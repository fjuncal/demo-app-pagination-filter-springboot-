import { Produto } from "./produto";

export interface Page {
  content: Array<Produto>;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: any;
  numberOfElements: number;
  first: boolean;
}
