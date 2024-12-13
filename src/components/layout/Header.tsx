"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#achievements", label: "Achievements" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const NavLink = ({
  href,
  label,
  isMobile = false,
  onClick,
}: NavLink & { isMobile?: boolean; onClick?: () => void }) => (
  <Link
    href={href}
    className={`
      ${isMobile ? "block py-3" : "inline-block px-3 py-2"}
      text-lg font-medium text-gray-700 hover:text-blue-600
      transition-colors duration-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-blue-400
    `}
    onClick={onClick}
  >
    {label}
  </Link>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md mb-8">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Sommysmart Care
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                className="md:hidden bg-gray-200"
                variant="ghost"
                size="icon"
              >
                <Menu size={20} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    {...link}
                    isMobile
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
