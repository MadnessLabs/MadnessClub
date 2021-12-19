import Stripe from "stripe";

import env from "../../../env";

/**
 * Connect and hand back a Stripe instance
 */
export default async function connectToStripe(
  data: {
    stripeKey?: string;
  } = {}
): Promise<Stripe> {
  return new Stripe(data.stripeKey ? data.stripeKey : env("stripe.secretKey"), {
    apiVersion: "2020-08-27",
  });
}
