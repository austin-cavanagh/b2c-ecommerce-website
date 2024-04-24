export function generateOrderId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const prefix =
    characters.charAt(Math.floor(Math.random() * characters.length)) +
    characters.charAt(Math.floor(Math.random() * characters.length));
  const randomNumericPart = Math.floor(10000000 + Math.random() * 90000000);
  const orderId = `${prefix}${randomNumericPart}`;
  return orderId;
}
