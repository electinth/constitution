enum TailwindBreakpoint {
  md = 768,
  lg = 1024,
}

export const isMediumOrMore = () => window.innerWidth > TailwindBreakpoint.md;
export const isLargeOrMore = () => window.innerWidth > TailwindBreakpoint.lg;
