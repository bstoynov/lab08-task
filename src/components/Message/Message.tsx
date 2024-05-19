import "./Message.scss";

interface MessageProps {
  subject: string;
  question: string;
  text: string;
  createdAt: string;
  team: string;
}

export default function Message({
  subject,
  question,
  text,
  createdAt,
  team,
}: MessageProps) {
  return (
    <li className="message">
      {/* subject & team */}
      <div className="subject-team">
        <h2 className="subject">Freedom of action</h2>
        <p className="team">Demo team</p>
      </div>
      {/* question & date */}
      <div className="question-date">
        <p className="question">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          laboriosam ipsum ullam doloribus quos pariatur.
        </p>
        <p className="date">Apr 2023</p>
      </div>
      <p className="text">I am very happy!</p>
    </li>
  );
}
