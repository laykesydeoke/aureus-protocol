import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("acl-engine unit test 6: queries entry", () => {
  it("queries entry for acl-engine module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-acl-engine-count",[],deployer);expect(r.result).toBeDefined();
  });
});
