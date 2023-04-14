import React, { useState, useRef } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './searchbar.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';


function SearchComp(props) {
  const [fromDateTime, setFromDateTime] = useState("");
  const [toDateTime, setToDateTime] = useState("");
  const [locationParam, setlocationParam] = useState("");
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);
  const [tenure, setTenure] = useState("");
  const { from, to } = props;

  const navigate = useNavigate();
  

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

  const { from: propsFrom, to: propsTo } = props;
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const locationParam = searchParams.get("location");
    if (from && to) {
      setFromDateTime(new Date(from));
      setToDateTime(new Date(to));
      setlocationParam(new String(locationParam))
    } else {
      setFromDateTime(propsFrom);
      setToDateTime(propsTo);
    }
  }, [location, propsFrom, propsTo]);

  const calculateTenure = () => {
    if (fromDateTime && toDateTime) {
      const from = new Date(fromDateTime);
      const to = new Date(toDateTime);
      const differenceInDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
      setTenure(`${differenceInDays} days`);
    } else {
      setTenure("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDateTime && toDateTime <= fromDateTime) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid date range',
        text: 'The end date must be later than the start date',
      });
    } else {
      const location = document.getElementById("locationInput").value;
      const utcFromDateTime = fromDateTime ? new Date(fromDateTime).toUTCString() : '';
      const utcToDateTime = toDateTime ? new Date(toDateTime).toUTCString() : '';
      navigate(`/search-results?from=${utcFromDateTime}&to=${utcToDateTime}&location=${location}&tenure=${tenure}`);
      setTenure(""); // reset the tenure state to empty
    }
  };
  
  useEffect(() => {
    calculateTenure();
  }, [fromDateTime, toDateTime]);

  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <h3 >Search</h3>
      <Form.Group controlId="location">
      <label htmlFor="to-input" className="date-label" id="to-label">Event location:</label>
        <div className="location-input-wrapper">
          <FormControl
            id="locationInput"
            type="text"
            value={locationParam}
            className="location-input"
          />
          <div className="search-icon-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </Form.Group>

      <div className="date-input-wrapper">
        <label htmlFor="from-input" className="date-label" id="from-label">Event start date</label>
        <Datetime
  inputProps={{
    id: 'from-input',
    placeholder: {from},
    onClick: () => fromDateRef.current.focus(),
    ref: fromDateRef,
    className: 'date-input', // add this line to include the CSS class for the from date input
    readOnly: true, // add this line to prevent manual input
  }}
  timeFormat={'h:mm A'} // add this line to use 12-hour time with AM/PM
  dateFormat={'MMM DD YYYY'} // add this line to use the desired date format
  value={fromDateTime || ''}
  onChange={(value) => handleDateTimeChange('from', value)}
/>
<div className="dropdown-icon-wrapper">
    <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
  </div>
      </div>
      <div className="date-input-wrapper">
        <label htmlFor="to-input" className="date-label" id="to-label">Event end date</label>
        <Datetime
  inputProps={{
    id: 'to-input',
    placeholder: {to},
    onClick: () => toDateRef.current.focus(),
    ref: toDateRef,
    className: 'date-input', // add this line to include the CSS class for the from date input
    readOnly: true, // add this line to prevent manual input
  }}
  timeFormat={'h:mm A'} // add this line to use 12-hour time with AM/PM
  dateFormat={'MMM DD YYYY'} // add this line to use the desired date format
  value={toDateTime || ''}
  onChange={(value) => handleDateTimeChange('to', value)}
/>
<div className="dropdown-icon-wrapper2">
    <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon2" />
  </div>
      </div>
      <Button type="submit" className="search-button">
        Search
      </Button>
    </Form>
  );
}

export default SearchComp;
