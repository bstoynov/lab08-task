import Message from "../Message/Message";
import "./List.scss";

export default function List() {
  return (
    <div className="container">
      <ul className="list">
        <Message />
        <Message />
        <Message />
      </ul>
    </div>
  );
}
