import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("dashboard-api unit test 20: creates entry", () => {
  it("creates entry for dashboard-api module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-dashboard-api",[Cl.uint(2000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
