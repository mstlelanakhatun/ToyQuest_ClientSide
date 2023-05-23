import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";
import BestToys from "./BestToys";
import Gallery from "./Gallery";
import HappyCustomer from "./HappyCustomer/HappyCustomer";
import TabSection from "./TabSection/TabSection";


const Home = () => {

    useTitle('Home')

    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <HappyCustomer></HappyCustomer>
            <BestToys></BestToys>
        </div>
    );
};

export default Home;