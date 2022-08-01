import dotenv from "dotenv";
dotenv.config();

export default {
  type: "service_account",
  project_id: "ecommerce-coderhouse-a947c",
  private_key_id: "6a8e17d04a037f287914a9d32a2a48346f3d2c02",
  private_key: process.env.PAK_FIREBASE,
  client_email:
    "firebase-adminsdk-1w5c5@ecommerce-coderhouse-a947c.iam.gserviceaccount.com",
  client_id: "107704302501353574660",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1w5c5%40ecommerce-coderhouse-a947c.iam.gserviceaccount.com",
};
