import React, { useState } from "react";
import Message from "../Message/Message";
import "./Thread.scss";
import { getRatingClass } from "../../utils/styleHelper";
import { Thread as ThreadType } from "../../types";

interface Thread {
  items: ThreadType[];
}

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
  const placeHolderItems = Array.from(Array(items.length - 1).keys()).reverse();

  return isCollapsed ? (
    <li className="relative message-collapsed">
      <button
        className="message-collapsed-button"
        onClick={() => setIsCollapsed(false)}
      >
        {renderMessage(items[0])}
      </button>
      {/* empty placeholder messages */}
      {placeHolderItems.map((item, i) => (
        <div
          key={item}
          style={{
            transform: `translate(${(i + 1) * 10}px, ${(i + 1) * 10}px)`,
            zIndex: `${item * 1}`,
          }}
          className="message-placeholder"
        />
      ))}
      {/* number of items label */}
      <p className={`message-label ${getRatingClass(items[0].rating)}`}>
        {items.length} messages
      </p>
    </li>
  ) : (
    <>
      {items.map((item) => (
        <li key={item.id}>{renderMessage(item)}</li>
      ))}
    </>
  );
}
