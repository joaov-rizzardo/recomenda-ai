export interface KeywordResponseType {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  id: number;
  name: string;
}
