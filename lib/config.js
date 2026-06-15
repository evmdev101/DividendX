// DividendX (DivX) — Token Configuration

export const DIVIDENDX = {
  name: "DividendX",
  symbol: "DIVX",
  network: "PulseChain",
  chainId: 369,
  decimals: 18,
  addresses: {
    token:    "0x6df9cd07bf067b42a700dc679bd9325ff61da8f3", // DIVX token (verified on-chain)
    treasury: "", // TODO: confirm treasury wallet
    dead:     "0x000000000000000000000000000000000000dEaD",
    zero:     "0x0000000000000000000000000000000000000000",
    pair:     "0x3fC50eb7dBA7d3Ca3cfFb30073f8a9Cc376E5d66", // DIVX/WPLS PLP V2
  },
  urls: {
    rpc:      "https://rpc.pulsechain.com",
    explorer: "https://scan.pulsechain.com",
    explorerApi: "https://api.scan.pulsechain.com/api/v2",
    pulseX:   "https://pulsex.com",
    swap:     "https://pulsex.mypinata.cloud/ipfs/bafybeiaq4jgcpz4hdzwid6letizdnhijlp6lu5ivcjcp5vbgpgf54jknn4/#/swap?outputCurrency=0x6df9cd07bf067b42a700dc679bd9325ff61da8f3",
    chart:    "https://dexscreener.com/pulsechain/0x3fc50eb7dba7d3ca3cffb30073f8a9cc376e5d66",
    telegram: "https://t.me/",   // TODO: fill in
    youtube:  "https://www.youtube.com/", // TODO: fill in
    x:        "https://x.com/",  // TODO: fill in
  },
};

// Ecosystem tokens (already deployed)
export const CASHX = {
  name: "CashX",
  symbol: "CASHX",
  address: "0x4C450b3C2b89a2DAbE5A3eE39FF475134A30d665",
  chainId: 369,
};

export const DISTRIBUTIONX = {
  name: "DistributionX",
  symbol: "DISTROX",
  address: "0xA1198e47Ac3D89903D7eCFd04a14b8Bfd72d7B03",
  chainId: 369,
};

// Farm pairs — populate LP addresses after deployment
export const FARMS = {
  core: [
    { pair: "DivX/DistroX",  tokenA: "DIVX",   tokenB: "DISTROX", lp: "" },
    { pair: "DivX/CashX",    tokenA: "DIVX",   tokenB: "CASHX",   lp: "" },
    { pair: "DivX/PLS",      tokenA: "DIVX",   tokenB: "PLS",     lp: "" },
    { pair: "DivX/PLSX",     tokenA: "DIVX",   tokenB: "PLSX",    lp: "" },
    { pair: "DivX/INC",      tokenA: "DIVX",   tokenB: "INC",     lp: "" },
    { pair: "DivX/HEX",      tokenA: "DIVX",   tokenB: "HEX",     lp: "" },
    { pair: "DivX/eHEX",     tokenA: "DIVX",   tokenB: "EHEX",    lp: "" },
    { pair: "DivX/VPLS",     tokenA: "DIVX",   tokenB: "VPLS",    lp: "" },
  ],
  ecosystem: [
    { pair: "CashX/PLS",     tokenA: "CASHX",  tokenB: "PLS",     lp: "" },
    { pair: "CashX/eHEX",    tokenA: "CASHX",  tokenB: "EHEX",    lp: "" },
    { pair: "DistroX/eHEX",  tokenA: "DISTROX",tokenB: "EHEX",    lp: "" },
    { pair: "DistroX/VPLS",  tokenA: "DISTROX",tokenB: "VPLS",    lp: "" },
  ],
  bonus: [
    { pair: "DistroX/PRVX",  tokenA: "DISTROX",tokenB: "PRVX",    lp: "" },
    { pair: "CashX/PRVX",    tokenA: "CASHX",  tokenB: "PRVX",    lp: "" },
    { pair: "DivX/PRVX",     tokenA: "DIVX",   tokenB: "PRVX",    lp: "" },
  ],
};

// Tokenomics constants
export const TOKENOMICS = {
  taxPercent: 7,
  breakdown: {
    treasury:         4.0,
    burnDivX:         0.5,
    burnDistroX:      0.5,
    burnCashX:        0.5,
    reflectDivX:      0.5,
    reflectDistroX:   0.5,
    reflectCashX:     0.5,
  },
  sacrificeDays:      5,
  sacrificeAsset:     "PLS",
  projectedRunway:    "10-12 years",
};
