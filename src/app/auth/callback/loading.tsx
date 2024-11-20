import { Spinner } from "@/components/global/loader/spinner";
import { Loader } from "lucide-react";

export default function AuthLoading(){
    return(
        <>
        {/* <div className="flex items-center justify-center h-screen w-full">
            <Loader className="size-5 text-muted-foreground" />
        </div> */}
        <Spinner />
        </>
    );
};