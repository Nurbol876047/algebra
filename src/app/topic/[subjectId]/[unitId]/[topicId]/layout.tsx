import { curriculum } from "@/data/curriculum";

export async function generateStaticParams() {
  const params: { subjectId: string; unitId: string; topicId: string }[] = [];
  
  for (const subject of curriculum) {
    for (const unit of subject.units) {
      for (const topic of unit.topics) {
        params.push({
          subjectId: subject.id,
          unitId: unit.id,
          topicId: topic.id,
        });
      }
    }
  }
  
  return params;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
