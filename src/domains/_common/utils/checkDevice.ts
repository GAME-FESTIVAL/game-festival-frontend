const viewPort = window.innerWidth

export const checkDevice = {
  isMobile: () => viewPort < 768,
  isTablet: () => viewPort >= 768 && viewPort < 1024,
  isDesktop: () => viewPort > 1024,
}
