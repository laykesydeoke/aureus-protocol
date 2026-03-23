import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("usage-alert unit test 9: handles edge case", () => {
  it("handles edge case for usage-alert module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-usage-alert",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(820));
  });
});
