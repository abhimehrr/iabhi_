export const CAREER_START = new Date(2024, 2, 1);

/** Whole years since career start (never below 1). */
export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (now.getMonth() < CAREER_START.getMonth()) {
    years -= 1;
  }
  return Math.max(1, years);
}

/**
 * Display label rounded down to the nearest half year (e.g. "2.5"),
 * matching resume-style "2.5+ years".
 */
export function getYearsOfExperienceLabel(now: Date = new Date()): string {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());
  const halfYears = Math.max(2, Math.floor(months / 6));
  const value = halfYears / 2;
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}
