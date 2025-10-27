'use client'
import { Icon } from "@/components/icon";
import links from "@/data/social-links.json";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Children } from "react";

export default function BioComponent() {
  return (
    <section 
   className="relative flex flex-col items-center justify-center h-screen"
  >
    <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/8S6A6403.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10, 
          ease: "easeInOut",
          repeat: Infinity, 
          repeatType: "mirror",
        }}
      />
   <ul className='relative flex flex-col items-center justify-between gap-4 w-full px-4'>
        {Children.toArray(links.social_links.map((link) => {
          return (
            <li
              className={clsx(
                'w-full flex flex-none cursor-pointer p-4 max-w-80 items-center justify-center border text-sm uppercase border-gray-50/30 text-gray-50 bg-gray-50/20 backdrop-blur-xs dark:border-neutral-700 dark:bg-black rounded-full')}
            >
              <Link
                href={link.path}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center w-full justify-center"
              >
                <Icon name={link.icon} />
                <span className="ml-2">{link.name}</span>
              </Link>
            </li>
          )
        }))}
      </ul>
</section>
  )
}