import React, { useEffect, useState } from "react";
import ContentBox from "../components/ContentBox/ContentBox";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, gql } from "@apollo/client";
import moment from "moment";

export default function HackathonApplication() {
  const [hackathonId, setHackathonId] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("code") || !localStorage.getItem("state")) {
      window.location.href = "/auth";
    }
  });

  const [applyPayload, setApplyPayload] = useState({
    whyAttend: "",
    whatDoYouWantToLearn: "",
    shareInfoWithSponsors: false,
    resume: null,
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
      hackathonId: hackathonId,
      input: applyPayload,
    },
  });

  function apply() {
    for (const [key, value] of Object.entries(applyPayload)) {
      if (value == "") {
        toast.error("Please fill out all fields");
        return;
      }
    }
    applyToHackathon();
    console.log(data);
  }

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

  useEffect(() => {
    console.log(data);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hackathonId = urlParams.get("hackathonId");
    setHackathonId(hackathonId);
  });

  return (
    <ContentBox>
      <h1 className="text-center font-bold text-4xl text-white">
        KnightHacks{" "}
        {
          data?.hackathons.filter((hackathon) => hackathon.id == hackathonId)[0]
            .term.semester
        }{" "}
        {
          data?.hackathons.filter((hackathon) => hackathon.id == hackathonId)[0]
            .term.year
        }{" "}
      </h1>
      <br />
      <h1 className="text-center font-bold text-slate-400">
        {moment(data?.hackathons[0].startDate).format("MMM Do")}-
        {moment(data?.hackathons[0].endDate).format("Do")} | UCF Main Campus |
        Open to All Students
      </h1>

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
              setApplyPayload({ ...applyPayload, whyAttend: e.target.value });
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
          <label class="block mb-2 font-bold text-white" for="file_input">
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
                shareInfoWithSponsors: e.target.value,
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
    </ContentBox>
  );
}

