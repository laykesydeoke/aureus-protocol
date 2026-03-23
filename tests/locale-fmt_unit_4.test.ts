import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("locale-fmt unit test 4: handles edge case", () => {
  it("handles edge case for locale-fmt module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-locale-fmt",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1530));
  });
});
