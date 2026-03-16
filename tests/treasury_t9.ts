import { describe, it, expect } from "vitest";
describe("treasury 9", () => { it("test 9", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-treasury-state", [], deployer); expect(r.result).not.toBeNone(); }); });
