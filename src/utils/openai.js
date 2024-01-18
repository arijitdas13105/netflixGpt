import OpenAI from "openai";
import { OPENAI_KEY } from "./Constant/constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;