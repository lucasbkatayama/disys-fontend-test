export class LimitRequestError extends Error {
  constructor () {
    super('Limite de requisições da API atingido. Tente novamente em breve.')
    this.name = 'LimitRequestError'
  }
}
