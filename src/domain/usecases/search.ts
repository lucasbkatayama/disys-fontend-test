import { 
  SimplifiedUser
 } from '../models'

export type SearchParams = {
  page: number
  query: string
}

export type SearchResponse = {
  total_count: number
  items: SimplifiedUser[]
}

export interface Search {
  search: (params: SearchParams) => Promise<SearchResponse>
}
