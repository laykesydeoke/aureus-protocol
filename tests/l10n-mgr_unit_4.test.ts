import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("l10n-mgr unit test 4: handles edge case", () => {
  it("handles edge case for l10n-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-l10n-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1510));
  });
});
