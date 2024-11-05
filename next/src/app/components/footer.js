"use client"

import * as React from "react"
import { EsViewLogo } from "../assets/es-view-logo";
import { GitHub } from "../assets/git-hub";
import { Instagram } from "../assets/instagram";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Footer = () => {
    const { theme } = useTheme()

    return (
        <footer className={`h-40 w-full grid`}>
            <section className="flex justify-center justify-self-center md:w-1/2">
                <article className="w-full flex justify-center items-center">
                    <EsViewLogo className={"w-1/3"} fill={theme === "dark" ? "#ffffff" : "#222222"}/>
                </article>
                <article className="w-full">
                    <ul className="flex justify-center w-full h-full items-center gap-4">
                        <li className="w-full max-w-12">
                            <Link href="#"> 
                                <GitHub className="w-full h-auto" fill={theme === "dark" ? "#ffffff" : "#222222"}/>
                            </Link>
                        </li>
                        <li className="w-full max-w-12">
                            <Link href="#">
                                <Instagram className="w-full h-auto" fill={theme === "dark" ? "#ffffff" : "#222222"}/>
                            </Link>
                        </li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}