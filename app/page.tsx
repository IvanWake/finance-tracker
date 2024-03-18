import Content from "@/components/Layout/Content";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4 w-full h-[100vh]">
            <div className="py-6">
                <h1 className="text-5xl font-medium tracking-wide">Finance Tracker</h1>
            </div>
            <Content />
        </div>
    );
}

export default Home;