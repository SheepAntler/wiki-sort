import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Result = (props) => {
  const { results } = props;

  console.log(results);

  const sanitizeTitle = (title) => {
    const charsToDelete = /_|:|;|-/g;
    return title.replaceAll(charsToDelete, ' ');
  };

  return (
    <>
      {results.map((result) => {
        return (
          <Row key={`${result.article}${result.views_ceil}`}>
            <Col>
              <div className='square border border-3 rounded mt-4 p-5 bg-light'>
                <Row>
                  <Col className='d-flex align-items-center'>
                    <h3>{sanitizeTitle(result.article)}</h3>
                  </Col>
                  <Col>
                    <h5>Stats:</h5>
                    <p>Views: {result.views_ceil}</p>
                    <p>Rank: {result.rank}</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Result;
