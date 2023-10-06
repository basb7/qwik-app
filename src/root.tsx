import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import Flores from "~/media/flores.webp";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="es" class="font-Cookie relative h-auto bg-yellow-50/30">
        <div role="presentation" class="border-[#DEAB69] border-4 rotate-2 min-h-full w-[90%] absolute top-10 left-5 md:top-16 md:left-28 -z-10"></div>
        <div role="presentation" class="border-[#ECC893]  border-4 -rotate-2 min-h-full w-[90%] absolute top-10 left-5 md:top-16 md:left-28 -z-10"></div>
        <img src={Flores} alt="bg-Flores" width={230} height={400} class="absolute -bottom-20 left-0" />
        <img src={Flores} alt="bg-Flores" width={230} height={400} class="absolute top-0 right-0 rotate-180" />
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
