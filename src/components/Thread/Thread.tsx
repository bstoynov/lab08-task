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
  const firstItem = items[0];

  return isCollapsed ? (
    <li className="relative message-collapsed">
      <button
        className="message-collapsed-button"
        onClick={() => setIsCollapsed(false)}
      >
        {renderMessage(firstItem)}
      </button>
      {/* placeholder background items */}
      {[3, 2].map((item, i) => (
        <div
          key={item}
          style={{
            transform: `translate(${(i + 1) * 10}px, ${(i + 1) * 10}px)`,
            zIndex: `${item * 1}`,
          }}
          className="message-placeholder"
        />
      ))}
    </li>
  ) : (
    <>
      {items.map((item) => (
        <li>{renderMessage(item)}</li>
      ))}
    </>
  );
}
