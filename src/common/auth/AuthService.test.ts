import sinonChai from "sinon-chai";
import sinon, { SinonSandbox, SinonSpy, SinonStub } from "sinon";
import chai, { expect } from "chai";
import AuthService from "./AuthService";
import * as MessageService from "../message/message.service";
import axios from "axios";

chai.use(sinonChai);
let authService: AuthService;
let spySuccess: SinonSpy;
let spyFailure: SinonSpy;
let sandbox: SinonSandbox;
let stub: SinonStub;

describe("AuthService", () => {
  before(() => {
    sandbox = sinon.createSandbox();
    authService = new AuthService();
    spySuccess = sandbox.spy(MessageService, "sendSuccess");
    spyFailure = sandbox.spy(MessageService, "sendFailure");
    stub = sandbox.stub();
  });

  after(() => {
    spySuccess.restore();
    spyFailure.restore();
    sandbox.restore();
  });
  beforeEach(() => {
    spySuccess.resetHistory();
    spyFailure.resetHistory();
  });

  afterEach(() => {
    stub.restore();
  });
  describe("login", () => {
    it("should send failure message if user does not exist", async () => {
      stub = sandbox
        .stub(axios, "post")
        .resolves({ data: { error: "someError", status: 404 } });

      const result = await authService.login("user", "asdf");

      expect(spyFailure).calledOnceWith("someError", "UserNotFoundError", 404);
      expect(result)
        .to.be.an("object")
        .and.include.keys("message", "status", "type");
    });

    it("should send success message when user exists", async () => {
      stub = sandbox.stub(axios, "post").resolves({ data: "someData" });

      const result = await authService.login("user", "user");

      expect(spySuccess).calledOnceWith(
        "Successfully authenticated user",
        result.data
      );
    });
  });
});
