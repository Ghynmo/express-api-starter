import request from "supertest";
import { createApp } from "@src/app.js";

describe("end to end testing", () => {
  it("create", async () => {
    const app = await createApp();
    const response = await request(app).post("/v1/user");
    expect(response.statusCode).toEqual(201);
  });
  it("read all", async () => {
    const app = await createApp();
    const response = await request(app).get("/v1/user");
    expect(response.statusCode).toEqual(200);
  });
  it("read one", async () => {
    const app = await createApp();
    const response = await request(app).get(
      "/v1/user/634a1236b2deb4aa87ff79af"
    );
    expect(response.statusCode).toEqual(200);
  });
  it("update", async () => {
    const app = await createApp();
    const response = await request(app).patch(
      "/v1/user/634a1236b2deb4aa87ff79af"
    );
    expect(response.statusCode).toEqual(200);
  });
  it("destroy", async () => {
    const app = await createApp();
    const response = await request(app).delete("/v1/user");
    expect(response.statusCode).toEqual(202);
  });
});
