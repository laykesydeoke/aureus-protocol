
import { Cl } from "@stacks/transactions";
import { beforeEach, describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

// Contract principals
const mockSbtc = Cl.contractPrincipal(deployer, "mock-sbtc");
const protocolAdapter = Cl.contractPrincipal(deployer, "protocol-adapter");

// Protocol constants
const PROTOCOL_ZEST = 1;
const PROTOCOL_VELAR = 2;
const PROTOCOL_ALEX = 3;
const PROTOCOL_STACKINGDAO = 4;

describe("Aureus Protocol - Protocol Adapter Tests", () => {
  beforeEach(() => {
    // Mint mock sBTC to test users
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    
    // Initialize the protocol adapter
    simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], deployer);
  });

  describe("Adapter Initialization", () => {
    it("allows deployer to initialize the adapter", () => {
      const initResult = simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], deployer);
      expect(initResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      // Check that protocols are initialized
      const zestInfo = simnet.callReadOnlyFn("protocol-adapter", "get-protocol-info", [Cl.uint(PROTOCOL_ZEST)], deployer);
      expect(zestInfo.result).toBeOk();
      
      const velarInfo = simnet.callReadOnlyFn("protocol-adapter", "get-protocol-info", [Cl.uint(PROTOCOL_VELAR)], deployer);
      expect(velarInfo.result).toBeOk();
    });

    it("prevents non-deployer from initializing adapter", () => {
      const initResult = simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], alice);
      expect(initResult.result).toStrictEqual(Cl.error(Cl.uint(200))); // ERR_UNAUTHORIZED
    });

    it("returns optimal protocol based on yield rates", () => {
      const optimalProtocol = simnet.callReadOnlyFn("protocol-adapter", "get-optimal-protocol", [], deployer);
      expect(optimalProtocol.result).toStrictEqual(Cl.ok(Cl.uint(PROTOCOL_ZEST))); // Zest has highest rate (8%)
    });

    it("returns all protocol rates correctly", () => {
      const allRates = simnet.callReadOnlyFn("protocol-adapter", "get-all-protocol-rates", [], deployer);
      expect(allRates.result).toBeOk();
      // Verify the structure contains the expected yield rates
    });
  });

  describe("Protocol Deposits", () => {
    it("allows deposits to optimal protocol", () => {
      const depositAmount = 100_000;
      
      const depositResult = simnet.callPublicFn(
        "protocol-adapter",
        "deposit-to-optimal",
        [Cl.uint(depositAmount), mockSbtc],
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.ok(Cl.uint(PROTOCOL_ZEST))); // Should deposit to Zest (highest yield)
      
      // Check user allocation
      const userAllocation = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-user-allocation",
        [Cl.principal(alice), Cl.uint(PROTOCOL_ZEST)],
        deployer
      );
      expect(userAllocation.result).toStrictEqual(Cl.ok(Cl.uint(depositAmount)));
      
      // Check protocol balance
      const protocolBalance = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-protocol-balance",
        [Cl.uint(PROTOCOL_ZEST), mockSbtc],
        deployer
      );
      expect(protocolBalance.result).toStrictEqual(Cl.ok(Cl.uint(depositAmount)));
    });

    it("prevents deposits when adapter is paused", () => {
      // Pause the adapter
      simnet.callPublicFn("protocol-adapter", "set-adapter-pause", [Cl.bool(true)], deployer);
      
      const depositResult = simnet.callPublicFn(
        "protocol-adapter",
        "deposit-to-optimal",
        [Cl.uint(100_000), mockSbtc],
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(207))); // ERR_PROTOCOL_PAUSED
    });

    it("prevents zero amount deposits", () => {
      const depositResult = simnet.callPublicFn(
        "protocol-adapter",
        "deposit-to-optimal",
        [Cl.uint(0), mockSbtc],
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(203))); // ERR_INVALID_PROTOCOL
    });

    it("handles multiple deposits from same user", () => {
      // First deposit
      simnet.callPublicFn("protocol-adapter", "deposit-to-optimal", [Cl.uint(100_000), mockSbtc], alice);
      
      // Second deposit
      const secondDeposit = simnet.callPublicFn("protocol-adapter", "deposit-to-optimal", [Cl.uint(50_000), mockSbtc], alice);
      expect(secondDeposit.result).toStrictEqual(Cl.ok(Cl.uint(PROTOCOL_ZEST)));
      
      // Check combined allocation
      const userAllocation = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-user-allocation",
        [Cl.principal(alice), Cl.uint(PROTOCOL_ZEST)],
        deployer
      );
      expect(userAllocation.result).toStrictEqual(Cl.ok(Cl.uint(150_000)));
    });
  });

  describe("Protocol Withdrawals", () => {
    beforeEach(() => {
      // Make initial deposits for withdrawal tests
      simnet.callPublicFn("protocol-adapter", "deposit-to-optimal", [Cl.uint(200_000), mockSbtc], alice);
      simnet.callPublicFn("protocol-adapter", "deposit-to-optimal", [Cl.uint(100_000), mockSbtc], bob);
    });

    it("allows users to withdraw from protocols", () => {
      const withdrawAmount = 50_000;
      
      const withdrawResult = simnet.callPublicFn(
        "protocol-adapter",
        "withdraw-from-protocol",
        [Cl.uint(PROTOCOL_ZEST), Cl.uint(withdrawAmount), mockSbtc],
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      // Check updated allocation
      const userAllocation = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-user-allocation",
        [Cl.principal(alice), Cl.uint(PROTOCOL_ZEST)],
        deployer
      );
      expect(userAllocation.result).toStrictEqual(Cl.ok(Cl.uint(150_000))); // 200_000 - 50_000
    });

    it("prevents withdrawing more than user allocation", () => {
      const withdrawResult = simnet.callPublicFn(
        "protocol-adapter",
        "withdraw-from-protocol",
        [Cl.uint(PROTOCOL_ZEST), Cl.uint(300_000), mockSbtc], // More than Alice's allocation
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.error(Cl.uint(206))); // ERR_INSUFFICIENT_LIQUIDITY
    });

    it("prevents zero amount withdrawals", () => {
      const withdrawResult = simnet.callPublicFn(
        "protocol-adapter",
        "withdraw-from-protocol",
        [Cl.uint(PROTOCOL_ZEST), Cl.uint(0), mockSbtc],
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.error(Cl.uint(203))); // ERR_INVALID_PROTOCOL
    });

    it("prevents withdrawal from non-existent protocol", () => {
      const withdrawResult = simnet.callPublicFn(
        "protocol-adapter",
        "withdraw-from-protocol",
        [Cl.uint(99), Cl.uint(10_000), mockSbtc], // Invalid protocol ID
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.error(Cl.uint(201))); // ERR_PROTOCOL_NOT_FOUND
    });
  });

  describe("Protocol Management", () => {
    it("allows owner to update protocol rates", () => {
      const newRate = 950; // 9.5% APY
      
      const updateResult = simnet.callPublicFn(
        "protocol-adapter",
        "update-protocol-rate",
        [Cl.uint(PROTOCOL_VELAR), Cl.uint(newRate)],
        deployer
      );
      
      expect(updateResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      // Verify the rate was updated and Velar is now optimal
      const optimalProtocol = simnet.callReadOnlyFn("protocol-adapter", "get-optimal-protocol", [], deployer);
      expect(optimalProtocol.result).toStrictEqual(Cl.ok(Cl.uint(PROTOCOL_VELAR))); // Now has highest rate
    });

    it("prevents non-owner from updating protocol rates", () => {
      const updateResult = simnet.callPublicFn(
        "protocol-adapter",
        "update-protocol-rate",
        [Cl.uint(PROTOCOL_VELAR), Cl.uint(950)],
        alice
      );
      
      expect(updateResult.result).toStrictEqual(Cl.error(Cl.uint(200))); // ERR_UNAUTHORIZED
    });

    it("allows owner to rebalance protocols", () => {
      // First update Velar to have higher yield than Zest
      simnet.callPublicFn("protocol-adapter", "update-protocol-rate", [Cl.uint(PROTOCOL_VELAR), Cl.uint(950)], deployer);
      
      const rebalanceResult = simnet.callPublicFn(
        "protocol-adapter",
        "rebalance-protocols",
        [mockSbtc],
        deployer
      );
      
      expect(rebalanceResult.result).toStrictEqual(Cl.ok(Cl.bool(true))); // Rebalancing occurred
      
      // Check active protocol changed
      const activeProtocol = simnet.callReadOnlyFn("protocol-adapter", "get-active-protocol", [], deployer);
      expect(activeProtocol.result).toStrictEqual(Cl.ok(Cl.uint(PROTOCOL_VELAR)));
    });

    it("returns false when no rebalancing is needed", () => {
      // Don't change any rates, so optimal protocol remains Zest
      const rebalanceResult = simnet.callPublicFn(
        "protocol-adapter",
        "rebalance-protocols",
        [mockSbtc],
        deployer
      );
      
      expect(rebalanceResult.result).toStrictEqual(Cl.ok(Cl.bool(false))); // No rebalancing needed
    });

    it("prevents non-owner from rebalancing", () => {
      const rebalanceResult = simnet.callPublicFn(
        "protocol-adapter",
        "rebalance-protocols",
        [mockSbtc],
        alice
      );
      
      expect(rebalanceResult.result).toStrictEqual(Cl.error(Cl.uint(200))); // ERR_UNAUTHORIZED
    });
  });

  describe("Emergency Controls", () => {
    it("allows owner to pause adapter", () => {
      const pauseResult = simnet.callPublicFn("protocol-adapter", "set-adapter-pause", [Cl.bool(true)], deployer);
      expect(pauseResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const isPaused = simnet.callReadOnlyFn("protocol-adapter", "is-adapter-paused", [], deployer);
      expect(isPaused.result).toStrictEqual(Cl.ok(Cl.bool(true)));
    });

    it("allows owner to unpause adapter", () => {
      // First pause
      simnet.callPublicFn("protocol-adapter", "set-adapter-pause", [Cl.bool(true)], deployer);
      
      // Then unpause
      const unpauseResult = simnet.callPublicFn("protocol-adapter", "set-adapter-pause", [Cl.bool(false)], deployer);
      expect(unpauseResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const isPaused = simnet.callReadOnlyFn("protocol-adapter", "is-adapter-paused", [], deployer);
      expect(isPaused.result).toStrictEqual(Cl.ok(Cl.bool(false)));
    });

    it("prevents non-owner from pausing adapter", () => {
      const pauseResult = simnet.callPublicFn("protocol-adapter", "set-adapter-pause", [Cl.bool(true)], alice);
      expect(pauseResult.result).toStrictEqual(Cl.error(Cl.uint(200))); // ERR_UNAUTHORIZED
    });
  });

  describe("Read-Only Functions", () => {
    beforeEach(() => {
      simnet.callPublicFn("protocol-adapter", "deposit-to-optimal", [Cl.uint(150_000), mockSbtc], alice);
    });

    it("returns correct protocol info", () => {
      const protocolInfo = simnet.callReadOnlyFn("protocol-adapter", "get-protocol-info", [Cl.uint(PROTOCOL_ZEST)], deployer);
      expect(protocolInfo.result).toBeOk();
      // The result should be a some() containing protocol details
    });

    it("returns correct protocol balance", () => {
      const protocolBalance = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-protocol-balance",
        [Cl.uint(PROTOCOL_ZEST), mockSbtc],
        deployer
      );
      expect(protocolBalance.result).toStrictEqual(Cl.ok(Cl.uint(150_000)));
    });

    it("returns zero for non-existent balances", () => {
      const protocolBalance = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-protocol-balance",
        [Cl.uint(PROTOCOL_ALEX), mockSbtc], // No deposits to ALEX
        deployer
      );
      expect(protocolBalance.result).toStrictEqual(Cl.ok(Cl.uint(0)));
    });

    it("returns correct user allocation", () => {
      const userAllocation = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-user-allocation",
        [Cl.principal(alice), Cl.uint(PROTOCOL_ZEST)],
        deployer
      );
      expect(userAllocation.result).toStrictEqual(Cl.ok(Cl.uint(150_000)));
      
      // Test for user with no allocation
      const bobAllocation = simnet.callReadOnlyFn(
        "protocol-adapter",
        "get-user-allocation",
        [Cl.principal(bob), Cl.uint(PROTOCOL_ZEST)],
        deployer
      );
      expect(bobAllocation.result).toStrictEqual(Cl.ok(Cl.uint(0)));
    });

    it("returns active protocol correctly", () => {
      const activeProtocol = simnet.callReadOnlyFn("protocol-adapter", "get-active-protocol", [], deployer);
      expect(activeProtocol.result).toStrictEqual(Cl.ok(Cl.uint(PROTOCOL_ZEST)));
    });
  });
});
