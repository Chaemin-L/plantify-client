export type DirectionType = "ASC" | "DESC";

export interface FinalResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface PageableObject {
  pageNumber: number;
  pageSize: number;
  sort: [
    {
      direction: DirectionType;
      property: string; // e.g. '["title"]';
      ignoreCase: boolean;
      nullHandling: string;
      descending: boolean;
      ascending: boolean;
    }
  ];
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Pageable<T> {
  content: T[];
  pageable: PageableObject;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: [
    {
      direction: DirectionType;
      property: string; // e.g. '["title"]';
      ignoreCase: boolean;
      nullHandling: string;
      descending: boolean;
      ascending: boolean;
    }
  ];
  numberOfElements: number;
  empty: boolean;
}
