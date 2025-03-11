export const getDiscountedPrice = (
  price?: number,
  discountPercent?: number
): string | null => {
  if (!price || !discountPercent) return null
  const discountAmount = price * (discountPercent / 100)
  return (price - discountAmount).toLocaleString('ko-KR')
}
