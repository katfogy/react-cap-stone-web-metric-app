import React from 'react';

const ListCryptos = () => (
  <>
    <div className="container my5">
      <div className="search-container">
        <input type="text" placeholder="Enter Currency Name" className="search" />
      </div>
    </div>
    <div className="container grid my5">
      <div className="card d-flex-space-be">
        <h2>XAUT</h2>
        <div className="stat d-flex-space-be py5">
          <div className="up">12</div>
          <div className="down">4</div>
        </div>
      </div>
    </div>
  </>
);

export default ListCryptos;
