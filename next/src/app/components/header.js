"use client";

import * as React from "react";
import Link from "next/link.js";
import { Switch } from "@nextui-org/switch";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { EsViewLogo } from "../assets/es-view-logo.js";
import { MoonIcon } from "../assets/moon-icon.js";
import { SunIcon } from "../assets/sun-icon.js";
import { useTheme } from "next-themes";

export const Header = () => {
  const menu = ["Blog", "Contacto", "Sobre nosotros"];
  const { theme, setTheme } = useTheme();

  const handleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <Navbar isBlurred="true">
      <NavbarBrand className="">
        <Link href="/">
          <EsViewLogo
            className={"w-1/2"}
            fill={theme === "dark" ? "#e63946" : "#000000"}
          ></EsViewLogo>
        </Link>
      </NavbarBrand>
      <NavbarContent className="max-sm:hidden" justify="center">
        {menu.map((option, index) => (
          <NavbarItem key={`${option}-${index}`}>
            <Link href="#">{option}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            classNames={{
              wrapper: "bg-black",
              thumb: theme === "dark" ? "bg-[#e63946]" : "bg-white",
            }}
            startContent={<MoonIcon fill="#000000" />}
            color="secondary"
            endContent={<SunIcon fill="#ffffff" />}
            isSelected={theme === "dark" ? true : false}
            onValueChange={handleTheme}
          ></Switch>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden"></NavbarMenuToggle>
      </NavbarContent>
      <NavbarMenu>
        {menu.map((option, index) => (
          <NavbarMenuItem key={`menu-toogle-${option}-${index}`}>
            <Link href="#">{option}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
