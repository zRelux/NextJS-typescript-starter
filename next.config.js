require('dotenv').config();

module.exports = {
  typescript: {
    ignoreDevErrors: true
  },
  env: {
    BFF_ENDPOINT: process.env.BFF_ENDPOINT,
    BFF_APIKEY: process.env.BFF_APIKEY,
    ENV: process.env.ENV,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
  }
};
