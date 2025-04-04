export interface WatchProvidersResponse {
  id: number;
  results: Results;
}

export interface Results {
  BR: Br;
}

export interface Br {
  link: string;
  flatrate: Flatrate[];
}

export interface Flatrate {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}
