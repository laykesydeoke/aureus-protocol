import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("kms-proxy unit test 6: queries entry", () => {
  it("queries entry for kms-proxy module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-kms-proxy-count",[],deployer);expect(r.result).toBeDefined();
  });
});
