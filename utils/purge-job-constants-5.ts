export const purge_job_CONFIG = {
  contractName: 'yield-aggregator',
  maxEntries: 1000,
  minValue: 1,
  maxValue: 1000000000,
  errorCodes: { notFound: 1160, unauthorized: 1162, invalid: 1163 },
} as const;
export type purgejobErrorCode = typeof purge_job_CONFIG.errorCodes[keyof typeof purge_job_CONFIG.errorCodes];
