import Banner from "../../Components/Banner/Banner";

const Home = () =>{
    return (
        <div>
           {/* Banner component */}
            <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center">
                <Banner/>
            </div>
        </div>
    )
}
export default Home;