import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHouse, faIdCard, faSquarePollVertical, faStopwatch20, faTableList } from '@fortawesome/free-solid-svg-icons';
export const Sidebar = function(){
    return (
     <div className="sidebar">
        
        <Nav defaultActiveKey="/" className='flex-column'>
            <Nav.Link href="/CompletePage">
                <FontAwesomeIcon icon={faSquarePollVertical} />
                <span className='d-none d-md-inline'>Complete Page</span>
            </Nav.Link>
            <Nav.Link href="/home">
                <FontAwesomeIcon icon={faHouse} />
                <span className='d-none d-md-inline'>Home</span>
            </Nav.Link>
            <Nav.Link href="/PersonalData">
                <FontAwesomeIcon icon={faIdCard} />
                <span className='d-none d-md-inline'>Personal Information</span>
            </Nav.Link>
            <Nav.Link href="/Exercises">
                <FontAwesomeIcon icon={faDumbbell} />
                <span className='d-none d-md-inline'>Excercise</span>
            </Nav.Link>
            <Nav.Link href="/Routine">
                <FontAwesomeIcon icon={faStopwatch20} />
                <span className='d-none d-md-inline'>Routine</span>
            </Nav.Link>
            <Nav.Link href="/Playlist">
                <FontAwesomeIcon icon={faTableList} />
                <span className='d-none d-md-inline'>Playlist</span>
            </Nav.Link>
            <Nav.Link href="/Results">
                <FontAwesomeIcon icon={faSquarePollVertical} />
                <span className='d-none d-md-inline'>Results</span>
            </Nav.Link>
        </Nav>
     </div>
    );
}

export default Sidebar;
