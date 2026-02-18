export interface BookData {
  title: string;
  author: string;
  cover: string;
  blurb: string;
}

// get the book cover images
const bookModules = import.meta.glob<BookData>("/src/books/*.mdx", {
  eager: true,
  import: "meta",
});

export const books = Object.values(bookModules);

// math for the books //
export const randomHeight = (min = 100, max = 150) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomTilt = (maxDegree = 5) =>
  (Math.random() * 2 - 1) * maxDegree;

export function getTilt(idx: number, n: number, deg: number) {
  const tilt = randomTilt(deg);

  if (idx === 0) {
    return Math.abs(tilt);
  }

  if (idx === n - 1) {
    return -Math.abs(tilt);
  }

  return tilt;
}

// Check if two rotated rectangles overlap horizontally
export function willOverlap(
  prevX: number,
  prevWidth: number,
  prevTilt: number,
  nextWidth: number,
  nextTilt: number,
) {
  // Maximum horizontal shift due to rotation (approx)
  const prevShift = Math.tan((prevTilt * Math.PI) / 180) * prevWidth;
  const nextShift = Math.tan((nextTilt * Math.PI) / 180) * nextWidth;

  const prevRight = prevX + prevWidth + prevShift;
  const nextLeft = prevX + prevWidth; // next book starts immediately

  return nextLeft + nextShift > prevRight;
}

export const toRadians = (deg: number) => (deg * Math.PI) / 180;

export function getRightEdge(
  x: number,
  width: number,
  rotation: number,
  height: number,
) {
  const shift = Math.tan(toRadians(rotation)) * height;
  return x + width + Math.max(0, shift);
}
