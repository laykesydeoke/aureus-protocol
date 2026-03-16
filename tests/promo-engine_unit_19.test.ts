import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("promo-engine unit test 19: handles edge case", () => {
  it("handles edge case for promo-engine module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-promo-engine",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(840));
  });
});
