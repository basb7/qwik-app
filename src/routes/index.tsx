import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CounterTime from "~/components/starter/counter-time/counterTime";
import Multimedia from "~/components/starter/multimedia/multimedia";
import Form from "~/components/starter/form/form";
import { Maps } from "~/components/starter/maps/maps";


export default component$(() => {
  return (
    <section class="z-10">
      <CounterTime />
      <Multimedia />
      <Form />
      <Maps />
    </section>
  );
});

export const head: DocumentHead = {
  title: "Boda B&J",
  meta: [
    {
      name: "description",
      content: "Página para la confirmacion de asistencia, información relevante al evento",
    },
  ],
};
