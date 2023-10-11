import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$, routeAction$, type RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";

import styles from "./styles.css?inline";
import { URL } from "~/config";


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


export interface ResponseAPI {
  status: string,
  user: string,
  code: number,
  message: string
}

export const useSendPost = routeAction$(async (data, requestEvent) => {
  console.log(requestEvent.env.get('URL_API'))

  try {
    const response = await fetch(requestEvent.env.get('URL_API') ?? URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(response)
    const responseAPI: ResponseAPI = await response.json()
    
    return {
      responseAPI
    }
  } catch (error) {
    console.error(error)
  }
})


export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="pt-10">
      
      <Header />
      <main>
        <Slot />
      </main>
    </div>
  );
});
