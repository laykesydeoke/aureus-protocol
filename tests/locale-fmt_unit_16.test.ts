import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("locale-fmt unit test 16: queries entry", () => {
  it("queries entry for locale-fmt module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-locale-fmt-count",[],deployer);expect(r.result).toBeDefined();
  });
});
