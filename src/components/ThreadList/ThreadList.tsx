import React from "react";
import "./ThreadList.scss";
import Thread from "../Thread/Thread";
import { Thread as ThreadType } from "../../types";

interface ThreadList {
  threads: ThreadType[];
}

export default function ThreadList({ threads }: ThreadList) {
  return (
    <ul className="list">
      {threads.map((thread) => (
        <Thread key={thread[0].id} items={thread} />
      ))}
    </ul>
  );
}
