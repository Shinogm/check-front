"use client"
import Link from "next/link";
import { IconArrowBack } from '@tabler/icons-react'

interface BackProps {
    url?: string;
    children?: React.ReactNode;
}

export const Back = ({ url, children }: BackProps) => {
    const backUrl = url || "/"; // Usamos la URL proporcionada, o "/" como valor predeterminado
    return (
        <section className="flex justify-center items-center h-full">
            <Link
                onClick={() => {
                    console.log('Click en el link')
                }}
                href={backUrl}
                className="
                    text-blue-500
                    hover:text-blue-400
                    dark:text-blue-400
                    dark:hover:text-blue-300
                    cursor-pointer
                    flex
                    items-center
                    gap-2
                "
            >
                <div className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                ">
                    <IconArrowBack />
                    {children}
                </div>
            </Link>
        </section>
    );
}

