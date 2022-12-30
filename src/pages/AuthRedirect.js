import { useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import makeFetchCookie from "fetch-cookie";
import { toast } from "react-hot-toast";

const fetchCookie = makeFetchCookie(
  fetch,
  new makeFetchCookie.toughCookie.CookieJar()
);

export default function AuthRedirect() {
  const LOGIN = gql`
    query Login($code: String!, $provider: Provider!, $state: String!) {
      login(code: $code, provider: $provider, state: $state) {
        accessToken
        accountExists
        encryptedOAuthAccessToken
        refreshToken
      }
    }
  `;

  const [login, { loading, error, data }] = useLazyQuery(LOGIN, {
    variables: {
      provider: "GITHUB",
      code: localStorage.getItem("code"),
      state: localStorage.getItem("state"),
    },
  });

  const REGISTER = gql`
    mutation Register(
      $encryptedOAuthAccessToken: String!
      $input: NewUser!
      $provider: Provider!
    ) {
      register(
        encryptedOAuthAccessToken: $encryptedOAuthAccessToken
        input: $input
        provider: $provider
      ) {
        accessToken
        refreshToken
      }
    }
  `;

  const [register, { registerData, registerError }] = useMutation(REGISTER, {
    variables: {
      encryptedOAuthAccessToken: localStorage.getItem(
        "encryptedOAuthAccessToken"
      ),
      input: {},
      provider: "GITHUB",
    },
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    localStorage.setItem("code", code);
    const state = urlParams.get("state");
    localStorage.setItem("state", state);
    login().then((res) => {
      if (res.error) {
        toast.error(
          "Error logging in. Please try again. If the problem persists, please contact team@knighthacks.com with the error message below"
        );
      }
      if (res.data) {
        if (!res.data.login.accountExists) {
          localStorage.setItem(
            "encryptedOAuthAccessToken",
            res.data.login.encryptedOAuthAccessToken
          );
          window.location.pathname = "/register";
        } else {
          localStorage.setItem("accessToken", res.data.login.accessToken);
          localStorage.setItem("refreshToken", res.data.login.refreshToken);
          window.location.pathname = "/dashboard";
        }
      }
    });
  }, []);

  return (
    <div className="flex justify-center align-middle h-full">
      <div>
        <h1 className="flex align-middle mt-64 font-bold text-3xl">
          Redirecting you to the Dashboard...
        </h1>
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className=" text-center mt-4">Error: {error.message} </p>}
      </div>
    </div>
  );
}

