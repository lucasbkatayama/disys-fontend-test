export class UnprocessableError extends Error {
  constructor () {
    super('Unable to process instructions. Try again soon.')
    this.name = 'UnprocessableError'
  }
}
