export class UnprocessableError extends Error {
  constructor () {
    super('Não foi possível processar as intruções. Tente novamente em breve.')
    this.name = 'UnprocessableError'
  }
}
