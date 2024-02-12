'use client'

import { RiLinkedinFill, RiGithubFill, RiWhatsappFill, RiSkypeFill, RiInstagramFill, RiFacebookFill, RiSlackFill } from 'react-icons/ri'
import { SiUpwork, SiFreelancer } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

import Link from 'next/link'

const icons = [
    {
        path: '/',
        name: <RiWhatsappFill />
    },
    {
        path: '/',
        name: <RiSkypeFill />
    },
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <SiUpwork />
    },
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },
    {
        path: '/',
        name: <SiFreelancer />
    },
    {
        path: '/',
        name: <TbBrandFiverr />
    },
    {
        path: '/',
        name: <RiSlackFill />
    }
];

const SocialsFooterIcons = ({ containerStyles, iconsStyles }) => {

    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SocialsFooterIcons