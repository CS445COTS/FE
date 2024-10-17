import { DisplaySettings } from "@mui/icons-material";
import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const { category, minPrice, maxPrice, sort, pageNumber, pageSize } = reqData;
  try {
    const tokenjwt = localStorage.getItem("jwt");
    const { data } = await api.get(
      `/api/products?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      {
        headers: {
          Authorization: `Bearer ${tokenjwt}`,
        },
      }
    );
    console.log("product data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;

  try {
    const tokenjwt = localStorage.getItem("jwt");
    const { data } = await api.get(`/api/products/id/${productId}`, {
      headers: { Authorization: `Bearer ${tokenjwt}` },
    });
    console.log(data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
