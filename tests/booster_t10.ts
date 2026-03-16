import { describe, it, expect } from "vitest";
describe("booster 10", () => { it("test 10", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-booster-params", [], deployer); expect(r.result).not.toBeNone(); }); });
