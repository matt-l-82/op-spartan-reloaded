import { db } from "../utils/firebase/firebase.utils";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

export const startSubscriptionCheckoutProcess = (userId, product) => {
  return new Promise(async (resolve, reject) => {
    const checkoutSessionDocRef = collection(
      db,
      `customers/${userId}/checkout_sessions`
    );
    await addDoc(checkoutSessionDocRef, {
      price: product.priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(checkoutSessionDocRef, (snap) => {
      console.log("on checkout session doc snapshot", snap);
      const { error, url } = snap.docs[0].data();
      console.log("data?", { error, url });
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        // alert(`An error occured: ${error.message}`);
        reject(error);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        // window.location.assign(url);
        resolve(url);
      }
    });
  });
};

/*
const docRef = await db
  .collection('customers')
  .doc(currentUser.uid)
  .collection('checkout_sessions')
  .add({
    price: 'price_1GqIC8HYgolSBA35zoTTN2Zl',
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });
// Wait for the CheckoutSession to get attached by the extension
docRef.onSnapshot((snap) => {
  const { error, url } = snap.data();
  if (error) {
    // Show an error to your customer and
    // inspect your Cloud Function logs in the Firebase console.
    alert(`An error occured: ${error.message}`);
  }
  if (url) {
    // We have a Stripe Checkout URL, let's redirect.
    window.location.assign(url);
  }
});
*/
