'use client'

import { RiLinkedinFill, RiGithubFill, RiWhatsappFill, RiSkypeFill } from 'react-icons/ri'
import { SiUpwork } from "react-icons/si";
import Link from 'next/link'


const icons = [
    {
        path: 'https://wa.me/918238079597',
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
    }
];

const Socials = ({ containerStyles, iconsStyles }) => {

    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link target="_blank" href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials