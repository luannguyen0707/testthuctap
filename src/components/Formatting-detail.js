/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Formattingdetail = () => {
  return (
    <div>
      <h2 id="formatting">4 Formatting</h2>
      <p>
        <strong>Terminology Note</strong>: <em>block-like construct</em> refers
        to the body of a className, function, method, or brace-delimited
        block of code. Note that, by
        <a href="#features-array-literals"> 5.2 Array literals </a> and{" "}
        <a href="#features-object-literals"> 5.3 Object literals </a>, any array
        or object literal may optionally be treated as if it were a block-like
        construct.
      </p>
      <p className="tip">
        Tip: Use <code>clang-format</code>. The JavaScript community has
        invested effort to make sure clang-format <q>does the right thing</q> on
        JavaScript files. <code>clang-format</code> has integration with several
        popular editors.
      </p>
      <h3 id="formatting-braces">4.1 Braces</h3>
      <h4 id="formatting-braces-all">
        4.1.1 Braces are used for all control structures
      </h4>
      <p>
        Braces are required for all control structures (i.e. <code>if</code>,{" "}
        <code>else</code>, <code>for</code>, <code>do</code>,<code>while</code>,
        as well as any others), even if the body contains only a single
        statement. The first statement of a non-empty block must begin on its
        own line.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">someVeryLongCondition</span>
        <span className="pun">())</span>
        <br></br>
        <span className="pln"> doSomething</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">let</span>
        <span className="pln"> i </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"> i </span>
        <span className="pun">&lt;</span>
        <span className="pln"> foo</span>
        <span className="pun">.</span>
        <span className="pln">length</span>
        <span className="pun">;</span>
        <span className="pln"> i</span>
        <span className="pun">++)</span>
        <span className="pln"> bar</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">[</span>
        <span className="pln">i</span>
        <span className="pun">]);</span>
      </pre>
      <p className="exception">
        <strong>Exception</strong>: A simple if statement that can fit entirely
        on a single line with no wrapping (and that doesn’t have an else) may be
        kept on a single line with no braces when it improves readability. This
        is the only case in which a control structure may omit braces and
        newlines.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">shortCondition</span>
        <span className="pun">())</span>
        <span className="pln"> foo</span>
        <span className="pun">();</span>
      </pre>
      <h4 id="formatting-nonempty-blocks">
        4.1.2 Nonempty blocks: K&amp;R style
      </h4>
      <p>
        Braces follow the Kernighan and Ritchie style (
        <q>
          <a href="http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html">
            Egyptian brackets
          </a>
        </q>
        ) for
        <em>nonempty</em> blocks and block-like constructs:
      </p>
      <ul>
        <li>No line break before the opening brace.</li>
        <li>Line break after the opening brace.</li>
        <li>Line break before the closing brace.</li>
        <li>
          Line break after the closing brace <em>if</em> that brace terminates a
          statement or the body of a function or className statement, or a
          className method. Specifically, there is <em>no</em> line break after
          the brace if it is followed by <code>else</code>,<code>catch</code>,
          <code>while</code>, or a comma, semicolon, or right-parenthesis.
        </li>
      </ul>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">InnerclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> constructor</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com"> /** @param {"{number}"} foo */</span>
        <br></br>
        <span className="pln"> method</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">condition</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">))</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="kwd"> try</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> // Note: this might fail.</span>
        <br></br>
        <span className="pln"> something</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">err</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln"> recover</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="formatting-empty-blocks">4.1.3 Empty blocks: may be concise</h4>
      <p>
        An empty block or block-like construct <em>may</em> be closed
        immediately after it is opened, with no characters, space, or line break
        in between (i.e. <code>{}</code>),
        <strong>unless</strong> it is a part of a <em>multi-block statement</em>{" "}
        (one that directly contains multiple blocks: <code>if</code>/
        <code>else</code> or <code>try</code>/<code>catch</code>/
        <code>finally</code>).
        <p className="example">Example:</p>
        <pre className="language-js prettyprint prettyprinted">
          <span className="kwd">function</span>
          <span className="pln"> doNothing</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">{"{}"}</span>
        </pre>
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">condition</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> // …</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <br></br>
        <span className="kwd"> else</span>
        <span className="pln"> </span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">otherCondition</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
        <span className="pln"> </span>
        <span className="kwd">else</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> //…</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> // …</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">e</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
      </pre>
      <h3 id="formatting-block-indentation">
        4.2 Block indentation: +2 spaces
      </h3>
      <p>
        Each time a new block or block-like construct is opened, the indent
        increases by two spaces. When the block ends, the indent returns to the
        previous indent level. The indent level applies to both code and
        comments throughout the block. (See the example in{" "}
        <a href="#formatting-nonempty-blocks">
          4.1.2 Nonempty blocks: K&amp;R style
        </a>
        ).
      </p>
      <h4 id="formatting-array-literals">
        4.2.1 Array literals: optionally <q>block-like</q>
      </h4>
      <p>
        Any array literal may optionally be formatted as if it were a
        “block-like construct.” For example, the following are all valid (
        <strong> not </strong> an exhaustive list):
      </p>
      <pre className="language-js prettyprint columns prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln"></span>
        <br></br>
        <span className="lit"> 0</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <br></br>
        <span className="lit"> 1</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <br></br>
        <span className="lit"> 2</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">];</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> b </span>
        <span className="pun">=</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> [</span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">];</span>
        <span className="pln"></span>
      </pre>
      <pre className="language-js prettyprint columns prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> c </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">];</span>
        <br></br>
        <br></br>
        <span className="pln">someMethod</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln"></span>
        <br></br>
        <span className="lit"> 0</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">],</span>
        <span className="pln"> bar</span>
        <span className="pun">);</span>
      </pre>
      <p>
        Other combinations are allowed, particularly when emphasizing semantic
        groupings between elements, but should not be used only to reduce the
        vertical size of larger arrays.
      </p>
      <h4 id="formatting-object-literals">
        4.2.2 Object literals: optionally <q>block-like</q>
      </h4>
      <p>
        Any object literal may optionally be formatted as if it were a
        “block-like construct.” The same examples apply as{" "}
        <a href="#formatting-array-literals">
          4.2.1 Array literals: optionally block-like
        </a>
        . For example, the following are all valid (<strong>not</strong> an
        exhaustive list):
      </p>
      <pre className="language-js prettyprint columns prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln"> a</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <br></br>
        <span className="pln"> b</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> b </span>
        <span className="pun">=</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"{"}</span>
        <span className="pln">a</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">{"}"};</span>
      </pre>
      <pre className="language-js prettyprint columns prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> c </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">a</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">{"}"};</span>
        <br></br>
        <br></br>
        <span className="pln">someMethod</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln"> a</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"},</span>
        <span className="pln"> bar</span>
        <span className="pun">);</span>
      </pre>
      <h4 id="formatting-className-literals">4.2.3 className literals</h4>
      <p>
        className literals (whether declarations or expressions) are indented as
        blocks. Do not add semicolons after methods, or after the closing brace
        of a className
        <em>declaration</em> (statements—such as assignments—that contain
        className <em>expressions</em> are still terminated with a semicolon).
        Use the <code>extends</code> keyword, but not the
        <code>@extends</code> JSDoc annotation unless the className extends a
        templatized type.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint columns prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> constructor</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> /** @type {"{number}"} */</span>
        <span className="pln"></span>
        <span className="kwd"> this</span>
        <span className="pun">.</span>
        <span className="pln">x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com"> /** @return {"{number}"} */</span>
        <br></br>
        <span className="pln"> method</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> return</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="typ">Foo</span>
        <span className="pun">.</span>
        <span className="typ">Empty</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="pun">{};</span>
      </pre>
      <pre className="language-js prettyprint columns prettyprinted">
        <span className="com">/** @extends {"{Foo&lt;string&gt;}"} */</span>
        <br></br>
        <span className="pln">foo</span>
        <span className="pun">.</span>
        <span className="typ">Bar</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">className</span>
        <span className="pln"> extends </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> /** @override */</span>
        <br></br>
        <span className="pln"> method</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> return</span>
        <span className="pln"> super</span>
        <span className="pun">.</span>
        <span className="pln">method</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">/</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @interface */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Frobnicator</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com"> /** @param {"{string}"} message */</span>
        <br></br>
        <span className="pln"> frobnicate</span>
        <span className="pun">(</span>
        <span className="pln">message</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="formatting-function-expressions">4.2.4 Function expressions</h4>
      <p>
        When declaring an anonymous function in the list of arguments for a
        function call, the body of the function is indented two spaces more than
        the preceding indentation depth.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">prefix</span>
        <span className="pun">.</span>
        <span className="pln">something</span>
        <span className="pun">.</span>
        <span className="pln">reallyLongFunctionName</span>
        <span className="pun">(</span>
        <span className="str">'whatever'</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">a1</span>
        <span className="pun">,</span>
        <span className="pln"> a2</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          {" "}
          // Indent the function body +2 relative to indentation depth
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          {" "}
          // of the 'prefix' statement one line above.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">a1</span>
        <span className="pun">.</span>
        <span className="pln">equals</span>
        <span className="pun">(</span>
        <span className="pln">a2</span>
        <span className="pun">))</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln"> someOtherLongFunctionName</span>
        <span className="pun">(</span>
        <span className="pln">a1</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">else</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln"> andNowForSomethingCompletelyDifferent</span>
        <span className="pun">(</span>
        <span className="pln">a2</span>
        <span className="pun">.</span>
        <span className="pln">parrot</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"});</span>
        <br></br>
        <span className="pln">some</span>
        <span className="pun">.</span>
        <span className="pln">reallyLongFunctionCall</span>
        <span className="pun">(</span>
        <span className="pln">arg1</span>
        <span className="pun">,</span>
        <span className="pln"> arg2</span>
        <span className="pun">,</span>
        <span className="pln"> arg3</span>
        <span className="pun">)</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> .</span>
        <span className="pln">thatsWrapped</span>
        <span className="pun">()</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> .</span>
        <span className="pln">then</span>
        <span className="pun">((</span>
        <span className="pln">result</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          {" "}
          // Indent the function body +2 relative to the indentation depth
        </span>
        <br></br>
        <span className="pln"></span>
        <span className="com"> // of the '.then()' call.</span>
        <span className="pln"></span>
        <span className="kwd"> if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">result</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln"> result</span>
        <span className="pun">.</span>
        <span className="pln">use</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"});</span>
      </pre>
      <h4 id="formatting-switch-statements">4.2.5 Switch statements</h4>
      <p>
        As with any other block, the contents of a switch block are indented +2.
      </p>
      <p>
        After a switch label, a newline appears, and the indentation level is
        increased +2, exactly as if a block were being opened. An explicit block
        may be used if required by lexical scoping. The following switch label
        returns to the previous indentation level, as if a block had been
        closed.
      </p>
      <p>
        A blank line is optional between a <code>break</code> and the following
        case.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">switch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">animal</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> case</span>
        <span className="pln"> </span>
        <span className="typ">Animal</span>
        <span className="pun">.</span>
        <span className="pln">BANDERSNATCH</span>
        <span className="pun">:</span>
        <br></br>
        <span className="pln"> handleBandersnatch</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> break</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd"> case</span>
        <span className="pln"> </span>
        <span className="typ">Animal</span>
        <span className="pun">.</span>
        <span className="pln">JABBERWOCK</span>
        <span className="pun">:</span>
        <br></br>
        <span className="pln"> handleJabberwock</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> break</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd"> default</span>
        <span className="pun">:</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd"> throw</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Error</span>
        <span className="pun">(</span>
        <span className="str">'Unknown animal'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <h3 id="formatting-statements">4.3 Statements</h3>
      <h4 id="formatting-one-statement-perline">
        4.3.1 One statement per line
      </h4>
      <h4 id="formatting-semicolons-are-required">
        4.3.2 Semicolons are required
      </h4>
      <p>
        Every statement must be terminated with a semicolon. Relying on
        automatic semicolon insertion is forbidden.
      </p>
      <h3 id="formatting-column-limit">4.4 Column limit: 80</h3>
      <p>
        JavaScript code has a column limit of 80 characters. Except as noted
        below, any line that would exceed this limit must be line-wrapped, as
        explained in
        <a href="#formatting-line-wrapping">4.5 Line-wrapping</a>.
      </p>
      <p className="exceptions">
        <strong>Exceptions:</strong>
      </p>
      <ol>
        <li>
          <code>goog.module</code>, <code>goog.require</code> and{" "}
          <code>goog.requireType</code> statements (see
          <a href="#file-goog-module">3.3 goog.module statement</a> and{" "}
          <a href="#file-goog-require">
            3.6 goog.require and goog.requireType statements
          </a>
          ).
        </li>
        <li>
          ES module <code>import</code> and <code>export from</code> statements
          (see
          <a href="#es-module-imports">3.4.1 Imports</a> and{" "}
          <a href="#es-module-export-from">3.4.2.4 export from</a>).
        </li>
        <li>
          Lines where obeying the column limit is not possible or would hinder
          discoverability. Examples include:
          <ul>
            <li>A long URL which should be clickable in source.</li>
            <li>A shell command intended to be copied-and-pasted.</li>
            <li>
              A long string literal which may need to be copied or searched for
              wholly (e.g., a long file path).
            </li>
          </ul>
        </li>
      </ol>
      <h3 id="formatting-line-wrapping">4.5 Line-wrapping</h3>
      <p>
        <strong>Terminology Note</strong>: <em>Line wrapping</em> is breaking a
        chunk of code into multiple lines to obey column limit, where the chunk
        could otherwise legally fit in a single line.
      </p>
      <p>
        There is no comprehensive, deterministic formula showing{" "}
        <em>exactly</em> how to line-wrap in every situation. Very often there
        are several valid ways to line-wrap the same piece of code.
      </p>
      <p className="note">
        Note: While the typical reason for line-wrapping is to avoid overflowing
        the column limit, even code that would in fact fit within the column
        limit may be line-wrapped at the author's discretion.
      </p>
      <p className="tip">
        Tip: Extracting a method or local variable may solve the problem without
        the need to line-wrap.
      </p>
      <h4 id="formatting-where-to-break">4.5.1 Where to break</h4>
      <p>
        The prime directive of line-wrapping is: prefer to break at a{" "}
        <strong>higher syntactic level</strong>.{" "}
      </p>
      <p className="preferred">Preferred:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">currentEstimate </span>
        <span className="pun">=</span>
        <span className="pln">calc</span>
        <span className="pun">(</span>
        <span className="pln">currentEstimate </span>
        <span className="pun">+</span>
        <span className="pln"> x </span>
        <span className="pun">*</span>
        <span className="pln"> currentEstimate</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">/</span>
        <span className="pln"></span>
        <span className="lit">2.0</span>
        <span className="pun">;</span>
      </pre>
      <p className="discouraged">Discouraged:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln">currentEstimate </span>
        <span className="pun">=</span>
        <span className="pln"> calc</span>
        <span className="pun">(</span>
        <span className="pln">currentEstimate </span>
        <span className="pun">+</span>
        <span className="pln"> x </span>
        <span className="pun">*</span>
        <span className="pln">currentEstimate</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">/</span>
        <span className="pln"> </span>
        <span className="lit">2.0</span>
        <span className="pun">;</span>
      </pre>
      <p>
        In the preceding example, the syntactic levels from highest to lowest
        are as follows: assignment, division, function call, parameters, number
        constant.
      </p>
      <p>Operators are wrapped as follows:</p>
      <ol>
        <li>
          When a line is broken at an operator the break comes after the symbol.
          (Note that this is not the same practice used in Google style for
          Java.)
          <ol>
            <li>
              This does not apply to the <q>dot</q> (<code>.</code>), which is
              not actually an operator.
            </li>
          </ol>
        </li>
        <li>
          A method or constructor name stays attached to the open parenthesis (
          <code>(</code>) that follows it.
        </li>
        <li>
          A comma (<code>,</code>) stays attached to the token that precedes it.
        </li>
      </ol>
      <blockquote>
        <p className="note">
          Note: The primary goal for line wrapping is to have clear code, not
          necessarily code that fits in the smallest number of lines.
        </p>
      </blockquote>
      <h4 id="formatting-indent">
        4.5.2 Indent continuation lines at least +4 spaces
      </h4>
      <p>
        When line-wrapping, each line after the first (each{" "}
        <em>continuation line</em>) is indented at least +4 from the original
        line, unless it falls under the rules of block indentation.
      </p>
      <p>
        When there are multiple continuation lines, indentation may be varied
        beyond +4 as appropriate. In general, continuation lines at a deeper
        syntactic level are indented by larger multiples of 4, and two lines use
        the same indentation level if and only if they begin with syntactically
        parallel elements.
      </p>
      <p>
        <a href="#formatting-horizontal-alignment">
          4.6.3 Horizontal alignment: discouraged
        </a>{" "}
        addresses the discouraged practice of using a variable number of spaces
        to align certain tokens with previous lines.
      </p>
      <h3 id="formatting-whitespace">4.6 Whitespace</h3>
      <h4 id="formatting-vertical-whitespace">4.6.1 Vertical whitespace</h4>
      <p>A single blank line appears:</p>
      <ol>
        <li>
          Between consecutive methods in a className or object literal
          <ol>
            <li>
              Exception: A blank line between two consecutive properties
              definitions in an object literal (with no other code between them)
              is optional. Such blank lines are used as needed to create{" "}
              <em>logical groupings</em> of fields.
            </li>
          </ol>
        </li>
        <li>
          Within method bodies, sparingly to create <em>logical groupings</em>{" "}
          of statements. Blank lines at the start or end of a function body are
          not allowed.
        </li>
        <li>
          <em>Optionally</em> before the first or after the last method in a
          className or object literal (neither encouraged nor discouraged).
        </li>
        <li>
          As required by other sections of this document (e.g.
          <a href="#file-goog-require">
            3.6 goog.require and goog.requireType statements
          </a>
          ).
        </li>
      </ol>
      <p>
        <em>Multiple</em> consecutive blank lines are permitted, but never
        required (nor encouraged).
      </p>
      <h4 id="formatting-horizontal-whitespace">4.6.2 Horizontal whitespace</h4>
      <p>
        Use of horizontal whitespace depends on location, and falls into three
        broad categories: <em>leading</em> (at the start of a line),{" "}
        <em>trailing</em> (at the end of a line), and <em>internal</em>. Leading
        whitespace (i.e., indentation) is addressed elsewhere. Trailing
        whitespace is forbidden.
      </p>
      <p>
        Beyond where required by the language or other style rules, and apart
        from literals, comments, and JSDoc, a single internal ASCII space also
        appears in the following places <strong>only</strong>.
      </p>
      <ol>
        <li>
          Separating any reserved word (such as <code>if</code>,{" "}
          <code>for</code>, or <code>catch</code>) except for
          <code>function</code> and <code>super</code>, from an open parenthesis
          (<code>(</code>) that follows it on that line.
        </li>
        <li>
          Separating any reserved word (such as <code>else</code> or{" "}
          <code>catch</code>) from a closing curly brace (<code>{"}"}</code>)
          that precedes it on that line.
        </li>
        <li>
          Before any open curly brace (<code>{"{"}</code>), with two exceptions:
          <ol>
            <li>
              Before an object literal that is the first argument of a function
              or the first element in an array literal (e.g.{" "}
              <code>
                foo({"{"}a: [{"{c: d}"}]{"}"})
              </code>
              ).
            </li>
            <li>
              In a template expansion, as it is forbidden by the language (e.g.
              valid:
              <code>`ab${1 + 2}cd`</code>, invalid:{" "}
              <code className="badcode">`xy$ {3}z`</code>).
            </li>
          </ol>
        </li>
        <li>On both sides of any binary or ternary operator.</li>
        <li>
          After a comma (<code>,</code>) or semicolon (<code>;</code>). Note
          that spaces are <em>never</em> allowed before these characters.
        </li>
        <li>
          After the colon (<code>:</code>) in an object literal.
        </li>
        <li>
          On both sides of the double slash (<code>//</code>) that begins an
          end-of-line comment. Here, multiple spaces are allowed, but not
          required.
        </li>
        <li>
          After an open-block comment character and on both sides of close
          characters (e.g. for short-form type declarations, casts, and
          parameter name comments:
          <code>this.foo = /** @type {"{number}"} */ (bar)</code>; or{" "}
          <code>
            function(/** string */ foo)
            {"{"}
          </code>
          ; or <code>baz(/* buzz= */ true)</code>).
        </li>
      </ol>
      <h4 id="formatting-horizontal-alignment">
        4.6.3 Horizontal alignment: discouraged
      </h4>
      <p>
        <strong>Terminology Note</strong>: <em>Horizontal alignment</em> is the
        practice of adding a variable number of additional spaces in your code
        with the goal of making certain tokens appear directly below certain
        other tokens on previous lines.
      </p>
      <p>
        This practice is permitted, but it is{" "}
        <strong>generally discouraged</strong> by Google Style. It is not even
        required to <em>maintain</em> horizontal alignment in places where it
        was already used.
      </p>
      <p>
        Here is an example without alignment, followed by one with alignment.
        Both are allowed, but the latter is discouraged:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pun">{"{"}</span>
        <span className="pln">tiny</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// this is great</span>
        <span className="pln">longer</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">435</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// this too</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <span className="pun">{"{"}</span>
        <span className="pln">tiny</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// permitted, but future edits</span>
        <span className="pln">longer</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">435</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// may leave it unaligned</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
      </pre>
      <p className="tip">
        Tip: Alignment can aid readability, but it creates problems for future
        maintenance. Consider a future change that needs to touch just one line.
        This change may leave the formerly-pleasing formatting mangled, and that
        is allowed. More often it prompts the coder (perhaps you) to adjust
        whitespace on nearby lines as well, possibly triggering a cascading
        series of reformattings. That one-line change now has a{" "}
        <q>blast radius.</q> This can at worst result in pointless busywork, but
        at best it still corrupts version history information, slows down
        reviewers and exacerbates merge conflicts.
      </p>
      <h4 id="formatting-function-arguments">4.6.4 Function arguments</h4>
      <p>
        Prefer to put all function arguments on the same line as the function
        name. If doing so would exceed the 80-column limit, the arguments must
        be line-wrapped in a readable way. To save space, you may wrap as close
        to 80 as possible, or put each argument on its own line to enhance
        readability. Indentation should be four spaces. Aligning to the
        parenthesis is allowed, but discouraged. Below are the most common
        patterns for argument wrapping:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          // Arguments start on a new line, indented four spaces. Preferred when
          the
        </span>
        <span className="pln"></span>
        <span className="com">
          // arguments don't fit on the same line with the function name (or the
          keyword
        </span>
        <span className="pln"></span>
        <span className="com">
          // "function") but fit entirely on the second line. Works with very
          long
        </span>
        <span className="pln"></span>
        <span className="com">
          // function names, survives renaming without reindenting, low on
          space.
        </span>
        <span className="pln">doSomething</span>
        <span className="pun">(</span>
        <span className="pln">descriptiveArgumentOne</span>
        <span className="pun">,</span>
        <span className="pln"> descriptiveArgumentTwo</span>
        <span className="pun">,</span>
        <span className="pln"> descriptiveArgumentThree</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">// …</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">
          // If the argument list is longer, wrap at 80. Uses less vertical
          space,
        </span>
        <span className="pln"></span>
        <span className="com">
          // but violates the rectangle rule and is thus not recommended.
        </span>
        <span className="pln">doSomething</span>
        <span className="pun">(</span>
        <span className="pln">veryDescriptiveArgumentNumberOne</span>
        <span className="pun">,</span>
        <span className="pln"> veryDescriptiveArgumentTwo</span>
        <span className="pun">,</span>
        <span className="pln">tableModelEventHandlerProxy</span>
        <span className="pun">,</span>
        <span className="pln"> artichokeDescriptorAdapterIterator</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">// …</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">
          // Four-space, one argument per line. Works with long function names,
        </span>
        <span className="pln"></span>
        <span className="com">
          // survives renaming, and emphasizes each argument.
        </span>
        <span className="pln">doSomething</span>
        <span className="pun">(</span>
        <span className="pln">veryDescriptiveArgumentNumberOne</span>
        <span className="pun">,</span>
        <span className="pln">veryDescriptiveArgumentTwo</span>
        <span className="pun">,</span>
        <span className="pln">tableModelEventHandlerProxy</span>
        <span className="pun">,</span>
        <span className="pln">artichokeDescriptorAdapterIterator</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">// …</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h3 id="formatting-grouping-parentheses">
        4.7 Grouping parentheses: recommended
      </h3>
      <p>
        Optional grouping parentheses are omitted only when the author and
        reviewer agree that there is no reasonable chance that the code will be
        misinterpreted without them, nor would they have made the code easier to
        read. It is <em>not</em> reasonable to assume that every reader has the
        entire operator precedence table memorized.
      </p>
      <p>
        Do not use unnecessary parentheses around the entire expression
        following
        <code>delete</code>, <code>typeof</code>, <code>void</code>,{" "}
        <code>return</code>, <code>throw</code>, <code>case</code>,{" "}
        <code>in</code>, <code>of</code>, or <code>yield</code>.
      </p>
      <p>
        Parentheses are required for type casts:{" "}
        <code>/** @type {"{!Foo}"} */ (foo)</code>.
      </p>
      <h3 id="formatting-comments">4.8 Comments</h3>
      <p>
        This section addresses <em>implementation comments</em>. JSDoc is
        addressed separately in <a href="#jsdoc">7 JSDoc</a>.
      </p>
      <h4 id="formatting-block-comment-style">4.8.1 Block comment style</h4>
      <p>
        Block comments are indented at the same level as the surrounding code.
        They may be in <code>/* … */</code> or <code>//</code>-style. For
        multi-line <code>/* … */</code> comments, subsequent lines must start
        with * aligned with the
        <code>*</code> on the previous line, to make comments obvious with no
        extra context.
      </p>
      <pre className="language-js prettyprint prettyprinted" >
        <span className="com">/* * This is * okay. */</span>
        <span className="pln"></span>
        <span className="com">// And so</span>
        <span className="pln"></span>
        <span className="com">// is this.</span>
        <span className="pln"></span>
        <span className="com">/* This is fine, too. */</span>
      </pre>
      <p>
        Comments are not enclosed in boxes drawn with asterisks or other
        characters.
      </p>
      <p>
        Do not use JSDoc (<code>/** … */</code>) for implementation comments.
      </p>
      <h4 id="formatting-param-name-comments">4.8.2 Parameter Name Comments</h4>
      <p>
        “Parameter name” comments should be used whenever the value and method
        name do not sufficiently convey the meaning, and refactoring the method
        to be clearer is infeasible . Their preferred format is before the value
        with <q>=</q>:
      </p>
      <pre className="language-js prettyprint prettyprinted" >
        <span className="pln">someFunction</span>
        <span className="pun">(</span>
        <span className="pln">obviousParam</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">/* shouldRender= */</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">/* name= */</span>
        <span className="pln"> </span>
        <span className="str">'hello'</span>
        <span className="pun">);</span>
      </pre>
      <p>
        For consistency with surrounding code you may put them after the value
        without
        <q>=</q>:
      </p>
      <pre className="language-js prettyprint prettyprinted" >
        <span className="pln">someFunction</span>
        <span className="pun">(</span>
        <span className="pln">obviousParam</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pln"> </span>
        <span className="com">/* shouldRender */</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">'hello'</span>
        <span className="pln"> </span>
        <span className="com">/* name */</span>
        <span className="pun">);</span>
      </pre>
    </div>
  );
};

export default Formattingdetail;
