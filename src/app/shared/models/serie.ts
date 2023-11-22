import { MasterTable } from "./master-table"

export interface PageRequest {
    id?: number,
    page?: number,
    results?: Serie[],
    total_pages?: number,
    total_results?: number,
}

export interface Serie {
    adult?: boolean,
    backdrop_path?: string,
    genre_ids?: number[],
    id?: number,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    release_date?: string,
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number

}

export interface Detail{
    adult: boolean,
  backdrop_path: string,
  belongs_to_collection: string,
  budget: number,
  genres: [MasterTable],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: [any],
  production_countries: [any],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: [any],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}