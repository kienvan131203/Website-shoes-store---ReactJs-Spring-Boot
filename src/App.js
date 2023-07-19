import "./App.css";
import Header from "./layout/header";
import Session from "./layout/session";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Product from "./pages/product";
import Cartdetail from "./pages/cartdetail";
import Account from "./pages/Account";
import Footer from "./layout/footer";
import Pay from "./pages/pay";
import Detail from "./pages/Detail";
import AdminLogin from "./Admin/AdminLogin";
import AdminPage from "./Admin/AdminPage";
import Statistical from "./Admin/Statistical";
import ProductAdmin from "./Admin/ProductAdmin";
import Price from "./Admin/Price";
import Color from "./Admin/Color";
import Category from "./Admin/Category";
import Material from "./Admin/Material";
import Order from "./Admin/Order";
import Promotions from "./Admin/Promotions";
import Staff from "./Admin/Staff";
import Customer from "./Admin/Customer";
import Sell from "./Admin/Sell";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<OutletWithLayout />}>
            <Route exact path="/" element={<Session />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/cartdetail" element={<Cartdetail />} />
            <Route exact path="/Account" element={<Account />} />
            <Route exact path="/Pay" element={<Pay />} />
            <Route exact path="/Detail" element={<Detail />} />
          </Route>
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/AdminPage" element={<AdminPage />} />
          <Route exact path="/Statistical" element={<Statistical />} />
          <Route exact path="/ProductAdmin" element={<ProductAdmin />} />
          <Route exact path="/Price" element={<Price />} />
          <Route exact path="/Color" element={<Color />} />
          <Route exact path="/Category" element={<Category />} />
          <Route exact path="/Material" element={<Material />} />
          <Route exact path="/Order" element={<Order />} />
          <Route exact path="/Promotions" element={<Promotions />} />
          <Route exact path="/Staff" element={<Staff />} />
          <Route exact path="/Customer" element={<Customer />} />
          <Route exact path="/Sell" element={<Sell />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
function OutletWithLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
