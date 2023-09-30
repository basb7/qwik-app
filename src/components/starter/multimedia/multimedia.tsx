import { component$ } from "@builder.io/qwik";
import Video from "~/media/Video.webm";

export default component$(() => {
  return (
    <>
      <section class="rounded-lg mt-10 w-[85%] md:w-1/2 mx-auto">
        <video controls preload="metadata" class="w-full rounded-lg">
          <source src={Video} type="video/webm" />
        </video>
      </section>
    </>
  )
})  