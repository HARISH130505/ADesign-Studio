import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft} from "lucide-react";
import Image from "next/image";

const projects = {
  "1":{
    title: "Primary School Boys Toilet",
    image: "/arch1.jpg",
    description:
      "A low-cost toilet proposed for a primary school at Thanjavur. Initiative by NGO Mother Earth India Foundation. Exposed brick walls and jaalis were used in the design for natural ventilation and cost efficiency.",
    location: "Thanjavur",
    size:1200,
    services:"Architecture",
  },
  "2":{
    title: "Devadiga's Residency",
    image: "/arch2.jpg",
    description:
      "A 2700 sq.ft residence designed at Kundapura.While satisfying the clients requirements, aesthetically creating a spacious, area and naturally ventilated, well lit spaces were the main criteria of the design.",
    location: "Mangalore",
    size:1200,
    services:"Architecture",
    },
  "3":{
    title: "Doctor's Residence",
    image: "/arch3.jpg",
    description: "A total build-up of 2480 sq.ft residence designed at Anna Nagar, Chennai.",
    location: "Chennai",
    size:1200,
    services:"Architecture",
  },
  "4":{
    title: "Farmhouse - Thanjavur",
    image: "/arch4.jpg",
    description:
      "A simple 720 sq.ft farmhouse designed in a vernacular method. The exposed brick wall gives an authentic natural look, while brick jaalis are used for natural ventilation and sunlight. Local materials like Athangudi tiles and locally available stone for flooring are used, giving a traditional touch to the space and reducing transportation costs. The water body in front helps reduce heat and maintain a lower temperature in the building.",
    location: "Thanjavur",
    size:1200,
    services:"Architecture",
  },
};

export default async function Archi({ params }: { params: Promise<{ archiId: string }> }) {
  const { archiId } = await params;
  const project = projects[archiId as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-6">
      <div className="container mx-auto px-4">
        <Link
          href="/services/archi"
          className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-semibold">Back to Projects</span>
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
          </div>
          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className="object-contain w-full h-[400px] rounded-xl"
            />
            <div className="flex justify-around my-6 p-4">
              <div className="space-y-3">
                <h1>Location:<br></br><span className="text-gray-500">{project.location}</span></h1>
                <h1>Size:<br></br><span className="text-gray-500">{project.size} sq.ft</span></h1>
                <h1>Services:<br></br><span className="text-gray-500">{project.services}</span></h1>
              </div>
              <div className="md:w-[500px] flex justify-center items-center">
                 <p className="text-gray-700 text-xl">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}