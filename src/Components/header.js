import React,{useState} from "react";
import ReviewsBarChart from "./Charts/barGraph_Reviews";
import LineChartRatings from "./Charts/LineChartRatings";
import Foundation from "../assets/images/foundation.jpg";
import { Rating } from "react-simple-star-rating";
import Sephora from "../assets/images/sephora.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const Product=JSON.parse(localStorage.getItem('ProductDetails'));
    const ProductSpecs=JSON.parse(localStorage.getItem('ProductSpecs'));
    const [location,setLocation]=useState(1);
    const l=window.location.pathname;
    const navigate= new useNavigate();
    return (
        <>
            <div className="app_container">
                <div className="product-container">
                    <div className="product">
                        <div className="product_image_container">
                            <img src={ProductSpecs.ProductImage} alt="product" className="product-img" />
                        </div>
                        <div className="product-details">
                            <h3>{Product.ProductName}: {ProductSpecs.ProductDetails}</h3>
                            <p>
                                <Rating
                                    allowHover={false}
                                    initialValue={parseInt(Product.ProductRating)}
                                    style={{ marginRight: "10px" }}
                                    readonly
                                />
                                {Product.ProductRating} out of 5
                            </p>
                            <span>
                                <b>{Product.ProductNumberOfReviews}</b> ratings and reviews
                            </span>
                            <div className="from-cont">
                                <span>From</span>
                                <div className="logo-cont">
                                    <img src={Sephora} alt="logo" className="logo" />
                                </div>
                            </div>
                            <div>
                                Key Ingredient: &nbsp; {ProductSpecs.KeyIngridiants}
                                <p className="Ingredients-link">View all ingredients</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`nav-cont `}>
                    <span className={`nav-elem-1 ${l==='/page1' ? "active" : ""}`}  onClick={()=>navigate("/page1")} >Overview</span>
                    <span className={`nav-elem-2 ${l==='/page2' ? "active" : ""}`}  onClick={()=>navigate("/page2")}>Key Concerns</span>
                    <span className={`nav-elem-3 ${l==='/page3' ? "active" : ""}`}  onClick={()=>navigate("/page3")}>Review level</span>
                </div>
            </div>
        </>
    )
}

export default Header;