import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CounterTime from "~/components/starter/counter-time/counterTime";
import Multimedia from "~/components/starter/multimedia/multimedia";

export default component$(() => {
  return (
    <>
      <CounterTime />
      <Multimedia />
    </>
  );
});

export const head: DocumentHead = {
  title: "Boda B&J",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
