import { signInSchema } from "@/schemas/auth/user.schema";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";
import z from "zod";

export type AuthFormValues = z.infer<typeof signInSchema>;

export interface AuthFormProps {
  methods: UseFormReturn<AuthFormValues>;
  onSubmit: SubmitHandler<AuthFormValues>;
  formType: "sign in" | "sign up";
}

export interface AuthTypes {
  email: string,
  password: string,
}
