import AboutCard from "./AboutCard";
import Namaste from "../images/namaste.webp";

const About = () => {
  return (
    <div style={{ backgroundColor: "#001f3f" }} className="p-8 rounded-md">
      <div className="w-full sm:w-[55%] mx-auto mb-12 text-center">
        <p className="text-sm font-bold" style={{ color: "#005f9f" }}>
          Trusted by over 20 Million Devotees in India and 100,000+ NRIs
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          India's most loved devotional application
        </h1>
        <p className="text-base text-gray-300">
          We are on a mission to assist a billion Indians in their spiritual
          journey and guide them on the path towards feeling happy, peaceful, and
          content.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <AboutCard
          imgSource={Namaste}
          title="2 Crore+ Devotees"
          description="have trusted us in their devotional journey"
          alternateText="Namaste"
        />
        <AboutCard
          imgSource={Namaste}
          title="50 Lakh+ Downloads"
          description="across various platforms"
          alternateText="Namaste"
        />
        <AboutCard
          imgSource={Namaste}
          title="100+ Temples Partnered"
          description="to provide live darshan"
          alternateText="Namaste"
        />
        <AboutCard
          imgSource={Namaste}
          title="24x7 Support"
          description="for your devotional needs"
          alternateText="Namaste"
        />
      </div>
    </div>
  );
};

export default About;
