import { env } from "@/lib/env";
import { DiscoverMovieResponse } from "@/types/discover-movie-types";
import { DiscoverSeriesResponse } from "@/types/discover-series-types";
import { KeywordResponseType } from "@/types/keywords-response-type";
import { TrendingMoviesResponse } from "@/types/trending-movie-types";
import { TrendingSeriesResponse } from "@/types/trending-series-types";
import { WatchProvidersResponse } from "@/types/watch-providers-types";

function buildURL(path: string, params?: Record<string, any>): string {
  const url = new URL(`${env.TMDB_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, value.toString());
      }
    });
  }
  return url.toString();
}

async function tmdbFetch<T>(
  path: string,
  options: RequestInit = {},
  params?: Record<string, any>
): Promise<T> {
  const url = buildURL(path, params);

  const defaultOptions: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${env.TMDB_TOKEN}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    next: { revalidate: 3600 },
    ...options,
  };

  const res = await fetch(url, defaultOptions);

  if (!res.ok) {
    throw new Error(`Error in TMDB request: ${res.statusText}`);
  }

  return res.json();
}

export class TMDB {
  static getTrendingMovies(timeWindow: "week" | "day") {
    return tmdbFetch<TrendingMoviesResponse>(
      "/trending/movie/" + timeWindow,
      {},
      {
        language: "pt-BR",
      }
    );
  }

  static getTrendingSeries(timeWindow: "week" | "day") {
    return tmdbFetch<TrendingSeriesResponse>(
      "/trending/tv/" + timeWindow,
      {},
      {
        language: "pt-BR",
      }
    );
  }

  static getDiscoverMovies(categories: number[], keywords: number[]) {
    return tmdbFetch<DiscoverMovieResponse>(
      "/discover/movie",
      {},
      {
        language: "pt-BR",
        region: "br",
        with_genres: categories.join(";"),
        with_keywords: keywords.join("|"),
        sort_by: "popularity.desc",
      }
    );
  }

  static getDiscoverSeries(categories: number[], keywords: number[]) {
    return tmdbFetch<DiscoverSeriesResponse>(
      "/discover/tv",
      {},
      {
        language: "pt-BR",
        with_genres: categories.join(";"),
        with_keywords: keywords.join("|"),
        sort_by: "popularity.desc",
      }
    );
  }

  static getSerieWatchProviders(serieId: number) {
    return tmdbFetch<WatchProvidersResponse>(
      "/tv/" + serieId + "/watch/providers",
      {}
    );
  }

  static getMovieWatchProviders(movieId: number) {
    return tmdbFetch<WatchProvidersResponse>(
      "/movie/" + movieId + "/watch/providers",
      {}
    );
  }

  static getKeyword(keyword: string) {
    return tmdbFetch<KeywordResponseType>(
      "/search/keyword",
      {},
      {
        query: keyword,
      }
    );
  }
}
