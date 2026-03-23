import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("notif-queue unit test 14: handles edge case", () => {
  it("handles edge case for notif-queue module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-notif-queue",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(690));
  });
});
