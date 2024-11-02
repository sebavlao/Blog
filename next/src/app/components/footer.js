import * as React from "react"
import { EsViewLogo } from "../assets/es-view-logo";
import { GitHub } from "../assets/git-hub";
import { Instagram } from "../assets/instagram";
import Link from "next/link";

export const Footer = () => (
    <footer className="flex justify-center mx-auto h-40 w-full max-w-5xl">
        <section className="w-full flex justify-center items-center">
            <EsViewLogo className={"w-1/3"} fill={"#000000"}/>
        </section>
        <section className="w-full">
            <ul className="flex justify-center w-full h-full items-center gap-4">
                <li className="w-full max-w-12">
                    <Link href="#"> 
                        <GitHub  className="w-full h-auto"/>
                    </Link>
                </li>
                <li className="w-full max-w-12">
                    <Link href="#">
                        <Instagram className="w-full h-auto"/>
                    </Link>
                </li>
            </ul>
        </section>
    </footer>
)