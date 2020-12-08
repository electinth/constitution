enum TailwindBreakpoint {
  md = 768,
  lg = 1024,
}

export const isMediumOrMore = () =>
  process.client && window.innerWidth > TailwindBreakpoint.md;
export const isLargeOrMore = () =>
  process.client && window.innerWidth > TailwindBreakpoint.lg;
