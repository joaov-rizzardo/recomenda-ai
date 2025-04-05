import { env } from "@/lib/env";
import { DiscoverMovieResponse } from "@/types/discover-movie-types";
import { DiscoverSeriesResponse } from "@/types/discover-series-types";
import { KeywordResponseType } from "@/types/keywords-response-type";
import { TrendingMoviesResponse } from "@/types/trending-movie-types";
import { TrendingSeriesResponse } from "@/types/trending-series-types";
import { WatchProvidersResponse } from "@/types/watch-providers-types";
import axios, { Axios } from "axios";

export class TMDB {
  private static api: Axios = axios.create({
    baseURL: env.TMDB_URL,
    headers: {
      Authorization: `Bearer ${env.TMDB_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  static async getTrendingMovies(timeWindow: "week" | "day") {
    const { data } = await this.api.get<TrendingMoviesResponse>(
      `/trending/movie/${timeWindow}?language=pt-BR`
    );
    return data;
  }

  static async getTrendingSeries(timeWindow: "week" | "day") {
    const { data } = await this.api.get<TrendingSeriesResponse>(
      `/trending/tv/${timeWindow}?language=pt-BR`
    );
    return data;
  }

  static async getDiscoverMovies(categories: number[], keywords: number[]) {
    const { data } = await this.api.get<DiscoverMovieResponse>(
      `/discover/movie`,
      {
        params: {
          language: "pt-BR",
          region: "br",
          with_genres: categories.join("|"),
          with_keywords: keywords.join("|"),
          sort_by: "popularity.desc",
        },
      }
    );
    return data;
  }

  static async getDiscoverSeries(categories: number[], keywords: number[]) {
    const { data } = await this.api.get<DiscoverSeriesResponse>(
      `/discover/tv`,
      {
        params: {
          language: "pt-BR",
          with_genres: categories.join("|"),
          with_keywords: keywords.join("|"),
          sort_by: "popularity.desc",
        },
      }
    );
    return data;
  }

  static async getSerieWatchProviders(serieId: number) {
    const { data } = await this.api.get<WatchProvidersResponse>(
      `/tv/${serieId}/watch/providers`
    );
    return data;
  }

  static async getMovieWatchProviders(movieId: number) {
    const { data } = await this.api.get<WatchProvidersResponse>(
      `/movie/${movieId}/watch/providers`
    );
    return data;
  }

  static async getKeyword(keyword: string) {
    const { data } = await this.api.get<KeywordResponseType>(
      "/search/keyword",
      {
        params: {
          query: keyword,
        },
      }
    );
    return data;
  }
}
