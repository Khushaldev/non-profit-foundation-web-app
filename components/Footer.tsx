import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <div className="h-auto w-full bg-black flex flex-col text-white lg:px-72 md:px-32 px-16 ">
      <div className="py-16 flex lg:flex-row flex-col pb-8 justify-between">
        <ContactUs />
        <div className="lg:pl-2 flex">
          <div className="p-2">
            <SocialIcon
              style={{ width: "24px", height: "24px" }}
              url="https://x.com"
            />
          </div>
          <div className="p-2">
            <SocialIcon
              style={{ width: "24px", height: "24px" }}
              url="https://facebook.com"
            />
          </div>
          <div className="p-2">
            <SocialIcon
              style={{ width: "24px", height: "24px" }}
              url="https://instagram.com"
            />
          </div>
          <div className="p-2">
            <SocialIcon
              style={{ width: "24px", height: "24px" }}
              url="https://www.whatsapp.com/"
            />
          </div>
          <div className="p-2">
            <SocialIcon
              style={{ width: "24px", height: "24px" }}
              url="https://web.telegram.org/k/"
            />
          </div>
        </div>
      </div>
      <p className="text-xs font-light text-justify">
        © 2024 | charity: water Donation Processing Center, PO Box 5026,
        Hagerstown, MD 21741-5026 | c/o TC Citroen Wells Limited, 5th Floor, 3
        Dorset Rise,
      </p>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="text-justify text-sm font-light">
      <p>Non profit Foundation</p>
      <p>Khera Dabar, South West Delhi- 110073, Centre New Delhi, India</p>
      <p>Contact Us: Tel: +91-9311685282 | E-mail: info@foundationindia.org</p>
    </div>
  );
};
