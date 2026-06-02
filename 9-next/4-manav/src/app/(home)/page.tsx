import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Products from "@/components/home/products";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "../loading";
import Error from "../error";

export default function Home() {
  return (
    <div className="page">
      <Hero />

      <Features />

      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
