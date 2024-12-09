const SectionTitle = ({ subHeading, heading, info }) => {
  return (
    <div className="text-center space-y-6">
      <p className="text-[#f03c30] text-xl font-medium">-------{subHeading}</p>
      <p className="md:text-6xl font-extrabold">{heading}</p>
      <p className="md:text-lg md:w-3/4 xl:w-1/2 mx-auto">{info}</p>
    </div>
  );
};

export default SectionTitle;
