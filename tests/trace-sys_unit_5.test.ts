import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("trace-sys unit test 5: creates entry", () => {
  it("creates entry for trace-sys module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-trace-sys",[Cl.uint(500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
