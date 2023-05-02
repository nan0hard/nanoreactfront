import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	createProductReducer,
	productDetailsReducer,
	productReducer,
	productsReducer,
} from "./redux/reducers/productReducer.js";
import {
	allUsersReducer,
	userDetailsReducer,
	userReducer,
} from "./redux/reducers/userReducer.js";
import { profileReducer } from "./redux/reducers/profileReducer.js";
import { forgotPasswordReducer } from "./redux/reducers/forgotPasswordReducer.js";
import { cartReducer } from "./redux/reducers/cartReducer.js";
import { paymentReducer } from "./redux/reducers/paymentReducer.js";
import { paymentDetailsReducer } from "./redux/reducers/paymentDetailsReducer.js";
import {
	allOrdersReducer,
	myOrdersReducer,
	newOrderReducer,
	orderDetailsReducer,
	orderReducer,
} from "./redux/reducers/orderReducer.js";
import { newReviewReducer } from "./redux/reducers/reviewsReducer.js";
import { productReviewsReducer } from "./redux/reducers/reviewsReducer.js";
import { reviewReducer } from "./redux/reducers/reviewsReducer.js";

const reducer = combineReducers({
	products: productsReducer,
	productDetails: productDetailsReducer,
	user: userReducer,
	profile: profileReducer,
	forgotPassword: forgotPasswordReducer,
	cart: cartReducer,
	payment: paymentReducer,
	paymentDetails: paymentDetailsReducer,
	newOrder: newOrderReducer,
	myOrders: myOrdersReducer,
	orderDetails: orderDetailsReducer,
	newReview: newReviewReducer,
	createProduct: createProductReducer,
	product: productReducer,
	allOrders: allOrdersReducer,
	order: orderReducer,
	allUsers: allUsersReducer,
	userDetails: userDetailsReducer,
	productReviews: productReviewsReducer,
	review: reviewReducer,
});

let initalState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		shippingInfo: localStorage.getItem("shippingInfo")
			? JSON.parse(localStorage.getItem("shippingInfo"))
			: {},
	},
};

const mdiddleware = [thunk];

const store = createStore(
	reducer,
	initalState,
	composeWithDevTools(applyMiddleware(...mdiddleware))
);

export default store;
