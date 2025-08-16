export function roundNumber(num: number): number {
  const decimal = 0;

  return Number(num.toFixed(decimal));
}

export function formatNumberWithCommas(num: number): string {
  return num.toLocaleString("en-US");
}
