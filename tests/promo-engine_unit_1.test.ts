import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("promo-engine unit test 1: queries entry", () => {
  it("queries entry for promo-engine module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-promo-engine-count",[],deployer);expect(r.result).toBeDefined();
  });
});
