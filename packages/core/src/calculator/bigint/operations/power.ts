import { BinaryOperation } from "@dinero.js/core";

/**
 * Returns an bigint to the power of an exponent.
 *
 * @param base The base bigint.
 * @param exponent The exponent to raise the base to.
 *
 * @returns The base to the power of the exponent.
 */
const power: BinaryOperation<bigint> = (n, exponent) => {
  return n ** exponent;
};

export default power;
