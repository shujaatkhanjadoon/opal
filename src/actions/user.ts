"user server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async() => {
    try {
        const user = await currentUser();
        if(!user){
            return ({"User not found": {status: 403}});
        }

        const existingUser = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
        });
    }
    catch(error) {
        
    }
}