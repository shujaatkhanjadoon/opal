import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

interface AuthCallbackPageProps {

}
const AuthCallbackPage = async({}: AuthCallbackPageProps) => {

    const auth = await onAuthenticateUser();
    if(auth.status === 200 || auth.status ===201){
        return redirect(`/dashboard/${auth.user?.firstname}${auth.user?.lastname}`);
    }

    if(auth.status === 400 || auth.status === 404 || auth.status === 500){
        return redirect("/auth/sign-in");
    }

};

export default AuthCallbackPage;