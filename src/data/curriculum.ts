import { Subject, Unit, Topic } from "./types";
import { algebra } from "./algebra";
import { geometry } from "./geometry";
import { algebra10 } from "./algebra10";
import { geometry10 } from "./geometry10";
import { algebra11 } from "./algebra11";
import { geometry11 } from "./geometry11";

export * from "./types";

export const curriculum: Subject[] = [
  algebra,
  geometry,
  algebra10,
  geometry10,
  algebra11,
  geometry11
];

export function getSubject(id: string) {
  return curriculum.find((s) => s.id === id);
}

export function getUnit(subjectId: string, unitId: string) {
  const subject = getSubject(subjectId);
  return subject?.units.find((u) => u.id === unitId);
}

export function getTopic(subjectId: string, unitId: string, topicId: string) {
  const unit = getUnit(subjectId, unitId);
  return unit?.topics.find((t) => t.id === topicId);
}

export function getAllTopicsFlat() {
  const topics: { subject: Subject; unit: Unit; topic: Topic }[] = [];
  curriculum.forEach(subject => {
    subject.units.forEach(unit => {
      unit.topics.forEach(topic => {
        topics.push({ subject, unit, topic });
      });
    });
  });
  return topics;
}
