import { describe, it, expect } from "vitest";
describe("treasury 8", () => { it("test 8", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-treasury-state", [], deployer); expect(r.result).not.toBeNone(); }); });
