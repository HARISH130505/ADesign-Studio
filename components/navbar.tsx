"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [menuFlg, setMenuFlg] = useState(false);
  const [submenuFlg, setSubmenuFlg] = useState<number | null>(null);
  const pathname = usePathname();

  function handleChange() {
    setMenuFlg(!menuFlg);
    if (!menuFlg) setSubmenuFlg(null);
  }

  const handleLinkClick = () => {
    setMenuFlg(false);
    setSubmenuFlg(null);
  };

  const toggleSubmenu = (index: number) => {
    setSubmenuFlg(submenuFlg === index ? null : index);
  };

  useEffect(() => {
    setMenuFlg(false);
    setSubmenuFlg(null);
  }, [pathname]);

  const menuItems = [
    {
      title: "Services",
      href: "/services",
      submenu: [
        { title: "Architectural Design", href: "/services/archi" },
        { title: "Planning Applications", href: "/services/planning" },
        { title: "Interior Design", href: "/services/interior" },
        { title: "Renovation", href: "/services/renovation" },
        { title: "Graphics Design & Arts", href: "/services/graphics" },
      ],
    },
    {
      title: "Ideas",
      href: "/ideas",
      submenu: [
        { title: "Research", href: "/ideas/research" },
        { title: "Sustainability", href: "/ideas/sustain" },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-10">
      <nav className="flex justify-between p-6 items-center">
        <Link href="/" onClick={handleLinkClick}>
          <h1 className="md:text-2xl text-white z-30 relative">ADesign Studio</h1>
        </Link>
        <button
          className="cursor-pointer text-4xl px-2 text-white z-30 relative"
          onClick={handleChange}
        >
          {menuFlg ? <X /> : <Menu />}
        </button>
      </nav>

      {menuFlg && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-90 flex justify-center items-center z-20">
          <div className="flex items-center">
            <ul className="flex flex-col">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 text-2xl text-white relative"
                >
                  {item.submenu ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(index);
                      }}
                      className="text-left text-white cursor-pointer"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link href={item.href} onClick={handleLinkClick}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {submenuFlg !== null && (
              <div className="flex ml-10">
                <div className="border-l border-gray-500 mx-4"></div>
                <ul className="flex flex-col items-start text-white">
                  {menuItems[submenuFlg].submenu?.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href} onClick={handleLinkClick}>
                      <li className="py-4 text-xl cursor-pointer">{subItem.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;