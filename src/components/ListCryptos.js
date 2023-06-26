import React from 'react';
import { BsSearch } from 'react-icons/bs';

const ListCryptos = () => (
  <>
    <form className="container my5">
      <div className="search-container">
        <input type="text" value="" placeholder="Enter Currency Name" className="search" />
      </div>
      <BsSearch className="search-icon" />
    </form>
    <div className="container grid my5">
      <button type="button" className="card d-flex-space-be">
        <h2>XAUT</h2>
        <div className="stat">
          <div className="up">12</div>
        </div>
      </button>
    </div>
  </>
);

export default ListCryptos;
