/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const introductionDetail = () => {
  return (
    <div>
      <h2 id="introduction"> 1 Introduction</h2>
      <p>
        This document serves as the
        <strong> complete </strong> definition of Google’s coding standards for
        source code in the JavaScript programming language. A JavaScript source
        file is described as being"
        <em>in Google Style</em>" if and only if it adheres to the rules
        herein."
      </p>
      <p>
        Like other programming style guides, the issues covered span not only
        aesthetic issues of formatting, but other types of conventions or coding
        standards as well. However, this document focuses primarily on the
        hard-and-fast rules that we follow universally, and avoids giving advice
        that isn't clearly enforceable (whether by human or tool).
      </p>
      <h3 id="terminology-notes">1.1 Terminology notes</h3>
      <p>In this document, unless otherwise clarified:</p>
      <ol>
        <li>
          The term
          <em> comment </em>
          always refers to
          <em> implementation </em>
          comments. We do not use the phrase
          <q>documentation comments</q>, instead using the common term “JSDoc”
          for both human-readable text and machine-readable annotations within
          <code>/** … */</code>
        </li>
        <br></br>
        <li>
          This Style Guide uses
          <a href="http://tools.ietf.org/html/rfc2119"> RFC 2119 </a>
          terminology when using the phrases
          <em> must </em>,<em> must not </em>,<em> should not </em>,
          <em> should </em>, and
          <em> may </em>. The terms
          <em> prefer </em>
          and
          <em> avoid </em>
          correspond to
          <em> should </em>
          and
          <em> should not </em>, respectively. Imperative and declarative
          statements are prescriptive and correspond to
          <em> must </em>.
        </li>
      </ol>
      <p>
        Other <q> terminology notes </q>
        will appear occasionally throughout the document.
      </p>
      <h3 id="guide-notes">1.2 Guide notes</h3>
      <p>
        Example code in this document is
        <strong>non-normative</strong>. That is, while the examples are in
        Google Style, they may not illustrate the
        <em> only </em>
        stylish way to represent the code. Optional formatting choices made in
        examples must not be enforced as rules.
      </p>
    </div>
  );
};

export default introductionDetail;
