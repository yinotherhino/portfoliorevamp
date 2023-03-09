import { height } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

interface IProps {
  title: string;
  onClick: () => void;
  imgSrc: string;
}
const BasicCard = ({ imgSrc, title, onClick }: IProps) => {
  return (
    <div className="basic-card">
      <div className="basic-card-img">
        <img src={imgSrc} alt={"yinotherhino "+title+" app"} className="card-img" />
      </div>
      <div className="basic-card-body">
        <div className="basic-card-title"><h5>{title}</h5></div>
        <Button variant="primary" onClick={() => onClick()}>
          View
        </Button>
      </div>
    </div>
    // <Card className="basic-card" >
    //   <Card.Img variant="top" src={imgSrc} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>{text}</Card.Text>
    //     <Button variant="primary" onClick={() => onClick()}>
    //       View
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
};

export default BasicCard;
