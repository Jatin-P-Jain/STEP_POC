import { Layout } from "react-grid-layout";
import { cols } from "./dashboardLayout";
import { ChartConfig } from "../customHooks/useChartData";

/**
 * Generates a layout for a responsive grid given an array of cards.
 * Each card is rendered as a square by setting its height equal to its width.
 * The maximum number of cards per row is set to 3 (or fewer if there are fewer cards
 * or if the breakpoint's column count is lower).
 *
 * @param cards Array of dashboard cards.
 * @returns An object containing layouts for each breakpoint.
 */
export const generateLayouts = (
  cards: ChartConfig[]
): { [key: string]: Layout[] } => {
  const layouts: { [key: string]: Layout[] } = {};
  const breakpointKeys = Object.keys(cols) as Array<keyof typeof cols>; // e.g. ["lg", "md", "sm", "xs", "xxs"]

  breakpointKeys.forEach((bp) => {
    const colCount = cols[bp];
    // Allow up to 3 cards per row, but no more than available columns or total cards.
    const maxCardsPerRow = Math.min(8, colCount, cards.length);
    // Determine the width (in grid units) each card should span.
    const cardWidth = Math.max(Math.floor(colCount / maxCardsPerRow), 2);
    const layoutForBreakpoint: Layout[] = cards.map((card, i) => {
      const x = (i % maxCardsPerRow) * cardWidth;
      const y = Math.floor(i / maxCardsPerRow) * cardWidth; // For square cards
      return { i: card.id, x, y, w: cardWidth, h: 7 };
    });
    layouts[bp] = layoutForBreakpoint;
  });

  return layouts;
};
