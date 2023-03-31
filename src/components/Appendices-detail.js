/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Appendicesdetail = () => {
  return (
    <div>
      <h2 id="appendices">9 Appendices</h2>
      <h3 id="appendices-jsdoc-tag-reference">9.1 JSDoc tag reference</h3>
      <p>
        JSDoc serves multiple purposes in JavaScript. In addition to being used
        to generate documentation it is also used to control tooling. The best
        known are the Closure Compiler type annotations.
      </p>
      <h4 id="appendices-type-annotations">
        9.1.1 Type annotations and other Closure Compiler annotations
      </h4>
      <p>
        Documentation for JSDoc used by the Closure Compiler is described in
        <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">
          Annotating JavaScript for the Closure Compiler
        </a>{" "}
        and{" "}
        <a href="https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System">
          Types in the Closure Type System
        </a>
        .
      </p>
      <h4 id="appendices-documentation-annotations">
        9.1.2 Documentation annotations
      </h4>
      <p>
        In addition to the JSDoc described in{" "}
        <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">
          Annotating JavaScript for the Closure Compiler
        </a>{" "}
        the following tags are common and well supported by various
        documentation generation tools (such as{" "}
        <a href="https://github.com/jleyba/js-dossier">JsDossier</a>) for purely
        documentation purposes.
      </p>
      <p>
        You may also see other types of JSDoc annotations in third-party code.
        These annotations appear in the{" "}
        <a href="http://code.google.com/p/jsdoc-toolkit/wiki/TagReference">
          JSDoc Toolkit Tag Reference
        </a>{" "}
        but are not considered part of valid Google style.
      </p>
      <section className="zippy">
        <h5>
          9.1.2.1 <code>@author</code> or <code>@owner</code> -{" "}
          <em>Not recommended.</em>
        </h5>

        <p>
          <strong>Not recommended.</strong>
        </p>

        <p className="syntax">
          Syntax: <code>@author username@google.com (First Last)</code>
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /** <br></br>* @fileoverview Utilities for handling textareas.{" "}
            <br></br>* @author kuth@google.com (Uthur Pendragon) <br></br>*/
          </span>
        </pre>

        <p>
          Documents the author of a file or the owner of a test, generally only
          used in the <code>@fileoverview</code> comment. The{" "}
          <code>@owner</code> tag is used by the unit test dashboard to
          determine who owns the test results.
        </p>
      </section>
      <section className="zippy">
        <h5>
          9.1.2.2 <code>@bug</code>
        </h5>

        <p className="syntax">
          Syntax: <code>@bug bugnumber</code>
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">/** @bug 1234567 */</span>
          <span className="pln"></span>
          <br></br>
          <span className="kwd">function</span>
          <span className="pln"> testSomething</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">{"{"}</span>
          <span className="pln"></span>
          <br></br>
          <span className="com">// …</span>
          <span className="pln"></span>
          <br></br>
          <br></br>
          <span className="pun">{"}"}</span>
          <span className="pln"></span>
          <br></br>
          <span className="com">
            /** <br></br>* @bug 1234568 <br></br>* @bug 1234569 <br></br>*/
          </span>
          <span className="pln"></span>
          <br></br>
          <span className="kwd">function</span>
          <span className="pln"> testTwoBugs</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">{"{"}</span>
          <span className="pln"></span>
          <br></br>
          <span className="com">// …</span>
          <span className="pln"></span>
          <br></br>
          <span className="pun">{"}"}</span>
        </pre>

        <p>Indicates what bugs the given test function regression tests.</p>

        <p>
          Multiple bugs should each have their own <code>@bug</code> line, to
          make searching for regression tests as easy as possible.
        </p>
      </section>
      <section className="zippy">
        <h5>
          9.1.2.3 <code>@code</code> - <em>Deprecated. Do not use.</em>
        </h5>

        <p>
          <strong>
            Deprecated. Do not use. Use Markdown backticks instead.
          </strong>
        </p>

        <p className="syntax">
          Syntax: <code>{"{@code ...}"}</code>
        </p>

        <p>
          Historically, <code>`BatchItem`</code> was written as
          <code className="badcode">{"{@code BatchItem}"}</code>.
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /** Processes pending `BatchItem` instances. <br></br>*/
          </span>
          <span className="pln"></span>
          <span className="kwd">function</span>
          <span className="pln"> processBatchItems</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">{}</span>
        </pre>

        <p>
          Indicates that a term in a JSDoc description is code so it may be
          correctly formatted in generated documentation.
        </p>
      </section>
      <section className="zippy">
        <h5>
          9.1.2.4 <code>@desc</code>
        </h5>

        <p className="syntax">
          Syntax: <code>@desc Message description</code>
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /** @desc Notifying a user that their account has been created. */
          </span>
          <br></br>
          <span className="pln">exports</span>
          <span className="pun">.</span>
          <span className="pln">MSG_ACCOUNT_CREATED </span>
          <span className="pun">=</span>
          <span className="pln"> goog</span>
          <span className="pun">.</span>
          <span className="pln">getMsg</span>
          <span className="pun">(</span>
          <span className="pln"></span>
          <br></br>
          <span className="str">
            {" "}
            'Your account has been successfully created.'
          </span>
          <span className="pun">);</span>
        </pre>
      </section>
      <section className="zippy">
        <h5>
          9.1.2.5 <code>@link</code>
        </h5>

        <p className="syntax">
          Syntax: <code>{"{@link ...}"}</code>
        </p>

        <p>
          This tag is used to generate cross-reference links within generated
          documentation.
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /** Processes pending {"{@link BatchItem}"} instances. */
          </span>
          <span className="pln"></span>
          <br></br>
          <span className="kwd">function</span>
          <span className="pln"> processBatchItems</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">{}</span>
        </pre>

        <p>
          <strong>Historical note:</strong> @link tags have also been used to
          create external links in generated documentation. For external links,
          always use Markdown's link syntax instead:
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /**
            <br></br>* This className implements a useful subset of the *<br></br>
            [native Event interface](https://dom.spec.whatwg.org/#event).{" "}
            <br></br>*/
          </span>
          <span className="pln"></span>
          <br></br>
          <span className="kwd">className</span>
          <span className="pln"> </span>
          <span className="typ">ApplicationEvent</span>
          <span className="pln"> </span>
          <span className="pun">{}</span>
        </pre>
      </section>
      <section className="zippy">
        <h5>
          9.1.2.6 <code>@see</code>
        </h5>

        <p className="syntax">
          Syntax: <code>@see Link</code>
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /** <br></br>* Adds a single item, recklessly. <br></br>* @see
            #addSafely * @see goog.Collect <br></br>* @see
            goog.RecklessAdder#add */
          </span>
        </pre>

        <p>Reference a lookup to another className function or method.</p>
      </section>
      <section className="zippy">
        <h5>
          9.1.2.7 <code>@supported</code>
        </h5>

        <p className="syntax">
          Syntax: <code>@supported Description</code>
        </p>

        <pre className="language-js prettyprint prettyprinted">
          <span className="com">
            /** <br></br>* @fileoverview Event Manager <br></br>* Provides an
            abstracted interface to the browsers' event systems. <br></br>*
            @supported IE10+, Chrome, Safari<br></br>
            */
          </span>
        </pre>

        <p>
          Used in a fileoverview to indicate what browsers are supported by the
          file.
        </p>
      </section>
      <h4 id="appendices-framework-specific-annotations">
        9.1.3 Framework specific annotations
      </h4>
      <p>The following annotations are specific to a particular framework.</p>
      <section className="zippy">
        <h5>
          9.1.3.1 <code>@ngInject</code> for Angular 1
        </h5>
      </section>
      <section className="zippy">
        <h5>
          9.1.3.2 <code>@polymerBehavior</code> for Polymer
        </h5>

        <p className="https">
          <a href="https://github.com/google/closure-compiler/wiki/Polymer-Pass">
            https://github.com/google/closure-compiler/wiki/Polymer-Pass
          </a>
        </p>
      </section>
      <section className="zippy"></section>
      <h4 id="appendices-notes-about-standard-closure-compiler-annotations">
        9.1.4 Notes about standard Closure Compiler annotations
      </h4>
      <p>The following tags used to be standard but are now deprecated.</p>
      <section className="zippy">
        <h5>
          9.1.4.1 <code>@expose</code> - <em>Deprecated. Do not use.</em>
        </h5>

        <p>
          <strong>
            Deprecated. Do not use. Use <code>@export</code> and/or{" "}
            <code>@nocollapse</code> instead.
          </strong>
        </p>
      </section>
      <section className="zippy">
        <h5>
          9.1.4.2 <code>@inheritDoc</code> - <em>Deprecated. Do not use.</em>
        </h5>

        <p>
          <strong>
            Deprecated. Do not use. Use <code>@override</code> instead.
          </strong>
        </p>
      </section>
      <section className="zippy"></section>
      <section className="zippy"></section>
      <section className="zippy"></section>
      <section className="zippy"></section>
      <section className="zippy"></section>
      <section className="zippy"></section>
      <section className="zippy"></section>
      <h3 id="appendices-commonly-misunderstood-style-rules">
        9.2 Commonly misunderstood style rules
      </h3>
      <p>
        Here is a collection of lesser-known or commonly misunderstood facts
        about Google Style for JavaScript. (The following are true statements;
        this is not a list of <q>myths.</q>)
      </p>
      <ul>
        <li>
          Neither a copyright statement nor <code>@author</code> credit is
          required in a source file. (Neither is explicitly recommended,
          either.)
        </li>
        <li>
          There is no <q>hard and fast</q> rule governing how to order the
          members of a className (<a href="#features-classNamees">5.4 classNamees</a>).
        </li>
        <li>
          Empty blocks can usually be represented concisely as <code>{}</code>,
          as detailed in (
          <a href="#formatting-empty-blocks">
            4.1.3 Empty blocks: may be concise
          </a>
          ).
        </li>
        <li>
          The prime directive of line-wrapping is: prefer to break at a higher
          syntactic level (
          <a href="#formatting-where-to-break">4.5.1 Where to break</a>).
        </li>
        <li>
          Non-ASCII characters are allowed in string literals, comments and
          JSDoc, and in fact are recommended when they make the code easier to
          read than the equivalent Unicode escape would (
          <a href="#non-ascii-characters">2.3.3 Non-ASCII characters</a>).
        </li>
      </ul>
      <h3 id="appendices-style-related-tools">9.3 Style-related tools</h3>
      <p>
        The following tools exist to support various aspects of Google Style.
      </p>
      <h4 id="appendices-tools-closure-compiler">9.3.1 Closure Compiler</h4>
      <p>
        This program performs type checking and other checks, optimizations and
        other transformations (such as ECMAScript 6 to ECMAScript 5 code
        lowering).
      </p>
      <h4 id="appendices-clang-format">
        9.3.2 <code>clang-format</code>
      </h4>
      <p>
        This program reformats JavaScript source code into Google Style, and
        also follows a number of non-required but frequently
        readability-enhancing formatting practices. The output produced by{" "}
        <code>clang-format</code> is compliant with the style guide.
      </p>
      <p>
        <code>clang-format</code> is not required. Authors are allowed to change
        its output, and reviewers are allowed to ask for such changes; disputes
        are worked out in the usual way. However, subtrees may choose to opt in
        to such enforcement locally.
      </p>
      <h4 id="appendices-closure-compiler-linter">
        9.3.3 Closure compiler linter
      </h4>
      <p>This program checks for a variety of missteps and anti-patterns.</p>
      <h4 id="appendices-conformance-framework">9.3.4 Conformance framework</h4>
      <p>
        The JS Conformance Framework is a tool that is part of the Closure
        Compiler that provides developers a simple means to specify a set of
        additional checks to be run against their code base above the standard
        checks. Conformance checks can, for example, forbid access to a certain
        property, or calls to a certain function, or missing type information
        (unknowns).
      </p>
      <p>
        These rules are commonly used to enforce critical restrictions (such as
        defining globals, which could break the codebase) and security patterns
        (such as using
        <code>eval</code> or assigning to <code>innerHTML</code>), or more
        loosely to improve code quality.
      </p>
      <p>
        For additional information see the official documentation for the
        <a href="https://github.com/google/closure-compiler/wiki/JS-Conformance-Framework">
          JS Conformance Framework
        </a>
        .
      </p>
      <h3 id="appendices-legacy-exceptions">
        9.4 Exceptions for legacy platforms
      </h3>
      <h4 id="appendices-legacy-exceptions-overview">9.4.1 Overview</h4>
      <p>
        This section describes exceptions and additional rules to be followed
        when modern ECMAScript 6 syntax is not available to the code authors.
        Exceptions to the recommended style are required when ECMAScript 6
        syntax is not possible and are outlined here:
      </p>
      <ul>
        <li>
          Use of <code>var</code> declarations is allowed
        </li>
        <li>
          Use of <code>arguments</code> is allowed
        </li>
        <li>Optional parameters without default values are allowed</li>
      </ul>
      <h4 id="appendices-legacy-exceptions-var">
        9.4.2 Use <code>var</code>
      </h4>
      <h5 id="appendices-legacy-exceptions-var-scope">
        9.4.2.1 <code>var</code> declarations are NOT block-scoped
      </h5>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">var</span>
        <span className="pln"> i </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"> i </span>
        <span className="pun">&lt;</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="pun">++</span>
        <span className="pln">i</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> var</span>
        <span className="pln"> iteration </span>
        <span className="pun">=</span>
        <span className="pln"> i</span>
        <span className="pun">;</span>
        <br></br>
        <span className="pln"> setTimeout</span>
        <span className="pun">(</span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> console</span>
        <span className="pun">.</span>
        <span className="pln">log</span>
        <span className="pun">(</span>
        <span className="pln">iteration</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="pun">{"}"},</span>
        <span className="pln"> i</span>
        <span className="pun">*</span>
        <span className="lit">1000</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com">// logs 2, 2, 2 -- NOT 0, 1, 2</span>
        <span className="pln"></span>
        <span className="com">
          <br></br>// because `iteration` is function-scoped, not local to the
          loop.
        </span>
        <span className="pln"></span>
      </pre>
      <h5 id="appendices-legacy-exceptions-var-declare">
        9.4.2.2 Declare variables as close as possible to first use
      </h5>
      <p>
        Even though <code>var</code> declarations are scoped to the beginning of
        the enclosing function, <code>var</code> declarations should be as close
        as possible to their first use, for readability purposes. However, do
        not put a <code>var</code> declaration inside a block if that variable
        is referenced outside the block. For example:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">function</span>
        <span className="pln"> sillyFunction</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">var</span>
        <span className="pln"> count </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">var</span>
        <span className="pln"> x in y</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          <br></br> // "count" could be declared here, but don't do that.
        </span>
        <br></br>
        <span className="pln">count</span>
        <span className="pun">++;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln">console</span>
        <span className="pun">.</span>
        <span className="pln">log</span>
        <span className="pun">(</span>
        <span className="pln">count </span>
        <span className="pun">+</span>
        <span className="pln"> </span>
        <span className="str">' items in y'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <h5 id="appendices-legacy-exceptions-var-const">
        9.4.2.3 Use @const for constants variables
      </h5>
      <p>
        For global declarations where the <code>const</code> keyword would be
        used, if it were available, annotate the <code>var</code> declaration
        with @const instead (this is optional for local variables).
      </p>
      <h4 id="appendices-legacy-exceptions-function">
        9.4.3 Do not use block scoped functions declarations
      </h4>
      <p>
        Do <strong>not</strong> do this:
      </p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">x</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">function</span>
        <span className="pln"> foo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        While most JavaScript VMs implemented before ECMAScript 6 support
        function declarations within blocks it was not standardized.
        Implementations were inconsistent with each other and with the
        now-standard ECMAScript 6 behavior for block scoped function
        declaration. ECMAScript 5 and prior only allow for function declarations
        in the root statement list of a script or function and explicitly ban
        them in block scopes in strict mode.
      </p>
      <p>
        To get consistent behavior, instead use a <code>var</code> initialized
        with a function expression to define a function within a block:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">x</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">var</span>
        <span className="pln"> foo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{};</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="appendices-legacy-exceptions-goog-provide">
        9.4.4 Dependency management with <code>goog.provide</code>/
        <code>goog.require</code>
      </h4>
      <h5 id="appendices-legacy-exceptions-goog-provide-summary">
        9.4.4.1 Summary
      </h5>
      <p className="warning">
        <strong>
          WARNING: <code>goog.provide</code> dependency management is
          deprecated.
        </strong>{" "}
        All new files, even in projects using <code>goog.provide</code> for
        older files, should use
        <a href="#source-file-structure">
          <code>goog.module</code>
        </a>
        . The following rules are for pre-existing <code>goog.provide</code>{" "}
        files only.
      </p>
      <ul>
        <li>
          Place all <code>goog.provide</code>s first, <code>goog.require</code>s
          second. Separate provides from requires with an empty line.
        </li>
        <li>Sort the entries alphabetically (uppercase first).</li>
        <li>
          Don't wrap <code>goog.provide</code> and <code>goog.require</code>{" "}
          statements. Exceed 80 columns if necessary.
        </li>
        <li>Only provide top-level symbols.</li>
      </ul>
      <p>
        <code>goog.provide</code> statements should be grouped together and
        placed first. All
        <code>goog.require</code> statements should follow. The two lists should
        be separated with an empty line.
      </p>
      <p>
        Similar to import statements in other languages,{" "}
        <code>goog.provide</code> and
        <code>goog.require</code> statements should be written in a single line,
        even if they exceed the 80 column line length limit.
      </p>
      <p>
        The lines should be sorted alphabetically, with uppercase letters coming
        first:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.helperFoo'</span>
        <span className="pun">);</span>
        <br></br>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">
          'an.extremelyLongNamespace.thatSomeoneThought.wouldBeNice.andNowItIsLonger.Than80Columns'
        </span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.dom'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.dom.TagName'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.dom.classNamees'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.dominoes'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
      </pre>
      <p>
        All members defined on a className should be in the same file. Only
        top-level classNamees should be provided in a file that contains multiple
        members defined on the same className (e.g. enums, inner classNamees, etc).
      </p>
      <p>Do this:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName'</span>
        <span className="pun">);</span>
      </pre>
      <p>Not this:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName.CONSTANT'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName.Enum'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName.InnerclassName'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName.TypeDef'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'namespace.MyclassName.staticMethod'</span>
        <span className="pun">);</span>
      </pre>
      <p>Members on namespaces may also be provided:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'foo.bar'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'foo.bar.CONSTANT'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'foo.bar.method'</span>
        <span className="pun">);</span>
      </pre>
      <h5 id="appendices-legacy-exceptions-goog-scope">
        9.4.4.2 Aliasing with <code>goog.scope</code>
      </h5>
      <p className="warning">
        <strong>
          WARNING: <code>goog.scope</code> is deprecated.
        </strong>{" "}
        New files should not use <code>goog.scope</code> even in projects with
        existing <code>goog.scope</code> usage.
      </p>
      <p>
        <code>goog.scope</code> may be used to shorten references to namespaced
        symbols in code using <code>goog.provide</code>/
        <code>goog.require</code> dependency management.
      </p>
      <p>
        Only one <code>goog.scope</code> invocation may be added per file.
        Always place it in the global scope.
      </p>
      <p>
        The opening <code>goog.scope(function() {"{"}</code> invocation must be
        preceded by exactly one blank line and follow any{" "}
        <code>goog.provide</code> statements, <code>goog.require</code>
        statements, or top-level comments. The invocation must be closed on the
        last line in the file. Append <code>// goog.scope</code> to the closing
        statement of the scope. Separate the comment from the semicolon by two
        spaces.
      </p>
      <p>
        Similar to C++ namespaces, do not indent under <code>goog.scope</code>{" "}
        declarations. Instead, continue from the 0 column.
      </p>
      <p>
        Only make aliases for names that will not be re-assigned to another
        object (e.g., most constructors, enums, and namespaces). Do not do this
        (see below for how to alias a constructor):
      </p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">scope</span>
        <span className="pun">(</span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">var</span>
        <span className="pln"> </span>
        <span className="typ">Button</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">ui</span>
        <span className="pun">.</span>
        <span className="typ">Button</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="typ">Button</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">...</span>
      </pre>
      <p>
        Names must be the same as the last property of the global that they are
        aliasing.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">provide</span>
        <span className="pun">(</span>
        <span className="str">'my.module.SomeType'</span>
        <span className="pun">);</span>
        <br></br>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.dom'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.ui.Button'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">scope</span>
        <span className="pun">(</span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">var</span>
        <span className="pln"> </span>
        <span className="typ">Button</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">ui</span>
        <span className="pun">.</span>
        <span className="typ">Button</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">var</span>
        <span className="pln"> dom </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">dom</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="com">
          <br></br>
          // Alias new types after the constructor declaration.
        </span>
        <br></br>
        <span className="pln">my</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">.</span>
        <span className="typ">SomeType</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">var</span>
        <span className="pln"> </span>
        <span className="typ">SomeType</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> my</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">.</span>
        <span className="typ">SomeType</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Declare methods on the prototype as usual:</span>
        <span className="pln"></span>
        <br></br>
        <span className="typ">SomeType</span>
        <span className="pun">.</span>
        <span className="pln">prototype</span>
        <span className="pun">.</span>
        <span className="pln">findButton </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Button as aliased above.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">button </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Button</span>
        <span className="pun">(</span>
        <span className="pln">dom</span>
        <span className="pun">.</span>
        <span className="pln">getElement</span>
        <span className="pun">(</span>
        <span className="str">'my-button'</span>
        <span className="pun">));</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">...</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"});</span>
        <span className="pln"> </span>
        <span className="com">// goog.scope</span>
      </pre>
      <h5 id="appendices-legacy-exceptions-forward-declare">
        9.4.4.3 <code>goog.forwardDeclare</code>
      </h5>
      <p>
        Prefer to use <code>goog.requireType</code> instead of{" "}
        <code>goog.forwardDeclare</code> to break circular dependencies between
        files in the same library. Unlike <code>goog.require</code>, a{" "}
        <code>goog.requireType</code> statement is allowed to import a namespace
        before it is defined.
      </p>
      <p>
        <code>goog.forwardDeclare</code> may still be used in legacy code to
        break circular references spanning across library boundaries, but newer
        code should be structured to avoid it.
      </p>
      <p>
        <code>goog.forwardDeclare</code> statements must follow the same style
        rules as
        <code>goog.require</code> and <code>goog.requireType</code>. The entire
        block of
        <code>goog.forwardDeclare</code>, <code>goog.require</code> and{" "}
        <code>goog.requireType</code> statements is sorted alphabetically.
      </p>
    </div>
  );
};

export default Appendicesdetail;
