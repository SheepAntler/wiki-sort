import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import Result from '../Result/Result';
import Row from 'react-bootstrap/Row';

import countryCodeLookup from 'country-code-lookup';
import dayjs from 'dayjs';
import { getMostViewedPagesByCountryAndDate } from '../../api/pages';

const PageviewSortForm = () => {
  const today = dayjs();
  const yesterday = today.subtract('1', 'day');
  const countryList = countryCodeLookup.countries;

  const [message, setMessage] = useState(
    "Welcome to WikiSort! We are glad you're here."
  );
  const [pageviewCountDate, setPageviewCountDate] = useState(
    yesterday.format('YYYY-MM-DD')
  );
  const [country, setCountry] = useState('US');
  const [numberOfResults, setNumberOfResults] = useState('100');
  const [results, setResults] = useState([]);

  const formatDate = (date) => date.replaceAll('-', '/');

  useEffect(() => {
    const fetchResults = () => {
      const formattedCountDate = formatDate(pageviewCountDate);

      getMostViewedPagesByCountryAndDate(
        formattedCountDate,
        country,
        numberOfResults
      )
        .then((res) => {
          setResults(res);
          setMessage(
            `Here's what people in ${country} were reading on ${new Date(pageviewCountDate).toLocaleDateString()}...`
          );
        })
        .catch((err) => {
          console.error(err);
          setResults([]);
          setMessage(
            `Ruh-roh! It looks like there aren't any results for ${country} on ${pageviewCountDate}. Try again!`
          );
        });
    };

    fetchResults();
  }, [pageviewCountDate, numberOfResults, country]);

  return (
    <>
      <Form className='mt-6 mb-4'>
        <Form.Group controlId='pageviewSortForm'>
          <Form.Text className='mb-5'>
            <b>Choose a date, country, and result count:</b>
          </Form.Text>
          <Row className='mt-4'>
            <Col>
              <Form.Label>Date</Form.Label>
              <Form.Control
                name='pageviewCountDate'
                placeholder='mm/dd/yyyy'
                type='date'
                value={pageviewCountDate}
                onChange={(e) => setPageviewCountDate(e.target.value)}
                data-testid='pageviewCountField'
              />
            </Col>
            <Col>
              <Form.Label>Country</Form.Label>
              <Form.Select
                name='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                data-testid='countrySelect'
              >
                {countryList.map(({ country, iso2 }, index) => {
                  return (
                    <option key={index} value={iso2}>
                      {country}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Number of Results</Form.Label>
              <Form.Select
                name='numberOfResults'
                value={numberOfResults}
                onChange={(e) => setNumberOfResults(e.target.value)}
                data-testid='resultsNumberSelect'
              >
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='75'>75</option>
                <option value='100'>100</option>
                <option value='200'>200</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      {results && results.length > 0 ? (
        <div>
          <h4>{message}</h4>
          <Result results={results} />
        </div>
      ) : (
        <h4>{message}</h4>
      )}
    </>
  );
};

export default PageviewSortForm;
