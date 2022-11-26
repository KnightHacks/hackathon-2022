import { Disclosure } from "@headlessui/react";
import React from "react";
import { CgChevronDown } from "react-icons/cg";
import ContentBox from "../components/ContentBox/ContentBox";

export default function FAQ() {
  return (
    <ContentBox>
      <h1 className="text-center font-bold text-4xl text-white">FAQ</h1>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">What is Knight Hacks?</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Knight Hacks is the University of Central Florida’s massive
              hackathon, where hundreds of students with different skill levels
              come together from around the world to experiment and create
              unique software or hardware projects from scratch. We empower and
              enable teams to make something great in only 36 hours by providing
              an abundance of resources like workshops, mentors, and hardware
              components.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">Who can participate?</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Undergraduate and graduate students from any college or university
              anywhere in the world are eligible to apply to Knight Hacks, as
              well as those who have graduated in the past 12 months.
              Unfortunately, Knight Hacks 2021 cannot admit high school students
              or students under 18 years of age.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">Is Knight Hacks free?</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Admission to Knight Hacks is completely free. Meals, workshops,
              mentorship, swag, hardware, and snacks are free for the entire
              event!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">
                How many people can be on a team?
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              You can form teams of up to 4 people. There are no restrictions
              for team members, so you can team up with hackers of any school,
              country, or experience level. Teams can be formed before or during
              the event.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">What if I am a beginner?</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Knight Hacks welcomes students of all skill levels. In previous
              years, about half of the students have attended Knight Hacks as
              their first hackathon. We’ll have talks, mentors and workshops to
              help you with your project. Hackathons can be a great place to
              learn new skills in a short amount of time. Just be eager to
              learn, and excited to meet lots of awesome people.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">What track should I follow?</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Beginner Track is suggested for those that have attended 0-2
              hackathons before, have 0-2 personal projects, little to no
              experience using GitHub. Advanced Track is suggested for those
              that have attended 2+ hackathons before, have 2+ personal
              projects, and previous experience using GitHub.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">
                What kind of workshops, talks, and activities will there be?
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Previously, we’ve held workshops and talks for a range of skill
              levels from beginner to advanced like Intro to Web Development and
              Virtual Reality. We’ve also had introductory workshops to various
              programming tools such as APIs, databases and platforms. Whether
              it’s for relaxation or health, novelty or competition, our team
              has something exciting prepared for you!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">
                Can I start my project before the hackathon begins?
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              No, you cannot start working on your project before Hacking time
              officially begins. This will result in a disqualification of your
              project for judging.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">
                When registering, why are non-EDU emails perferred?
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              Due to restrictions and filters that .edu email providers have on
              self-hosted websites, it blocks you from recieving a verification
              email after signing up. Those who include their personal emails
              always recieve their verification emails while those using .edu
              unfornately don't. Better to be safe than sorry!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">
                What is the code of conduct for the event?
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              The event uses the MLH code of conduct which can be found{" "}
              <a
                className="underline"
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              >
                here
              </a>
              .
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex text-xl font-bold align-middle text-white gap-3 mt-2">
              <CgChevronDown
                className={`${open ? "rotate-180 transform" : ""} align-middle`}
              />
              <span className="align-middle">404: Question Not Found</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-white mt-2">
              If your question is not listed here, please feel free to reach out
              to us at team@knighthacks.org or message the Knight Hacks Facebook
              or Instagram pages.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </ContentBox>
  );
}

