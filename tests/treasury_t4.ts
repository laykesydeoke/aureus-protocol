import { describe, it, expect } from "vitest";
describe("treasury 4", () => { it("test 4", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-treasury-state", [], deployer); expect(r.result).not.toBeNone(); }); });
