// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAdminAuth() {
    const [ loading, setLoading ] = useState( true );
    const [ isAdmin, setIsAdmin ] = useState( false );
    const router = useRouter();

    useEffect( () => {
        const user = localStorage.getItem( "user" ); // Or fetch from context / API
        if ( !user ) {
            router.replace( "/login" ); // Redirect to login if not logged in
            return;
        }

        const parsedUser = JSON.parse( user );
        if ( !parsedUser?.role || parsedUser.role !== "admin" ) {
            router.replace( "/login" ); // Or show "Unauthorized"
            return;
        }

        setIsAdmin( true );
        setLoading( false );
    }, [ router ] );

    return { loading, isAdmin };
}
