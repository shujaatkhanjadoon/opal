import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-2 text-lg xl:text-3xl font-semibold">
                {/* <Menu className="size-6" /> */}
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                SK Opal
            </div>
            <div className="hidden gap-x-10 items-center lg:flex">
                <Link href="/"
                    className="bg-[#7320dd] py-2 px-5 text-lg rounded-full hover:bg-[#7320dd]/80"
                >
                    Home</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Contact</Link>

            </div>
            <Link href="/auth/sign-in">
                <Button className="text-base flex gap-x-2">
                    <User fill="#000" />
                    Login
                </Button>
            </Link>
        </div>

    );
};