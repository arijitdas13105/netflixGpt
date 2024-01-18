export  const LOGO=  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  "Bearer " + process.env.REACT_APP_TMDB_KEY,
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWUwMzZlYWZlNTM0NGQ5MmJmN2M1ZGJhNDEwY2U0OCIsInN1YiI6IjY1YTRkYzQyMGYyYWUxMDEyYTViMjVlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GdbdpXOLFmkOx0ydIazzJF3i04zPUTZpRVytKj7_Iog'
    }
  };

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];

// export const  OPENAI_KEY="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"