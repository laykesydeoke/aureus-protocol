import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cdn-config unit test 9: handles edge case", () => {
  it("handles edge case for cdn-config module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-cdn-config",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1390));
  });
});
