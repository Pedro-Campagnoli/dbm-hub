"use client";

import { useState } from "react";

export default function LoginForm() {
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("login-email") as HTMLInputElement)
      .value;
    const password = (
      form.elements.namedItem("login-password") as HTMLInputElement
    ).value;

    const newErrors = { email: "", password: "" };
    if (!email) newErrors.email = "E-mail é obrigatório";
    if (!password) newErrors.password = "Senha é obrigatória";

    setErrors(newErrors);
    if (newErrors.email || newErrors.password) return;

    // segue com o login...
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary-foreground flex h-full w-full flex-col justify-center gap-4 rounded border p-12"
    >
      <h2>DBM Hub</h2>
      <div className="flex flex-col gap-3">
        <label htmlFor="login-email" className="text-xs font-bold">
          E-mail
        </label>
        <input
          id="login-email"
          type="text"
          className="bg-input focus:border-primary/50 w-full border border-transparent px-2 py-4 text-sm transition-all delay-150 ease-in-out"
          placeholder="voce@empresa.com"
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="login-password" className="text-xs font-bold">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          className="bg-input focus:border-primary/50 w-full border border-transparent px-2 py-4 text-sm transition-all delay-150 ease-in-out"
          placeholder="••••••••"
        />
        {errors.password && (
          <span className="text-xs text-red-500">{errors.password}</span>
        )}
      </div>
      <button
        className="bg-primary text-secondary hover:bg-primary/90 mt-6 w-full rounded-xl p-2 transition-all delay-150 ease-in-out"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}
