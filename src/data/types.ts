export interface Step {
  title: string;
  description: string;
}

export interface Example {
  title: string;
  steps: Step[];
  answer: string;
}

export interface PracticeTask {
  question: string;
  solution: string;
  answer: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  theory: string;
  formulas: string;
  visualSchemas: string;
  examples: Example[];
  practice: PracticeTask[];
  selfCheck: string[];
  miniTest: QuizQuestion[];
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  units: Unit[];
}
