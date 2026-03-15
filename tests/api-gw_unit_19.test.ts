import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("api-gw unit test 19: handles edge case", () => {
  it("handles edge case for api-gw module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-api-gw",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(760));
  });
});
