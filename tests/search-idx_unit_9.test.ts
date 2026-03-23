import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("search-idx unit test 9: handles edge case", () => {
  it("handles edge case for search-idx module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-search-idx",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(680));
  });
});
