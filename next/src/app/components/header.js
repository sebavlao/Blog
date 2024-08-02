import Link from "next/link.js";
import { Switch } from "@nextui-org/switch";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { EsViewLogo } from "../assets/es-view-logo.js";
import { MoonIcon } from "../assets/moon-icon.js";
import { SunIcon } from "../assets/sun-icon.js";

export const Header = () => {
    const menu = ["Blog", "Contacto", "Sobre nosotros"]

    return (
        <Navbar isBlurred="true">
            <NavbarBrand>
            <EsViewLogo color={"#000000"}></EsViewLogo>
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
                <Switch startContent={<MoonIcon />} endContent={<SunIcon />}></Switch>
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
    )
}