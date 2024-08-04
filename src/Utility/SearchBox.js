// SearchBox.js
import React, { useState } from 'react';
import { Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import './SearchBox.css';

const SearchBox = ({ placeholder, onSearch }) => {
    //   const [results, setResults] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // const query = e.target.elements.search.value.trim();
        const query = searchValue;

        const searchResults = onSearch(query.toLowerCase());
        //   setResults(searchResults);

    };

    return (
        <div className="search-container">
            <Form inline className="search-box" onSubmit={handleSearch}>
                <FormControl
                    type="text"
                    name="search"
                    placeholder={placeholder}
                    className="mr-sm-2 search-input"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
            {/* {results.length > 0 && (
        <ListGroup className="search-results">
          {results.map((result, index) => (
            <ListGroup.Item key={index}>{result}</ListGroup.Item>
          ))}
        </ListGroup>
      )} */}
        </div>
    );
};

export default SearchBox;
