import Container from "@/Components/Container";
import Image from "next/image";

export default function LifeCycle() {
  return (
    <Container>
      <div>
        <div className="text-heading ">
          <h1 className="text-5xl max-w-[800px] font-bold">
            Discover Our Seamless Process for Websites, SEO, and Digital
            Marketing
          </h1>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap justify-center gap-5 py-10 ">
          {processSteps.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex gap-8 py-2 rounded text-center ${
                  index === 1
                    ? "lg:mt-[90px]"
                    : index === 2
                    ? "lg:mt-[170px]"
                    : index === 3
                    ? "lg:mt-[250px]"
                    : ""
                }`}
              >
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-5 rounded flex justify-center">
                    <Image
                      src={item.image}
                      alt="Sample"
                      width={100}
                      height={90}
                      className="max-h-[60px] object-contain"
                    />
                  </div>
                  <h3 className="text-xl text-black font-bold">{item.title}</h3>
                  <h3>{item.description}</h3>
                </div>

                {/* Show the arrow only after index 0 and 1 */}
                {index < 3 && (
                  <div className="text-3xl font-bold text-blue-600  mt-[70px] hidden lg:flex">
                    <Image
                      src="/curved-arrow.png"
                      alt="Arrow"
                      width={80}
                      height={80}
                      className="-rotate-[19deg] max-w-[100px] max-h-[200px] object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const processSteps = [
  {
    image: "/1.png",
    title: "Strategy & Planning",
    description: "We analyze your goals and craft a tailored strategy.",
  },
  {
    image: "/2.png",
    title: "Design & Development",
    description: "We build stunning, user-friendly, and optimized websites.",
  },
  {
    image: "/3.png",
    title: "SEO & Marketing",
    description: "We boost visibility with SEO and data-driven marketing.",
  },
  {
    image: "/4.png",
    title: "Launch & Growth",
    description: "We launch, support, and scale your success. 🚀",
  },
];
