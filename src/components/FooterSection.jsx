const FooterSection = () => {
  const Companies = ["How we work", "Why Insure?", "Check Price", "Reviews"];
  const Helps = ["FAQ", "Terms of use", "Privacy policy", "Cookies"];
  const Contacts = ["Sales", "Support", "Live chat"];
  const Others = ["Careers", "Press", "Licenses"];

  return (
    <div className="lg:flex relative justify-around">
      <div className="lg:mt-0 mt-10">
        <p className="uppercase mb-10 lg:text-left text-center font-Karla text-Dark-Grayish-Violet tracking-[2px] text-base font-bold">
          Our Company
        </p>

        {Companies.map((company, index) => (
          <a
            key={index}
            className="block mt-3 lg:w-full w-max m-auto uppercase lg:text-left hover:underline transition-all font-[1000] font-Karla tracking-[2px] text-base text-Very-Dark-Violet"
            href="#"
          >
            {company}
          </a>
        ))}
      </div>

      <div className="lg:mt-0 mt-10">
        <p className="uppercase mb-10 text-center lg:text-left font-Karla text-Dark-Grayish-Violet tracking-[2px] text-base font-bold">
          Help me
        </p>

        {Helps.map((help, index) => (
          <a
            key={index}
            className="block mt-3 lg:w-full w-max m-auto uppercase text-center lg:text-left hover:underline transition-all font-[1000] font-Karla tracking-[2px] text-base text-Very-Dark-Violet"
            href="#"
          >
            {help}
          </a>
        ))}
      </div>

      <div className="lg:mt-0 mt-10">
        <p className="uppercase mb-10 text-center lg:text-left font-Karla text-Dark-Grayish-Violet tracking-[2px] text-base font-bold">
          Contact
        </p>

        {Contacts.map((contact, index) => (
          <a
            key={index}
            className="block mt-3 lg:w-full w-max m-auto uppercase text-center lg:text-left hover:underline transition-all font-[1000] font-Karla tracking-[2px] text-base text-Very-Dark-Violet"
            href="#"
          >
            {contact}
          </a>
        ))}
      </div>

      <div className="lg:mt-0 mt-10 mb-28">
        <p className="uppercase mb-10 text-center lg:text-left font-Karla text-Dark-Grayish-Violet tracking-[2px] text-base font-bold">
          Others
        </p>

        {Others.map((other, index) => (
          <a
            key={index}
            className="block mt-3 lg:w-full w-max m-auto uppercase text-center lg:text-left hover:underline transition-all font-[1000] font-Karla tracking-[2px] text-base text-Very-Dark-Violet"
            href="#"
          >
            {other}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
