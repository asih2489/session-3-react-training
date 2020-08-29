import { gql, makeVar } from "@apollo/client";

export const cartItemsVar = makeVar([]);

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    name: String!
  }
`;

export const fields = {
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
        cartItemsDiscount: {
          read() {
            const cart = cartItemsVar();
            const result = [];
            for (let index = 0; index < cart.length; index++) {
              const element = cart[index];
              if (element.isDiscount) {
                result.push(element);
              }
            }

            return result;
          },
        },
      },
    },
  },
};
