import ContentBox from "../components/ContentBox/ContentBox";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import moment from "moment";
import { useEffect } from "react";

export default function Dashboard() {
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
        fullName
        email
      }
    }
  `;

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER);

  const REFRESH_JWT = gql`
    query Query($refreshToken: String!) {
      refreshJWT(refreshToken: $refreshToken)
    }
  `;

  const [refreshJwt, { refreshLoading, refreshError, refreshData }] =
    useLazyQuery(REFRESH_JWT, {
      variables: {
        refreshToken: localStorage.getItem("refreshToken"),
      },
    });

  useEffect(() => {
    if (userError) {
      if (
        userError.message.includes("token is expired by") &&
        localStorage.getItem("refreshToken") !== null
      ) {
        refreshJwt().then((data) => {
          console.log(data);
          //   localStorage.setItem("accessToken", data.data.refreshJWT);
        });
      }
    }
  }, [userError]);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      window.location.replace("/auth");
    }
  });

  return (
    <ContentBox>
      <h1 className="text-center font-bold text-4xl text-white">Dashboard</h1>
      <h2 className="text-white text-xl font-extrabold mt-4">
        Your Information
      </h2>
      <p className="text-white mt-4">Full Name: {userData?.me.fullName}</p>
      <p className="text-white">Email: {userData?.me.email}</p>
      <button
        class="w-1/4 mt-2 bg-wallcolor hover:bg-wallcolordark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => {
          window.location.replace("/modifyuser");
        }}
      >
        Edit Profile Information
      </button>
      <hr className="mt-6" />
      {loading && (
        <p className="text-white text-center text-xl mt-20">Loading...</p>
      )}
      {error && (
        <p className="text-white text-center text-xl mt-20">
          Error: {error.message}
        </p>
      )}
      {data &&
        data.hackathons.map((hackathon) => {
          return (
            <div>
              <div className="flex align">
                <h2 className="text-white text-xl font-extrabold mt-4">
                  Knight Hacks - {hackathon.term.semester} {hackathon.term.year}
                </h2>
                <div className="flex align-middle gap-2 mt-5 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-wallcolor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="font-extrabold text-wallcolor">Apply Now!</h3>
                </div>
              </div>
              <p className="text-white">
                {moment(hackathon.startDate).format("MMM Do YYYY")} -{" "}
                {moment(hackathon.endDate).format("MMM Do YYYY")}
              </p>
              {userData &&
                userData.me.applications.filter(
                  (application) =>
                    application.id == hackathon.id + "-" + hackathon.id
                ).length == 0 && (
                  <button
                    class="w-2/4 mt-2 bg-wallcolor hover:bg-wallcolordark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => {
                      let url = new URL(
                        window.location.protocol +
                          "//" +
                          window.location.host +
                          "/apply"
                      );
                      url.searchParams.append("hackathonId", hackathon.id);
                      window.location = url;
                    }}
                  >
                    Apply to Hackathon
                  </button>
                )}
              {userData &&
                userData.me.applications.filter(
                  (application) =>
                    application.id == hackathon.id + "-" + hackathon.id
                ).length > 0 && (
                  <div>
                    {userData.me.applications.filter(
                      (application) =>
                        application.id == hackathon.id + "-" + hackathon.id
                    )[0].status == "WAITING" && (
                      <div className="bg-white p-6 rounded-xl mt-3">
                        <p className="text-blac">
                          <span className="font-bold">
                            Your application is awaiting review...
                          </span>{" "}
                          <br />
                          <span>
                            You can check back here for updates and email
                            team@knighthacks.org with any questions you might
                            have.
                          </span>
                        </p>
                        <button
                          class="w-1/4 mt-2 bg-wallcolor hover:bg-wallcolordark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Modify Application
                        </button>
                      </div>
                    )}
                    {userData.me.applications.filter(
                      (application) =>
                        application.id == hackathon.id + "-" + hackathon.id
                    )[0].status == "ACCEPTED" && (
                      <p className="text-black bg-white p-3 rounded-xl mt-3">
                        <span className="flex gap-2 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-green-500 w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Your application has been accepted!
                        </span>{" "}
                        <span className="pt-4">
                          We look forward to seeing you at Knight Hacks! You can
                          check your email for more details.
                        </span>
                      </p>
                    )}
                    {userData.me.applications.filter(
                      (application) =>
                        application.id == hackathon.id + "-" + hackathon.id
                    )[0].status == "REJECTED" && (
                      <p className="text-black bg-white p-3 rounded-xl mt-3">
                        <span className="flex gap-2 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-red-500 w-6 h-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          We're Sorry - Your application has been rejected.
                        </span>{" "}
                        <span className="pt-4">
                          We recieved a lot of very qualified applicants this
                          year, and we simply cannot accept everyone. We hope
                          you'll apply again next year and thank you for taking
                          the time to fill out the application!
                        </span>
                      </p>
                    )}
                  </div>
                )}
            </div>
          );
        })}
    </ContentBox>
  );
}

