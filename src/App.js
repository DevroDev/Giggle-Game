import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
//components
import Header from "../src/components/nav/Header";
import Home from "../src/pages/Home";
import Bookmarked from "../src/pages/Bookmarked";
import News from "../src/pages/News";
import Login from "../src/pages/auth/Login";
import Register from "../src/pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import AllProducts from "./pages/admin/product/AllProducts";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import Product from "./pages/Product";
import AllNews from "./pages/AllNews";
import CategoryHome from "./pages/category/CategoryHome";
import SubHome from "./pages/sub/SubHome";

import { currentUser } from "./functions/auth";

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={AllNews} />
        <Route exact path="/bookmark" component={Bookmarked} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        />
        <AdminRoute exact path="/admin/sub" component={SubCreate} />
        <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} />
        <AdminRoute exact path="/admin/news" component={ProductCreate} />
        <AdminRoute exact path="/admin/posts" component={AllProducts} />
        <AdminRoute
          exact
          path="/admin/posts/:slug"
          component={ProductUpdate}
        />
        <Route exact path="/news/:slug" component={Product} />
        <Route exact path="/category/:slug" component={CategoryHome} />
        <Route exact path="/sub/:slug" component={SubHome} />
      </Switch>
    </>
  );
};

export default App;
