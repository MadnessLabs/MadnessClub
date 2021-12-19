import * as admin from "firebase-admin";
import env from "./env";

export default function connect() {
  if (admin.apps.length !== 0) {
    return admin.firestore();
  }

  if (
    process?.env?.FIREBASE_CONFIG ||
    process?.env?.GOOGLE_CLOUD_PROJECT ||
    process?.env?.FIRESTORE_EMULATOR
  ) {
    admin.initializeApp();
  } else if (env("firestore.emulate", false)) {
    admin.initializeApp({
      projectId: env("firestore.projectId", process.env.GCLOUD_PROJECT),
    });
  } else {
    const serviceAccount = require("../service-account.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
      storageBucket: `${serviceAccount.project_id}.appspot.com`,
    });
  }

  const firestore = admin.firestore();
  if (
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
