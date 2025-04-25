import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const projects = [
    {
      id: 1,
      title: 'Primary School Boys Toilet - Thanjavur',
      image: '/arch1.jpg',
    },
    {
      id: 2,
      title: "Devadiga's Residency - Mangalore",
      image: '/arch2.jpg',
    },
    {
      id: 3,
      title: "Doctor's Residence - Chennai",
      image: '/arch3.jpg',
    },
    {
      id: 4,
      title: 'Farmhouse - Thanjavur',
      image: '/arch4.jpg',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-gowun font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {projects.map((pro) => (
          <Link href={`archi/${pro.id}`} key={pro.id}>
          <div className="relative group">
            <Image
              src={pro.image}
              alt={pro.title}
              width={300}
              height={300}
              className="object-cover w-full h-[300px] rounded-xl"
            />
            <p className="absolute top-2 right-2 bg-black/60 text-white rounded-lg px-2 py-1 text-sm">
              {pro.id}
            </p>
            <h2 className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 rounded-b-xl">
              {pro.title}
            </h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;