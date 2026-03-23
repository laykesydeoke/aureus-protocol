import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("url-encode unit test 4: handles edge case", () => {
  it("handles edge case for url-encode module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-url-encode",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1590));
  });
});
