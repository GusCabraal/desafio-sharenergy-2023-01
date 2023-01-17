export class UnprocessableError extends Error {
  public status;
  constructor(message: string) {
    super(message);
    this.name = 'UnprocessableEntityError';
    this.status = 422;
  }
}