import Content from "@/components/Layout/Content";
import LogOut from "@/components/Auth/LogOut";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="flex justify-end items-center w-full mb-4">
                <LogOut/>
            </div>
            <div className="flex-grow text-center text-center text-5xl font-medium tracking-wide pl-8">Finance Tracker</div>
            <Content />
        </div>

    );
}

export default Home;