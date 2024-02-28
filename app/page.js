import Container from "@/components/Container"
import Image from "next/image"

export default function Home() {
  return (
    <Container>
      <div className="grid lg:grid-cols-12 py-6">
        <div className="lg:col-span-7 ">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none">
            Generating dream rooms <br className="max-md:hidden" />
            <span className="purple_gradient">using AI</span> for everyone
          </h1>

          <p className="hero-desc py-4">
            Upload your photo, choose a mode and pick from over 40 design
            styles.
            <strong>
              Reimagine Any Home Interior, Exterior, or Garden using AI.
            </strong>
          </p>
          <button type="button" className="mt-8 black_btn">
            Redesign now
          </button>
        </div>
        <div className="lg:col-span-5">
          <video src="../public/asset/videos/hero-video.mp4"></video>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center my-2">
          AI-powered landscaping & patio design
        </h2>
        <p className="text-center max-w-[80%] m-auto">
          AI automatically re-designs exterior space and patios, taking into
          account architectural elements such as lawns, backyards, pools and
          outdoor furniture/appliances - from benches to barbeque setups.
        </p>
      </div>
      <div className="grid grid-cols-9 w-full gap-4 my-5">
        <div className="col-span-4">
          <div className="h-64 sm:h-96 relative">
            <Image
              className="rounded-lg object-cover"
              src="/asset/images/original-pic.jpg"
              fill
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-64 sm:h-96 relative flex justify-center items-center ">
            <Image
              className="rounded-lg object-cover"
              src="/asset/images/arrow.png"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="h-64 sm:h-96 relative">
            <Image
              className="rounded-lg object-cover"
              src="/asset/images/original-pic.jpg"
              fill
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
