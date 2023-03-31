/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Sourcefilebasicsdetail = () => {
  return (
    <div>
      <h2 id="source-file-basics">2 Source file basics</h2>
      <h3 id="file-name">2.1 File name</h3>
      <p>
        File names must be all lowercase and may include underscores (
        <code>_</code>) or dashes (<code>-</code>
        ), but no additional punctuation. Follow the convention that your
        project uses. Filenames’ extension must be
        <code>.js</code>.
      </p>
      <h3 id="file-encoding">2.2 File encoding: UTF-8</h3>
      <p>
        Source files are encoded in
        <strong> UTF-8 </strong>.
      </p>
      <h3 id="special-characters">2.3 Special characters</h3>
      <h4 id="whitespace-characters">2.3.1 Whitespace characters</h4>
      <p>
        Aside from the line terminator sequence, the ASCII horizontal space
        character (0x20) is the only whitespace character that appears anywhere
        in a source file. This implies that
      </p>
      <ol>
        <li>
          <p>
            All other whitespace characters in string literals are escaped, and
          </p>
        </li>
        <li>
          <p>
            Tab characters are
            <strong> not </strong>
            used for indentation.
          </p>
        </li>
      </ol>
      <h4 id="special-escape-sequences">2.3.2 Special escape sequences</h4>
      <p>
        For any character that has a special escape sequence (
        <code>\' , \" , \\ , \b , \f , \n , \r , \t ,\v ),</code>
        that sequence is used rather than the corresponding numeric escape (e.g
        <code> \x0a , \u000a , or </code>
        <code>\u{"{a}"}</code>
        ). Legacy octal escapes are never used.
      </p>
      <h4 id="non-ascii-characters">2.3.3 Non-ASCII characters</h4>
      <p>
        For the remaining non-ASCII characters, either the actual Unicode
        character (e.g.
        <code>∞</code>) or the equivalent hex or Unicode escape (e.g.{" "}
        <code>\u221e</code>) is used, depending only on which makes the code
        <strong> easier to read and understand </strong>.
      </p>
      <p className="tip">
        Tip: In the Unicode escape case, and occasionally even when actual
        Unicode characters are used, an explanatory comment can be very helpful.
      </p>
      <pre className="language-js prettyprint prettyprinted" >
        <span className="com">
          /* Best: perfectly clear even without a comment. */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> units </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'μs'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com">
          /* Allowed: but unncessary as μ is a printable character. */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> units </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'\u03bcs'</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">// 'μs'</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com">
          /* Good: use escapes for non-printable characters with a comment for
          clarity. */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="str">'\ufeff'</span>
        <span className="pln"> </span>
        <span className="pun">+</span>
        <span className="pln"> content</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">// Prepend a byte order mark.</span>
      </pre>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">
          /* Poor: the reader has no idea what character this is. */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> units </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'\u03bcs'</span>
        <span className="pun">;</span>
      </pre>
      <p className="tip">
        Tip: Never make your code less readable simply out of fear that some
        programs might not handle non-ASCII characters properly. If that
        happens, those programs are <strong> broken </strong> and they must be{" "}
        <strong> fixed </strong>.
      </p>
    </div>
  );
};

export default Sourcefilebasicsdetail;
