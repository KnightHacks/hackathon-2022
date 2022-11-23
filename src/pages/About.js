import React from "react";
import ContentBox from "../components/ContentBox/ContentBox";

export default function About() {
  return (
    <ContentBox>
      <h1 className="text-center font-extrabold text-4xl text-white">About</h1>
      <h3 className="text-white font-bold text-2xl">Who are we?</h3>
      <p className="text-white mt-3">
        Founded in 2015, Knight Hacks is a Registered Student Organization (RSO)
        at the University of Central Florida that covers all things tech and
        software development, as well as host our annual hackathon attended by
        students from around the world! We host club events throughout every
        semester, which you can check out on ourwebsite. Any and all students at
        UCF are welcome at our weekly events!
      </p>
      <h3 className="text-white font-bold text-2xl mt-4">Our Hackathon</h3>
      <p className="text-white mt-3">
        Connect, collaborate, and create with over 700 of the brightest and most
        enthusiastic developers, engineers, and designers in the south-east and
        around the world! Whether you're a season hacker or a complete tech
        newbie, Knight Hacks welcomes you! Just bring an open mind and a
        insatiable desire to learn, and we'll take care of the rest. Create a
        product, learn new skills, and have fun with friends old and new - all
        in 36 hours!
      </p>
      <h3 className="text-white font-bold text-2xl mt-4">Beginner Track</h3>
      <p className="text-white mt-3">
        First time hacker? Don't have a lot of programming experience? Don't
        worry! Here's how we plan to make our hackathon beginner friendly.
      </p>
      <p className="text-white mt-3 pl-4">
        <span className="font-semibold">Beginner Friendly Hacker Packet</span>
        <br />
        This will include information to provide insight and inspiration to
        start developing a project. It includes times and descriptions of all
        the beginner focused events that we are going to have. <br />
        <br />
        <span className="font-semibold">Beginner Workshops</span>
        <br />
        These will require little to any knowledge and introduce key knowledge
        for developing a project such as wireframing/prototyping, JavaScript,
        Python, and more!
        <br /> <br />
        <span className="font-semibold">Beginner Prize Track</span> <br />
        The purpose of this prize track is to encourage new hackers to submit
        and learn something by the end of the hackathon! Some judging criteria
        for this prize will primarily be based on having a strong and clear
        project proposal such as a good wireframe/ prototype, clear project
        requirements, and researching what technologies would be needed to fully
        implement the idea.
        <br />
        <br />
        <span className="font-semibold"> Prize Track</span> <br />
        Choosing the beginner track does not disqualify you from winning a
        general track prize.
        <br />
        <br />
      </p>
    </ContentBox>
  );
}

