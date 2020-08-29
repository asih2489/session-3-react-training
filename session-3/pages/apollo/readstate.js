import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../../lib/apollo";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    name @client
  }
`
;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const GET_PRODUCT_DISCOUNT = gql`
  query Product ($isDiscount: Boolean!) {
    cartItemsDiscount @client
  }
`;

const ReadState = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  const { data: cart } = useQuery(GET_CART_ITEMS);
  
  const { data: discount } = useQuery(GET_PRODUCT_DISCOUNT);

  console.log(data)
  
  console.log(cart)

  console.log(discount)
  
  return (
    <p>read state</p>
  );
};

export default withApollo({ ssr: false })(ReadState);
