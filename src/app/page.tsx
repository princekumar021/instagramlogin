"use client";

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Eye, EyeOff, Facebook, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleLogin } from "./actions";

const initialState = {
  message: "",
  success: false,
};

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Log In
    </Button>
  );
}

export default function Home() {
  const [state, formAction] = useActionState(handleLogin, initialState);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="flex items-center justify-end p-2">
        <Button variant="ghost" size="icon" aria-label="Close">
          <X className="h-6 w-6 text-muted-foreground" />
        </Button>
      </header>
      
      <div className="flex flex-1 flex-col justify-center px-4">
        <main className="w-full mx-auto max-w-xs">
          <h1 className="mb-10 text-center text-5xl" style={{ fontFamily: "'Grand Hotel', cursive" }}>
            Instagram
          </h1>
          
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="username"
                name="username"
                placeholder="Phone number, username, or email"
                className="bg-zinc-50 dark:bg-zinc-900 text-xs h-11 rounded-md"
                required
                aria-label="Phone number, username, or email"
              />
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-zinc-50 dark:bg-zinc-900 text-xs h-11 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                />
                {password && (
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <Eye className="h-6 w-6 text-gray-500" />
                    ) : (
                      <EyeOff className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                )}
              </div>
            </div>
            
            <a href="#" className="block text-right text-xs font-medium text-primary hover:underline">
              Forgot password?
            </a>
            
            <LoginButton />

            <div className="flex items-center pt-2">
              <div className="h-px flex-grow bg-border" />
              <span className="mx-4 text-xs font-semibold uppercase text-muted-foreground">OR</span>
              <div className="h-px flex-grow bg-border" />
            </div>

            <Button variant="link" className="w-full text-sm font-semibold text-primary hover:no-underline">
              <Facebook className="mr-2 h-5 w-5 fill-current" />
              Continue as Dave Johnson
            </Button>
             {state?.message && !state.success && (
                <p className="pt-2 text-center text-sm text-destructive">{state.message}</p>
            )}
          </form>
        </main>
      </div>

      <footer className="w-full border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-primary">
            Sign Up.
          </a>
        </p>
      </footer>
    </div>
  );
}
