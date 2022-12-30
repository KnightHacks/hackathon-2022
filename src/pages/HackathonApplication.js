import React, { useEffect, useState } from "react";
import ContentBox from "../components/ContentBox/ContentBox";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, gql } from "@apollo/client";
import moment from "moment";

export default function HackathonApplication() {
  const [hackathonId, setHackathonId] = useState(0);
  const [succesfullyApplied, setSuccesfullyApplied] = useState("WAITING");
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("code") || !localStorage.getItem("state")) {
      window.location.href = "/auth";
    }
  });

  const [applyPayload, setApplyPayload] = useState({
    resume: null,
    shareInfoWithSponsors: false,
    whatDoYouWantToLearn: "",
    whyAttend: "",
  });

  const APPLY_TO_HACKATHON = gql`
    mutation ApplyToHackathon(
      $hackathonId: ID!
      $input: HackathonApplicationInput!
    ) {
      applyToHackathon(hackathonId: $hackathonId, input: $input)
    }
  `;

  const [applyToHackathon] = useMutation(APPLY_TO_HACKATHON, {
    variables: {
      hackathonId: 1,
      input: applyPayload,
    },
  });

  const UPLOAD_RESUME = gql`
    mutation ($file: Upload!) {
      singleUpload(file: $file) {
        id
      }
    }
  `;

  const [uploadResume] = useMutation(UPLOAD_RESUME, {
    variables: {
      file: applyPayload.resume,
    },
  });

  function apply() {
    console.log(applyPayload);
    uploadResume().then((data) => {
      console.log(data);
    });
    // for (const [key, value] of Object.entries(applyPayload)) {
    //   if (key !== "resume" && value == "") {
    //     toast.error("Please fill out all fields");
    //     return;
    //   }
    // }
    // applyToHackathon()
    //   .then((data) => {
    //     if (data.data.applyToHackathon == true) {
    //       setSuccesfullyApplied("SUCCESS");
    //     } else {
    //       setSuccesfullyApplied("FAIL");
    //     }
    //   })
    //   .catch((error) => {
    //     setSuccesfullyApplied("FAIL");
    //     toast.error("Something went wrong: " + error);
    //   });
    // console.log(data);
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      window.location.replace("/auth");
    }
  });

  const GET_HACKATHONS = gql`
    query Hackathons($filter: HackathonFilter!) {
      hackathons(filter: $filter) {
        id
        term {
          semester
          year
        }
        status
        startDate
        endDate
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_HACKATHONS, {
    variables: {
      filter: {
        semester: "SPRING",
        year: 2023,
      },
    },
  });

  const GET_USER = gql`
    query Applications {
      me {
        applications {
          id
          status
        }
      }
    }
  `;

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hackathonId = urlParams.get("hackathonId");
    if (hackathonId == null) {
      window.location.pathname = "/dashboard";
    } else {
      setHackathonId(hackathonId);
    }
    console.log(userData);
    if (
      userData?.me.applications.filter(
        (application) => application.id == hackathonId + "-" + hackathonId
      ).length > 0
    ) {
      if (
        userData?.me.applications.filter(
          (application) => application.id == hackathonId + "-" + hackathonId
        )[0].status == "ACCEPTED" ||
        userData?.me.applications.filter(
          (application) => application.id == hackathonId + "-" + hackathonId
        )[0].status == "WAITING" ||
        userData?.me.applications.filter(
          (application) => application.id == hackathonId + "-" + hackathonId
        )[0].status == "REJECTED"
      ) {
        setAlreadyApplied(true);
      }
    }
  });

  return (
    <ContentBox>
      <h1 className="text-center font-bold text-4xl text-white">
        KnightHacks{" "}
        {
          data?.hackathons?.filter(
            (hackathon) => hackathon.id == hackathonId
          )[0]?.term.semester
        }{" "}
        {
          data?.hackathons?.filter(
            (hackathon) => hackathon.id == hackathonId
          )[0]?.term.year
        }{" "}
      </h1>
      <br />
      <h1 className="text-center font-bold text-slate-400">
        {moment(data?.hackathons[0].startDate).format("MMM Do")}-
        {moment(data?.hackathons[0].endDate).format("Do")} | UCF Main Campus |
        Open to All Students
      </h1>
      {!alreadyApplied && (
        <div>
          {succesfullyApplied == "WAITING" && (
            <div>
              <form class="w-full">
                <br />
                <div class="w-full pt-4 px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    {" "}
                    Why would you like to participate in this hackathon?
                  </label>
                  <textarea
                    id="whyattend"
                    rows="6"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Answer here"
                    value={applyPayload.whyAttend}
                    onChange={(e) => {
                      setApplyPayload({
                        ...applyPayload,
                        whyAttend: e.target.value,
                      });
                    }}
                  ></textarea>
                </div>

                <div class="w-full pt-4 px-3">
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    {" "}
                    What do you hope to learn from this hackathon?
                  </label>
                  <textarea
                    id="whatlearn"
                    rows="6"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Answer here"
                    value={applyPayload.whatDoYouWantToLearn}
                    onChange={(e) => {
                      setApplyPayload({
                        ...applyPayload,
                        whatDoYouWantToLearn: e.target.value,
                      });
                    }}
                  ></textarea>
                </div>
                <div class="w-full pt-8 px-3">
                  <label
                    class="block mb-2 font-bold text-white"
                    for="file_input"
                  >
                    Upload Resume
                  </label>
                  <input
                    class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="file_input"
                    type="file"
                    onChange={(e) => {
                      setApplyPayload({
                        ...applyPayload,
                        resume: e.target.files[0],
                      });
                    }}
                  ></input>
                </div>
                <div class="w-full pt-4 px-3 form-check">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    id="flexCheckDefault"
                    value={applyPayload.shareInfoWithSponsors}
                    onChange={(e) => {
                      setApplyPayload({
                        ...applyPayload,
                        shareInfoWithSponsors: !e.target.value,
                      });
                    }}
                  ></input>
                  <label
                    class="form-check-label inline-block text-white"
                    for="flexCheckDefault"
                  >
                    I'd like my information to be shared with sponsors.
                  </label>
                </div>
                <div class="w-full pt-4 px-3">
                  <button
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      apply();
                      console.log(applyPayload);
                    }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
          {succesfullyApplied == "SUCCESS" && (
            <div className="w-full justify-center mt-20">
              <h1 className="flex w-full text-center font-bold text-2xl text-white justify-center">
                <span className="flex align-middle gap-2 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-500 w-8 h-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  You have Successfully Applied to KnightHacks!
                </span>{" "}
              </h1>
              <p className="w-full flex text-white mt-6 text-center justify-center">
                Your application has been successfully recieved by the
                KnightHacks team and you can check this dashboard or your email
                for updates on your application.{" "}
              </p>
              <div class="flex justify-center w-full pt-4 px-3">
                <button
                  class="w-3/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    window.location.pathname = "/dashboard";
                  }}
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}
          {succesfullyApplied == "FAIL" && (
            <div className="w-full justify-center mt-20">
              <h1 className="flex w-full text-center font-bold text-2xl text-white justify-center">
                <span className="flex align-middle gap-2 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-red-500 w-8 h-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  We encountered an error while processing your application.
                </span>{" "}
              </h1>
              <p className="w-full flex text-white mt-6 text-center justify-center">
                Please try again. If it still doesn't work please send an email
                to team@knighthacks.org or message us on Discord.{" "}
              </p>
              <div class="flex justify-center w-full pt-4 px-3">
                <button
                  class="w-3/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    window.location.pathname = "/dashboard";
                  }}
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {alreadyApplied && (
        <div className="w-full justify-center mt-20">
          <h1 className="flex w-full text-center font-bold text-2xl text-white justify-center">
            <span className="flex align-middle gap-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-500 w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              You have already applied to KnightHacks!
            </span>{" "}
          </h1>
          <p className="w-full flex text-white mt-6 text-center justify-center">
            You can check your application status on this dashboard or your
            email.
          </p>
          <div class="flex justify-center w-full pt-4 px-3">
            <button
              class="w-3/4 bg-wallcolor hover:bg-wallcolordark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                window.location.pathname = "/dashboard";
              }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </ContentBox>
  );
}

