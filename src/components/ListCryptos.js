import React, { useEffect, useState, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCrypto } from '../redux/features/Cryptocurrency/CryptoSlice';

const ListCryptos = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const crytoLists = useSelector((store) => store.crytoList);
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <form className="container my5" onSubmit={handleSubmit}>
        <div className="search-container">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} ref={inputRef} placeholder="Enter Currency Name" className="search" />
        </div>
        <BsSearch className="search-icon" />
      </form>
      <div className="container grid my5">
        {crytoLists.isloading && <div>loading</div>}
        {!crytoLists.isloading
          && (crytoLists.crytoList.filter((coin) => {
            const { symbol } = coin;
            return search.toLowerCase() === ''
              ? coin
              : symbol.toLowerCase().includes(search.toLowerCase());
          }).map((coin) => (
            <button type="button" key={coin.id} className="card d-flex-space-be">
              <h3>{coin.name}</h3>
              <div className="stat">
                <div className="up">
                  {coin.changePercent24Hr < 0 ? (
                    <span>
                      <FaChevronDown color="red" />
                      {Math.abs(coin.changePercent24Hr).toFixed(2)}
                    </span>
                  ) : (
                    <span>
                      <FaChevronUp color="green" />
                      {Math.abs(coin.changePercent24Hr).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </button>
          )))}
      </div>
    </>
  );
};

export default ListCryptos;
