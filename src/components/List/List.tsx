import Message from "../Message/Message";
import "./List.scss";

export default function List() {
  return (
    <div className="container">
      <ul className="list">
        <Message
          text="fdsfdsf"
          subject="Pay"
          question="I think I get too little in terms of my experience"
          team="Demo team here."
        />
        <Message
          text="fdsfdsf"
          subject="Pay"
          question="I think I get too little in terms of my experience"
          team="Demo team here."
        />
        <Message
          text="fdsfdsf"
          subject="Pay"
          question="I think I get too little in terms of my experience"
          team="Demo team here."
        />
      </ul>
    </div>
  );
}
