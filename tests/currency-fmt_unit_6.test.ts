import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("currency-fmt unit test 6: queries entry", () => {
  it("queries entry for currency-fmt module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-currency-fmt-count",[],deployer);expect(r.result).toBeDefined();
  });
});
