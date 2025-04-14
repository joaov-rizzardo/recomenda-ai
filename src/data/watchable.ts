export interface WatchableParams {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  banner: string;
  voteAverage: number;
  voteCount: number;
  backdrop: string;
  releaseDate: Date;
  genres: string[];
}

export class Watchable {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  sortCoefficient: number;
  banner: string;
  voteAverage: number;
  voteCount: number;
  backdrop: string;
  releaseDate: Date;
  genres: string[];

  constructor(params: WatchableParams) {
    this.id = params.id;
    this.title = params.title;
    this.overview = params.overview;
    this.popularity = params.popularity;
    this.banner = params.banner;
    this.voteAverage = params.voteAverage;
    this.voteCount = params.voteCount;
    this.backdrop = params.backdrop;
    this.releaseDate = params.releaseDate;
    this.genres = params.genres;
    this.sortCoefficient = this.calculateSortCoefficient();
  }

  public toPlain(): WatchableParams {
    return {
      id: this.id,
      title: this.title,
      overview: this.overview,
      popularity: this.popularity,
      banner: this.banner,
      voteAverage: this.voteAverage,
      voteCount: this.voteCount,
      backdrop: this.backdrop,
      releaseDate: this.releaseDate,
      genres: this.genres,
    };
  }

  private calculateSortCoefficient(): number {
    const randomNumber = Math.floor(Math.random() * 1001);
    const coefficient =
      this.voteAverage * 100 * 0.3 + this.popularity * 0.4 + randomNumber * 0.3;
    return coefficient;
  }
}
