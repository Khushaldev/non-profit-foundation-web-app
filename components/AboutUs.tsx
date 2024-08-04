import { PrimaryButton } from "./Buttons";

export const AboutUsComponent = () => {
  return (
    <div className="w-full py-16">
      <div className="flex flex-col items-center">
        <div className="text-xl text-center ">Our Work</div>
        <div className="flex justify-center py-4">
          <p className="lg:px-72 md:px-32 px-16 text-center font-light">
            Established in 2002, Smile Foundation is an Indian development
            organization, impacting the lives of over 15 lakh children and their
            families every year.We have more than 400 projects on education,
            healthcare, livelihood, and women empowerment in over 2,000 remote
            villages and urban slums across 25 states of India.
          </p>
        </div>
        <PrimaryButton title="Read more" />
      </div>
    </div>
  );
};
