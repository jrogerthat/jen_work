import Papa from "papaparse";
import citationsCsv from "./citations.csv?raw";
import type { PublicationItem } from "../../types/cv";

interface ScholarRow {
  Authors?: string;
  Title?: string;
  Publication?: string;
  Volume?: string;
  Number?: string;
  Pages?: string;
  Year?: string;
  Publisher?: string;
}

function formatAuthorName(author: string): string {
  const trimmed = author.trim();

  // If Scholar gives "Rogers, J", convert it to "J Rogers"
  if (trimmed.includes(",")) {
    const parts = trimmed.split(",").map((part) => part.trim());

    if (parts.length === 2) {
      const [lastName, firstName] = parts;
      return `${firstName} ${lastName}`;
    }
  }

  return trimmed;
}

const result = Papa.parse<ScholarRow>(citationsCsv, {
  header: true,
  skipEmptyLines: true,
});

export const publications: PublicationItem[] = result.data
  .filter((row) => row.Title)
  .map((row) => ({
    title: row.Title ?? "",

    authors: (row.Authors ?? "")
      .split(";")
      .map(formatAuthorName)
      .filter(Boolean),

    venue: row.Publication ?? "",

    year:
      row.Year && !Number.isNaN(Number(row.Year))
        ? Number(row.Year)
        : undefined,

    volume: row.Volume || undefined,
    number: row.Number || undefined,
    pages: row.Pages || undefined,
    publisher: row.Publisher || undefined,
  }))
  .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));