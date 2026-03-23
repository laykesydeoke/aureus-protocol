export const alert_rule_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1060, unauthorized: 1062, invalid: 1063 },
} as const;
export type alertruleErrorCode = typeof alert_rule_CONFIG.errorCodes[keyof typeof alert_rule_CONFIG.errorCodes];
