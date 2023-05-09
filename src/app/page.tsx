import { Image360 } from '../components/Image360'
import { InfoProduto } from '../components/InforProduto'

export default function CardProdutoV1() {
  return (
    <main className="flex justify-center items-center gap-10 w-full max-w-5xl mx-auto h-screen max-md:flex-col">
      <Image360 />

      <InfoProduto />
    </main>
  )
}
