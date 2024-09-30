import React, { useState, useEffect, useRef } from "react";
import "./ProductFood.css";

export default function ProductFood() {
  const [openMenu, setOpenMenu] = useState(false);
  const [index, setIndex] = useState(0);
  const productsContentRef = useRef(null);
  const productItemsRef = useRef([]);
  const totalPages = 3; // Giả định có 3 trang sản phẩm

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const updateSlidePosition = () => {
    if (productsContentRef.current) {
      let newPosition = -index * 100 + "%";
      productsContentRef.current.style.transform = `translateX(${newPosition})`;
    }
  };

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    updateSlidePosition();
  }, [index]);

  return (
    <>
      <section className="product ">
        <div className="container-products">
          <div className="menu-icon" onClick={handleOpenMenu}>
            ☰
          </div>

          {openMenu && (
            <aside className="filter" id="filterMenu">
              <h3>LỌC</h3>
              <div className="filter-category">
                <h4>Theo tên</h4>
                <input
                  type="text"
                  id="filterName"
                  placeholder="Tìm kiếm theo tên sản phẩm"
                  onInput={() => {
                    /* logic lọc sản phẩm */
                  }}
                />
              </div>
              <div className="filter-category">
                <h4>Theo giá</h4>
                <input
                  type="number"
                  id="minPrice"
                  placeholder="Giá tối thiểu"
                />
                <input type="number" id="maxPrice" placeholder="Giá tối đa" />
              </div>
            </aside>
          )}

          <div className="sanpham">
            <div className="wrapper-collect">
              <div className="container">
                <div className="row-grid">
                  <p className="heading-text">SẢN PHẨM</p>
                </div>
                <div className="products-content-container">
                  <div
                    className="products-collect-content"
                    ref={productsContentRef}
                  >
                    {[1, 2, 3].map((_, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="products-content-items"
                        ref={(el) => (productItemsRef.current[pageIndex] = el)}
                      >
                        <ul className="products">
                          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                            (item, itemIndex) => (
                              <li key={itemIndex}>
                                <div className="product-item">
                                  <div className="product-top">
                                    <a href="#" className="product-thumb">
                                      <img
                                        src="https://static.kfcvietnam.com.vn/images/items/lg/1-Fried-Chicken.jpg?v=gqO6wL"
                                        alt="Gà rán"
                                      />
                                    </a>
                                    <a href="#" className="buy-now">
                                      Mua ngay
                                    </a>
                                  </div>
                                  <div className="product-info">
                                    <a href="#" className="product-name">
                                      1 MIẾNG GÀ RÁN
                                    </a>
                                    <div className="product-price-container">
                                      <div className="product-price">
                                        35.000 VNĐ
                                      </div>
                                      <i className="bx bx-cart cart-icon"></i>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="nutchuyen-btn  ">
                    <i
                      className="bx bxs-chevron-left bx bxs-chevron-left-two"
                      onClick={handlePrevClick}
                    ></i>
                    <i
                      className="bx bxs-chevron-right bx bxs-chevron-right-two"
                      onClick={handleNextClick}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
