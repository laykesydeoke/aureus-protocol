import { describe, it, expect } from "vitest";
describe("booster 8", () => { it("test 8", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-booster-params", [], deployer); expect(r.result).not.toBeNone(); }); });
