import PaletteImg from '../assets/Palette.svg';
import AlternativasComponent from './Alternativas';


export default function Servicospt1() {

  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg py-16 conteudo-esquerda h-full">
    <img src={PaletteImg.src} alt="" />
    <h2 className="font-semibold text-subheading-3 text-brand-primary">E o que a gente faz?</h2>
    <div className="overflow-hidden" style={{ overflowX: 'auto' }}>
    <AlternativasComponent />
    </div>
    <p className="font-brand mt-6 text-lg leading-8 text-gray-600">
    A Beabstracto conta com profissionais especialistas em audiovisual, tecnologia e marketing, oferecendo soluções integradas e inovadoras para atender às necessidades variadas da sua empresa.
    </p>
    </div>
  )
}