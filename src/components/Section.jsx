const Section = ({ image, title, paragraph, mt, animate }) => {
  return (
    <div>
      <img
        className={`m-auto animate-bounce ${animate} ${mt} lg:ml-0 lg:mt-[100px]`}
        src={image}
        alt="icon-snappy-process"
      />
      <p className="lg:text-left lg:ml-0 font-DM-Serif-Display mt-10 text-3xl text-Very-Dark-Violet text-center">
        {title}
      </p>
      <p className="lg:text-left lg:ml-0 font-Karla w-[90%] mt-5 m-auto text-center text-Dark-Grayish-Violet">
        {paragraph}
      </p>
    </div>
  );
};

export default Section;
