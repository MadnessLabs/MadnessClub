import Stripe from "stripe";

import env from "../../../env";

/**
 * Connect and hand back a Stripe instance
 */
export default async function connectToStripe(
  data: {
    secretkey?: string;
  } = {}
): Promise<Stripe> {
  return new Stripe(data.secretkey ? data.secretkey : env("stripe.secretkey"), {
    apiVersion: "2020-08-27",
  });
}
