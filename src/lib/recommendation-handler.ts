import { Watchable } from "@/data/watchable";
import { TMDB } from "@/services/tmdb";
import { PreferencesType } from "@/types/preference-types";

export class RecommendationHandler {
  constructor(private preferences: PreferencesType) {}

  async getRecommendations(): Promise<Watchable[]> {
    const result = await (this.preferences.recommendationType === "tendencies"
      ? this.getTrending()
      : this.getCustom());
    return result.sort((a, b) => b.sortCoefficient - a.sortCoefficient);
  }

  private async getCustom(): Promise<Watchable[]> {
    const keywords = await this.getKeywords();
    if (this.preferences.mediaType === "movie") {
      const result = await TMDB.getDiscoverMovies(
        this.preferences.categories,
        keywords
      );
      return result.results.map(
        (item) =>
          new Watchable({
            id: item.id,
            banner: item.poster_path,
            overview: item.overview,
            popularity: item.popularity,
            title: item.title,
            voteAverage: item.vote_average,
            voteCount: item.vote_count,
          })
      );
    }
    const result = await TMDB.getDiscoverSeries(
      this.preferences.categories,
      keywords
    );
    return result.results.map(
      (item) =>
        new Watchable({
          id: item.id,
          banner: item.poster_path,
          overview: item.overview,
          popularity: item.popularity,
          title: item.name,
          voteAverage: item.vote_average,
          voteCount: item.vote_count,
        })
    );
  }

  private async getTrending(): Promise<Watchable[]> {
    if (this.preferences.mediaType === "movie") {
      const result = await TMDB.getTrendingMovies("week");
      return result.results.map(
        (item) =>
          new Watchable({
            id: item.id,
            banner: item.poster_path,
            overview: item.overview,
            popularity: item.popularity,
            title: item.title,
            voteAverage: item.vote_average,
            voteCount: item.vote_count,
          })
      );
    }
    const result = await TMDB.getTrendingSeries("week");
    return result.results.map(
      (item) =>
        new Watchable({
          id: item.id,
          banner: item.poster_path,
          overview: item.overview,
          popularity: item.popularity,
          title: item.name,
          voteAverage: item.vote_average,
          voteCount: item.vote_count,
        })
    );
  }

  private async getKeywords() {
    const keywords = await Promise.all(
      this.preferences.keywords.map(async (keyword) => {
        const result = await TMDB.getKeyword(keyword);
        const target = result.results.find((item) => item.name === keyword);
        return target ? target.id : undefined;
      })
    );
    return keywords.filter((k) => k !== undefined);
  }
}
