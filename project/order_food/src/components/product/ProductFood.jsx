import React, { useState, useEffect, useRef } from "react";
import "./ProductFood.css";
import { filterCategory, filterPrice } from "../data/filter";
import {
  FormControl,
  Radio,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Product/Action";
import Pagination from "@mui/material/Pagination";
import ProductCart from "./ProductCart";

export default function ProductFood({ title }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [index, setIndex] = useState(0);
  const productsContentRef = useRef(null);
  const productItemsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  console.log(products.products);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const priceValue = searchParams.get("price");
  const category = searchParams.get("category");
  const pageNumber = searchParams.get("page") || 1;

  const handlePaginationChange = (e, value) => {
    console.log("value", value);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    console.log(query);
    navigate({
      search: `?${query}`,
    });
  };

  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 1000000] : priceValue.split("-").map(Number);

    const data = {
      category: category,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sort: "price_low",
      pageNumber: pageNumber,
      pageSize: 5,
    };

    dispatch(findProducts(data));
  }, [pageNumber, priceValue, category]);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const updateSlidePosition = () => {
    if (productsContentRef.current) {
      let newPosition = -index * 100 + "%";
      productsContentRef.current.style.transform = `translateX(${newPosition})`;
    }
  };

  useEffect(() => {
    updateSlidePosition();
  }, [index]);

  const handleFilter = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({
      search: `?${query}`,
    });
  };

  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({
      search: `?${query}`,
    });
  };

  return (
    <>
      <section className="product ">
        <div className="container-products">
          <div className="menu-icon" onClick={handleOpenMenu}>
            ☰
          </div>

          {openMenu && (
            <aside class="filter" id="filterMenu">
              <h3>LỌC</h3>
              <div class="filter-category">
                <h4>Theo tên</h4>
                <input
                  type="text"
                  id="filterName"
                  placeholder="Tìm kiếm theo tên sản phẩm"
                />
              </div>

              <div class="filter-category">
                <form className="hidden lg:block">
                  {filterCategory.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="h-5 w-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <select
                            id={`select-${section.id}`}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => handleFilter(e, section.id)} // Uncomment and modify handleFilter to your logic
                            defaultValue={
                              section.options.find((option) => option.checked)
                                ?.value || ""
                            }
                          >
                            {section.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Disclosure.Panel>
                    </Disclosure>
                  ))}

                  {filterPrice.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium"></span>
                          <FormLabel
                            sx={{
                              color: "black",
                              width: "100%",
                              textAlign: "left",
                            }}
                            className="text-gray-900 "
                            id="demo-radio-buttons-group-label"
                          >
                            {section.name}
                          </FormLabel>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="h-5 w-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                            >
                              {section.options.map((option, optionIdx) => (
                                <>
                                  {/* --------radio handle */}
                                  <FormControlLabel
                                    onChange={(e) =>
                                      handleRadioFilterChange(e, section.id)
                                    }
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                  />
                                </>
                              ))}
                            </RadioGroup>
                          </FormControl>
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </div>
            </aside>
          )}

          <section>
            <div className="sanpham">
              <div className="wrapper-collect">
                <div className="container">
                  <div className="row-grid">
                    <p className="heading-text">{title}</p>
                  </div>
                  <div className="lg:col-span-3 w-full">
                    <div className="flex flex-wrap justify-center bg-white py-5">
                      {products.products &&
                        products.products?.content?.map((item, index) => (
                          <ProductCart product={item} key={index} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 flex justify-center">
              <Pagination
                count={products.products?.totalPages}
                variant="outlined"
                color="secondary"
                onChange={handlePaginationChange}
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
