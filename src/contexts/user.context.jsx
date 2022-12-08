import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  auth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const useUserContext = () => useContext(UserContext);

const fetchUserSubscription = async (user) => {
  return {
    ...user,
    // subscriptions: [
    //   {
    //     name: "has subscription",
    //   },
    // ],
    // roles: ["is-premium"],
  };
};

async function getCustomClaimRole() {
  await auth.currentUser.getIdToken(true);
  const decodedToken = await auth.currentUser.getIdTokenResult();
  return decodedToken.claims.stripeRole;
}

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        const userWithSubscription = await fetchUserSubscription(user);
        const role = await getCustomClaimRole();
        //console.log("claim role?", role);
        setCurrentUser(userWithSubscription);

        return;
      }
      setCurrentUser(null);
      navigate("/");
    });
    return unsubscribe;
  }, []);
  console.log("user?", currentUser);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
