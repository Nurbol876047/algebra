"use client";

import { useState, useEffect } from "react";

export function useProgress() {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("math9_progress");
    if (saved) {
      try {
        setCompletedTopics(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing progress", e);
      }
    }
  }, []);

  const toggleTopic = (topicId: string) => {
    setCompletedTopics((prev) => {
      const isCompleted = prev.includes(topicId);
      const newProgress = isCompleted
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId];
      localStorage.setItem("math9_progress", JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const isCompleted = (topicId: string) => completedTopics.includes(topicId);

  return { completedTopics, toggleTopic, isCompleted };
}
