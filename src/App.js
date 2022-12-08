import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation.component";

//ROUTES
import Home from "./routes/home/home.component";
import Kinship from "./routes/kinship/kinship.component";
import Support from "./routes/support/support.component";
import Allies from "./routes/allies/allies.component";
import Missions from "./routes/missions/missions.component";
import Events from "./routes/events/events.component";
import Contact from "./routes/contact/contact.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Subscribe from "./routes/subscribe/Subscribe.component";
import Permission from "./components/permission/Permission.component";
import { Navigate } from "react-router-dom";

//FOOTER
import Footer from "./components/footer/Footer";

// const Redirect = (props) => {
//   const {to = '/', ...params} = props
//   const navigate = useNavigate()

//   useEffect(() => {
//     navigate(to)
//   }, [])
//   return null
// }

const withAuth = (RouteComponent) => {
  return (
    <Permission
      roles={[
        "logged-in",
        // , "subscribed"
      ]}
      type="all-of"
      noAccess={<Navigate to="/" replace={true} />}
      debug
    >
      <RouteComponent />
    </Permission>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="kinship" element={withAuth(Kinship)} />
          <Route path="support" element={withAuth(Support)} />
          <Route path="allies" element={withAuth(Allies)} />
          <Route path="missions" element={withAuth(Missions)} />
          <Route path="events" element={withAuth(Events)} />
          <Route path="shop" element={withAuth(Shop)} />
          <Route path="contact" element={withAuth(Contact)} />
          <Route path="checkout" element={withAuth(Checkout)} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
