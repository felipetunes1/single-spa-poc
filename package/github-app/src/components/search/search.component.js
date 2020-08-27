'use strict'

import React from 'react'

import { Navbar, FormControl } from "react-bootstrap";

const Search = ({ handleSearch }) => (
   <Navbar bg="light" variant="light">
      <FormControl
         type='search'
         placeholder='Digite o nome do usuario do GitHub'
         onKeyUp={handleSearch} />
   </Navbar>
)

export default Search;