import { describe, it, expect } from "vitest";
describe("analytics-v2 13", () => { it("test 13", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-analytics-v2", [], deployer); expect(r.result).not.toBeNone(); }); });
