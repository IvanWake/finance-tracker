'use client';

import { useAuth } from "@/store/auth-store";
import Table from "@/components/Table/Table";
import AddField from "@/components/Fields/AddField";
import AuthBlock from "@/components/Auth/AuthBlock";

const Content = () => {
    const { isUserAuth } = useAuth();
    return (
        <>
            {
                isUserAuth ?
                    <>
                        <Table/>
                        <AddField/>
                    </> :
                    <AuthBlock/>
            }
        </>
    );
}

export default Content;