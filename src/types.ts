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
  rating: Rating;
  createdAt: string;
  text: string;
  question: string;
  team: string;
  id: string;
  subject: string;
}

export enum Rating {
  High,
  Low,
}
