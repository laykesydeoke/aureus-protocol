import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("encrypt-mod unit test 6: queries entry", () => {
  it("queries entry for encrypt-mod module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-encrypt-mod-count",[],deployer);expect(r.result).toBeDefined();
  });
});
