

type Products = {
  name: string,
  image: string,
  url: string,
}

export default function ProductsView({ product }: { product: Products }) {
  return (
    <div className=" bg-amber-100 ">
      <div className=" h-80 w-80">
        <div className=" overflow-hidden">
          <img className=" hover:scale-125 transition-transform hover:rotate-2" src={product.image} alt={`ImageDe${product.name}`} />
        </div>
      </div>
      <div className="">
        <h1 className=" font-roboto justify-center items-center mb-1 grid cursor-pointer"
        >
          {product.name}
        </h1>
      </div>
    </div>
  )
}
