import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItemToCart } from "../../State/Cart/Action";
import { findProductById } from "../../State/Product/Action";
import {
  Box,
  Button,
  Grid,
  Grid2,
  LinearProgress,
  Rating,
} from "@mui/material";
import { Radio, RadioGroup } from "@headlessui/react";
import ReviewCard from "./ReviewCard";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Ngon bổ rẻ",
    "Hương vị đậm đà",
    "Đồ ăn truyền thống",
    "Say đắm Khách hàng",
  ],
  details:
    " Món mì Ý này thường được trình bày trên một đĩa rộng, với lớp mì vàng ươm trải đều bên dưới, sốt cà chua đỏ tươi phủ lên trên, kèm theo thịt băm và lớp phô mai trắng ngà hấp dẫn. Khi ăn, mì mềm mại hòa quyện với sốt cà chua đậm đà và thơm phức từ phô mai cùng húng quế.",
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch((store) => store);
  const { products } = useSelector((store) => store);

  console.log("productId", params.productId);

  const handleAddtoCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    console.log("data_", data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductById(data));
  }, [params.productId]);

  return (
    <div className="bg-white lg:px-20 ">
      <div className="pt-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 mt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center h-full">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt=""
                src={products.product?.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div> */}
          </div>
          {/* Product info */}
          <div
            className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
          lg:pb-24"
          >
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">{products.product?.price} VNĐ </p>
                <p className="opacity-50 line-through">
                  {products.product?.discountedPrice} VNĐ
                </p>
                <p className="text-green-600 font -semibold">
                  {products.product?.discountPercent} off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex item-center space-x-3">
                  <Rating name="read-only" value={5.5} readOnly />
                  <p className="opacity-50 text-sm">56540 Đánh giá</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-ingo-500">
                    3870 Nhận xét
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}

                <Button
                  onClick={handleAddtoCart}
                  color="black"
                  variant="contained "
                  sx={{
                    px: "2rem",
                    py: "1rem",
                    bgcolor: "#ffeee8",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>

                <Button
                  //   onClick={handleAddtoCart}
                  color="success"
                  variant="contained "
                  sx={{
                    px: "2rem",
                    py: "1rem",
                    bgcolor: "orange",
                    mx: "2rem",
                  }}
                >
                  Mua Ngay
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Mô tả</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {products.products?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-lg text-gray-900">Chi tiết</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-lg text-gray-700">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and reviews*/}
        <section>
          <h1 className="font-semibold text-lg pb-4">
            Đánh giá & xếp hạng gần đây
          </h1>

          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ReviewCard />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-2">
                  {" "}
                  Các Đánh giá Sản phẩm
                </h1>
                <div className="flex items-center space-x-3 ">
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60">594890 Đánh giá</p>
                </div>

                <Box className="mt-5 space-y-5">
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Xuất Xắc</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        color="success"
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Rất Ngon</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={30}
                        color="success"
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Tốt</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={25}
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          color: "yellow",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Trung bình</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={20}
                        color="warning"
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid item xs={2}>
                      <p>Tệ</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={15}
                        color="error"
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
}
