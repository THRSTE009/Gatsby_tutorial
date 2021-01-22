import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(kirkhamTheme)

// Export helper functions which will be used in 'gatsby-config.js'.
export default typography
export const rhythm = typography.rhythm