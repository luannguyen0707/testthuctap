/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Policiesdetail = () => {
  return (
    <div>
      <h2 id="policies">8 Policies</h2>
      <h3 id="policies-be-consistent">
        8.1 Issues unspecified by Google Style: Be Consistent!
      </h3>
      <p>
        For any style question that isn't settled definitively by this
        specification, prefer to do what the other code in the same file is
        already doing. If that doesn't resolve the question, consider emulating
        the other files in the same package.
      </p>
      <h3 id="policies-compiler-warnings">8.2 Compiler warnings</h3>
      <h4 id="policies-use-a-standard-warning-set">
        8.2.1 Use a standard warning set
      </h4>
      <p>
        As far as possible projects should use{" "}
        <code>--warning_level=VERBOSE</code>.
      </p>
      <h4 id="policies-how-to-handle-a-warning">
        8.2.2 How to handle a warning
      </h4>
      <p>
        Before doing anything, make sure you understand exactly what the warning
        is telling you. If you're not positive why a warning is appearing, ask
        for help .
      </p>
      <p>
        Once you understand the warning, attempt the following solutions in
        order:
      </p>
      <ol>
        <li>
          <strong>First, fix it or work around it.</strong> Make a strong
          attempt to actually address the warning, or find another way to
          accomplish the task that avoids the situation entirely.
        </li>
        <li>
          <strong>Otherwise, determine if it's a false alarm.</strong> If you
          are convinced that the warning is invalid and that the code is
          actually safe and correct, add a comment to convince the reader of
          this fact and apply the <code>@suppress</code> annotation.
        </li>
        <li>
          <strong>Otherwise, leave a TODO comment.</strong> This is a{" "}
          <strong>last resort</strong>. If you do this,{" "}
          <strong>do not suppress the warning.</strong> The warning should be
          visible until it can be taken care of properly.
        </li>
      </ol>
      <h4 id="policies-suppress-a-warning-at-the-narrowest-reasonable-scope">
        8.2.3 Suppress a warning at the narrowest reasonable scope
      </h4>
      <p>
        Warnings are suppressed at the narrowest reasonable scope, usually that
        of a single local variable or very small method. Often a variable or
        method is extracted for that reason alone.
      </p>
      <p>Example</p>
      <pre class="language-js prettyprint prettyprinted">
        <span class="com">
          /** @suppress {"{uselessCode}"} Unrecognized 'use asm' declaration */
        </span>
        <span class="pln"></span>
        <br></br>
        <span class="kwd">function</span>
        <span class="pln"> fn</span>
        <span class="pun">()</span>
        <span class="pln"> </span>
        <span class="pun">{"{"}</span>
        <span class="pln"></span>
        <br></br>
        <span class="str">'use asm'</span>
        <span class="pun">;</span>
        <span class="pln"></span>
        <br></br>
        <span class="kwd">return</span>
        <span class="pln"> </span>
        <span class="lit">0</span>
        <span class="pun">;</span>
        <span class="pln"></span>
        <br></br>
        <span class="pun">{"}"}</span>
      </pre>
      <p>
        Even a large number of suppressions in a class is still better than
        blinding the entire class to this type of warning.
      </p>
      <h3 id="policies-deprecation">8.3 Deprecation</h3>
      <p>
        Mark deprecated methods, classes or interfaces with{" "}
        <code>@deprecated</code> annotations. A deprecation comment must include
        simple, clear directions for people to fix their call sites.
      </p>
      <h3 id="policies-code-not-in-google-style">
        8.4 Code not in Google Style
      </h3>
      <p>
        You will occasionally encounter files in your codebase that are not in
        proper Google Style. These may have come from an acquisition, or may
        have been written before Google Style took a position on some issue, or
        may be in non-Google Style for any other reason.
      </p>
      <h4 id="policies-reformatting-existing-code">
        8.4.1 Reformatting existing code
      </h4>
      <p>When updating the style of existing code, follow these guidelines.</p>
      <ol>
        <li>
          It is not required to change all existing code to meet current style
          guidelines. Reformatting existing code is a trade-off between code
          churn and consistency. Style rules evolve over time and these kinds of
          tweaks to maintain compliance would create unnecessary churn. However,
          if significant changes are being made to a file it is expected that
          the file will be in Google Style.
        </li>
        <li>
          Be careful not to allow opportunistic style fixes to muddle the focus
          of a CL. If you find yourself making a lot of style changes that
          aren’t critical to the central focus of a CL, promote those changes to
          a separate CL.
        </li>
      </ol>
      <h4 id="policies-newly-added-code-use-google-style">
        8.4.2 Newly added code: use Google Style
      </h4>
      <p>
        Brand new files use Google Style, regardless of the style choices of
        other files in the same package.
      </p>
      <p>
        When adding new code to a file that is not in Google Style, reformatting
        the existing code first is recommended, subject to the advice in
        <a href="#policies-reformatting-existing-code">
          8.4.1 Reformatting existing code
        </a>
        .
      </p>
      <p>
        If this reformatting is not done, then new code should be as consistent
        as possible with existing code in the same file, but must not violate
        the style guide.
      </p>
      <h3 id="policies-local-style-rules">8.5 Local style rules</h3>
      <p>
        Teams and projects may adopt additional style rules beyond those in this
        document, but must accept that cleanup changes may not abide by these
        additional rules, and must not block such cleanup changes due to
        violating any additional rules. Beware of excessive rules which serve no
        purpose. The style guide does not seek to define style in every possible
        scenario and neither should you.
      </p>
      <h3 id="policies-generated-code-mostly-exempt">
        8.6 Generated code: mostly exempt
      </h3>
      <p>
        Source code generated by the build process is not required to be in
        Google Style. However, any generated identifiers that will be referenced
        from hand-written source code must follow the naming requirements. As a
        special exception, such identifiers are allowed to contain underscores,
        which may help to avoid conflicts with hand-written identifiers.
      </p>
    </div>
  );
};
export default Policiesdetail;
