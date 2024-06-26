/**
 * Services component that displays a list of services offered by the company.
 * This component utilizes animation to bring attention to each service card.
 * @returns {React.Component} - A section with multiple service cards, each detailing a specific service.
 */
function Services() {
  return (
    <section className='pb-20 bg-gray-300 -mt-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div
            className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'
            data-aos='fade-right'
            data-aos-delay='1200'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                  <i className='fas fa-robot'></i>
                </div>
                <h6 className='text-xl font-semibold'>I'm A Robot</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptatibus autem maxime expedita aspernatur tempora.
                </p>
              </div>
            </div>
          </div>
          <div
            className='w-full md:w-4/12 px-4 text-center'
            data-aos='fade-up'
            data-aos-delay='1400'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                  <i className='fas fa-atom'></i>
                </div>
                <h6 className='text-xl font-semibold'>Atom Power</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia
                  nemo ex aut temporibus, in molestiae earum ratione.
                </p>
              </div>
            </div>
          </div>
          <div
            className='pt-6 w-full md:w-4/12 px-4 text-center'
            data-aos='fade-left'
            data-aos-delay='1600'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                  <i className='fas fa-bolt'></i>
                </div>
                <h6 className='text-xl font-semibold'>Infinite Energy</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
                  ipsa veritatis error ratione sunt repudiandae, quasi atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
