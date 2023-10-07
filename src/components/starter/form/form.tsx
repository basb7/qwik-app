import { component$, useSignal, $, useTask$ } from '@builder.io/qwik';
import { useSendPost } from '~/routes/layout';
import { Form } from '@builder.io/qwik-city';

export default component$(() => {

  const data = useSendPost()
  const showModal = useSignal(false);
  const inputCode = useSignal('');
  const disableButton = useSignal(true);
  const helperText = useSignal('');
  const showModalSuccess = useSignal(false)

  useTask$(({ track }) => {
    track(() => inputCode.value);
    
    if (inputCode.value.length > 4) {
      helperText.value = 'Solo se permiten 4 digitos. Ej: 4563'
    }

    if (inputCode.value.length === 4 ) {
      disableButton.value = false;
      helperText.value = "";
      return
    }
    disableButton.value = true;
  });
  

  const handleSetShowModal = $(() => {
    showModal.value = !showModal.value;
  });


  const handleSubmitComplite = $(() => {
    inputCode.value = "";
    handleSetShowModal()
    if (data.value?.responseAPI.status === "created") {
      showModalSuccess.value = !showModalSuccess.value;
    }
  });


  const handleShowModalSuccess = $(() => {
    showModalSuccess.value = !showModalSuccess.value
  })


  return (
    <section>
      <button onClick$={handleSetShowModal} class="mt-6 mx-auto block md:text-4xl text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-[#DEAB69] font-medium rounded text-lg px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 tracking-wide" type="button">
        Confirmar asistencia
      </button>

      {
        (showModal.value) && (
          <div class="fixed flex justify-center items-center backdrop-blur-sm top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick$={handleSetShowModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 pt-10 text-3xl font-medium text-gray-900 dark:text-white">Ingresa el código de verificación</h3>
                        <Form class="space-y-6" action={data} onSubmitCompleted$={handleSubmitComplite}>
                            <div>
                                <label for="number" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Código de 4 digitos</label>
                                <input bind:value={inputCode} min={0} max={9999} type="number" name="codigo" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm roundedfocus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="1234" required />
                                <p class="text-red-600">{helperText.value}</p>
                            </div>
                            <div class="flex justify-between">
                              {
                                data.isRunning
                                ? <button class="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-[#DEAB69] font-medium rounded text-2xl px-5 py-1 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 disabled:opacity-50" disabled>...</button>
                                : <button type="submit" disabled={disableButton.value} class="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-[#DEAB69] font-medium rounded text-2xl px-5 py-1 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 disabled:opacity-50">Enviar</button>
                                
                              }
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
          </div> 
        )
      }
      {
        showModalSuccess.value && (
          <div class="fixed flex justify-center items-center backdrop-blur-sm top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick$={handleShowModalSuccess} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 pt-10 text-3xl font-medium text-center text-gray-900 dark:text-white">Gracias por tu confirmación.</h3>
                        <button onClick$={handleShowModalSuccess} type='button' class="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-[#DEAB69] font-medium rounded text-2xl px-5 py-1 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 disabled:opacity-50">Cerrar</button>
                    </div>
                </div>
            </div>
          </div> 
        )
      }

    </section>
  )
});