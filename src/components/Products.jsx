import React from 'react'
import'./products.css';

export default function Products() {
  return (
    <div><h1 className='h1'>
        NEW ARRIVALS
    </h1>
    <div class="row  row-cols-md-3 g-5">
  <div class="col-md-2">
    <div class="card h-900">
      <img src="./img/4.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">MEN's WATCH</h5>
        <p class="card-text"><i className='fa fa-shopping-cart me-1'></i>CART</p>
      </div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card h-900">
      <img src="./img/8.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">SHIRTS</h5>
        <p class="card-text"><i className='fa fa-shopping-cart me-1'></i>CART</p>
      </div>
    </div>
  </div>

  <div class="col-md-2">
    <div class="card h-900">
      <img src="./img/9.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">FESTIVAL</h5>
        <p class="card-text" href="#"><i className='fa fa-shopping-cart me-1'></i>CART</p>
      </div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card h-100">
      <img src="./img/5.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">SPLIPPERS</h5>
        <p class="card-text"><i className='fa fa-shopping-cart me-1'></i>CART</p>
      </div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card h-100">
      <img src="./img/6.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">CASUAL SHOES</h5>
        <p class="card-text"><i className='fa fa-shopping-cart me-1'></i>CART</p>
      </div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card h-100">
      <img src="./img/7.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">INNERS</h5>
        <p class="card-text"><i className='fa fa-shopping-cart me-1'></i>CART</p>
        <p></p>
      </div>
    </div>
  </div>
</div>
    
    
    
    
    
    
    </div>
  )
}
