import React from "react";
import ContentBox from "../components/ContentBox/ContentBox";

export default function Register() {
  return (
    <ContentBox>
      <h1 className="text-center font-bold text-4xl text-white">Register for KnightHacks 2023</h1>
      <br/>
      <h1 className="text-center font-bold text-slate-400">February 3-5th | UCF Main Campus | Open to All Students</h1>

      <form class="w-full max-w-lg">
    <br/>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstname" type="text" placeholder="First Name">
      </input>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastname" type="text" placeholder="Last Name">
      </input>
    </div>
  </div>

  <div class="relative pb-4">
        <select class="block appearance-none w-1/3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Nonbinary</option>
          <option>Other / Prefer not to answer</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Age">
      </input>
    </div>

    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Yrs of Experience">
      </input>
    </div>
    
  </div>

    
<div class="flex flex-wrap -mx-3 mb-2">
  
    <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="subjective" type="text" placeholder="Subjective Prns. (he, she, they)">
      </input>
    </div>
    
    <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="objective" type="text" placeholder="Objective Prns. (him, her, them)">
      </input>
    </div>

  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
  
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Email Address">
      </input>
    </div>
    
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="Phone Number">
      </input>
    </div>

  </div>

  <div class="relative pb-4">
        <select class="block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Race / Ethnicity</option>
          <option>Other / Prefer not to answer</option>
          <option>Black / African-American</option>
          <option>Asian / Pacific Islander</option>
          <option>White / Caucasian</option>
          <option>Hispanic / Latino</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>

  <div class="relative pb-4">
        <select class="block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Shirt Size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
          <option>XXXL</option>
          <option>XXXXL</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>

    

    <div class="flex flex-wrap -mx-3 pt-8">
    <div class="w-full px-3">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="line1" type="text" placeholder="Address Line 1">
        </input>
    </div>
    <div class="w-full px-3">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="line2" type="text" placeholder="Address Line 2">
        </input>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="City">
    </input>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state">
        <option>State</option> <option>AL</option> <option>AK</option> <option>AZ</option> <option>AR</option> <option>CA</option> <option>CO</option> <option>CT</option> <option>DE</option>
        <option>DC</option> <option>FL</option> <option>GA</option> <option>HI</option> <option>ID</option> <option>IL</option> <option>IN</option> <option>IA</option>
        <option>KS</option> <option>KY</option> <option>LA</option> <option>ME</option> <option>MD</option> <option>MA</option> <option>MI</option> <option>MN</option>
        <option>MS</option> <option>MO</option> <option>MT</option> <option>NE</option> <option>NV</option> <option>NH</option> <option>NJ</option> <option>NM</option>
        <option>NY</option> <option>NC</option> <option>ND</option> <option>OH</option> <option>OK</option> <option>OR</option> <option>PA</option> <option>RI</option>
        <option>SC</option> <option>SD</option> <option>TN</option> <option>TX</option> <option>UT</option> <option>VT</option> <option>VA</option> <option>WA</option>
        <option>WV</option> <option>WI</option> <option>WY</option>

        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zipcode" type="text" placeholder="ZIP Code">
      </input>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 pt-8">
    <div class="w-full px-3">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="line1" type="text" placeholder="School Name">
        </input>
    </div>
  </div>

  </div>


  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="major" type="text" placeholder="Major">
    </input>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="levelofstudy">
        <option>Level Of Study</option>
        <option>Freshman</option>
        <option>Sophomore</option>
        <option>Junior</option>
        <option>Senior</option>
        <option>Graduate</option>  
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="graddate" type="text" placeholder="Graduation Date">
      </input>
    </div>

    
    <div class="w-full pt-4 px-3">
    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password"> Why would you like to participate in this hackathon?</label>
    <textarea id="whyattend" rows="6" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Answer here"></textarea>
  </div>

  <div class="w-full pt-4 px-3">
    <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password"> What do you hope to learn from this hackathon?</label>
    <textarea id="whatlearn" rows="6" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Answer here"></textarea>
  </div>

  <div class="w-full pt-4 px-3">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Resume</label>
    <input class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="file_input" type="file"></input>
  </div>

  <div class="w-full pt-4 px-3 form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      </input>
      <label class="form-check-label inline-block text-white" for="flexCheckDefault">
        I'd like my resume to shared with sponsors.
      </label>
    </div>

    <div class="w-full pt-4 px-3 form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      </input>
      <label class="form-check-label inline-block text-white" for="flexCheckDefault">
        I agree to the MLH Code of Conduct.
      </label>
    </div>

    <div class="w-full pt-4 px-3">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Register
      </button>
    </div>

  </div>
</form>

    </ContentBox>
  );
}