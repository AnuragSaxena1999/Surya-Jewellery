import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import productData from "../data";
const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    // const getProduct = async () => {
    //   setLoading(true);
    //   //   const response = await fetch(`http://localhost:3000/products/${id}`);

    //   const res = productData.find((d) => d.id === id);

    //   setProduct(res);
    //   setLoading(false);
    // };
    // getProduct();

    setLoading(true);
    const res = productData.find((ele) => {
      return ele.id == id;
    });
    setProduct(res);
    setLoading(false);
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img className="img-fluid "
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 shadow">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <a href="https://wa.me/+918595666108?text=Hello%20Surya%20Jewellers%2C%20I%20want%20to%20purchase%20an%20Item." target="_blank" className="btn btn-outline-dark px-4 py-2" >Order Now</a>


        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
