import connectToStripe from "../connectToStripe/connectToStripe";
import env from "../../../env";
import connect from "../../../connect";

/**
 * Generate Stripe OAuth token
 * @see https://stripe.com/docs/connect/standard-accounts
 */
export default async function createStripeOAuthTokenUnit(
  input: {
    code: string;
    userId: string;
  },
  options: {
    db?: any;
    stripeKey?: string;
  } = {}
): Promise<any> {
  const db = options?.db || connect();
  const stripeConfig = env("stripe");
  const stripe = await connectToStripe({
    stripeKey: options.stripeKey ? options.stripeKey : stripeConfig.secretKey,
  });
  const response = await stripe.oauth.token({
    grant_type: "authorization_code",
    code: input.code,
  });

  await db.collection("accounts").doc(input.userId).set(
    {
      id: input.userId,
      accountId: response.stripe_user_id,
    },
    { merge: true }
  );

  return { accountId: response.stripe_user_id };
}
