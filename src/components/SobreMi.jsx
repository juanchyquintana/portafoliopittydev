import { Image } from "react-bootstrap"
import logo from '../img/LogoPittyDev.png'


const SobreMi = () => {
  return (
    <>
        <section className='bg-white rounded text-center shadow mb-5'>
            <div className="py-4">
                <p className='lead text-uppercase'>Desarrollo de Páginas Webs</p>

                <div className='text-uppercase'>
                    <h3>Mi nombre es Quintana Juan Diego,</h3>
                    <p className='h3'>Full-Stack Developer</p>
                </div>

                <p className='lead pt-3'>PittyDev es el reflejo de mi ilusion por crecer como profesional dentro de la industria del desarrollo web. Me he desarrollado en React.js y otras herramientas para ofrecer el mejor servicio.</p>

                <Image src={logo} alt="logo" className="img-fluid img-logo" />

            </div>

        </section>
    </>
  )
}

export default SobreMi