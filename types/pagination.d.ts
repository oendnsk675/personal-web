export type TPaginated<T> = {
  data: T[];
  meta: TPaginationMeta;
};

export type TPaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type TPaginationQuery = {
  page?: number;
  limit?: number;
  order?: 'asc' | 'desc';
};
