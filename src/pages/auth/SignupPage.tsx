import AuthForm from "@/components/forms/AuthForm";
import { signInSchema } from "@/schemas/auth/user.schema";
import type { AuthFormValues } from "@/types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const methods = useForm<AuthFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    console.log(data);

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
