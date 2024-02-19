
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardCTA({imageUrl=undefined,title="Title",buttonDescr="Link", btnLink="/"}) {
  return (
    <Card style={{ width: '18rem',color: 'white' }} bg='dark'>
        {imageUrl &&
            <Card.Img variant="top" src={imageUrl} />
        }
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Link className='btn btn-warning btn-lg text-dark' to={btnLink}>{buttonDescr}</Link>
        </Card.Body>
    </Card>
  );
}

export default CardCTA;