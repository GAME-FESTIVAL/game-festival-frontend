export const chunkArray = <T>(
  array: T[] | undefined,
  chunkSize: number
): T[][] => {
  if (!array) return []
  return Array.from(
    { length: Math.ceil((array?.length ?? 0) / chunkSize) },
    (_, i) => array!.slice(i * chunkSize, i * chunkSize + chunkSize)
  )
}
