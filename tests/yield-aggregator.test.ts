
import { Cl } from "@stacks/transactions";
import { beforeEach, describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

// Contract principals
const mockSbtc = Cl.contractPrincipal(deployer, "mock-sbtc");
const yieldAggregator = Cl.contractPrincipal(deployer, "yield-aggregator");

describe("Aureus Protocol - Yield Aggregator Tests", () => {
  beforeEach(() => {
    // Mint mock sBTC to test users
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    
    // Initialize the yield aggregator
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  describe("Contract Initialization", () => {
    it("allows deployer to initialize the contract", () => {
      // Reset for this test
      simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], deployer);
      
      const initResult = simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
      expect(initResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const isInitialized = simnet.callReadOnlyFn("yield-aggregator", "is-initialized", [], deployer);
      expect(isInitialized.result).toStrictEqual(Cl.ok(Cl.bool(true)));
    });

    it("prevents non-deployer from initializing", () => {
      const initResult = simnet.callPublicFn("yield-aggregator", "initialize", [], alice);
      expect(initResult.result).toStrictEqual(Cl.error(Cl.uint(100))); // ERR_UNAUTHORIZED
    });

    it("prevents double initialization", () => {
      // Contract is already initialized in beforeEach
      const initResult = simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
      expect(initResult.result).toStrictEqual(Cl.error(Cl.uint(101))); // ERR_ALREADY_INITIALIZED
    });
  });

  describe("Asset Deposits", () => {
    it("allows users to deposit sBTC tokens", () => {
      const depositAmount = 100_000;
      
      const depositResult = simnet.callPublicFn(
        "yield-aggregator", 
        "deposit-sbtc", 
        [Cl.uint(depositAmount), mockSbtc], 
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      expect(depositResult.events.length).toBeGreaterThan(0);
      
      // Check user deposit balance
      const userDeposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], deployer);
      expect(userDeposit.result).toStrictEqual(Cl.ok(Cl.uint(depositAmount)));
      
      // Check total deposits
      const totalDeposits = simnet.callReadOnlyFn("yield-aggregator", "get-total-deposits", [], deployer);
      expect(totalDeposits.result).toStrictEqual(Cl.ok(Cl.uint(depositAmount)));
    });

    it("prevents deposits when contract is paused", () => {
      // Pause the contract
      simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], deployer);
      
      const depositResult = simnet.callPublicFn(
        "yield-aggregator", 
        "deposit-sbtc", 
        [Cl.uint(100_000), mockSbtc], 
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(100))); // ERR_UNAUTHORIZED
    });

    it("prevents zero amount deposits", () => {
      const depositResult = simnet.callPublicFn(
        "yield-aggregator", 
        "deposit-sbtc", 
        [Cl.uint(0), mockSbtc], 
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(104))); // ERR_INVALID_AMOUNT
    });

    it("prevents deposits exceeding user balance", () => {
      const depositResult = simnet.callPublicFn(
        "yield-aggregator", 
        "deposit-sbtc", 
        [Cl.uint(2_000_000_000), mockSbtc], // More than minted amount
        alice
      );
      
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(103))); // ERR_INSUFFICIENT_BALANCE
    });

    it("handles multiple deposits from same user", () => {
      // First deposit
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(100_000), mockSbtc], alice);
      
      // Second deposit
      const secondDeposit = simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(50_000), mockSbtc], alice);
      expect(secondDeposit.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      // Check combined balance
      const userDeposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], deployer);
      expect(userDeposit.result).toStrictEqual(Cl.ok(Cl.uint(150_000)));
    });
  });

  describe("Asset Withdrawals", () => {
    beforeEach(() => {
      // Make initial deposits for withdrawal tests
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(200_000), mockSbtc], alice);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(100_000), mockSbtc], bob);
    });

    it("allows users to withdraw deposited tokens", () => {
      const withdrawAmount = 50_000;
      
      const withdrawResult = simnet.callPublicFn(
        "yield-aggregator", 
        "withdraw-sbtc", 
        [Cl.uint(withdrawAmount), mockSbtc], 
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      // Check updated balances
      const userDeposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], deployer);
      expect(userDeposit.result).toStrictEqual(Cl.ok(Cl.uint(150_000))); // 200_000 - 50_000
    });

    it("prevents withdrawing more than available balance", () => {
      const withdrawResult = simnet.callPublicFn(
        "yield-aggregator", 
        "withdraw-sbtc", 
        [Cl.uint(300_000), mockSbtc], // More than Alice's deposit
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.error(Cl.uint(103))); // ERR_INSUFFICIENT_BALANCE
    });

    it("prevents zero amount withdrawals", () => {
      const withdrawResult = simnet.callPublicFn(
        "yield-aggregator", 
        "withdraw-sbtc", 
        [Cl.uint(0), mockSbtc], 
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.error(Cl.uint(104))); // ERR_INVALID_AMOUNT
    });

    it("allows full balance withdrawal", () => {
      const withdrawResult = simnet.callPublicFn(
        "yield-aggregator", 
        "withdraw-sbtc", 
        [Cl.uint(200_000), mockSbtc], // Alice's full deposit
        alice
      );
      
      expect(withdrawResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const userDeposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], deployer);
      expect(userDeposit.result).toStrictEqual(Cl.ok(Cl.uint(0)));
    });
  });

  describe("Yield Distribution", () => {
    beforeEach(() => {
      // Setup deposits for yield tests
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(200_000), mockSbtc], alice);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(100_000), mockSbtc], bob);
    });

    it("allows owner to distribute yield", () => {
      const yieldAmount = 15_000;
      
      const distributeResult = simnet.callPublicFn(
        "yield-aggregator", 
        "distribute-yield", 
        [Cl.uint(yieldAmount)], 
        deployer
      );
      
      expect(distributeResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const totalYield = simnet.callReadOnlyFn("yield-aggregator", "get-total-yield-earned", [], deployer);
      expect(totalYield.result).toStrictEqual(Cl.ok(Cl.uint(yieldAmount)));
    });

    it("prevents non-owner from distributing yield", () => {
      const distributeResult = simnet.callPublicFn(
        "yield-aggregator", 
        "distribute-yield", 
        [Cl.uint(15_000)], 
        alice
      );
      
      expect(distributeResult.result).toStrictEqual(Cl.error(Cl.uint(100))); // ERR_UNAUTHORIZED
    });

    it("prevents zero yield distribution", () => {
      const distributeResult = simnet.callPublicFn(
        "yield-aggregator", 
        "distribute-yield", 
        [Cl.uint(0)], 
        deployer
      );
      
      expect(distributeResult.result).toStrictEqual(Cl.error(Cl.uint(104))); // ERR_INVALID_AMOUNT
    });
  });

  describe("Emergency Controls", () => {
    it("allows owner to pause contract", () => {
      const pauseResult = simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], deployer);
      expect(pauseResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const isPaused = simnet.callReadOnlyFn("yield-aggregator", "is-emergency-paused", [], deployer);
      expect(isPaused.result).toStrictEqual(Cl.ok(Cl.bool(true)));
    });

    it("allows owner to unpause contract", () => {
      // First pause
      simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], deployer);
      
      // Then unpause
      const unpauseResult = simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(false)], deployer);
      expect(unpauseResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      
      const isPaused = simnet.callReadOnlyFn("yield-aggregator", "is-emergency-paused", [], deployer);
      expect(isPaused.result).toStrictEqual(Cl.ok(Cl.bool(false)));
    });

    it("prevents non-owner from pausing contract", () => {
      const pauseResult = simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], alice);
      expect(pauseResult.result).toStrictEqual(Cl.error(Cl.uint(100))); // ERR_UNAUTHORIZED
    });
  });

  describe("Read-Only Functions", () => {
    beforeEach(() => {
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(150_000), mockSbtc], alice);
    });

    it("returns correct user deposit balance", () => {
      const userDeposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], deployer);
      expect(userDeposit.result).toStrictEqual(Cl.ok(Cl.uint(150_000)));
      
      // Test for user with no deposits
      const bobDeposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(bob)], deployer);
      expect(bobDeposit.result).toStrictEqual(Cl.ok(Cl.uint(0)));
    });

    it("returns correct total deposits", () => {
      const totalDeposits = simnet.callReadOnlyFn("yield-aggregator", "get-total-deposits", [], deployer);
      expect(totalDeposits.result).toStrictEqual(Cl.ok(Cl.uint(150_000)));
    });

    it("returns initialization status", () => {
      const isInitialized = simnet.callReadOnlyFn("yield-aggregator", "is-initialized", [], deployer);
      expect(isInitialized.result).toStrictEqual(Cl.ok(Cl.bool(true)));
    });

    it("returns empty deposit history initially", () => {
      const history = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit-history", [Cl.principal(bob)], deployer);
      expect(history.result).toStrictEqual(Cl.ok(Cl.list([])));
    });
  });
});
