import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("slug-gen unit test 6: queries entry", () => {
  it("queries entry for slug-gen module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-slug-gen-count",[],deployer);expect(r.result).toBeDefined();
  });
});
