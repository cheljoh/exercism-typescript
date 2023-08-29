export function score(x: number, y: number): number {
  const radius = Math.sqrt(x**2 + y**2)

  if (radius <= 1) {
    return 10
  } else if (radius <= 5) {
    return  5
  } else if (radius <= 10) {
    return 1
  }

  return 0
}
