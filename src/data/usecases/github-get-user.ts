import { LimitRequestError, NotFoundUserError, UnexpectedError, UnprocessableError } from '../../domain/errors'
import { User } from '../../domain/models'
import { GetUser, GetUserParams } from '../../domain/usecases'
import { HttpGetClient } from '../protocols'
import { HttpStatusCode } from '../protocols/http-response'

export class GithubGetUser implements GetUser {
  constructor (
    private readonly httpGetClient: HttpGetClient<User>
  ) {}

  async get (params: GetUserParams): Promise<User> {
    const { user } = params
    const url = `https://api.github.com/users/${user}`
    
    const httpResponse = await this.httpGetClient.get({ url })
    
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.notFount: throw new NotFoundUserError()
      case HttpStatusCode.forbidden: throw new LimitRequestError()
      case HttpStatusCode.unprocessableContent: throw new UnprocessableError()
      default: throw new UnexpectedError()
    }
  }
}
