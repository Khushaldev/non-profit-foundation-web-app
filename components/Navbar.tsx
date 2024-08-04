"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { PrimaryButton } from "./Buttons";
// return (
//   <div className="w-full">
//     <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0 ">
//       {/* Logo  */}
//       <Disclosure>
//         {({ open }) => (
//           <>
//             <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
//               <Link href="/">
//                 <span className="flex items-center space-x-2 text-2xl font-medium ">
//                   <span>
//                     <Image
//                       src="/img/logo.svg"
//                       alt="N"
//                       width="32"
//                       height="32"
//                       className="w-8"
//                     />
//                   </span>
//                   <span className="text-pink-400">Nextly</span>
//                 </span>
//               </Link>

//               <DisclosureButton
//                 aria-label="Toggle Menu"
//                 className="px-2 py-1 ml-auto  rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
//               >
//                 <svg
//                   className="w-6 h-6 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   {open && (
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
//                     />
//                   )}
//                   {!open && (
//                     <path
//                       fillRule="evenodd"
//                       d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//                     />
//                   )}
//                 </svg>
//               </DisclosureButton>

// <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
//   <>
//     {navigation.map((item, index) => (
//       <Link
//         key={index}
//         href="/"
//         className="w-full px-4 py-2 -ml-4 text-black rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
//       >
//         {item}
//       </Link>
//     ))}
//     <Link
//       href="/"
//       className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
//     >
//       Get Started
//     </Link>
//   </>
// </DisclosurePanel>
//             </div>
//           </>
//         )}
//       </Disclosure>

//       {/* menu  */}
//       <div className="hidden text-center lg:flex lg:items-center bg-black">
//         <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
//           {navigation.map((menu, index) => (
//             <li className="mr-3 nav__item" key={index}>
//               <Link
//                 href="/"
//                 className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
//               >
//                 {menu}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="hidden mr-3 space-x-4 lg:flex nav__item">
//         <Link
//           href="/"
//           className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
//         >
//           Get Started
//         </Link>
//       </div>
//     </nav>
//   </div>
// );
//

interface NavigationItem {
  title: string;
  link?: string; // Optional because not all items might have a link
  children?: NavigationItem[]; // Optional because some items might not have children
}

// Create the navigation array using the defined type
const navigation: NavigationItem[] = [
  {
    title: "About us",
    children: [],
    link: "/",
  },
  {
    title: "Our work",
    children: [
      {
        title: "Education",
        link: "/",
      },
      {
        title: "Health",
        link: "/",
      },
      {
        title: "Empowering Grassroots",
        link: "/",
      },
    ],
  },
  {
    title: "Media",
    children: [
      {
        title: "Workshop & Events",
        link: "/",
      },
    ],
  },
  {
    title: "Contact us",
    children: [],
    link: "/",
  },
];

export const Navbar = () => {
  return (
    <div className="bg-white w-full shadow-sm sticky top-0 z-50 ">
      <div className="relative hidden lg:flex justify-between items-center px-10 py-6 mx-auto lg:justify-between">
        <div>SMILE FOUNDATION</div>
        <div className="hidden lg:block">
          {navigation.map((menu, index) =>
            menu.children && menu.children.length > 0 ? (
              <Popover
                className="inline-block px-4 py-2 font-normal no-underline focus:text-active-color rounded-md"
                key={index}
              >
                <PopoverButton className="block data-[active]:text-active-color data-[hover]:text-active-color outline-none">
                  {menu.title}
                </PopoverButton>
                <PopoverPanel
                  transition
                  anchor="bottom"
                  className="mt-10 bg-white shadow-lg transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                >
                  <div className="p-3">
                    {menu.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                        href={child.link}
                      >
                        <p className="text-black">{child.title}</p>
                        {/* Optionally include a description or additional content */}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            ) : (
              <a
                key={index}
                className="inline-block px-4 py-2 font-normal no-underline focus:text-active-color rounded-md"
                href={menu.link} // Use the actual link from menu object
              >
                {menu.title}
              </a>
            ),
          )}
        </div>
        <PrimaryButton title="Donate" className="hidden lg:block" />
      </div>

      <Disclosure as={"div"} className="block lg:hidden" defaultOpen={false}>
        {({ open }) => (
          <>
            <div>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto px-10 py-6 mx-auto">
                <div>SMILE FOUNDATION</div>
                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md lg:hidden hover:text-active-color focus:text-active-color focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>
                <DisclosurePanel className="flex flex-col w-full my-5 lg:hidden">
                  <>
                    {navigation.map((menu, index) =>
                      menu.children && menu.children.length > 0 ? (
                        <Disclosure
                          as={"div"}
                          defaultOpen={false}
                          className="flex flex-col px-4 py-2 font-normal no-underline focus:text-active-color rounded-md"
                          key={index}
                        >
                          {({ open }) => (
                            <>
                              <DisclosureButton
                                aria-label="Toggle Menu"
                                className="flex flex-col data-[active]:text-active-color data-[hover]:text-active-color outline-none"
                              >
                                {menu.title}
                              </DisclosureButton>
                              <DisclosurePanel className="">
                                <div className="p-3">
                                  {menu.children?.map((child, childIndex) => (
                                    <a
                                      key={childIndex}
                                      className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                                      href={child.link}
                                    >
                                      <p className="text-black">
                                        {child.title}
                                      </p>
                                    </a>
                                  ))}
                                </div>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <a
                          key={index}
                          className="inline-block px-4 py-2 font-normal no-underline focus:text-active-color rounded-md"
                          href={menu.link} // Use the actual link from menu object
                        >
                          {menu.title}
                        </a>
                      ),
                    )}
                    <PrimaryButton title="Donate" className="block lg:hidden" />
                  </>
                </DisclosurePanel>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};
