import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("throttle-svc unit test 3: validates permissions", () => {
  it("validates permissions for throttle-svc module", () => {
    const w=simnet.getAccounts().get("wallet_1")!;const{result}=simnet.callPublicFn("yield-aggregator","update-throttle-svc",[Cl.uint(1),Cl.uint(999)],w);expect(result).toBeErr(expect.objectContaining({type:expect.any(Number)}));
  });
});
