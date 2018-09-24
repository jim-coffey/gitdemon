export class ApiError extends Error {
  constructor(statusCode, ...params) {
    super(...params);

    this.apiStatusCode = statusCode;
  }
}
