import * as admin from "firebase-admin";
import env from "./env";

export default function connect(options?: {
  useServiceAccount?: boolean;
  emulate?: boolean;
}) {
  if (options?.emulate || env("firestore.emulate", false)) {
    admin.initializeApp({
      projectId: env("firestore.projectId", process.env.GCLOUD_PROJECT),
    });
  } else if (options?.useServiceAccount) {
    const serviceAccount = require("../service-account.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
      storageBucket: `${serviceAccount.project_id}.appspot.com`,
    });
  } else {
    admin.initializeApp();
  }

  const firestore = admin.firestore();
  if (
    options?.emulate ||
    env("firestore.host", false) ||
    env("firestore.ssl", false) ||
    env("firestore.emulate", false)
  ) {
    firestore.settings({
      host: env("firestore.host", "localhost:8080"),
      ssl: !!env("firestore.ssl", false),
      ignoreUndefinedProperties: !!env(
        "firestore.ignoreUndefinedProperties",
        true
      ),
    });
  } else {
    firestore.settings({
      ignoreUndefinedProperties: !!env(
        "firestore.ignoreUndefinedProperties",
        true
      ),
    });
  }

  return firestore;
}
