import { component$ } from '@builder.io/qwik';

export const Information = component$(() => {
  return (
    <>
      <section class="mx-auto w-[80%] md:w-[80%] my-5 md:grid md:grid-cols-2 text-center justify-center md:border-yellow-600 md:border-4 md:rounded">
        <div class="md:border-yellow-600 md:border-r-4">
          <h3 class="text-3xl md:text-6xl text-center py-3">Información del evento</h3>
          <div class="px-3 my-auto text-center text-3xl md:text-5xl h-[390px] flex flex-col justify-center">
            <p class="text-yellow-700">Hora: <span class="text-black">15:00</span></p>
            <p class="text-yellow-700">Fecha: <span class="text-black">04 de Febrero 2024</span></p>
            <p class="text-yellow-700">Dirección: <span class="text-black">La Calera #5 Km 4, Usaquén, Bogotá, Cundinamarca (Valle Arriba)</span></p>
            <p class="text-yellow-700">Vestido: <span class="text-black">Formal</span></p>
            <p class="text-yellow-700">Disponibilidad de parqueadero: <span class="text-black">Sí</span></p>
            <div class="border-l-8 border-r-8 border border-[#DEAB69] shadow-xl mt-9 md:mt-2">
              <p class="text-yellow-700 text-4xl md:text-7xl font-medium">¡Lluvia de sobres!</p>
            </div>
          </div>
        </div>
        <div class="h-full">
          <h3 class="text-3xl md:text-6xl text-center py-3">¿Como llegar?</h3>
          <iframe class="w-[95%] mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2119.1658203226116!2d-74.02296776916458!3d4.674966926101718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f917e44b6ff9d%3A0x3dad705baa38f84c!2sValle%20Arriba%20Centro%20de%20Eventos!5e0!3m2!1ses!2sco!4v1700691713229!5m2!1ses!2sco" width="400" height="390" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
});