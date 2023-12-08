import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CounterTime from "~/components/starter/counter-time/counterTime";
import Multimedia from "~/components/starter/multimedia/multimedia";
import Form from "~/components/starter/form/form";
import { Information } from "~/components/starter/information/information";
import ImageOG from "../../public/og:image.png"


export default component$(() => {
  return (
    <section class="z-10">
      <CounterTime />
      <Multimedia />
      <Form />
      <Information />
    </section>
  );
});

export const head: DocumentHead = {
  title: "Boda B&J",
  meta: [
    {
      name: "description",
      content: "Página para la confirmación de asistencia, información relevante al evento"
    },
    {
      property: "og:title",
      content: "Boda B&J"
    },
    {
      property: "og:type",
      content: "Website"
    },
    {
      property: "og:image",
      content: `${ImageOG}`
    },
    {
      property: "og:url",
      content: "https://invitacion-boda-byj.netlify.app/"
    }
  ],
};
