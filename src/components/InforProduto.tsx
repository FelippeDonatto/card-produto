export function InfoProduto() {
  return (
    <>
      <div className="w-full">
        <p className="font-mono leading-[100%] font-light text-xs mb-3">
          CÓDIGO: 42404
        </p>
        <h2 className="font-sans font-semibold text-[32px] leading-[100%] mb-3">
          Sofá Margot II - Rosé
        </h2>

        <p className="font-mono leading-[100%] font-normal text-base mb-5">
          R$ 4.000
        </p>

        <button className="border border-rose-900 px-4 py2 rounded-full h-[32px]">
          ADICIONAR À CESTA
        </button>
      </div>
    </>
  )
}
