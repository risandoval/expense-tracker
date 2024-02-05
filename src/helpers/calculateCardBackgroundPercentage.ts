export const calculateCardBackgroundPercentage = (dividend: number, divisor: number) => {
    return `${Math.abs(((dividend/divisor) * 100) - 100).toFixed(2)}%`;
}
