import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Flores from "~/media/flores.webp";


import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="pt-10">
      <div role="presentation" class="border-[#DEAB69] border-4 rotate-2 h-[90%] w-[90%] absolute top-10 left-5 md:top-16 md:left-28 -z-10"></div>
      <div role="presentation" class="border-[#ECC893]  border-4 -rotate-2 h-[90%] w-[90%] absolute top-10 left-5 md:top-16 md:left-28 -z-10"></div>
      <img src={Flores} alt="bg-Flores" width={230} height={400} class="absolute bottom-0 left-0" />
      <img src={Flores} alt="bg-Flores" width={230} height={400} class="absolute top-0 right-0 rotate-180" />
      <Header />
      <main>
        <Slot />
      </main>
    </div>
  );
});
