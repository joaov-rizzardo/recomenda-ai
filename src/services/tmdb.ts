import { env } from "@/lib/env";
import { DiscoverMovieResponse } from "@/types/discover-movie-types";
import { DiscoverSeriesResponse } from "@/types/discover-series-types";
import { KeywordResponseType } from "@/types/keywords-response-type";
import { PreferencesType } from "@/types/preference-types";
import { TrendingMoviesResponse } from "@/types/trending-movie-types";
import { WatchProvidersResponse } from "@/types/watch-providers-types";
import { Axios } from "axios";

export class TMDB {
  private static api: Axios = new Axios({
    baseURL: env.TMDB_URL,
    headers: {
      Authorization: `Bearer ${env.TMDB_TOKEN}`,
    },
  });

  static async getTrendingMovies(timeWindow: "week" | "day") {
    const { data } = await this.api.get<TrendingMoviesResponse>(
      `/trending/movie/${timeWindow}?language=pt-BR`
    );
    return data;
  }

  static async getTrendingSeries(timeWindow: "week" | "day") {
    const { data } = await this.api.get<TrendingMoviesResponse>(
      `/trending/tv/${timeWindow}?language=pt-BR`
    );
    return data;
  }

  static async getDiscoverMovies(preferences: PreferencesType) {
    const { data } = await this.api.get<DiscoverMovieResponse>(
      `/discover/movie`,
      {
        params: {
          language: "pt-BR",
          region: "br",
          with_genres: preferences.categories.join("|"),
          with_keywords: preferences.keywords.join("|"),
          sort_by: "popularity.desc",
        },
      }
    );
    return data;
  }

  static async getDiscoverSeries(preferences: PreferencesType) {
    const { data } = await this.api.get<DiscoverSeriesResponse>(
      `/discover/tv`,
      {
        params: {
          language: "pt-BR",
          with_genres: preferences.categories.join("|"),
          with_keywords: preferences.keywords.join("|"),
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
