import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CounterTime from "~/components/starter/counter-time/counterTime";
import Multimedia from "~/components/starter/multimedia/multimedia";
import Form from "~/components/starter/form/form";
import { Information } from "~/components/starter/information/information";
import ImageOG from "/og:image.png"


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
      property: "og:image:type",
      content: "image/jpeg"
    },
    {
      property: "og:image:width",
      content: "400"
    },
    {
      property: "og:image:height",
      content: "868"
    },
    {
      property: "og:image:alt",
      content: "Boda B&J"
    },
    {
      property: "og:url",
      content: "https://invitacion-boda-byj.netlify.app/"
    },
    {
      property: "og:description",
      content: "Página para la confirmación de asistencia, información relevante al evento"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      property: "twitter:title",
      content: "Boda B&J"
    },
    {
      property: "twitter:description",
      content: "Página para la confirmación de asistencia, información relevante al evento"
    },
    {
      property: "twitter:image",
      content: `${ImageOG}`
    },
    {
      property: "twitter:image:alt",
      content: "Boda B&J"
    },
    {
      property: "twitter:url",
      content: "https://invitacion-boda-byj.netlify.app/"
    },
    {
      property: "twitter:domain",
      content: "invitacion-boda-byj.netlify.app"
    }
  ],
};
