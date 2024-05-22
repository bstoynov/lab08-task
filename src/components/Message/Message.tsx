import { Rating } from "../../types";
import "./Message.scss";

interface MessageProps {
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
}: MessageProps) {
  function getRatingClass(rating) {
    console.log(rating);
    switch (rating) {
      case Rating.High:
        return "rating__high";
      case Rating.Low:
        return "rating__low";
      default:
        return "";
    }
  }
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
