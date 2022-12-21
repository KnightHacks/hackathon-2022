import React, { useEffect, useState } from "react";
import ContentBox from "../components/ContentBox/ContentBox";
import toast from "react-hot-toast";
import { gql, useMutation, useQuery } from "@apollo/client";
import moment from "moment";

export default function ModifyProfile() {
  const [registerPayload, setRegisterPayload] = useState({
    firstName: "",
    lastName: "",
    age: Number,
    gender: "",
    yearsOfExperience: Number,
    pronouns: {
      subjective: "",
      objective: "",
    },
    email: "",
    phoneNumber: "",
    race: "",
    shirtSize: "",
    mailingAddress: {
      addressLines: ["", ""],
      city: "",
      country: "",
      postalCode: "",
      state: "",
    },
    educationInfo: {
      name: "",
      major: "",
      level: "",
      graduationDate: moment(new Date()).format(),
    },
    mlh: {
      shareInfo: false,
      codeOfConduct: false,
      sendMessages: false,
    },
  });

  const UPDATE_USER = gql`
    mutation UpdateUser($updateUserId: ID!, $input: UpdatedUser!) {
      updateUser(id: $updateUserId, input: $input) {
        id
      }
    }
  `;

  const [updateUser, { updateData, updateError }] = useMutation(UPDATE_USER, {
    variables: {
      id: 1,
      input: registerPayload,
    },
  });

  const GET_USER = gql`
    query Me {
      me {
        age
        educationInfo {
          graduationDate
          level
          major
          name
        }
        email
        firstName
        gender
        lastName
        mailingAddress {
          addressLines
          city
          country
          postalCode
          state
        }
        mlh {
          codeOfConduct
          sendMessages
          shareInfo
        }
        phoneNumber
        pronouns {
          objective
          subjective
        }
        race
        shirtSize
        yearsOfExperience
      }
    }
  `;

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER);

  function update() {
    setRegisterPayload({
      ...registerPayload,
      educationInfo: {
        ...registerPayload.educationInfo,
        graduationDate: moment(
          registerPayload.educationInfo.graduationDate
        ).format(),
      },
    });
    updateUser().then((res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    console.log(userData?.me);
  }, []);

  return (
    <ContentBox>
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white cursor-pointer"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
            clip-rule="evenodd"
          />
        </svg>
        <h1 className="text-center font-bold text-4xl text-white">
          Modify your KnightHacks Profile
        </h1>
        <div></div>
      </div>
      <br />
      <h1 className="text-center font-bold text-slate-400">
        Change the information below to update your KnightHacks profile
      </h1>

      <form class="w-full">
        <br />
        <h5 className="text-white mb-4 font-bold">Personal Information</h5>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstname"
              type="text"
              placeholder="First Name"
              value={registerPayload.firstName}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  firstName: e.target.value,
                })
              }
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastname"
              type="text"
              placeholder="Last Name"
              value={registerPayload.lastName}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  lastName: e.target.value,
                })
              }
            ></input>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="age"
              type="number"
              placeholder="Age"
              value={registerPayload.age}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  age: parseInt(e.target.value),
                })
              }
            ></input>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="levelofstudy"
                value={registerPayload.gender}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    gender: e.target.value,
                  })
                }
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Nonbinary</option>
                <option>Other / Prefer not to answer</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="yearsexperience"
              type="number"
              placeholder="Years of Experience"
              value={registerPayload.yearsOfExperience}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  yearsOfExperience: parseInt(e.target.value),
                })
              }
            ></input>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="subjective"
              type="text"
              placeholder="Subjective Prns. (he, she, they)"
              value={registerPayload.pronouns.subjective}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  pronouns: {
                    ...registerPayload.pronouns,
                    subjective: e.target.value,
                  },
                })
              }
            ></input>
          </div>

          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="objective"
              type="text"
              placeholder="Objective Prns. (him, her, them)"
              value={registerPayload.pronouns.objective}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  pronouns: {
                    ...registerPayload.pronouns,
                    objective: e.target.value,
                  },
                })
              }
            ></input>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              placeholder="Email Address"
              value={registerPayload.email}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  email: e.target.value,
                })
              }
            ></input>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={registerPayload.phoneNumber}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  phoneNumber: e.target.value,
                })
              }
            ></input>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={registerPayload.race}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  race: e.target.value,
                })
              }
            >
              <option value="">Race / Ethnicity</option>
              <option value="PREFER">Other / Prefer not to answer</option>
              <option value="AFRICAN_AMERICAN">Black / African-American</option>
              <option value="ASIAN_PACIFIC_ISLANDER">
                Asian / Pacific Islander
              </option>
              <option value="CAUCASIAN">White / Caucasian</option>
              <option value="LATINO">Hispanic / Latino</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={registerPayload.shirtSize}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  shirtSize: e.target.value,
                })
              }
            >
              <option>Shirt Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
              <option value="XXXXL">XXXXL</option>
            </select>
          </div>
        </div>

        <div class="relative pb-4">
          <div class="flex flex-wrap -mx-3 pt-8">
            <div class="w-full px-3">
              <h5 className="text-white mb-4 font-bold">
                Address (for swag and shipping)
              </h5>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="line1"
                type="text"
                placeholder="Address Line 1"
                value={registerPayload.mailingAddress.addressLines[0]}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    mailingAddress: {
                      ...registerPayload.mailingAddress,
                      addressLines: [
                        e.target.value,
                        registerPayload.mailingAddress.addressLines[1],
                      ],
                    },
                  })
                }
              ></input>
            </div>
            <div class="w-full px-3 mt-1">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="line2"
                type="text"
                placeholder="Address Line 2"
                value={registerPayload.mailingAddress.addressLines[1]}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    mailingAddress: {
                      ...registerPayload.mailingAddress,
                      addressLines: [
                        registerPayload.mailingAddress.addressLines[0],
                        e.target.value,
                      ],
                    },
                  })
                }
              ></input>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6 mt-1">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="city"
                type="text"
                placeholder="City"
                value={registerPayload.mailingAddress.city}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    mailingAddress: {
                      ...registerPayload.mailingAddress,
                      city: e.target.value,
                    },
                  })
                }
              ></input>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="state"
                  value={registerPayload.mailingAddress.state}
                  onChange={(e) =>
                    setRegisterPayload({
                      ...registerPayload,
                      mailingAddress: {
                        ...registerPayload.mailingAddress,
                        state: e.target.value,
                      },
                    })
                  }
                >
                  <option>State</option> <option>AL</option> <option>AK</option>{" "}
                  <option>AZ</option> <option>AR</option> <option>CA</option>{" "}
                  <option>CO</option> <option>CT</option> <option>DE</option>
                  <option>DC</option> <option>FL</option> <option>GA</option>{" "}
                  <option>HI</option> <option>ID</option> <option>IL</option>{" "}
                  <option>IN</option> <option>IA</option>
                  <option>KS</option> <option>KY</option> <option>LA</option>{" "}
                  <option>ME</option> <option>MD</option> <option>MA</option>{" "}
                  <option>MI</option> <option>MN</option>
                  <option>MS</option> <option>MO</option> <option>MT</option>{" "}
                  <option>NE</option> <option>NV</option> <option>NH</option>{" "}
                  <option>NJ</option> <option>NM</option>
                  <option>NY</option> <option>NC</option> <option>ND</option>{" "}
                  <option>OH</option> <option>OK</option> <option>OR</option>{" "}
                  <option>PA</option> <option>RI</option>
                  <option>SC</option> <option>SD</option> <option>TN</option>{" "}
                  <option>TX</option> <option>UT</option> <option>VT</option>{" "}
                  <option>VA</option> <option>WA</option>
                  <option>WV</option> <option>WI</option> <option>WY</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="zipcode"
                type="text"
                placeholder="ZIP Code"
                value={registerPayload.mailingAddress.postalCode}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    mailingAddress: {
                      ...registerPayload.mailingAddress,
                      postalCode: e.target.value,
                    },
                  })
                }
              ></input>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 pt-4">
            <div class="w-full px-3">
              <h5 className="text-white mb-4 font-bold">School Information</h5>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="line1"
                type="text"
                placeholder="School Name"
                value={registerPayload.educationInfo.name}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    educationInfo: {
                      ...registerPayload.educationInfo,
                      name: e.target.value,
                    },
                  })
                }
              ></input>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2 -mt-3">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="major"
              type="text"
              placeholder="Major"
              value={registerPayload.educationInfo.major}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  educationInfo: {
                    ...registerPayload.educationInfo,
                    major: e.target.value,
                  },
                })
              }
            ></input>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="levelofstudy"
                value={registerPayload.educationInfo.level}
                onChange={(e) =>
                  setRegisterPayload({
                    ...registerPayload,
                    educationInfo: {
                      ...registerPayload.educationInfo,
                      level: e.target.value,
                    },
                  })
                }
              >
                <option>Level Of Study</option>
                <option value="FRESHMAN">Freshman</option>
                <option value="SOPHOMORE">Sophomore</option>
                <option value="JUNIOR">Junior</option>
                <option value="SENIOR">Senior</option>
                <option value="SUPER_SENIOR">Super Senior</option>
                <option value="GRADUATE">Graduate</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="graddate"
              type="datetime-local"
              placeholder="Graduation Date"
              value={registerPayload.educationInfo.graduationDate}
              onChange={(e) => {
                // console.log(fromTimestampToRfc3339Nano(e.target.value));
                setRegisterPayload({
                  ...registerPayload,
                  educationInfo: {
                    ...registerPayload.educationInfo,
                    graduationDate: moment(e.target.value).format(),
                  },
                });
              }}
            ></input>
          </div>

          <div class="w-full pt-10 px-3 form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value={registerPayload.mlh.shareInfo}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  mlh: {
                    ...registerPayload.mlh,
                    shareInfo: !registerPayload.mlh.shareInfo,
                  },
                })
              }
              id="flexCheckDefault"
            ></input>
            <label
              class="form-check-label inline-block text-white"
              for="flexCheckDefault"
            >
              I'd like my resume to be shared with sponsors.
            </label>
          </div>

          <div class="w-full pt-4 px-3 form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value={registerPayload.mlh.codeOfConduct}
              onChange={(e) =>
                setRegisterPayload({
                  ...registerPayload,
                  mlh: {
                    ...registerPayload.mlh,
                    codeOfConduct: !registerPayload.mlh.codeOfConduct,
                  },
                })
              }
              id="flexCheckDefault"
            ></input>
            <label
              class="form-check-label inline-block text-white"
              for="flexCheckDefault"
            >
              I agree to the MLH Code of Conduct.
            </label>
          </div>

          <div class="w-full pt-8 px-3">
            <button
              class="w-full bg-wallcolor hover:bg-wallcolordark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={update}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </ContentBox>
  );
}

