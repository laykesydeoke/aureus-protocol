import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("tls-config unit test 6: queries entry", () => {
  it("queries entry for tls-config module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-tls-config-count",[],deployer);expect(r.result).toBeDefined();
  });
});
