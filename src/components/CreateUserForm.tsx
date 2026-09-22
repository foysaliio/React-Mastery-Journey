import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { createUser } from "../services/userService";

import { userSchema, type UserFormData } from "../schemas/userSchema";

import type { User } from "../types/user";

export default function CreateUserForm() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),

    defaultValues: {
      name: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createUser,
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const createdUser = await mutation.mutateAsync(data);

      queryClient.setQueryData<User[]>(["users"], (currentUsers = []) => [
        createdUser,
        ...currentUsers,
      ]);

      reset();
    } catch {
      // Mutation error is shown below.
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="w-full rounded border p-3"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full rounded border p-3"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-black
          px-5 py-3 text-white
          disabled:opacity-50"
      >
        {isSubmitting ? "Creating..." : "Create User"}
      </button>

      {mutation.isError && (
        <p className="text-red-600">{mutation.error.message}</p>
      )}
    </form>
  );
}
