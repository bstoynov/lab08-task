import React, { useState } from "react";
import Message from "../Message/Message";
import "./Thread.scss";

export default function Thread({ items }) {
  const [isCollapsed, setIsCollapsed] = useState(items.length > 1);

  function renderMessage({ subject, team, question, createdAt, text, rating }) {
    return (
      <Message
        subject={subject}
        team={team}
        question={question}
        createdAt={createdAt}
        text={text}
        rating={rating}
      />
    );
  }

  console.log("items length: ", items.length);

  const firstItem = items[0];

  return isCollapsed ? (
    <li className="message-collapsed">
      <button
        className="message-collapsed-button"
        onClick={() => setIsCollapsed(false)}
      >
        {renderMessage(firstItem)}
      </button>
      {/* placeholder background items */}
    </li>
  ) : (
    <>
      {items.map((item) => (
        <li>{renderMessage(item)}</li>
      ))}
    </>
  );
}
