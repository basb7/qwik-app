import { component$ } from '@builder.io/qwik';

export const Maps = component$(() => {
  return (
    <>
      <section class="mx-auto my-5">
        <h3 class="text-3xl text-center py-3">¿Como llegar?</h3>
        <iframe class="w-[80%] mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.659011963529!2d-74.08379512410991!3d4.654757295320096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bb3e0cd9b97%3A0x6e58d26b08d3087d!2sParque%20de%20los%20Novios!5e0!3m2!1ses!2sco!4v1696613685576!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
});