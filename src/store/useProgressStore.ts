import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgressState {
  completedTopics: string[];
  activeGrade: 9 | 10 | 11;
  markCompleted: (topicId: string) => void;
  markIncomplete: (topicId: string) => void;
  isCompleted: (topicId: string) => boolean;
  setActiveGrade: (grade: 9 | 10 | 11) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedTopics: [],
      activeGrade: 9,
      setActiveGrade: (grade) => set({ activeGrade: grade }),
      markCompleted: (topicId) =>
        set((state) => ({
          completedTopics: state.completedTopics.includes(topicId)
            ? state.completedTopics
            : [...state.completedTopics, topicId],
        })),
      markIncomplete: (topicId) =>
        set((state) => ({
          completedTopics: state.completedTopics.filter((id) => id !== topicId),
        })),
      isCompleted: (topicId) => get().completedTopics.includes(topicId),
    }),
    {
      name: "math9-progress-storage",
    }
  )
);
