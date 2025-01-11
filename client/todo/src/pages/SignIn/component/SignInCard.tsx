import TasklystLogo from "@/components/global/TaskListLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Controller } from "react-hook-form";
import useSignIn from "../hook/useSignIn";

const SignInCard = () => {
  const { signFormSchema, control, handleSubmit, onSignin, isLoading, errors } =
    useSignIn();

  return (
    <div className=" h-fit w-[450px] rounded-lg shadow-lg p-8   flex flex-col ">
      <div className="flex justify-center">
        <TasklystLogo height="60" width="120" />
      </div>
      <form
        className=" flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSignin)}
      >
        {signFormSchema.map((form, indx) => (
          <div key={indx} className="flex flex-col  w-full max-w-sm ">
            <label
              htmlFor={form.label}
              className="after:content-['*'] after:text-red-500"
            >
              {form.label}
            </label>
            <Controller
              name={form.name}
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  type={form.type}
                  placeholder={form.placeholder}
                />
              )}
            />
            {errors[form.name] && (
              <span className="text-xs text-red-500 mt-1">
                {errors[form.name]?.message}
              </span>
            )}
          </div>
        ))}
        <Button type="submit">
          {isLoading ? (
            <LoaderCircle className={`${isLoading && "animate-spin"}`} />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignInCard;
