import { Rating, RawThread } from "../types";
import { format } from "date-fns";

function parseThreads(rawThreads: RawThread[][]) {
  return rawThreads.map((rawThread) =>
    rawThread.map(
      ({ score, created_at, text, question, team, id, subject }) => ({
        rating: score <= 5 ? Rating.Low : Rating.High,
        createdAt: format(new Date(created_at), "MMM do"),
        text,
        question,
        team,
        id,
        subject,
      })
    )
  );
}

export async function fetchThreads() {
  const response = await fetch("http://localhost:3000/threads");
  const result = await response.json();
  const threads = parseThreads(result);

  return threads;
}
