import * as functions from "firebase-functions";
import connect from "./connect";
import createStripeOAuthTokenUnit from "./units/stripe/createStripeOAuthToken/createStripeOAuthToken";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const connectUserToStripe = functions.https.onCall(async (data) => {
  const db = connect();
  functions.logger.info("Connecting user to Stripe.", {
    structuredData: true,
  });
  let response: any = {};
  try {
    response = await createStripeOAuthTokenUnit(
      {
        ...(data || {}),
      },
      { db }
    );
  } catch (error) {
    response.error = (error as any)?.message || null;
  }

  return response;
});
