import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai, { expect } from "chai";
import { sendSuccess, sendFailure } from "./message.service";

chai.use(sinonChai);

describe("Message Service", () => {
  it("should return ISuccessPayload and status code 200", () => {
    let spy = sinon.spy(sendSuccess);
    const result = sendSuccess("Test Example", { data: [] });

    expect(result.data).to.deep.equal({ data: [] });
    expect(result.message).to.equal("Test Example");
  });

  it("should return IErrorPayload and status code 400", () => {
    let spy = sinon.spy(sendFailure);
    const error = new Error("Process Failed");
    const result = sendFailure("Process Failure", "Error", 400);

    expect(result.status).to.equal(400);
    expect(result.type).to.deep.equal("Error");
    expect(result.message).to.equal("Process Failure");
  });

  it("should return IErrorPayload and status code 404", () => {
    let spy = sinon.spy(sendFailure);
    const error = new Error("Process Failed");
    const result = sendFailure("Test Failure", "Error", 404);

    expect(result.status).to.equal(404);
    expect(result.type).to.deep.equal("Error");
    expect(result.message).to.equal("Test Failure");
  });

  it("should return ISuccessPayload and status code 201", () => {
    let spy = sinon.spy(sendSuccess);
    const result = sendSuccess("Test Example", { data: [] });

    expect(result.data).to.deep.equal({ data: [] });
    expect(result.message).to.equal("Test Example");
  });
});
