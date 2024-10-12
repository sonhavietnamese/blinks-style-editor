import Image from "next/image"

export default function Color() {
  return (
    <>
      <div className="flex items-center gap-x-1.5 text-sm">
        <h2>Handpick Palettes</h2>
      </div>

      <section className="mt-4 flex flex-col gap-2">
        <div className="relative flex flex-col gap-2 gap-x-1.5 rounded-lg border border-black/5 p-2 transition-colors ease-in-out hover:border-black/10">
          <div className="flex h-[100px] w-full items-center justify-center overflow-hidden rounded-md"></div>
          <figure className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDOOxKmcega-38L774PJRObkGKZGYKq3mJw&s"
              }
              alt="color"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
            />
          </figure>

          <button className="absolute bottom-2 right-2 flex items-center justify-center space-x-1 rounded-md bg-[#e6e6e6]/50 p-1 px-2 text-black/60 ease-in-out hover:bg-[#e6e6e6]/80">
            <span className="text-xs">Apply</span>
          </button>
        </div>

        <div className="relative flex flex-col gap-2 gap-x-1.5 rounded-lg border border-black/5 p-2 transition-colors ease-in-out hover:border-black/10">
          <div className="flex h-[100px] w-full items-center justify-center overflow-hidden rounded-md"></div>
          <figure className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDOOxKmcega-38L774PJRObkGKZGYKq3mJw&s"
              }
              alt="color"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
            />
          </figure>

          <button className="absolute bottom-2 right-2 flex items-center justify-center space-x-1 rounded-md bg-[#e6e6e6]/50 p-1 px-2 text-black/60 ease-in-out hover:bg-[#e6e6e6]/80">
            <span className="text-xs">Apply</span>
          </button>
        </div>

        <div className="relative flex flex-col gap-2 gap-x-1.5 rounded-lg border border-black/5 p-2 transition-colors ease-in-out hover:border-black/10">
          <div className="grid h-[100px] w-full grid-cols-4 grid-rows-2 items-center justify-center gap-1 overflow-hidden rounded-md">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-full w-full rounded-md"></div>
            ))}
          </div>
          <figure className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDOOxKmcega-38L774PJRObkGKZGYKq3mJw&s"
              }
              alt="color"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
            />
          </figure>

          <button className="absolute bottom-2 right-2 flex items-center justify-center space-x-1 rounded-md bg-[#e6e6e6]/50 p-1 px-2 text-black/60 ease-in-out hover:bg-[#e6e6e6]/80">
            <span className="text-xs">Apply</span>
          </button>
        </div>
      </section>
    </>
  )
}
