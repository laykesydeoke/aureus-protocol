import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("uptime-chk unit test 6: queries entry", () => {
  it("queries entry for uptime-chk module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-uptime-chk-count",[],deployer);expect(r.result).toBeDefined();
  });
});
