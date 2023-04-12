import React, { useState, useRef } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './searchbar.css';

function Search() {
  const [fromDateTime, setFromDateTime] = useState("");
  const [toDateTime, setToDateTime] = useState("");
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  const handleDateTimeChange = (type, value) => {
    if (type === "from") {
      setFromDateTime(value);
      document.getElementById("from-label").classList.add("animate");
      setTimeout(() => {
        document.getElementById("from-label").classList.remove("animate");
      }, 1000);
    } else {
      setToDateTime(value);
      document.getElementById("to-label").classList.add("animate");
      setTimeout(() => {
        document.getElementById("to-label").classList.remove("animate");
      }, 1000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here using the "fromDateTime" and "toDateTime" values.
  };


  const handleWheel = (event) => {
    event.preventDefault();
    const input = event.target;
    const inputValue = input.value;
    if (event.deltaY < 0) {
      input.value = Datetime.moment(inputValue).subtract(30, 'minutes').format('h:mm A');
    } else {
      input.value = Datetime.moment(inputValue).add(30, 'minutes').format('h:mm A');
    }
    handleDateTimeChange(input.id === 'from-input' ? 'from' : 'to', input.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <h3>Search</h3>
      <Form.Group controlId="location">
        <div className="location-input-wrapper">
          <FormControl
            id="locationInput"
            type="text"
            placeholder="Add a location"
            className="location-input"
          />
          <div className="search-icon-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </Form.Group>

      <div className="date-input-wrapper">
        <label htmlFor="from-input" className="date-label" id="from-label">From</label>
        <Datetime
  inputProps={{
    id: 'from-input',
    placeholder: 'From',
    onClick: () => fromDateRef.current.focus(),
    ref: fromDateRef,
    className: 'date-input', // add this line to include the CSS class for the from date input
    readOnly: true, // add this line to prevent manual input
    onWheel: handleWheel // add this line to handle the mouse wheel event
  }}
  timeFormat={'h:mm A'} // add this line to use 12-hour time with AM/PM
  dateFormat={'MMM DD YYYY'} // add this line to use the desired date format
  value={fromDateTime || ''}
  onChange={(value) => handleDateTimeChange('from', value)}
/>
      </div>

      <div className="date-input-wrapper">
        <label htmlFor="to-input" className="date-label" id="to-label">To</label>
        <Datetime
  inputProps={{
    id: 'to-input',
    placeholder: 'To',
    onClick: () => toDateRef.current.focus(),
    ref: toDateRef,
    className: 'date-input', // add this line to include the CSS class for the from date input
    readOnly: true, // add this line to prevent manual input
    onWheel: handleWheel // add this line to handle the mouse wheel event
  }}
  timeFormat={'h:mm A'} // add this line to use 12-hour time with AM/PM
  dateFormat={'MMM DD YYYY'} // add this line to use the desired date format
  value={toDateTime || ''}
  onChange={(value) => handleDateTimeChange('to', value)}
/>


        
      </div>

      <Button type="submit" className="search-button">
        Search
      </Button>
    </Form>
  );
}

export default Search;
