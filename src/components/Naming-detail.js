/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Namingdetail = () => {
  return (
    <div>
      <h2 id="naming">6 Naming</h2>
      <h3 id="naming-rules-common-to-all-identifiers">
        6.1 Rules common to all identifiers
      </h3>
      <p>
        Identifiers use only ASCII letters and digits, and, in a small number of
        cases noted below, underscores and very rarely (when required by
        frameworks like Angular) dollar signs.
      </p>
      <p>
        Give as descriptive a name as possible, within reason. Do not worry
        about saving horizontal space as it is far more important to make your
        code immediately understandable by a new reader. Do not use
        abbreviations that are ambiguous or unfamiliar to readers outside your
        project, and do not abbreviate by deleting letters within a word.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">errorCount </span>
        <span className="com">// No abbreviation.</span>
        <span className="pln">dnsConnectionIndex </span>
        <span className="com">// Most people know what "DNS" stands for.</span>
        <span className="pln">referrerUrl </span>
        <span className="com">// Ditto for "URL".</span>
        <span className="pln">customerId </span>
        <span className="com">
          // "Id" is both ubiquitous and unlikely to be misunderstood.
        </span>
      </pre>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln">n </span>
        <span className="com">// Meaningless.</span>
        <span className="pln">nErr </span>
        <span className="com">// Ambiguous abbreviation.</span>
        <span className="pln">nCompConns </span>
        <span className="com">// Ambiguous abbreviation.</span>
        <span className="pln">wgcConnections </span>
        <span className="com">
          // Only your group knows what this stands for.
        </span>
        <span className="pln">pcReader </span>
        <span className="com">// Lots of things can be abbreviated "pc".</span>
        <span className="pln">cstmrId </span>
        <span className="com">// Deletes internal letters.</span>
        <span className="pln">kSecondsPerDay </span>
        <span className="com">// Do not use Hungarian notation.</span>
      </pre>
      <h3 id="naming-rules-by-identifier-type">6.2 Rules by identifier type</h3>
      <h4 id="naming-package-names">6.2.1 Package names</h4>
      <p>
        Package names are all <code>lowerCamelCase</code>. For example,
        <code>my.exampleCode.deepSpace</code>, but not{" "}
        <code className="badcode">my.examplecode.deepspace</code> or{" "}
        <code className="badcode">my.example_code.deep_space</code>.
      </p>
      <h4 id="naming-className-names">6.2.2 className names</h4>
      <p>
        className, interface, record, and typedef names are written in{" "}
        <code>UpperCamelCase</code>. Unexported classNamees are simply locals:
        they are not marked <code>@private</code> and therefore are not named
        with a trailing underscore.
      </p>
      <p>
        Type names are typically nouns or noun phrases. For example,{" "}
        <code>Request</code>,<code>ImmutableList</code>, or{" "}
        <code>VisibilityMode</code>. Additionally, interface names may sometimes
        be adjectives or adjective phrases instead (for example,{" "}
        <code>Readable</code>).
      </p>
      <h4 id="naming-method-names">6.2.3 Method names</h4>
      <p>
        Method names are written in <code>lowerCamelCase</code>. Names for{" "}
        <code>@private</code> methods must end with a trailing underscore.
      </p>
      <p>
        Method names are typically verbs or verb phrases. For example,{" "}
        <code>sendMessage</code> or
        <code>stop_</code>. Getter and setter methods for properties are never
        required, but if they are used they should be named <code>getFoo</code>{" "}
        (or optionally <code>isFoo</code> or <code>hasFoo</code> for booleans),
        or <code>setFoo(value)</code> for setters.
      </p>
      <p>
        Underscores may also appear in JsUnit test method names to separate
        logical components of the name. One typical pattern is
        <code>
          test&lt;MethodUnderTest&gt;_&lt;state&gt;_&lt;expectedOutcome&gt;
        </code>
        , for example
        <code>testPop_emptyStack_throws</code>. There is no One Correct Way to
        name test methods.
      </p>
      <h4 id="naming-enum-names">6.2.4 Enum names</h4>
      <p>
        Enum names are written in <code>UpperCamelCase</code>, similar to
        classNamees, and should generally be singular nouns. Individual items
        within the enum are named in
        <code>CONSTANT_CASE</code>.
      </p>
      <h4 id="naming-constant-names">6.2.5 Constant names</h4>
      <p>
        Constant names use <code>CONSTANT_CASE</code>: all uppercase letters,
        with words separated by underscores. There is no reason for a constant
        to be named with a trailing underscore, since private static properties
        can be replaced by (implicitly private) module locals.
      </p>
      <h5 id="naming-definition-of-constant">
        6.2.5.1 Definition of “constant”
      </h5>
      <p>
        Every constant is a <code>@const</code> static property or a
        module-local <code>const</code> declaration, but not all{" "}
        <code>@const</code> static properties and module-local{" "}
        <code>const</code>s are constants. Before choosing constant case,
        consider whether the field really feels like a <em>deeply immutable</em>{" "}
        constant. For example, if any of that instance's observable state can
        change, it is almost certainly not a constant. Merely intending to never
        mutate the object is generally not enough.
      </p>
      <p className="examples">Examples:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">// Constants</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> NUMBER </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="com">/** @const */</span>
        <span className="pln"> exports</span>
        <span className="pun">.</span>
        <span className="pln">NAMES </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">ImmutableList</span>
        <span className="pun">.</span>
        <span className="kwd">of</span>
        <span className="pun">(</span>
        <span className="str">'Ed'</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">'Ann'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="com">/** @enum */</span>
        <span className="pln"> exports</span>
        <span className="pun">.</span>
        <span className="typ">SomeEnum</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> ENUM_CONSTANT</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'value'</span>
        <span className="pln"> </span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <span className="com">// Not constants</span>
        <span className="pln"></span>
        <span className="kwd">let</span>
        <span className="pln"> letVariable </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'non-const'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="kwd">constructor</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="com">/** @const {"{string}"} */</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">nonStatic </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'non-static'</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <span className="com">/** @type {"{string}"} */</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pun">.</span>
        <span className="pln">staticButMutable </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'not @const, can be reassigned'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** Set&lt;string&gt; */</span>
        <span className="pln"> mutableCollection </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Set</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** ImmutableSet&lt;SomeMutableType&gt; */</span>
        <span className="pln"> mutableElements </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">ImmutableSet</span>
        <span className="pun">.</span>
        <span className="kwd">of</span>
        <span className="pun">(</span>
        <span className="pln">mutable</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'my.Foo'</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">// mirrors imported name</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> logger </span>
        <span className="pun">=</span>
        <span className="pln"> log</span>
        <span className="pun">.</span>
        <span className="pln">getLogger</span>
        <span className="pun">(</span>
        <span className="str">'loggers.are.not.immutable'</span>
        <span className="pun">);</span>
      </pre>
      <p>Constants’ names are typically nouns or noun phrases.</p>
      <h5 id="naming-local-aliases">6.2.5.2 Local aliases</h5>
      <p>
        Local aliases should be used whenever they improve readability over
        fully-qualified names. Follow the same rules as{" "}
        <code>goog.require</code>s (
        <a href="#file-goog-require">
          3.6 goog.require and goog.requireType statements
        </a>
        ), maintaining the last part of the aliased name. Aliases may also be
        used within functions. Aliases must be <code>const</code>.
      </p>
      <p className="examples">Examples:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> staticHelper </span>
        <span className="pun">=</span>
        <span className="pln"> importedNamespace</span>
        <span className="pun">.</span>
        <span className="pln">staticHelper</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> CONSTANT_NAME </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">ImportedclassName</span>
        <span className="pun">.</span>
        <span className="pln">CONSTANT_NAME</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">assert</span>
        <span className="pun">,</span>
        <span className="pln"> assertInstanceof</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> asserts</span>
        <span className="pun">;</span>
      </pre>
      <h4 id="naming-non-constant-field-names">
        6.2.6 Non-constant field names
      </h4>
      <p>
        Non-constant field names (static or otherwise) are written in{" "}
        <code>lowerCamelCase</code>, with a trailing underscore for private
        fields.
      </p>
      <p>
        These names are typically nouns or noun phrases. For example,{" "}
        <code>computedValues</code> or <code>index_</code>.
      </p>
      <h4 id="naming-parameter-names">6.2.7 Parameter names</h4>
      <p>
        Parameter names are written in <code>lowerCamelCase</code>. Note that
        this applies even if the parameter expects a constructor.
      </p>
      <p>One-character parameter names should not be used in public methods.</p>
      <p className="exception">
        <strong>Exception</strong>: When required by a third-party framework,
        parameter names may begin with a <code>$</code>. This exception does not
        apply to any other identifiers (e.g. local variables or properties).
      </p>
      <h4 id="naming-local-variable-names">6.2.8 Local variable names</h4>
      <p>
        Local variable names are written in <code>lowerCamelCase</code>, except
        for module-local (top-level) constants, as described above. Constants in
        function scopes are still named in <code>lowerCamelCase</code>. Note
        that <code>lowerCamelCase</code> is used even if the variable holds a
        constructor.
      </p>
      <h4 id="naming-template-parameter-names">
        6.2.9 Template parameter names
      </h4>
      <p>
        Template parameter names should be concise, single-word or single-letter
        identifiers, and must be all-caps, such as <code>TYPE</code> or{" "}
        <code>THIS</code>.
      </p>
      <h4 id="naming-module-local-names">6.2.10 Module-local names</h4>
      <p>
        Module-local names that are not exported are implicitly private. They
        are not marked <code>@private</code> and do not end in an underscore.
        This applies to classNamees, functions, variables, constants, enums, and
        other module-local identifiers.
      </p>
      <h3 id="naming-camel-case-defined">6.3 Camel case: defined</h3>
      <p>
        Sometimes there is more than one reasonable way to convert an English
        phrase into camel case, such as when acronyms or unusual constructs like{" "}
        <q>IPv6</q> or
        <q>iOS</q> are present. To improve predictability, Google Style
        specifies the following (nearly) deterministic scheme.
      </p>
      <p>Beginning with the prose form of the name:</p>
      <ol>
        <li>
          Convert the phrase to plain ASCII and remove any apostrophes. For
          example,
          <q>Müller's algorithm</q> might become <q>Muellers algorithm</q>.
        </li>
        <li>
          Divide this result into words, splitting on spaces and any remaining
          punctuation (typically hyphens).
          <ol>
            <li>
              Recommended: if any word already has a conventional camel case
              appearance in common usage, split this into its constituent parts
              (e.g.,
              <q>AdWords</q> becomes <q>ad words</q>). Note that a word such as{" "}
              <q>iOS</q> is not really in camel case per se; it defies any
              convention, so this recommendation does not apply.
            </li>
          </ol>
        </li>
        <li>
          Now lowercase everything (including acronyms), then uppercase only the
          first character of:
          <ol>
            <li>… each word, to yield upper camel case, or</li>
            <li>… each word except the first, to yield lower camel case</li>
          </ol>
        </li>
        <li>Finally, join all the words into a single identifier.</li>
      </ol>
      <p>
        Note that the casing of the original words is almost entirely
        disregarded.
      </p>
      <p className="examples">Examples:</p>
      <table>
        <thead>
          <tr>
            <th className="td">Prose form</th>
            <th className="td">Correct</th>
            <th className="td">Incorrect</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="td">
              <q>XML HTTP request</q>
            </td>
            <td className="td">XmlHttpRequest</td>
            <td className="td">XMLHTTPRequest</td>
          </tr>
          <tr>
            <td className="td">
              <q>new customer ID</q>
            </td>
            <td className="td">newCustomerId</td>
            <td className="td">newCustomerID</td>
          </tr>
          <tr>
            <td className="td">
              <q>inner stopwatch</q>
            </td>
            <td className="td">innerStopwatch</td>
            <td className="td">innerStopWatch</td>
          </tr>
          <tr>
            <td className="td">
              <q>supports IPv6 on iOS?</q>
            </td>
            <td className="td">supportsIpv6OnIos</td>
            <td className="td">supportsIPv6OnIOS</td>
          </tr>
          <tr>
            <td className="td">
              <q>YouTube importer</q>
            </td>
            <td className="td">YouTubeImporter</td>
            <td className="td">YoutubeImporter*</td>
          </tr>
        </tbody>
      </table>
      <p>*Acceptable, but not recommended.</p>
      <p class="note">
        Note: Some words are ambiguously hyphenated in the English language: for
        example <q>nonempty</q> and <q>non-empty</q> are both correct, so the
        method names checkNonempty and checkNonEmpty are likewise both correct.
      </p>
      <h3 id="naming-style-css-defined">6.4 Style css: defined</h3>
      <p>example 1: </p>
      <pre className="">property-name : property-value</pre>
      <p>example 2: </p>
      <pre className=""> className="btn-btn-button-custom-by-users"</pre>
    </div>
  );
};

export default Namingdetail;
