import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink , Link} from "react-router-dom";
import productData from "../data";


const Products = () => {
  // const productData = {}
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    //const getProducts = async () => {
    setLoading(true);

    setData(...productData);
    setFilter(productData);
    setLoading(false);

    //   const response = await fetch("");
    // if (componentMounted) {
    //     // setData(await response.clone().json());
    // setData(...productData);
    //console.log(productData);
    // console.log(data);
    // setFilter(await response.json());
    //setLoading(false);
    // }
    //return () => {
    //  componentMounted = false;
    // };
    // };
    //getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = productData.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
      
        <div className="embed-responsive embed-responsive-4by3 py-2 mb-3 ">
          
        <button
          className="btn btn-outline-dark me-2 shadow"
          onClick={() => setFilter(productData)}
        >
          ALL
        </button>
        
        
       
        
        <button
          className="btn btn-outline-dark me-2 shadow"
          onClick={() => filterProduct("chains")}
        >
          Chains
        </button>
        <button
          className="btn btn-outline-dark me-2 shadow"
          onClick={() => filterProduct("lockets")}
        >
          Lockets
        </button>
        <button
          className="btn btn-outline-dark me-2 shadow"
          onClick={() => filterProduct("bracelets")}
        >
          Bracelets
        </button>
        <button
          className="btn btn-outline-dark me-2 shadow"
          onClick={() => filterProduct("rings")}
        >
          Rings
        </button>
  </div>
        {/*<div className=" container-fluid d-flex  justify-content-center buttons mb-5 pb-5 ">
      <Button variant="outline-danger" className="me-2">All</Button>{' '}
      <Button variant="outline-info" className="me-2" >Men's clothing</Button>{' '}
      <Button variant="outline-light" className="me-2">Women's Clothing</Button>{' '}
      <Button variant="outline-dark" className="me-2">Jewelleries</Button>
      <Button variant="outline-dark" className="me-2">Dark</Button>
  </div>*/}
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <Link to={`/products/₹{product.id}`}><div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top img-fluid"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/₹{product.id}`}
                      class="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div></Link>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 ">
            <h1 className="display-6 fw-bolder text-center ">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
