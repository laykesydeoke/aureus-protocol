import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("event-sys unit test 18: validates permissions", () => {
  it("validates permissions for event-sys module", () => {
    const w=simnet.getAccounts().get("wallet_1")!;const{result}=simnet.callPublicFn("yield-aggregator","update-event-sys",[Cl.uint(1),Cl.uint(999)],w);expect(result).toBeErr(expect.objectContaining({type:expect.any(Number)}));
  });
});
