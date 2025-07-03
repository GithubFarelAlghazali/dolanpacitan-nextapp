import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
     {
          name: "Beranda",
          link: "home",
     },
     {
          name: "Tentang",
          link: "about",
     },
     {
          name: "Acara",
          link: "event",
     },
     {
          name: "Berita",
          link: "news",
     },
];

const Navbar = () => {
     const [isOpen, setIsOpen] = React.useState(false);

     const toggleMenu = () => setIsOpen((prev) => !prev);

     return (
          <nav className="rounded-md bg-purple-950 text-white shadow-md fixed top-2 left-2 right-2 z-50 transition-all duration-200">
               <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/">
                         <p className="font-bold text-xl">DolanPacitan</p>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                         {links.map((link, index) => (
                              <a href={`/#${link.link}`} key={index}>
                                   <span className="hover:text-violet-600 hover:bg-white p-2 rounded-md">{link.name}</span>
                              </a>
                         ))}
                    </div>

                    <div className="md:hidden">
                         <Button variant="ghost" size="icon" onClick={toggleMenu}>
                              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                         </Button>
                    </div>
               </div>

               {isOpen && (
                    <div className="md:hidden flex flex-col absolute bg-purple-950 p-3 rounded-md right-1 left-1 my-3 px-4 pb-4 space-y-2">
                         {links.map((link, index) => (
                              <a href={`/#${link.link}`} key={index}>
                                   <span className="block hover:text-purple-950 hover:bg-white p-1 rounded-sm">{link.name}</span>
                              </a>
                         ))}
                    </div>
               )}
          </nav>
     );
};

export default Navbar;
