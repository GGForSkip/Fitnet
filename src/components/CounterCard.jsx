import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faDumbbell, faHouse, faIdCard, faSquarePollVertical, faStopwatch20, faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CounterCard({icon=faDumbbell,title="Title",description="Description",children}) {
  return (
    <Card style={{ width: '18rem' }} className="p-2 m-3">
      <Card.Header>
        <FontAwesomeIcon icon={icon} />
        <span style={{marginLeft: "3%"}}>{title}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
          {children}
      </Card.Body>
    </Card>
  );
}

export default CounterCard;