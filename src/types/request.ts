export type Params = {
  id?: number;
  search?: string;
  limit?: number;
  skip?: number;
  select?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  category?: string;
};
