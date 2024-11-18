import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import HeaderText from "../components/Header";
import Posts from "../components/Posts";
import Review from "../components/Review";

const Home = () => {
    return ( 
        <>
        <Banner />
        <HeaderText />
        <Posts />
        <About />
        <Review />
        <Contact />
        </>
     );
}
 
export default Home;