import Banner from "../Banner/Banner";
import GetToKnowUs from "../GetToKnowUs/GetToKnowUs";
import PopularCategoires from "../PopularCategories/PopularCategoires";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategoires></PopularCategoires>
            <GetToKnowUs></GetToKnowUs>
        </div>
    );
};

export default Home;