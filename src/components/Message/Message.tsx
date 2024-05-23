import React from "react";
import { Rating } from "../../types";
import { getRatingClass } from "../../utils/styleHelper";
import "./Message.scss";

interface Message {
  subject: string;
  question: string;
  text: string;
  createdAt: string;
  team: string;
  rating: Rating;
}

export default function Message({
  subject,
  question,
  text,
  createdAt,
  team,
  rating,
}: Message) {
  return (
    <div className="message">
      {/* subject & team */}
      <div className="subject-team">
        <h2 className={`subject ${getRatingClass(rating)}`}>{subject}</h2>
        <p className="team">{team}</p>
      </div>
      {/* question & date */}
      <div className="question-date">
        <p className="question">{question}</p>
        <p className="date">{createdAt}</p>
      </div>
      <p className="text">{text}</p>
    </div>
  );
}
