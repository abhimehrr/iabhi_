export const CAREER_START = new Date(2024, 2, 1);

export function getYearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (now.getMonth() < CAREER_START.getMonth()) {
    years -= 1;
  }
  return Math.max(1, years);
}
