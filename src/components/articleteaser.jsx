import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function ArticleTeaser({id, title, date, handleClick}){
    return (
        <Container>
            <Row>
               <Col lg='8'><h2 onClick={()=> handleClick(id)}>{title}</h2></Col>
               <Col lg='4'><p>{date}</p></Col>
            </Row>
        </Container>
    )
}

export default ArticleTeaser