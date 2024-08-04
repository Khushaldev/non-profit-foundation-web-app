export const OurProgrammes = () => {
  const programmeData = [
    {
      title: "Education",
      color: "text-orange-500",
      description: "Education, nutrition and holistic development of children",
    },
    {
      title: "HealthCare",
      color: "text-purple-500",
      description:
        "Taking healthcare services to doorsteps of hard to reach communities",
    },
    {
      title: "Women Empowerment",
      color: "text-pink-500",
      description:
        "Empowering adolescent girls & women through community engagement",
    },
    {
      title: "Livelihood",
      color: "text-sky-500",
      description:
        "Skill training and placement support for underprivileged youth",
    },
    {
      title: "Empowering Grassroots",
      color: "text-green-500",
      description:
        "Helping community-based organizations become locally sustainable",
    },
    {
      title: "Diseaster Response",
      color: "text-red-500",
      description:
        "Reach out and respond to the needs of the disaster-affected people",
    },
  ];

  return (
    <div className="bg-secondary w-full py-16 flex flex-col items-center">
      <div className="text-xl text-white text-center">Our Programmes</div>
      <div className="flex justify-around pt-4">
        {/* grid grid-cols-2 gap-x-48 gap-y-8 */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          {programmeData.map((item, index) => {
            return (
              <div
                key={index}
                className="h-auto w-72 flex flex-col justify-start py-4"
              >
                <p className={`font-normal text-2xl ${item.color}`}>
                  {item.title}
                </p>
                <p className="font-normal text-pretty text-white">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
