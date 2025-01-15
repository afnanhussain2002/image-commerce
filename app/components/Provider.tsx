"use client";
import React from "react";
import { ImageKitProvider, IKImage } from "imagekitio-next";
import { SessionProvider } from "next-auth/react";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function Providers({ children }: { children: React.ReactNode }) {
  const authenticator = async () => {
    try {
      const response = await fetch("/api/imagekit-auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
      return response.json();
    } catch (error) {
      console.error("imagekit auth error", error);
      throw error;
    }
  };

  return (
  <SessionProvider refetchInterval={5 * 60}>
      <ImageKitProvider
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      {children}
    </ImageKitProvider>
  </SessionProvider>
  );
}
