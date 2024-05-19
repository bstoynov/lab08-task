import { Rating, RawThread } from "../types";

function parseThreads(rawThreads: RawThread[][]) {
  return rawThreads.map((rawThread) =>
    rawThread.map(
      ({ score, created_at, text, question, team, id, subject }) => ({
        rating: score <= 5 ? Rating.Low : Rating.High,
        createdAt: created_at,
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

  console.log(threads);

  return threads;
}
