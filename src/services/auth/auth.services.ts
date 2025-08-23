import type { AuthTypes } from "@/types/auth.types";
import api from "../api";

export async function signUp({ email, password }: AuthTypes) {
  try {
    const res = await api.post("/auth/signup", { email, password });

    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sign up");
    } else {
      console.error("Unkown error");
    }
  }
}
