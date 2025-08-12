import AuthForm from "@/components/forms/AuthForm";
import { signInSchema } from "@/schemas/auth/user.schema";
import type { AuthFormValues } from "@/types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";

export default function SigninPage() {
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
            Welcome Back, Reader!
          </h1>
          <p className="font-inter max-w-sm">
            Continue your manga journey, track your progress, and explore new
            adventures.
          </p>
        </div>
        <AuthForm methods={methods} onSubmit={onSubmit} formType="sign in" />
      </div>
    </div>
  );
}
