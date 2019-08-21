import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const CardList = ({ id, name, image, price, children }) => {
  return (
    <div className="col-lg-3 mb-3">
      <div className="card border-0">
        <img src={image || <Skeleton />} height="200px" width="300px" alt="listing" className="card-img-top" />
        <div className="card-body px-0">
          <Link to={{
            pathname: '/user/listing/details/' + id
          }}>
            <p className="card-title py-0 m-0"><b>{name || <Skeleton />}</b></p>
          </Link>
          <span className="card-text py-0 m-0">{`$${price}/person` || <Skeleton />}</span>
          <div className="mt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList;