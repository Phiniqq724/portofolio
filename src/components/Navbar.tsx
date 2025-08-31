"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LinkButton, Button } from "./Buttons";

interface NavbarProps {
  title: string;
  href: string;
}

interface SocialMedia {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  const openMenu = () => {
    if (menu) {
      // Jika menutup menu, tunggu animasi selesai sebelum menyembunyikan elemen
      setTimeout(() => setShouldRenderMenu(false), 500); // Durasi animasi rise
    } else {
      setShouldRenderMenu(true); // Tampilkan elemen sebelum membuka menu
    }
    setMenu(!menu);
  };

  const links: NavbarProps[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const socialMedia: SocialMedia[] = [
    {
      title: "Linkedin",
      href: "http://www.linkedin.com/in/fahrell-sandy-zhariif",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0,0,250,250"
        >
          <g
            fill="#3a3a3a"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Github",
      href: "https://github.com/Phiniqq724",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0,0,256,256"
        >
          <g
            fill="#3a3a3a"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(8.53333,8.53333)">
              <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/caesiium_/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0,0,256,256"
        >
          <g
            fill="#3a3a3a"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(8.53333,8.53333)">
              <path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-around items-center py-4">
        <div className="">
          <Link href="/" className="focus:outline-none">
            <h1 className="text-2xl font-bold text-white">Fahrell Sandy</h1>
          </Link>
        </div>
        <Button
          onClick={openMenu}
          className="z-50 "
          variant={menu ? "secondary" : "primary"}
          icon={
            <div className="">
              <span
                className={`block w-6 h-1 m-1 duration-500 ${
                  menu ? "translate-y-1 rotate-45 bg-primary" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-1 m-1 duration-500 ${
                  menu ? "-translate-y-1 -rotate-45 bg-primary" : "bg-white"
                }`}
              ></span>
            </div>
          }
        ></Button>
        {shouldRenderMenu && (
          <>
            <ul
              className={`w-full h-screen bg-secondary fixed top-0 left-0 flex flex-col gap-8 justify-center items-center z-40 ${
                menu ? "animate-fall" : "animate-rise"
              }`}
            >
              {links.map((link) => (
                <li key={link.title} className="flex flex-col gap-8 group tes">
                  <Link href={link.href}>
                    <h1 className="text-primary xl:text-8xl text-4xl uppercase relative duration-500 group-hover:text-gray-600">
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:bg-gray-600 transition-all duration-500 group-hover:w-full"></span>
                    </h1>
                  </Link>
                </li>
              ))}
              <li className="flex gap-8 group">
                {socialMedia.map((social) => (
                  <LinkButton
                    key={social.title}
                    variant="secondary"
                    link={social.href}
                    icon={social.icon}
                    className="items-center"
                    target="_blank"
                  ></LinkButton>
                ))}
              </li>
            </ul>
          </>
        )}
        <style jsx>{`
          @keyframes fall {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes rise {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
          .animate-fall {
            animation: fall 0.5s ease-out forwards;
          }
          .animate-rise {
            animation: rise 0.5s ease-out forwards;
          }
        `}</style>
      </nav>
    </div>
  );
}
