import React from 'react'
import product1  from '../../assets/img/product1.jpg'


function Product() {
  return (
    <div>

      <div className='container'>

        <div className="row">

          <div className="col4">

            <div className="product">

            <div className='product-card'>
              <img src={product1} alt="" />
            </div>

            <div className='product-price'>
              
              <span className='price'>300 ₼</span>
              <span className='sale'>Nağd alışa ENDİRİM</span>
              

            </div>

            </div>

           

          </div>

          <div className="col4">

          </div>

          <div className="col4">

          </div>

        </div>

      </div>





    </div>
  )
}

export default Product  