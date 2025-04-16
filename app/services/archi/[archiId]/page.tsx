import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft} from "lucide-react";
import Image from "next/image";

const projects = {
  "1":{
    title: "Primary School Boys Toilet - Thanjavur",
    image: "/a1.jpg",
    description:
      "A low-cost toilet proposed for a primary school at Thanjavur. Initiative by NGO Mother Earth India Foundation. Exposed brick walls and jaalis were used in the design for natural ventilation and cost efficiency.",
  },
  "2":{
    title: "Ramani's Villa - Dubai",
    image: "/a2.jpg",
    description:
      "An European interior design style approach was taken to design this luxurious villa at Dubai. Keeping the colors minimal and creating a chic and sophisticated ambiance.",
  },
  "3":{
    title: "Doctor's Residence - Chennai",
    image: "/a3.jpg",
    description: "A total build-up of 2480 sq.ft residence designed at Anna Nagar, Chennai.",
  },
  "4":{
    title: "Farmhouse - Thanjavur",
    image: "/a4.jpg",
    description:
      "A simple 720 sq.ft farmhouse designed in a vernacular method. The exposed brick wall gives an authentic natural look, while brick jaalis are used for natural ventilation and sunlight. Local materials like Athangudi tiles and locally available stone for flooring are used, giving a traditional touch to the space and reducing transportation costs. The water body in front helps reduce heat and maintain a lower temperature in the building.",
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
          <div className="space-y-6">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className="object-contain w-full h-[400px] rounded-xl"
            />
            <div className="flex items-start">
              <div className="mt-1 mr-4 bg-primary rounded-full p-1">
                <div className="bg-white rounded-full w-2 h-2"></div>
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}