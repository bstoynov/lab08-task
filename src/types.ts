export interface RawThread {
  question_id: number;
  subject_id: number;
  score: number;
  thread_id: string;
  text: string;
  created_at: string;
  acknowledged: boolean;
  subject: string;
  question: string;
  team: string;
  id: string;
}

export interface Thread {
  questionId: number;
  subjectId: number;
  rating: Rating;
  threadId: string;
  text: string;
  created_at: string;
  acknowledged: boolean;
  subject: string;
  question: string;
  team: string;
  id: string;
}

export enum Rating {
  High,
  Low,
}
