import {
  add,
  subtract,
  multiply,
  divide,
} from "@dinero.js/core/calculator/bigint";

/**
 * Returns a bigint in distributed shares.
 *
 * @param value The bigint to distribute.
 * @param ratios The ratios according which to distribute.
 *
 * @returns The bigint distributed in shares.
 */
const distribute = (value: bigint, ratios: bigint[]) => {
  const total = ratios.reduce((a, b) => add(a, b));

  if (total === 0n) {
    return ratios;
  }

  let remainder = value;

  const shares = ratios.map((ratio) => {
    const share = divide(multiply(value, ratio), total) || 0n;
    remainder = subtract(remainder, share);

    return share;
  });

  let i = 0;

  while (remainder > 0) {
    if (ratios[i] > 0) {
      shares[i] = add(shares[i], 1n);
      remainder = subtract(remainder, 1n);
    }

    i++;
  }

  return shares;
};

export default distribute;
