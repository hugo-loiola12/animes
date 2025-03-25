"use client";
import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { usePathname } from "next/navigation"; // Adicionando a importação do usePathname
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname(); // Usando o hook usePathname

  return (
    <HeroUINavbar
      isBlurred
      isBordered
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Animes Hugo</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href; // Verificando se o item está ativo

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: isActive ? "primary" : "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  style={{
                    color: isActive ? "#0072F5" : "var(--color-foreground",
                  }}
                  href={item.href}
                  title={item.label}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = pathname === item.href; // Verificando se o item está ativo

            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    isActive
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "foreground"
                        : "foreground"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
