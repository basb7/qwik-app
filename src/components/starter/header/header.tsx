import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="z-10">
      <h1 class="text-yellow-700 text-4xl md:text-6xl font-normal font-Cookie text-center pt-10 w-[70%] mx-auto">Se acerca la hora de ser</h1>
      <p class="text-center text-5xl md:text-8xl font-medium font-Cookie text-yellow-700">Sr & Sra</p>
      <p class="text-center text-4xl md:text-6xl font-Cookie">¡Futuros esposos!</p>
    </header>
  );
});
