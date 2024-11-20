import imagemFundo from '../assets/images/Designer (1).jpeg'

export default function Home() {
    return (
        <>
        <div className='flex '>
            <div className='w-screen'>
                <img className="h-auto w-screen " src={imagemFundo} alt="Imagem de Energias Renováveis" />
            </div>
            <div className=' flex mt-36 w-1/4 items-center'>
                <h1 className="text-5xl">Encontre a <span className="font-bold">SUA</span> alternativa renovável!</h1>
            </div>
        </div>
        </>
    )
}