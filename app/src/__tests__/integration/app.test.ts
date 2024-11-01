import { app } from "@/app";
import request from "supertest";

describe("Integration App", () => {
  it('Should return app instance', () => {
    const response = request(app)
    expect(response).toHaveReturned()
  })
})
