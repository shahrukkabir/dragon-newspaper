import Header from "./Header";
import LatestNews from "./LatestNews";
import NavBar from "./NavBar";
import LeftNav from "./Layout-Components/LeftNav"
import RightNav from "./Layout-Components/RightNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
                <section className="w-11/12 mx-auto py-6">
                    <NavBar></NavBar>
                </section>
                <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                    <aside className="col-span-3">
                        <LeftNav></LeftNav>
                    </aside>
                    <section className="col-span-6">
                        <Outlet></Outlet>
                    </section>
                    <aside className="col-span-3">
                        <RightNav></RightNav>
                    </aside>
                </main>
            </header>
        </div>
    );
};

export default HomeLayout;