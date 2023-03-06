import { LimitRequestError, UnexpectedError, UnprocessableError } from '../../domain/errors'
import { Search, SearchParams, SearchResponse } from '../../domain/usecases'
import { HttpGetClient } from '../protocols'
import { HttpStatusCode } from '../protocols/http-response'

export class GithubSearch implements Search {
  constructor (
    private readonly httpGetClient: HttpGetClient<SearchResponse>
  ) {}

  async search (params: SearchParams): Promise<SearchResponse> {
    const { query, page } = params
    const url = `https://api.github.com/search/users?q=${query}&per_page=24&page=${page}`
    
    const httpResponse = await this.httpGetClient.get({ url })
    
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new LimitRequestError()
      case HttpStatusCode.unprocessableContent: throw new UnprocessableError()
      default: throw new UnexpectedError()
    }
  }
}
