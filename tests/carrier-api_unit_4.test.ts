import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("carrier-api unit test 4: handles edge case", () => {
  it("handles edge case for carrier-api module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-carrier-api",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(800));
  });
});
