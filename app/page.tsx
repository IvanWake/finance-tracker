import Link from "next/link";
import Table from "@/components/Table/Table";
import AddField from "@/components/Fields/AddField";
import AuthBlock from "@/components/Auth/AuthBlock";

const Home = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold tracking-wide mb-4">Finance Tracker</h1>
            <AuthBlock />
            <Table/>
            <AddField/>
        </div>
    );
}

export default Home;