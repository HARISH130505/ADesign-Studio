import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: 'Primary School Boys Toilet - Thanjavur',
    p1: '/a1.jpg',
    desc:"A low cost toilet proposed for a primary school at Thanjavur.Initiative by a NGO Mother Earth India Foundation.Exposed brick walls and jaalis were used in the design for natural ventilation and also cost efficient."
  },
  {
    id: 2,
    title: "Ramani's Villa - Dubai",
    p1: '/a2.jpg',
    desc:"An European interior design style approach was taken to design this luxurious villa at Dubai Keeping the colurs minimal and creating a chic and sophisticated ambiance."
  },
  {
    id: 3,
    title: "Doctor's Residence - Chennai",
    p1: '/a3.jpg',
    desc:"A total build up of 2480 sq.ft residence designed at Anna Nagar,Chennai."
  },
  {
    id: 4,
    title: 'Farmhouse - Thanjavur',
    p1: '/a4.jpg',
    desc:"A simple 720 sq.ft farm house designed in vernacular method.The exposed brick wall giving it an authentic natural look, while the brick jalis are used for natural ventilation and sunlight.Local materilas like athangudi tiles and locally availabe stone for flooring are used,giving a traditional touch to the space and reducing the transportation cost.The water body in the front would help to reduce the heat and maintain a lower temprature in the building."
  },
]
export default async function Archi({ params }: { params: Promise<{ archiId: string }> }) {
    const { archiId } = await params;
    const project = projects[archiId as keyof typeof projects]
   
    if (!project) {
      notFound()
    }

    return(
      <div>
         <Link href="/archi" className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 mb-8">
            <ArrowLeft size={20} className="mr-2" />
         </Link>
         <div>
           {projects.map((pro)=>(
            <div key={pro.id}>
              <Image
                src={pro.p1}
                alt={pro.title}
                width={300}
                height={300}
                className="object-cover w-full h-[300px] rounded-xl"
              />
              <h1>{pro.title}</h1>
              <p>{pro.desc}</p>
             </div>
           ))}
         </div>
      </div>
    );
}