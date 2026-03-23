import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("i18n-svc unit test 4: handles edge case", () => {
  it("handles edge case for i18n-svc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-i18n-svc",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1500));
  });
});
