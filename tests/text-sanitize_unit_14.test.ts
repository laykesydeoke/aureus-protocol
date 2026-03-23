import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("text-sanitize unit test 14: handles edge case", () => {
  it("handles edge case for text-sanitize module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-text-sanitize",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1570));
  });
});
