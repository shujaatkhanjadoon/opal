import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";


interface DashboardPageProps {

}
const DashboardPage = async({}: DashboardPageProps) => {

    const auth = await onAuthenticateUser();
    if(auth.status === 200 || auth.status ===201){
        return redirect(`/dashboard/${auth.user?.workspace[0].id}`);
    }

    if(auth.status === 400 || auth.status === 404 || auth.status === 500){
        return redirect("/auth/sign-in");
    }

};

export default DashboardPage;