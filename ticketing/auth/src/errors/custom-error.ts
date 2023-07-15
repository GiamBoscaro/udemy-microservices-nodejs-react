export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    // message property could be used for loggin, without sending
    // the real error message to the users as a response.
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
