// interface Context
interface Context {
  [key: string]: string;
}

// class for custom error handling
export class HttpExceptions extends Error {
  public status: number;
  public message: string;
  public context: Context;

  constructor(params?: {
    status?: number;
    message?: string;
    context?: Context;
  }) {
    const { status, message, context } = params ?? {};
    super(message);
    this.status = status ?? 500;
    this.message = message ?? "Internal Server Error";
    this.context = context ?? { context: "" };
  }
}
