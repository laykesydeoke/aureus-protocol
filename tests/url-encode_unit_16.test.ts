import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("url-encode unit test 16: queries entry", () => {
  it("queries entry for url-encode module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-url-encode-count",[],deployer);expect(r.result).toBeDefined();
  });
});
