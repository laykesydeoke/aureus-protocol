import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("l10n-mgr unit test 10: creates entry", () => {
  it("creates entry for l10n-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-l10n-mgr",[Cl.uint(1000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
