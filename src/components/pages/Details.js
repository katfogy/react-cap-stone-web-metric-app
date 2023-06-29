import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaBitcoin } from 'react-icons/fa';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  const { coins } = location.state || { coins: {} };
  return (
    <div className="container">
      <div className="details">
        <BiArrowBack onClick={() => backHome()} />
        <h2 className="detail-title">
          {coins.name}
          &nbps;
          {coins.symbol}
        </h2>
        <div className="details-body">
          <p className="market-cap">
            Market Cap: $
            {Number(coins.marketCapUsd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="price">
            Price(Btc):
            &nbps;
            <FaBitcoin />
            &nbps;
            {coins.priceUsd}
          </p>
          <p className="t24hr">
            24h %:
            &nbps;
            {Number(coins.maxSupply).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="volume24">
            Volume(24h): $
            {Number(coins.volumeUsd24Hr).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
