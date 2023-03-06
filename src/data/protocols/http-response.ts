export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  forbidden = 403,
  unprocessableContent = 422,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body: T
}