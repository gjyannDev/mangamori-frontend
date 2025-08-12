import type { AuthFormProps } from "@/types/auth.types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AuthForm({ methods, onSubmit}: AuthFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[2.5rem]"
    >
      <div className="flex flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-2">
          <Label className="font-playfair font-bold text-lg">Email</Label>
          <Input
            type="email"
            {...register("email", { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:border-primary"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-playfair font-bold text-lg">Password</Label>
          <Input
            type="password"
            {...register("password", { required: true })}
            className="border border-gray-300 rounded-md px-3 py-2 focus:border-primary"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button
          className="self-start px-18 text-base-white rounded-md shadow-md"
          type="submit"
        >
          Sign in
        </Button>
        <p className="font-inter text-sm">
          Don't have an account?
          <span className="text-primary">
            <Link to="signup"> Sign up.</Link>
          </span>
        </p>
      </div>
    </form>
  );
}
