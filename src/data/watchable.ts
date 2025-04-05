interface WatchableParams {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  banner: string;
  voteAverage: number;
  voteCount: number;
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

  constructor(params: WatchableParams) {
    this.id = params.id;
    this.title = params.title;
    this.overview = params.overview;
    this.popularity = params.popularity;
    this.banner = params.banner;
    this.voteAverage = params.voteAverage;
    this.voteCount = params.voteCount;
    this.sortCoefficient = this.calculateSortCoefficient();

  }

  private calculateSortCoefficient(): number {
    const randomNumber = Math.floor(Math.random() * 1001);
    const coefficient =
      this.voteAverage * 100 * 0.3 + this.popularity * 0.4 + randomNumber * 0.3;
    return coefficient;
  }
}
