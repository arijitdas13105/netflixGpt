import { BG_URL } from "../utils/Constant/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        {/* <img className="h-screen object-cover" src={BG_URL} alt="logo" /> */}
        {/* <img className="md:h-screen object-cover" src={BG_URL} alt="logo" /> */}
        <img className="h-screen sm:h-auto object-cover" src={BG_URL} alt="logo" />

      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;