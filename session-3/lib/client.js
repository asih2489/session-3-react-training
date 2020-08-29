import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { resolvers, typeDefs, fields } from "../apollo/resolver";
export const cache = new InMemoryCache(fields);

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: "https://swiftpwa-be.testingnow.me/graphql", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    }),
    cache: cache.restore(initialState),
    typeDefs,
  });
}
