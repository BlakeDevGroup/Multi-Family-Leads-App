import PropertyJsonQuery from "./PropertyJsonQuery";
import { Property } from "./Property";
import sinon, { SinonSandbox, SinonSpy, SinonStub, spy } from "sinon";
import PropertyAPI from "./Property.api";
import chai, { expect } from "chai";
import sinonchai from "sinon-chai";
import * as MessageService from "../../common/message/message.service";

chai.use(sinonchai);

let query: PropertyJsonQuery;
let sandBox: SinonSandbox;
let spySuccess: SinonSpy;
let spyFailure: SinonSpy;
let stub: SinonStub;

const ERROR = new Error("ERROR");

describe("PropertyJsonQuery", () => {
  before(() => {
    sandBox = sinon.createSandbox();
  });

  beforeEach(() => {
    query = new PropertyJsonQuery();
    spySuccess = sandBox.spy(MessageService, "sendSuccess");
    spyFailure = sandBox.spy(MessageService, "sendFailure");
    stub = sandBox.stub();
  });

  afterEach(() => {
    spySuccess.restore();
    spyFailure.restore();
    stub.resetBehavior();
  });

  describe("readById", () => {
    it("should send success when id is found", async () => {
      const ID = "003-352-11-00-9";
      const expected: Property = {
        property_id: "003-352-11-00-9",
        address: {
          street: "2018 19Th St",
          city: "Bakersfield",
          state: "CA",
          zip_code: "93301",
          county: "Kern County",
        },
        owner_id: "",
        owner_name: "",
        owner_email: "",
        owner_number: "",
        price: 1,
        units: 6,
        sqft: 3846,
        buildings: 1,
        year_built: 1900,
        notes: [],
      };

      query.readById(ID);

      expect(spySuccess).to.be.calledOnce;
      expect(spySuccess.args[0][0]).to.equal("Successfully retrieved property");
      expect(spySuccess.args[0][1]).to.eql(expected);
    });

    it("should send empty array when id is not found", () => {
      const ID = "1";
      const ERROR = new Error(`No property found with id: ${ID}`);

      query.readById(ID);
      expect(spyFailure).to.be.calledOnce;
      expect(spyFailure.args[0][0]).to.equal(ERROR.message);
      expect(spyFailure.args[0][1]).to.equal("EntityNotFoundError");
      expect(spyFailure.args[0][2]).to.equal(404);
    });
  });

  describe("list", () => {
    it("should retrieve all properties", () => {
      const data = query.list();
      expect(spySuccess.calledOnce);
      expect(spySuccess.args[0][0]).to.equal(
        "Successfully retrieved properties"
      );
      expect(spySuccess.args[0][1].length).to.equal(902);
    });
  });
});
