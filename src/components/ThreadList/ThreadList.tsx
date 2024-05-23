import React from "react";
import "./ThreadList.scss";
import Thread from "../Thread/Thread";

export default function ThreadList({ threads }) {
  return (
    <ul className="list">
      {threads.map((thread) => (
        <Thread items={thread} />
      ))}
    </ul>
  );
}
