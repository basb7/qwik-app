import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {

  const Dias = useSignal('00')
  const Horas = useSignal('00')
  const Minutos = useSignal('00')
  const Segundos = useSignal('00')

  useVisibleTask$(({ cleanup }) => {
    const id = setInterval(() => {
      // Fecha de finalización (por ejemplo, 31 de diciembre de 2023 a las 23:59:59)
      const fechaFinalizacion = new Date("2024-01-20T15:00:00").getTime();

        // Función para actualizar el contador regresivo
      const fechaActual = new Date().getTime();
      const tiempoRestante = fechaFinalizacion - fechaActual;

      if (tiempoRestante >= 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        Dias.value = dias.toString().padStart(2, '0');
        Horas.value = horas.toString().padStart(2, '0');
        Minutos.value = minutos.toString().padStart(2, '0');
        Segundos.value = segundos.toString().padStart(2, '0');

      } else {
        // Si la fecha final ya ha pasado, mostrar un mensaje o realizar alguna acción
        const elementContador = document.getElementById("contador");
        if (elementContador) {
          elementContador.textContent = "El contador ha terminado";
        }
      }
    }, 1000);
    cleanup(() => clearTimeout(id));
  })


  return (
    <>
      <div id="contador" class="text-center mt-10">
        <div class="flex gap-4 justify-center">
          <div>
            <span class="text-green-600 font-medium text-5xl" id="dias">{Dias}</span>
            <p class="text-center">Días</p>
          </div>
          <div>
            <span class="text-green-600 font-medium text-5xl" id="horas">{Horas}</span>
            <p class="text-center">Horas</p>
          </div>
          <div>
            <span class="text-green-600 font-medium text-5xl" id="minutos">{Minutos}</span>
            <p class="text-center">Minutos</p>
          </div>
          <div>
            <span class="text-green-600 font-medium text-5xl" id="segundos">{Segundos}</span>
            <p class="text-center">Segundos</p>
          </div>
        </div>
      </div>
    </>
  )
})