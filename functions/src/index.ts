import * as functions from "firebase-functions";
import createStripeOAuthTokenUnit from "./units/stripe/createStripeOAuthToken/createStripeOAuthToken";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const connectUserToStripe = functions.https.onRequest(
  async (request, response) => {
    functions.logger.info("Connecting user to Stripe.", {
      structuredData: true,
    });
    const data = await createStripeOAuthTokenUnit({
      ...(request.body || request.params || {}),
    });
    response.send(data);
  }
);
