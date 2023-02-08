/**
 * Alternative to Typescript's native % operator.
 *
 * @remarks
 * Works as expected with negative mod calculations.
 *
 */
export function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}
