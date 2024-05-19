import { useEffect, useState } from "react";
import List from "./components/List/List";

export default function App() {
  const [threads, setThreads] = useState(null);

  useEffect(() => {
    async function fetchThreads() {
      const response = await fetch("http://localhost:3000/threads");
      const result = await response.json();
      console.log(result);
      return result;
    }

    if (!threads) {
      fetchThreads().then(setThreads);
    }
  }, [threads]);
  return <main>{threads && <List />}</main>;
}
