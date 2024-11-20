import { Menu } from "lucide-react";
import Image from "next/image";

 export const Navbar = () => {
    return(
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3 w-full text-3xl font-semibold">
                <Menu className="size-6"/>
                <Image src="/" alt="Logo" width={40} height={40}/>
            </div>
        </div>
    );
 };