import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}:AuthLayoutProps) => {
    return(
        <div className="container h-screen flex justify-center items-center">
            {children}
        </div>
    );
};

export default AuthLayout;