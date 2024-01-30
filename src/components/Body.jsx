import React from "react";
import Card from "./Card";

const Body = () => {
  return (
    <>
      <section className="bg-transparent p-5 flex flex-col justify-between gap-24">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl text-white font-bold">
            Welcome to Squbix Digital
          </h1>
          <p className="text-2xl text-[var(--fore-dim-color)">
            At Squbix Digital, we aim to work with the latest technology to
            solve the needs and requirements of our clients. Passionate about
            using cutting-edge technology to meet client needs, delivering
            high-quality solutions for business success.
          </p>
        </div>

        <div className="flex flex-col gap-5 ">
          <h1 className="text-5xl text-white font-bold">Our Services</h1>
          <p className="text-2xl text-[var(--fore-dim-color)">
            Your one-stop solution for business success in today's dynamic
            market. Our Services range from idea transformation to product
            enhancement:
          </p>

          <div className="grid grid-cols-2 gap-5">
            <Card
              heading={"Product Development"}
              desc={
                "We excel in turning your ideas into exceptional products, ensuring precision, quality, and efficiency through expert collaboration and cutting-edge technology."
              }
            />
            <Card
              heading={"Product Enhancement"}
              desc={
                "Enhance your existing product with tailored solutions to optimize user experiences, boost performance, and seamlessly integrate new functionalities."
              }
            />

            <Card
              heading={"Custom Solutions"}
              desc={
                "We provide custom solutions tailored to your unique business needs, be it a mobile app, web application, or complex enterprise solution aligned with your goals."
              }
            />

            <Card
              heading={"Technology Consulting "}
              desc={
                "Informed decisions with industry expertise. We advise on tech selection, architecture, scalability, and security to empower your business."
              }
            />
            <Card
              heading={"Ongoing Support and Maintenance"}
              desc={
                "Committed to long-term client partnerships. Our support and maintenance services ensure smooth operation, continuous improvement, and proactive security."
              }
            />
          </div>
          <p className="text-xl">
            At Squbix Digital, we are dedicated to delivering exceptional
            services that empower businesses to thrive in the ever-evolving
            digital landscape. Reach out to us today to discuss your unique
            requirements and discover how our services can take your business to
            new heights.
          </p>
        </div>
      </section>
    </>
  );
};

export default Body;
