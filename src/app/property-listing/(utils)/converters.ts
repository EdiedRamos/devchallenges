export function toValidNumber(value: string): number {
  const valueAsNumber = Number(value);
  return isNaN(valueAsNumber) ? 0 : valueAsNumber;
}
