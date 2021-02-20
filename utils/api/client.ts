import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_GATEWAY}/user-onboarding-backend/v1`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "x-origin": "IBK",
  },
});

export default client;
