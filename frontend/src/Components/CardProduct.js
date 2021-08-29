import React from 'react';

const CardProduct = () => {
    return (
 <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default shorting</option>
            <option>Short by Price</option>
            <option>Short by Popularity</option>
            <option>Short by Ratings</option>
            <option>Short by Sale</option>
          </select>
        </div>
        <div className="row">
          <div className="column4">
            <img src="images/product-1.jpg" />
            <h4>Red T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
            </div>
            <p>1200 btd</p>
          </div>
          <div className="column4">
            <img src="images/product-2.jpg" />
            <h4>Black shoe</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
            </div>
            <p>3500 btd</p>
          </div>
          <div className="column4">
            <img src="images/product-3.jpg" />
            <h4>Black Trouser</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p>2000 btd</p>
          </div>
          <div className="column4">
            <img src="images/product-4.jpg" />
            <h4>Black T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
            </div>
            <p>1100 btd</p>
          </div>
        </div>
        <div className="row">
          <div className="column4">
            <img src="images/product-5.jpg" />
            <h4>White Shoe</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
            </div>
            <p>1200 btd</p>
          </div>
          <div className="column4">
            <img src="images/product-6.jpg" />
            <h4>Black T-shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
            </div>
            <p>500 btd</p>
          </div>
          <div className="column4">
            <img src="images/product-7.jpg" />
            <h4>Shocks</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p>200 btd</p>
          </div>
          <div className="column4">
            <img src="images/product-8.jpg" />
            <h4>Puma Watch</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="far fa-star" />
            </div>
            <p>1100 btd</p>
          </div>
          <div className="row">
            <div className="column4">
              <img src="images/product-9.jpg" />
              <h4>Navy Force Watch</h4>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="far fa-star" />
              </div>
              <p>1200 btd</p>
            </div>
            <div className="column4">
              <img src="images/product-10.jpg" />
              <h4>Black Shoe</h4>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
              </div>
              <p>3500 btd</p>
            </div>
            <div className="column4">
              <img src="images/product-11.jpg" />
              <h4>White Shoe</h4>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <p>2000 btd</p>
            </div>
            <div className="column4">
              <img src="images/product-12.jpg" />
              <h4>Black Trouser</h4>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="far fa-star" />
              </div>
              <p>1100 btd</p>
            </div>
            <div className="column4">
              <img src="images/product-8.jpg" />
              <h4> New Black Trouser</h4>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="far fa-star" />
              </div>
              <p>1100 btd</p>
            </div>
          </div>
        </div>
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>→</span>
        </div>
      </div>
    );
};

export default CardProduct;