import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce clothing store is an online platform that offers a wide
          range of apparel for men, women, and children, allowing customers to
          browse, select, and purchase clothing from the comfort of their homes.
          These stores provide a seamless shopping experience with various
          categories such as casual wear, formal wear, activewear, and seasonal
          collections. Customers can explore products through detailed
          descriptions, size guides, and high-quality images, ensuring an
          informed buying decision. Many e-commerce clothing stores also feature
          personalized recommendations, discounts, and secure payment options,
          making online shopping convenient and enjoyable. With efficient
          delivery services and hassle-free return policies, these platforms
          have revolutionized the fashion industry, making trendy and stylish
          clothing accessible to people worldwide.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
