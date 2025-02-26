import Image from "next/image";

const techIcons = [
  { src: "/nodejs.png", name: "Node Js" },
  { src: "/react.png", name: "React" },
  { src: "/angular.png", name: "Angular" },
  { src: "/swift.png", name: "Swift" },
  { src: "/ts.png", name: "TypeScript" },
  { src: "/flutter.png", name: "Flutter" },
  { src: "/.net.png", name: ".NET" },
  { src: "/python.png", name: "Python" },
  { src: "/next.png", name: "Next.js" },
  { src: "/kubmates.png", name: "Kubernetes" },
  { src: "/docker.png", name: "Docker" },
  { src: "/javascript.png", name: "JavaScript" },
  { src: "/nestjs.png", name: "Nest.js" },
  { src: "/postgraysql.png", name: "PostgreSQL" },
  { src: "/mongodb.png", name: "MongoDB" },
  { src: "/php.png", name: "PHP" },
  { src: "/kotlin.png", name: "Kotlin" },
  { src: "/mysql.png", name: "MySQL" },
  { src: "/teraform.png", name: "Terraform" },
  { src: "/golang.png", name: "Golang" },
  { src: "/vuejs.png", name: "Vue.js" },
  { src: "/java.png", name: "Java" },
  { src: "/rubby.png", name: "Ruby" },
];

export default function Technologies() {
  return (
    <div className="py-10 px-5">
      <h1 className="text-4xl font-bold text-center py-5">Our Technologies and Platforms</h1>
      <h1 className="text-lg text-center mb-8">We provide mobile and web application solutions the way you want them by using the latest technologies and platforms.
      </h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center">
        {techIcons.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={tech.src} alt={tech.name} width={80} height={80} />
            <p className="mt-2 text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
