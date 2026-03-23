import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("i18n-svc unit test 10: creates entry", () => {
  it("creates entry for i18n-svc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-i18n-svc",[Cl.uint(1000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
