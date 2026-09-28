import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import educationData from "../data/cv/education.json";
import experienceData from "../data/cv/experience.json";
import { publications } from "../data/cv/publications";

import type {
  EducationItem,
  ExperienceItem,
} from "../types/cv";

const education = educationData as EducationItem[];
const experience = experienceData as ExperienceItem[];

function formatDates(
  dates: [number] | [number, number | "Present"]
): string {
  if (dates.length === 1) {
    return `${dates[0]}`;
  }

  return `${dates[0]} - ${dates[1]}`;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#222",
  },

  header: {
    marginBottom: 24,
  },

  name: {
    fontSize: 24,
    marginBottom: 6,
  },

  contact: {
    fontSize: 9,
    color: "#555",
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    marginBottom: 10,
    letterSpacing: 1,
  },

  entry: {
    marginBottom: 12,
  },

  title: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 2,
  },

  meta: {
    fontSize: 9,
    marginBottom: 3,
  },

  description: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.4,
  },
});

function CVPdf() {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Jen Rogers</Text>

          <Text style={styles.contact}>
            jennifer [dot] rogers1207 [at] gmail.com · github.com/jrogerthat
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>

          {experience.map((item) => (
            <View
              key={`${item.position}-${item.institution}`}
              style={styles.entry}
              wrap={false}
            >
              <Text style={styles.title}>
                {item.position}
              </Text>

              <Text style={styles.meta}>
                {item.institution}
                {item.location ? `, ${item.location}` : ""}
                {" | "}
                {formatDates(item.dates)}
              </Text>

              {item.description && (
                <Text style={styles.description}>
                  {item.description}
                </Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>

          {education.map((item) => (
            <View key={item.degree} style={styles.entry} wrap={false}>
              <Text style={styles.title}>{item.degree}</Text>

              <Text style={styles.meta}>
                {item.institution}
                {" | "}
                {formatDates(item.dates)}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PUBLICATIONS</Text>

          {publications.map((publication) => (
            <View
              key={publication.title}
              style={styles.entry}
              wrap={false}
            >
              <Text style={styles.title}>
                {publication.title}
              </Text>

              <Text style={styles.meta}>
                {publication.authors.join(", ")}
              </Text>

              <Text style={styles.meta}>
                {publication.venue}
                {publication.year ? ` | ${publication.year}` : ""}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default CVPdf;