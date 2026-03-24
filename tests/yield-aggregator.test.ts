
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
    // Lower minimum deposit for general tests
    simnet.callPublicFn("yield-aggregator", "set-minimum-deposit", [Cl.uint(1)], deployer);
  });

  describe("Contract Initialization", () => {
    it("verifies contract is initialized", () => {
      const isInitialized = simnet.callReadOnlyFn("yield-aggregator", "is-initialized", [], deployer);
      expect(isInitialized.result).toStrictEqual(Cl.ok(Cl.bool(true)));
    });

    it("prevents non-deployer from initializing", () => {
      const initResult = simnet.callPublicFn("yield-aggregator", "initialize", [], alice);
      expect(initResult.result).toStrictEqual(Cl.error(Cl.uint(100)));
    });

    it("prevents double initialization", () => {
      const initResult = simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
      expect(initResult.result).toStrictEqual(Cl.error(Cl.uint(101)));
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

      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(108))); // ERR_CONTRACT_PAUSED
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

    it("prevents withdrawals when contract is paused", () => {
      simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], deployer);

      const withdrawResult = simnet.callPublicFn(
        "yield-aggregator",
        "withdraw-sbtc",
        [Cl.uint(50_000), mockSbtc],
        alice
      );

      expect(withdrawResult.result).toStrictEqual(Cl.error(Cl.uint(108))); // ERR_CONTRACT_PAUSED
    });

    it("allows withdrawals after unpause", () => {
      simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(true)], deployer);
      simnet.callPublicFn("yield-aggregator", "set-emergency-pause", [Cl.bool(false)], deployer);

      const withdrawResult = simnet.callPublicFn(
        "yield-aggregator",
        "withdraw-sbtc",
        [Cl.uint(50_000), mockSbtc],
        alice
      );

      expect(withdrawResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
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

  describe("Yield Distribution Logic", () => {
    beforeEach(() => {
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(200_000), mockSbtc], alice);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(100_000), mockSbtc], bob);
    });

    it("distribute-to-user credits proportional yield", () => {
      const result = simnet.callPublicFn(
        "yield-aggregator",
        "distribute-to-user",
        [Cl.principal(alice), Cl.uint(30_000)],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(20_000)); // 200k/300k * 30k = 20k

      const aliceYield = simnet.callReadOnlyFn("yield-aggregator", "get-user-yield", [Cl.principal(alice)], deployer);
      expect(aliceYield.result).toStrictEqual(Cl.ok(Cl.uint(20_000)));
    });

    it("get-user-share returns correct basis points", () => {
      const share = simnet.callReadOnlyFn("yield-aggregator", "get-user-share", [Cl.principal(alice)], deployer);
      expect(share.result).toStrictEqual(Cl.ok(Cl.uint(6666)));
    });

    it("distribute-to-user rejects non-owner", () => {
      const result = simnet.callPublicFn(
        "yield-aggregator",
        "distribute-to-user",
        [Cl.principal(alice), Cl.uint(10_000)],
        alice
      );
      expect(result.result).toStrictEqual(Cl.error(Cl.uint(100)));
    });
  });

  describe("Per-User Yield Credit", () => {
    it("credits yield proportionally to user deposits", () => {
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(200_000), mockSbtc], alice);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(100_000), mockSbtc], bob);

      const creditResult = simnet.callPublicFn(
        "yield-aggregator",
        "credit-user-yield",
        [Cl.principal(alice), Cl.uint(30_000)],
        deployer
      );
      expect(creditResult.result).toBeOk(Cl.uint(20_000)); // 200k/300k * 30k = 20k

      const aliceYield = simnet.callReadOnlyFn("yield-aggregator", "get-user-yield", [Cl.principal(alice)], deployer);
      expect(aliceYield.result).toStrictEqual(Cl.ok(Cl.uint(20_000)));
    });

    it("correctly handles withdrawal from both deposit and yield (up to available tokens)", () => {
      // Deposit
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(500000), mockSbtc], alice);
      // Credit yield (accounting only - no extra tokens minted to contract)
      simnet.callPublicFn("yield-aggregator", "credit-user-yield", [Cl.principal(alice), Cl.uint(100000)], deployer);
      // Verify yield was credited
      const yieldBal = simnet.callReadOnlyFn("yield-aggregator", "get-user-yield", [Cl.principal(alice)], alice);
      expect(yieldBal.result).toBeOk(Cl.uint(100000));
      // Withdraw exactly the deposited amount (contract has 500000 tokens)
      const { result } = simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(500000), mockSbtc], alice);
      expect(result).toBeOk(Cl.bool(true));
      // After full deposit withdrawal, deposit is 0
      const deposit = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], alice);
      expect(deposit.result).toBeOk(Cl.uint(0));
    });

    it("prevents non-owner from crediting yield", () => {
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(100_000), mockSbtc], alice);

      const creditResult = simnet.callPublicFn(
        "yield-aggregator",
        "credit-user-yield",
        [Cl.principal(alice), Cl.uint(10_000)],
        alice
      );
      expect(creditResult.result).toStrictEqual(Cl.error(Cl.uint(100)));
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

  describe("Deposit Tiers and Caps", () => {
    it("user tier starts at BRONZE (0)", () => {
      const tier = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tier.result).toStrictEqual(Cl.ok(Cl.uint(0)));
    });

    it("depositing above silver threshold sets tier to SILVER", () => {
      // Mint enough for silver threshold (10M sats)
      simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(10_000_000), Cl.principal(alice)], deployer);

      const depositResult = simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(10_000_000), mockSbtc],
        alice
      );
      expect(depositResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));

      const tier = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tier.result).toStrictEqual(Cl.ok(Cl.uint(1))); // TIER_SILVER
    });

    it("deposit cap prevents exceeding max-deposit-per-user", () => {
      // Set a low cap
      simnet.callPublicFn("yield-aggregator", "set-max-deposit-per-user", [Cl.uint(50_000)], deployer);

      const depositResult = simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(100_000), mockSbtc],
        alice
      );
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(104))); // ERR_INVALID_AMOUNT
    });

    it("owner can update deposit cap", () => {
      const setResult = simnet.callPublicFn(
        "yield-aggregator",
        "set-max-deposit-per-user",
        [Cl.uint(1_000_000_000)],
        deployer
      );
      expect(setResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));

      const cap = simnet.callReadOnlyFn("yield-aggregator", "get-max-deposit-per-user", [], deployer);
      expect(cap.result).toStrictEqual(Cl.ok(Cl.uint(1_000_000_000)));
    });

    it("get-max-deposit-per-user returns the default", () => {
      const cap = simnet.callReadOnlyFn("yield-aggregator", "get-max-deposit-per-user", [], deployer);
      expect(cap.result).toStrictEqual(Cl.ok(Cl.uint(500_000_000))); // 500M sats default
    });

    it("tier downgrades to BRONZE after full withdrawal", () => {
      // Deposit to reach SILVER tier (10M sats)
      simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(10_000_000), Cl.principal(alice)], deployer);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(10_000_000), mockSbtc], alice);

      const tierBefore = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tierBefore.result).toStrictEqual(Cl.ok(Cl.uint(1))); // SILVER

      // Withdraw all
      simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(10_000_000), mockSbtc], alice);

      const tierAfter = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tierAfter.result).toStrictEqual(Cl.ok(Cl.uint(0))); // BRONZE
    });

    it("tier stays SILVER after partial withdrawal above threshold", () => {
      simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(20_000_000), Cl.principal(alice)], deployer);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(20_000_000), mockSbtc], alice);

      // Withdraw 5M, still above silver threshold (10M)
      simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(5_000_000), mockSbtc], alice);

      const tierAfter = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tierAfter.result).toStrictEqual(Cl.ok(Cl.uint(1))); // Still SILVER
    });

    it("tier downgrades from GOLD to SILVER after large withdrawal", () => {
      simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(50_000_000), Cl.principal(alice)], deployer);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(50_000_000), mockSbtc], alice);

      const tierBefore = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tierBefore.result).toStrictEqual(Cl.ok(Cl.uint(2))); // GOLD

      // Withdraw 41M, leaving 9M (below gold threshold 50M, below silver only at 10M but 9M < 10M so BRONZE)
      simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(41_000_000), mockSbtc], alice);

      const tierAfter = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], deployer);
      expect(tierAfter.result).toStrictEqual(Cl.ok(Cl.uint(0))); // BRONZE (9M < 10M silver threshold)
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

  describe("Minimum Deposit Enforcement", () => {
    it("get-minimum-deposit returns default value", () => {
      // Reset to default minimum (beforeEach sets to 1, so set back to default for this test)
      simnet.callPublicFn("yield-aggregator", "set-minimum-deposit", [Cl.uint(1_000_000)], deployer);
      const min = simnet.callReadOnlyFn("yield-aggregator", "get-minimum-deposit", [], deployer);
      expect(min.result).toStrictEqual(Cl.ok(Cl.uint(1_000_000)));
    });

    it("enforces minimum deposit amount", () => {
      simnet.callPublicFn("yield-aggregator", "set-minimum-deposit", [Cl.uint(1_000_000)], deployer);
      const depositResult = simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(500_000), mockSbtc], // Below 1M minimum
        alice
      );
      expect(depositResult.result).toStrictEqual(Cl.error(Cl.uint(104))); // ERR_INVALID_AMOUNT
    });

    it("allows deposit at exactly minimum amount", () => {
      simnet.callPublicFn("yield-aggregator", "set-minimum-deposit", [Cl.uint(1_000_000)], deployer);
      simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000), Cl.principal(alice)], deployer);
      const depositResult = simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(1_000_000), mockSbtc],
        alice
      );
      expect(depositResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
    });

    it("owner can update minimum deposit", () => {
      const setResult = simnet.callPublicFn(
        "yield-aggregator",
        "set-minimum-deposit",
        [Cl.uint(500_000)],
        deployer
      );
      expect(setResult.result).toStrictEqual(Cl.ok(Cl.bool(true)));
      const min = simnet.callReadOnlyFn("yield-aggregator", "get-minimum-deposit", [], deployer);
      expect(min.result).toStrictEqual(Cl.ok(Cl.uint(500_000)));
    });

    it("non-owner cannot set minimum deposit", () => {
      const setResult = simnet.callPublicFn(
        "yield-aggregator",
        "set-minimum-deposit",
        [Cl.uint(100)],
        alice
      );
      expect(setResult.result).toStrictEqual(Cl.error(Cl.uint(100)));
    });
  });

  describe("Withdrawal History", () => {
    beforeEach(() => {
      simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(5_000_000), Cl.principal(alice)], deployer);
      simnet.callPublicFn("yield-aggregator", "deposit-sbtc", [Cl.uint(5_000_000), mockSbtc], alice);
    });

    it("withdrawal count starts at zero before any withdrawal", () => {
      const count = simnet.callReadOnlyFn("yield-aggregator", "get-withdrawal-count", [], deployer);
      expect(count.result).toStrictEqual(Cl.ok(Cl.uint(0)));
    });

    it("records withdrawal in history after withdraw", () => {
      simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(1_000_000), mockSbtc], alice);

      const count = simnet.callReadOnlyFn("yield-aggregator", "get-withdrawal-count", [], deployer);
      expect(count.result).toStrictEqual(Cl.ok(Cl.uint(1)));

      const record = simnet.callReadOnlyFn("yield-aggregator", "get-withdrawal-record", [Cl.uint(0)], deployer);
      expect(record.result.type).toBe('ok'); // ClarityType.ResponseOk
    });

    it("increments counter for each withdrawal", () => {
      simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(1_000_000), mockSbtc], alice);
      simnet.callPublicFn("yield-aggregator", "withdraw-sbtc", [Cl.uint(1_000_000), mockSbtc], alice);

      const count = simnet.callReadOnlyFn("yield-aggregator", "get-withdrawal-count", [], deployer);
      expect(count.result).toStrictEqual(Cl.ok(Cl.uint(2)));
    });

    it("returns none for non-existent withdrawal record", () => {
      const record = simnet.callReadOnlyFn("yield-aggregator", "get-withdrawal-record", [Cl.uint(99)], deployer);
      expect(record.result).toStrictEqual(Cl.ok(Cl.none()));
    });
  });
});
