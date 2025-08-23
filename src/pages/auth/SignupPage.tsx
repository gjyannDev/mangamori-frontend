import AuthForm from "@/components/forms/AuthForm";
import { signUpSchema } from "@/schemas/auth/user.schema";
import { signUp } from "@/services/auth/auth.services";
// import { signUp } from "@/services/auth/auth.services";
import type { AuthFormValues } from "@/types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const methods = useForm<AuthFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<AuthFormValues> = async (data) => {
    try {
      const result = await signUp(data);

      console.log("User signed up: ", result);
    } catch (error: unknown) {
      console.error("Sign up unsucessfull.", error);
    }
    methods.reset();
  };

  return (
    <div className="flex flex-col items-center py-14">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-playfair font-bold text-4xl">
            Join MangaMori Today
          </h1>
          <p className="font-inter max-w-sm">
            Create your personal manga library, discover trending titles, and
            log every chapter you read.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <AuthForm methods={methods} onSubmit={onSubmit} formType="sign up" />
          <p className="font-inter text-sm">
            Already have an account?
            <span className="text-primary">
              <Link to="/signin"> Sign in.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
