import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("restore-proc unit test 4: handles edge case", () => {
  it("handles edge case for restore-proc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-restore-proc",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1130));
  });
});
