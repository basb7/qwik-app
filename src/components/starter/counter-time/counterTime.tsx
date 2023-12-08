import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

export default component$(() => {

  const Dias = useSignal('00')
  const Horas = useSignal('00')
  const Minutos = useSignal('00')
  const Segundos = useSignal('00')

  const startConfetti = $(async () => {
    const defaults = {
      spread: 360,
      ticks: 70,
      gravity: 0,
      decay: 0.95,
      startVelocity: 30,
      colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
      origin: {
        x: 0.5,
        y: 0.35,
      },
    };

    function loadConfetti() {
      return new Promise<(opts: any) => void>((resolve, reject) => {
        if ((globalThis as any).confetti) {
          return resolve((globalThis as any).confetti as any);
        }
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
        script.onload = () =>
          resolve((globalThis as any).confetti as any);
        script.onerror = reject;
        document.head.appendChild(script);
        script.remove();
      });
    }

    const confetti = await loadConfetti();

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 80,
        scalar: 1.2,
      });

      confetti({
        ...defaults,
        particleCount: 60,
        scalar: 0.75,
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 300);
    setTimeout(shoot, 400);
  })

  useVisibleTask$(({ cleanup }) => {
    const id = setInterval(() => {
      // Fecha de finalización (por ejemplo, 31 de diciembre de 2023 a las 23:59:59)
      const fechaFinalizacion = new Date("2024-02-04T00:00:00").getTime();

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

          const html = `<div>
                          <span class="text-green-600 font-medium text-4xl md:text-9xl">¡Hoy es el gran día <br/> en donde dos almas se juntan! <br /> 🤵🏻💓 👰🏻‍♀️</span>
                        </div>`

          elementContador.innerHTML = html

          startConfetti()
        }
      }
    }, 1000);
    cleanup(() => clearTimeout(id));
  })


  return (
    <>
      <div id="contador" class="text-center mt-10">
        <div class="flex gap-4 md:gap-8 justify-center">
          <div>
            <span class="text-green-600 font-medium text-5xl md:text-9xl" id="dias">{Dias}</span>
            <p class="text-center md:text-4xl">Días</p>
          </div>
          <div>
            <span class="text-green-600 font-medium text-5xl md:text-9xl" id="horas">{Horas}</span>
            <p class="text-center md:text-4xl">Horas</p>
          </div>
          <div>
            <span class="text-green-600 font-medium text-5xl md:text-9xl" id="minutos">{Minutos}</span>
            <p class="text-center md:text-4xl">Minutos</p>
          </div>
          <div>
            <span class="text-green-600 font-medium text-5xl md:text-9xl" id="segundos">{Segundos}</span>
            <p class="text-center md:text-4xl">Segundos</p>
          </div>
        </div>
      </div>
    </>
  )
})