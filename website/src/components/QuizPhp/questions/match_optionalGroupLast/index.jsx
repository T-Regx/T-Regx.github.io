import React from "react";

import {Answer, Question} from "../../../Quiz";
import answerNull from "./answerNull.php";
import answerEmpty from "./answerEmpty.php";
import answerMissing from "./answerMissing.php";

import codeHoverNull from "./codeHoverNull.php";
import codeHoverEmpty from "./codeHoverEmpty.php";
import codeHoverMissing from "./codeHoverMissing.php";
import codeHoverNone from "./codeHoverNone.txt";

import {helpNull, optionalGroupBody} from "../match_optionalGroup";

const help = [
  <>
    In `preg_match()`, the *unmatched* group **would** be represented as an empty string, but
    empty, trailing values are also **trimmed** by `preg_match()`. That is, `["Foo", "Bar", ""]` is trimmed to
    `["Foo", "Bar"]`.
  </>,
  <>In `preg_match()`, an *unmatched group* is represented as an empty string.</>,
  <>
    The trailing happens, regardless of whether the value was really an empty string `""`, or it was
    *unmatched*, but represented as an empty string in the results (*unmatched* group is **indistinguishable** from a
    *matched* empty string).
  </>,
];

export default <Question php body={hoverCode => optionalGroupBody(
  "How is an *optional*, unmatched group `#2` (last) represented in `preg_match()`, when currency is missing?",
  hoverCode || codeHoverNone)}>
  <Answer code={answerMissing} hoverCode={codeHoverMissing} help={help} correct>
    Isn't present in the result
  </Answer>
  <Answer code={answerEmpty} hoverCode={codeHoverEmpty} help={help}>
    As an empty string
  </Answer>
  <Answer code={answerNull} hoverCode={codeHoverNull} help={helpNull} markdown>
    As `null`
  </Answer>
</Question>;
