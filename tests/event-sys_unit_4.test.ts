import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("event-sys unit test 4: handles edge case", () => {
  it("handles edge case for event-sys module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-event-sys",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(650));
  });
});
