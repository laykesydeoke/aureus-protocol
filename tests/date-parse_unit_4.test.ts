import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("date-parse unit test 4: handles edge case", () => {
  it("handles edge case for date-parse module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-date-parse",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1540));
  });
});
