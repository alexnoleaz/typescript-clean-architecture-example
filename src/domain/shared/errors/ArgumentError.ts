export class ArgumentError extends Error {
  constructor(message: string = 'The argument is not valid.') {
    super(message);
  }
}
