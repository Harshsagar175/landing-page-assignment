const AboutCard = ({ imgSource, alternateText, title, description }) => {
    return (
      <div style={{ backgroundColor: "#001f3f" }} className="w-48 flex flex-col items-center text-center  p-3 rounded-lg shadow-md">
        <img
          src={imgSource}
          alt={alternateText}
          className="w-9 h-9 mb-3 rounded-md"
        />
        <h1 className="text-md font-bold text-white mb-2">{title}</h1>
        <p className="text-sm text-white">{description}</p>
      </div>
    );
  };
  
  export default AboutCard;
  