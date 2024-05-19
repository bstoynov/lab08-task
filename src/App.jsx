import { useEffect, useState } from "react";
import ThreadList from "./components/ThreadList/ThreadList";
import { fetchThreads } from "./utils/threadHelper";
import "./App.scss";

export default function App() {
  const [threads, setThreads] = useState(null);

  useEffect(() => {
    if (!threads) {
      try {
        fetchThreads().then(setThreads);
      } catch (e) {
        throw new Error("unable to fetch threads in App.jsx");
      }
    }
  }, [threads]);
  return (
    <main className="main-container">
      {threads && <ThreadList threads={threads} />}
    </main>
  );
}
