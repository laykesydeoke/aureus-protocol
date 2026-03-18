import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("span-collect unit test 6: queries entry", () => {
  it("queries entry for span-collect module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-span-collect-count",[],deployer);expect(r.result).toBeDefined();
  });
});
