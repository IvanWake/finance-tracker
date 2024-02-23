import Table from "@/components/Table/Table";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-medium mb-4" >Finance Tracker</h1>
            <Table />
        </div>
    );
}

export default Home;