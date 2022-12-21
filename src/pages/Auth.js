import React from "react";
import ContentBox from "../components/ContentBox/ContentBox";
import { FaGithub } from "react-icons/fa";
import { gql, useLazyQuery } from "@apollo/client";
import makeFetchCookie from "fetch-cookie";

export default function Auth() {
  const GET_AUTH_LINK = gql`
    query Request($provider: Provider!) {
      getAuthRedirectLink(provider: $provider)
    }
  `;

  const [signInWithGithub, { loading, error, data }] = useLazyQuery(
    GET_AUTH_LINK,
    {
      variables: {
        provider: "GITHUB",
      },
    }
  );

  return (
    <ContentBox>
      <h1 className="text-center font-bold text-4xl text-white">
        Register for KnightHacks 2023
      </h1>
      <br />
      <h1 className="text-center font-bold text-slate-400">
        February 3-5th | UCF Main Campus | Open to All Students
      </h1>
      <div className="flex justify-center mt-8">
        <button
          className="flex align-middle bg-white w-2/4 py-2 justify-center rounded-lg font-bold hover:bg-gray-200 gap-4"
          onClick={() => {
            signInWithGithub().then((data) => {
              console.log(data);
              window.open(data.data.getAuthRedirectLink, "_self");
            });
          }}
        >
          <FaGithub size={32} />
          <span className="mt-1">Sign in with Github</span>
        </button>
      </div>
    </ContentBox>
  );
}

