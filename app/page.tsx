import Table from "@/components/Table/Table";
import AddField from "@/components/Fields/AddField";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-between p-4">
            <h1 className="text-3xl font-bold tracking-wide mb-4">Finance Tracker</h1>
            <Table />
            <AddField />
        </div>
    );
}

export default Home;