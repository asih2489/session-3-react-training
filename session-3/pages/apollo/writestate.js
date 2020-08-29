import { withApollo } from "../../lib/apollo";
import { cache } from "../../lib/client";
import { cartItemsVar } from "../../apollo/resolver";
import { gql } from "@apollo/client";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    name @client
  }
`;

const WriteState = () => {
  const cartItems = cartItemsVar();
  const item = [
    {
      id: 1,
      name: "product 1",
      isDiscount: true
    },
    {
      id: 2,
      name: "product 2",
    },
  ];
  return (
    <button
      onClick={() => {
        
        // example set value
        cache.writeQuery({
          query: IS_LOGGED_IN,
          data: {
            isLoggedIn: true,
            name: "Asih",
          },
        });

        // example set array
        cartItemsVar([...cartItems, ...item]);
        alert("success set local state");
      }}
    >
      Set Flagging Valur
    </button>
  );
};

export default withApollo({ ssr: false })(WriteState);
