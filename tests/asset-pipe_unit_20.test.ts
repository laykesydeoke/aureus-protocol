import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("asset-pipe unit test 20: creates entry", () => {
  it("creates entry for asset-pipe module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-asset-pipe",[Cl.uint(2000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
