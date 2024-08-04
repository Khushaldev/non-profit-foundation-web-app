export const OurImpact = () => {
  const programmeData = [
    {
      title: "PROJECTS FUNDED",
      count: "12,000+",
    },
    {
      title: "STATES",
      count: "25+",
    },
    {
      title: "PEOPLE WILL BE SERVED",
      count: "90,000+",
    },
  ];

  return (
    <div className="bg-tertiary w-full py-16 flex flex-col items-center">
      <div className="text-xl text-center text-black ">Our Impact</div>
      <div className="flex justify-center pt-4 lg:px-72 md:px-32 px-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {programmeData.map((item, index) => {
            return (
              <div className="py-4" key={index}>
                <div className="text-center">
                  <div className="font-medium text-2xl">{item.count}</div>
                  <div className="font-normal text-pretty">{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
