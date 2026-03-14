import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("search-idx unit test 13: validates permissions", () => {
  it("validates permissions for search-idx module", () => {
    const w=simnet.getAccounts().get("wallet_1")!;const{result}=simnet.callPublicFn("yield-aggregator","update-search-idx",[Cl.uint(1),Cl.uint(999)],w);expect(result).toBeErr(expect.objectContaining({type:expect.any(Number)}));
  });
});
