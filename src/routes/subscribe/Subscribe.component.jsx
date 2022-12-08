import React, { useEffect, useState } from "react";
import { listProducts } from "../../api/product.api";
import { startSubscriptionCheckoutProcess } from "../../api/subscription.api";
import { useUserContext } from "../../contexts/user.context";

//STYLES
import "./Subscribe.styles.scss";

function Subscribe() {
  const [products, setProducts] = useState([]);
  const { currentUser } = useUserContext();
  const initFetchPrices = async () => {
    const productsSnapshot = await listProducts();
    console.log("prices snapshot", productsSnapshot);
    const products = {};
    productsSnapshot.forEach(async (productDoc) => {
      const productData = productDoc.data();
      if (!productData.prices) return;
      const { priceId, amount } = productData.prices[0];
      const displayAmount = Math.round(amount / 100, 2);
      products[productDoc.id] = {
        ...productData,
        priceId,
        amount,
        displayAmount,
      };
    });
    setProducts(products);
  };

  console.log("prods", products);

  const iniCheckout = async (product) => {
    try {
      const checkoutUrl = await startSubscriptionCheckoutProcess(
        currentUser.uid,
        product
      );
      console.log("checkout url?", checkoutUrl);
      window.location.assign(checkoutUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initFetchPrices();
    // db.collection("prices")
    //   .where("active", "==", true)
    //   .get()
    //   .then((querySnapshot) => {
    //     const subscribe = {};
    //     querySnapshot.forEach(async (productDoc) => {
    //       subscribe[productDoc.id] = productDoc.data();
    //       const priceSnap = await productDoc.ref.collection("prices").get();
    //       priceSnap.docs.forEach((doc) => {
    //         subscribe[productDoc.id].prices = {
    //           priceId: doc.id,
    //           priceData: priceSnap.data(),
    //         };
    //       });
    //     });
    //     setSubscribe(subscribe);
    //   });
  }, []);

  return (
    <>
      <section className="subscribe">
        <div className="container">
          <div className="row justify-center align-center">
            <div className="col-12-sm">
              <div className="subscribe_card">
                <h1 className="title mb-3">Subscribe</h1>
                {Object.values(products).map((product) => {
                  return (
                    <div className="subscribe_card--inner" key={product.id}>
                      <h3>Price £{product.displayAmount}</h3>
                      <button
                        className="mt-3"
                        onClick={() => iniCheckout(product)}
                      >
                        Subscribe
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe_terms">
        <div className="container">
          <div className="row">
            <div className="col-12-sm">
              <p className="subscribe_terms--copy"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
