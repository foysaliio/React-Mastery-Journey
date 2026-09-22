import { useState, type FormEvent } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createUser } from "../services/userService";

import type { CreateUserInput, User } from "../types/user";

export default function CreateUserForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: createUser,

    onSuccess: (createdUser) => {
      queryClient.setQueryData<User[]>(["users"], (currentUsers = []) => [
        createdUser,
        ...currentUsers,
      ]);

      setName("");
      setEmail("");
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser: CreateUserInput = {
      name: name.trim(),
      email: email.trim(),
    };

    if (!newUser.name || !newUser.email) {
      return;
    }

    createUserMutation.mutate(newUser);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        className="w-full rounded border p-3"
      />

      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        className="w-full rounded border p-3"
      />

      <button
        type="submit"
        disabled={createUserMutation.isPending}
        className="rounded bg-black
          px-5 py-3 text-white
          disabled:opacity-50"
      >
        {createUserMutation.isPending ? "Creating..." : "Create User"}
      </button>

      {createUserMutation.isError && (
        <p className="text-red-600">{createUserMutation.error.message}</p>
      )}
    </form>
  );
}
