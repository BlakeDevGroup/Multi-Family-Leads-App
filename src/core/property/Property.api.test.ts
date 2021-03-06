import { it } from "mocha";
import { Property } from "./Property";
import { Address } from "../address/Address";
import sinon, { SinonSandbox, SinonSpy } from "sinon";
import PropertyAPI from "./Property.api";
import chai, { expect } from "chai";
import sinonchai from "sinon-chai";

chai.use(sinonchai);
const ID = "015-400-17-00-4";
const RESOURCE: Property = {
  id: "003-352-11-00-9",
  address: {
    street: "2018 19Th St",
    city: "Bakersfield",
    state: "CA",
    zip_code: "93301",
  },
  owner_name: "",
  owner_email: "",
  owner_number: "",
  units: 6,
  notes: [],
};
let propertyAPI: PropertyAPI;
let sandbox: SinonSandbox;

describe("PropertyAPI", () => {
  before(() => {
    sandbox = sinon.createSandbox();
  });
  beforeEach(() => {
    propertyAPI = new PropertyAPI();
  });

  it("should call readById and sendsuccess when data is retrieved", async () => {
    const spy = sandbox.spy(propertyAPI["query"], "readById");
    propertyAPI.get(ID);

    expect(spy).calledOnceWith(ID);
    spy.restore();
  });

  it("should call list", async () => {
    const spy = sandbox.spy(propertyAPI["query"], "list");

    propertyAPI.getAll();

    expect(spy).calledOnce;

    spy.restore();
  });

  it("should call putById", async () => {
    const spy = sandbox.spy(propertyAPI["query"], "putById");

    propertyAPI.put(ID, RESOURCE);

    expect(spy).calledOnceWith(ID, RESOURCE);

    spy.restore();
  });

  it("should call create", async () => {
    const spy = sandbox.spy(propertyAPI["query"], "create");

    propertyAPI.create(RESOURCE);

    expect(spy).calledOnceWith(RESOURCE);

    spy.restore();
  });

  it("should call delete", async () => {
    const spy = sandbox.spy(propertyAPI["query"], "deleteById");

    propertyAPI.delete(ID);

    expect(spy).calledOnceWith(ID);

    spy.restore();
  });
});
