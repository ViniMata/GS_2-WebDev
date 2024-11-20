import imagemFundo from '../assets/images/Designer (1).jpeg';

export default function Home() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-[rgb(208,232,206)]">
                <div className="w-full lg:w-screen">
                    <img
                        className="h-auto w-full lg:w-screen"
                        src={imagemFundo}
                        alt="Imagem de Energias Renováveis"
                    />
                </div>

                <div className="flex mt-12 lg:mt-36 w-full lg:w-1/4 items-center px-4 lg:pr-24">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">
                        Encontre a <span className="font-bold text-green-600">SUA</span> alternativa renovável!
                    </h1>
                </div>
            </div>

            <div className="p-6 lg:p-12">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4 text-center lg:text-left">Quem somos?</h1>
                <p className="text-sm md:text-base lg:text-lg text-justify">
                    Nós da <span className='font-bold'>Energify</span> nos esforçamos para encontrar o melhor substituto renovável e limpo para a sua situação.
                </p>
            </div>
        </>
    );
}
