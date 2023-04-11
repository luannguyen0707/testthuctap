import React from "react";

const Lists = () => {
  return (
    <div className="lists">
      <div className="wrapper lists__wrapper">
        <div className="lists__left">
          <div className="lists__link">
            <dl>
              <dt>
                <a href="#0">1 Introduction</a>
              </dt>
              <dd>
                <a href="#0">1.1 Terminology notes</a>
              </dd>
              <dd>
                <a href="#0">1.2 Guide notes</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#1">2 Source file basics</a>
              </dt>
              <dd>
                <a href="#1">2.1 File name</a>
              </dd>
              <dd>
                <a href="#1">2.2 File encoding: UTF-8</a>
              </dd>
              <dd>
                <a href="#1">2.3 Special characters</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#2">3 Source file structure</a>
              </dt>
              <dd>
                <a href="#2">
                  3.1 License or copyright information, if present
                </a>
              </dd>
              <dd>
                <a href="#2">3.2 @fileoverview JSDoc, if present</a>
              </dd>
              <dd>
                <a href="#2">3.3 goog.module statement</a>
              </dd>
              <dd>
                <a href="#2">3.3.3 goog.module Exports</a>
              </dd>
              <dd>
                <a href="#2">3.4 ES modules</a>
              </dd>
              <dd>
                <a href="#2">3.5 goog.setTestOnly</a>
              </dd>
              <dd>
                <a href="#2">
                  3.6 goog.require and goog.requireType statements
                </a>
              </dd>
              <dd>
                <a href="#2">3.7 The file’s implementation</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#3">4 Formatting</a>
              </dt>
              <dd>
                <a href="#3">4.1 Braces</a>
              </dd>
              <dd>
                <a href="#3">4.2 Block indentation: +2 spaces</a>
              </dd>
              <dd>
                <a href="#3">4.3 Statements</a>
              </dd>
              <dd>
                <a href="#3">4.4 Column limit: 80</a>
              </dd>
              <dd>
                <a href="#3">4.5 Line-wrapping</a>
              </dd>
              <dd>
                <a href="#3">4.6 Whitespace</a>
              </dd>
              <dd>
                <a href="#3">4.7 Grouping parentheses: recommended</a>
              </dd>
              <dd>
                <a href="#3">4.8 Comments</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#4">5 Language features</a>
              </dt>
              <dd>
                <a href="#4">5.1 Local variable declarations</a>
              </dd>
              <dd>
                <a href="#4">5.2 Array literals</a>
              </dd>
              <dd>
                <a href="#4">5.3 Object literals</a>
              </dd>
              <dd>
                <a href="#4">5.4 Classes</a>
              </dd>
              <dd>
                <a href="#4">5.5 Functions</a>
              </dd>
              <dd>
                <a href="#4">5.6 String literals</a>
              </dd>
              <dd>
                <a href="#4">5.7 Number literals</a>
              </dd>
              <dd>
                <a href="#4">5.8 Control structures</a>
              </dd>
              <dd>
                <a href="#4">5.9 this</a>
              </dd>
              <dd>
                <a href="#4">5.10 Equality Checks</a>
              </dd>
              <dd>
                <a href="#4">5.11 Disallowed features</a>
              </dd>
            </dl>
          </div>
        </div>

        <div className="lists__right">
          <div className="lists__link">
            <dl>
              <dt>
                <a href="#5">6 Naming</a>
              </dt>
              <dd>
                <a href="#5">6.1 Rules common to all identifiers</a>
              </dd>
              <dd>
                <a href="#5">6.2 Rules by identifier type</a>
              </dd>
              <dd>
                <a href="#5">6.3 Camel case: defined</a>
              </dd>
              <dd>
                <a href="#5">6.4 Style css: defined</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#6">7 JSDoc</a>
              </dt>
              <dd>
                <a href="#6">7.1 General form</a>
              </dd>
              <dd>
                <a href="#6">7.2 Markdown</a>
              </dd>
              <dd>
                <a href="#6">7.3 JSDoc tags</a>
              </dd>
              <dd>
                <a href="#6">7.4 Line wrapping</a>
              </dd>
              <dd>
                <a href="#6">7.5 Top/file-level comments</a>
              </dd>
              <dd>
                <a href="#6">7.6 Class comments</a>
              </dd>
              <dd>
                <a href="#6">7.7 Enum and typedef comments</a>
              </dd>
              <dd>
                <a href="#6">7.8 Method and function comments</a>
              </dd>
              <dd>
                <a href="#6">7.9 Property comments</a>
              </dd>
              <dd>
                <a href="#6">7.10 Type annotations</a>
              </dd>
              <dd>
                <a href="#6">7.11 Visibility annotations</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#7">8 Policies</a>
              </dt>
              <dd>
                <a href="#7">
                  8.1 Issues unspecified by Google Style: Be Consistent!
                </a>
              </dd>
              <dd>
                <a href="#7">8.2 Compiler warnings</a>
              </dd>
              <dd>
                <a href="#7">8.3 Deprecation</a>
              </dd>
              <dd>
                <a href="#7">8.4 Code not in Google Style</a>
              </dd>
              <dd>
                <a href="#7">8.5 Local style rules</a>
              </dd>
              <dd>
                <a href="#7">8.6 Generated code: mostly exempt</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#8">9 Appendices</a>
              </dt>
              <dd>
                <a href="#8">9.1 JSDoc tag reference</a>
              </dd>
              <dd>
                <a href="#8">9.2 Commonly misunderstood style rules</a>
              </dd>
              <dd>
                <a href="#8">9.3 Style-related tools</a>
              </dd>
              <dd>
                <a href="#8">9.4 Exceptions for legacy platforms</a>
              </dd>
            </dl>
            <br></br>
            <dl>
              <dt>
                <a href="#9">10 Nexlesoft custom</a>
              </dt>
              <dd>
                <a href="#9">10.1 Frontend + Backend + Mobile</a>
              </dd>
              <dd>
                <a href="#9">10.2 Redmine/Jira</a>
              </dd>
              <dd>
                <a href="#9">10.3 Source control</a>
              </dd>
              <dd>
                <a href="#9">10.4 Postman</a>
              </dd>
              <dd>
                <a href="#9">10.5 Gmail for developer</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
