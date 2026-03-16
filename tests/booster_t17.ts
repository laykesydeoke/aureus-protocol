import { describe, it, expect } from "vitest";
describe("booster 17", () => { it("test 17", () => { const accounts = simnet.getAccounts(); const deployer = accounts.get("deployer")\!; const r = simnet.callReadOnlyFn("yield-aggregator", "get-booster-params", [], deployer); expect(r.result).not.toBeNone(); }); });
