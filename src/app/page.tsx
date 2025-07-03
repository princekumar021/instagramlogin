"use client";

import { useState, useActionState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Eye, EyeOff, Facebook, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      {pending ? "Logging in..." : "Log in"}
    </Button>
  );
}

export default function Home() {
  const [state, formAction] = useActionState(handleLogin, initialState);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <main className="flex w-full max-w-[860px] flex-row items-center justify-center">
        <div className="hidden flex-shrink-0 md:block md:w-[45%]">
            <Image
                src="https://placehold.co/380x580.png"
                alt="Instagram app promotion"
                width={380}
                height={580}
                priority
                className="object-contain"
                data-ai-hint="instagram phone"
            />
        </div>
        <div className="flex w-full max-w-[350px] flex-shrink-0 flex-col gap-4 md:w-[55%]">
          <Card className="w-full border-border">
            <CardContent className="p-10">
              <h1 className="mb-8 text-center text-5xl font-headline" style={{ fontFamily: "'Grand Hotel', cursive" }}>
                Instagram
              </h1>
              <form action={formAction} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Input
                    id="username"
                    name="username"
                    placeholder="Phone number, username, or email"
                    className="bg-zinc-50 dark:bg-zinc-900 text-xs"
                    required
                    aria-label="Phone number, username, or email"
                  />
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="bg-zinc-50 dark:bg-zinc-900 text-xs"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      aria-label="Password"
                    />
                    {password && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-1/2 h-full -translate-y-1/2 px-3 text-sm font-semibold hover:bg-transparent"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    )}
                  </div>
                </div>
                <LoginButton />
                {state?.message && !state.success && (
                    <p className="text-center text-sm text-destructive">{state.message}</p>
                )}
              </form>
              <div className="my-4 flex items-center">
                <div className="h-px flex-grow bg-border" />
                <span className="mx-4 text-xs font-semibold text-muted-foreground">OR</span>
                <div className="h-px flex-grow bg-border" />
              </div>
              <Button variant="link" className="w-full text-sm font-semibold text-indigo-900 hover:text-indigo-900/90 dark:text-indigo-400 dark:hover:text-indigo-400/90">
                <Facebook className="mr-2 h-5 w-5 fill-current" />
                Log in with Facebook
              </Button>
              <a href="#" className="mt-4 block text-center text-xs text-indigo-900 dark:text-indigo-400">
                Forgot password?
              </a>
            </CardContent>
          </Card>
          <Card className="w-full border-border">
            <CardContent className="p-4">
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <a href="#" className="font-semibold text-primary hover:underline">
                  Sign up
                </a>
              </p>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm">Get the app.</p>
            <div className="flex justify-center gap-4">
              <a href="#" aria-label="Download on the App Store">
                <Image src="https://placehold.co/136x40.png" alt="App Store" width={136} height={40} data-ai-hint="app store" />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <Image src="https://placehold.co/136x40.png" alt="Google Play" width={136} height={40} data-ai-hint="google play" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <span>Meta</span>
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Locations</span>
            <span>Instagram Lite</span>
            <span>Threads</span>
            <span>Contact Uploading & Non-Users</span>
            <span>Meta Verified</span>
        </div>
        <div className="mt-4">
            <span>© {new Date().getFullYear()} Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}
