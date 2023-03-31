/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const JSDocdetail = () => {
  return (
    <div>
      <h2 id="jsdoc">7 JSDoc</h2>
      <p>
        <a href="https://developers.google.com/closure/compiler/docs/js-for-compiler">
          JSDoc
        </a>{" "}
        is used on all className, fields, and methods.
      </p>
      <h3 id="jsdoc-general-form">7.1 General form</h3>
      <p>The basic formatting of JSDoc blocks is as seen in this example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Multiple lines of JSDoc text are written here, * wrapped
          normally. * @param {"{number}"} arg A number to do something to. */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> doSomething</span>
        <span className="pun">(</span>
        <span className="pln">arg</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">…</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>or in this single-line example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** @const @private {"{!Foo}"} A short bit of JSDoc. */
        </span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">foo_ </span>
        <span className="pun">=</span>
        <span className="pln"> foo</span>
        <span className="pun">;</span>
      </pre>
      <p>
        If a single-line comment overflows into multiple lines, it must use the
        multi-line style with <code>/**</code> and <code>*/</code> on their own
        lines.
      </p>
      <p>
        Many tools extract metadata from JSDoc comments to perform code
        validation and optimization. As such, these comments{" "}
        <strong>must</strong> be well-formed.
      </p>
      <h3 id="jsdoc-markdown">7.2 Markdown</h3>
      <p>
        JSDoc is written in Markdown, though it may include HTML when necessary.
      </p>
      <p>
        Note that tools that automatically extract JSDoc (e.g.{" "}
        <a href="https://github.com/jleyba/js-dossier">JsDossier</a>) will often
        ignore plain text formatting, so if you did this:
      </p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">
          /** * Computes weight based on three factors: * items sent * items
          received * last timestamp */
        </span>
      </pre>
      <p>it would come out like this:</p>
      <pre className="">
        Computes weight based on three factors: items sent items received last
        timestamp
      </pre>
      <p>Instead, write a Markdown list:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Computes weight based on three factors: * * - items sent * -
          items received * - last timestamp */
        </span>
      </pre>
      <h3 id="jsdoc-tags">7.3 JSDoc tags</h3>
      <p>
        Google style allows a subset of JSDoc tags. See
        <a href="#appendices-jsdoc-tag-reference">
          9.1 JSDoc tag reference
        </a>{" "}
        for the complete list. Most tags must occupy their own line, with the
        tag at the beginning of the line.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">
          /** * The "param" tag must occupy its own line and may not be
          combined. * @param {"{number}"} left @param {"{number}"} right */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> add</span>
        <span className="pun">(</span>
        <span className="pln">left</span>
        <span className="pun">,</span>
        <span className="pln"> right</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        Simple tags that do not require any additional data (such as{" "}
        <code>@private</code>,<code>@const</code>, <code>@final</code>,{" "}
        <code>@export</code>) may be combined onto the same line, along with an
        optional type when appropriate.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Place more complex annotations (like "implements" and
          "template") * on their own lines. Multiple simple tags (like "export"
          and "final") * may be combined in one line. * @export @final *
          @implements {"{Iterable&lt;TYPE&gt;}"}* @template TYPE */
        </span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * @param {"{!ObjType}"} obj Some object. * @param {"{number=}"}{" "}
          num An optional number. */
        </span>
        <span className="pln"></span>
        <span className="kwd">constructor</span>
        <span className="pun">(</span>
        <span className="pln">obj</span>
        <span className="pun">,</span>
        <span className="pln"> num </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** @private @const {"{!Array&lt;!ObjType|number&gt;}"} */
        </span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">data_ </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">obj</span>
        <span className="pun">,</span>
        <span className="pln"> num</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        There is no hard rule for when to combine tags, or in which order, but
        be consistent.
      </p>
      <p>
        For general information about annotating types in JavaScript see
        <a href="https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler">
          Annotating JavaScript for the Closure Compiler
        </a>{" "}
        and{" "}
        <a href="https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System">
          Types in the Closure Type System
        </a>
        .
      </p>
      <h3 id="jsdoc-line-wrapping">7.4 Line wrapping</h3>
      <p>
        Line-wrapped block tags are indented four spaces. Wrapped description
        text may be lined up with the description on previous lines, but this
        horizontal alignment is discouraged.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Illustrates line wrapping for long param/return descriptions. *
          @param {"{string}"} foo This is a param with a description too long to
          fit in * one line. * @return {"{number}"} This returns something that
          has a description too long to * fit in one line. */
        </span>
        <span className="pln">exports</span>
        <span className="pun">.</span>
        <span className="pln">method </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
      </pre>
      <p>
        Do not indent when wrapping a <code>@desc</code> or{" "}
        <code>@fileoverview</code> description.
      </p>
      <h3 id="jsdoc-top-file-level-comments">7.5 Top/file-level comments</h3>
      <p>
        A file may have a top-level file overview. A copyright notice , author
        information, and default{" "}
        <a href="#jsdoc-visibility-annotations">visibility level</a> are
        optional. File overviews are generally recommended whenever a file
        consists of more than a single className definition. The top level comment
        is designed to orient readers unfamiliar with the code to what is in
        this file. If present, it may provide a description of the file's
        contents and any dependencies or compatibility information. Wrapped
        lines are not indented.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * @fileoverview Description of file, its uses and information *
          about its dependencies. * @package */
        </span>
      </pre>
      <h3 id="jsdoc-className-comments">7.6 className comments</h3>
      <p>
        classNamees, interfaces and records must be documented with a description
        and any template parameters, implemented interfaces, visibility, or
        other appropriate tags. The className description should provide the reader
        with enough information to know how and when to use the className, as well
        as any additional considerations necessary to correctly use the className.
        Textual descriptions may be omitted on the constructor.{" "}
        <code>@constructor</code> and <code>@extends</code> annotations are not
        used with the
        <code>className</code> keyword unless the className is being used to declare an{" "}
        <code>@interface</code> or it extends a generic className.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /**
          <br></br>* A fancier event target that does cool things.
          <br></br>* @implements {"{Iterable&lt;string&gt;}"}
          <br></br>
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyFancyTarget</span>
        <span className="pln"> extends </span>
        <span className="typ">EventTarget</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /**
          <br></br>* @param {"{string}"} arg1 An argument that makes this more
          interesting. <br></br>* @param {"{!Array&lt;number&gt;}"} arg2 List of
          numbers to be processed. */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">constructor</span>
        <span className="pun">(</span>
        <span className="pln">arg1</span>
        <span className="pun">,</span>
        <span className="pln"> arg2</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// ...</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /**
          <br></br>* Records are also helpful.
          <br></br>* @extends {"{Iterator&lt;TYPE&gt;}"}*<br></br>
          @record * <br></br>
          @template TYPE <br></br>
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Listable</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** @return {"{TYPE}"} The next item in line to be returned. */
        </span>
        <br></br>
        <span className="pln">next</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <h3 id="jsdoc-enum-and-typedef-comments">
        7.7 Enum and typedef comments
      </h3>
      <p>
        All enums and typedefs must be documented with appropriate JSDoc tags (
        <code>@typedef</code> or <code>@enum</code>) on the preceding line.
        Public enums and typedefs must also have a description. Individual enum
        items may be documented with a JSDoc comment on the preceding line.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * A useful type union, which is reused often. * @typedef{" "}
          {"{!Bandersnatch|!BandersnatchType}"}
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">let</span>
        <span className="pln"> </span>
        <span className="typ">CoolUnionType</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="com">
          /** * Types of bandersnatches. * @enum {"{string}"}
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">BandersnatchType</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">/** This kind is really frumious. */</span>
        <span className="pln">FRUMIOUS</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'frumious'</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="com">/** The less-frumious kind. */</span>
        <span className="pln">MANXOME</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'manxome'</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
      </pre>
      <p>
        Typedefs are useful for defining short record types, or aliases for
        unions, complex functions, or generic types. Typedefs should be avoided
        for record types with many fields, since they do not allow documenting
        individual fields, nor using templates or recursive references. For
        large record types, prefer <code>@record</code>.
      </p>
      <h3 id="jsdoc-method-and-function-comments">
        7.8 Method and function comments
      </h3>
      <p>
        In methods and named functions, parameter and return types must be
        documented, except in the case of same-signature <code>@override</code>
        s, where all types are omitted. The <code>this</code> type should be
        documented when necessary. Return type may be omitted if the function
        has no non-empty <code>return</code> statements.
      </p>
      <p>
        Method, parameter, and return descriptions (but not types) may be
        omitted if they are obvious from the rest of the method’s JSDoc or from
        its signature.
      </p>
      <p>
        Method descriptions begin with a verb phrase that describes what the
        method does. This phrase is not an imperative sentence, but instead is
        written in the third person, as if there is an implied{" "}
        <q>This method ...</q> before it.
      </p>
      <p>
        If a method overrides a superclassName method, it must include an{" "}
        <code>@override</code> annotation. Overridden methods inherit all JSDoc
        annotations from the super className method (including visibility
        annotations) and they should be omitted in the overridden method.
        However, if any type is refined in type annotations, all
        <code>@param</code> and <code>@return</code> annotations must be
        specified explicitly.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** A className that does something. */</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">SomeclassName</span>
        <span className="pln"> extends </span>
        <span className="typ">SomeBaseclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * Operates on an instance of MyclassName and returns something. *
          @param {"{!MyclassName}"} obj An object that for some reason needs
          detailed * explanation that spans multiple lines. * @param{" "}
          {"{!OtherclassName}"} obviousOtherclassName * @return {"{boolean}"} Whether
          something occurred. */
        </span>
        <span className="pln">someMethod</span>
        <span className="pun">(</span>
        <span className="pln">obj</span>
        <span className="pun">,</span>
        <span className="pln"> obviousOtherclassName</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">/** @override */</span>
        <span className="pln">overriddenMethod</span>
        <span className="pun">(</span>
        <span className="pln">param</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * Demonstrates how top-level functions follow the same rules. This
          one * makes an array. * @param {"{TYPE}"} arg * @return{" "}
          {"{!Array&lt;TYPE&gt;}"}* @template TYPE */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> makeArray</span>
        <span className="pun">(</span>
        <span className="pln">arg</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        If you only need to document the param and return types of a function,
        you may optionally use inline JSDocs in the function's signature. These
        inline JSDocs specify the return and param types without tags.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">function</span>
        <span className="pln"> </span>
        <span className="com">/** string */</span>
        <span className="pln"> foo</span>
        <span className="pun">(</span>
        <span className="com">/** number */</span>
        <span className="pln"> arg</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{...}"}</span>
      </pre>
      <p>
        If you need descriptions or tags, use a single JSDoc comment above the
        method. For example, methods which return values need a{" "}
        <code>@return</code> tag.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * @param {"{number}"} arg * @return {"{string"}
          */
        </span>
        <span className="pln">bar</span>
        <span className="pun">(</span>
        <span className="pln">arg</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{...}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"})</span>
      </pre>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">// Illegal inline JSDocs.</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">/** @return {"{string}"} */</span>
        <span className="pln"> foo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{...}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">/** Function description. */</span>
        <span className="pln"> bar</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{...}"}</span>
      </pre>
      <p>
        In anonymous functions annotations are generally optional. If the
        automatic type inference is insufficient or explicit annotation improves
        readability, then annotate param and return types like this:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">promise</span>
        <span className="pun">.</span>
        <span className="pln">then</span>
        <span className="pun">(</span>
        <span className="pln"></span>
        <span className="com">/** @return {"{string"} */</span>
        <span className="pln"></span>
        <span className="pun">(</span>
        <span className="com">/** !Array&lt;string&gt; */</span>
        <span className="pln"> items</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">doSomethingWith</span>
        <span className="pun">(</span>
        <span className="pln">items</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> items</span>
        <span className="pun">[</span>
        <span className="lit">0</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <span className="pun">{"}"});</span>
      </pre>
      <p>
        For function type expressions, see{" "}
        <a href="#jsdoc-function-types">7.10.4 Function type expressions</a>.
      </p>
      <h3 id="jsdoc-property-comments">7.9 Property comments</h3>
      <p>
        Property types must be documented. The description may be omitted for
        private properties, if name and type provide enough documentation for
        understanding the code.
      </p>
      <p>
        Publicly exported constants are commented the same way as properties.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** My className. */</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">/** @param {"{string=}"} someString */</span>
        <span className="pln"></span>
        <span className="kwd">constructor</span>
        <span className="pun">(</span>
        <span className="pln">someString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'default string'</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">/** @private @const {"{string=}"} */</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">someString_ </span>
        <span className="pun">=</span>
        <span className="pln"> someString</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="com">/** @private @const {"{!OtherType}"} */</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">someOtherThing_ </span>
        <span className="pun">=</span>
        <span className="pln"> functionThatReturnsAThing</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="com">
          /** * Maximum number of things per pane. * @type {"{number}"}
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">someProperty </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * The number of times we'll try before giving up. * @const{" "}
          {"{number}"}
          */
        </span>
        <span className="pln"></span>
        <span className="typ">MyclassName</span>
        <span className="pun">.</span>
        <span className="pln">RETRY_COUNT </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">33</span>
        <span className="pun">;</span>
      </pre>
      <h3 id="jsdoc-type-annotations">7.10 Type annotations</h3>
      <p>
        Type annotations are found on <code>@param</code>, <code>@return</code>,{" "}
        <code>@this</code>, and <code>@type</code> tags, and optionally on{" "}
        <code>@const</code>, <code>@export</code>, and any visibility tags. Type
        annotations attached to JSDoc tags must always be enclosed in braces.
      </p>
      <h4 id="jsdoc-nullability">7.10.1 Nullability</h4>
      <p>
        Nullability modifiers have different requirements for different types,
        which fall into two broad categories:
      </p>
      <p>
        Nullability modifiers have different requirements for different types,
        which fall into two broad categories:
      </p>
      <ol>
        <li>
          Type annotations for primitives (<code>string</code>,{" "}
          <code>number</code>, <code>boolean</code>, <code>symbol</code>,
          <code>undefined</code>, <code>null</code>) and literals (
          <code>{"{function(...): ...}"}</code> and{" "}
          <code>
            {"{{foo:"}
            {"string...}}"}
          </code>
          ) are always non-nullable by default. Use the <code>?</code> modifier
          to make it nullable, but omit the redundant <code>!</code>.
        </li>
        <li>
          Reference types (generally, anything in <code>UpperCamelCase</code>,
          including
          <code>some.namespace.ReferenceType</code>) refer to a className, enum,
          record, or typedef defined elsewhere. Since these types may or may not
          be nullable, it is impossible to tell from the name alone whether it
          is nullable or not. Always use explicit <code>?</code> and{" "}
          <code>!</code> modifiers for these types to prevent ambiguity at use
          sites.
        </li>
      </ol>
      <p className="bad">Bad:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** MyObject */</span>
        <span className="pln"> myObject </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">// Non-primitive types must be annotated.</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !number */</span>
        <span className="pln"> someNum </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">// Primitives are non-nullable by default.</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** number? */</span>
        <span className="pln"> someNullableNum </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">// ? should precede the type.</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !{"{foo: string, bar: number}"} */</span>
        <span className="pln"> record </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
        <span className="pln"> </span>
        <span className="com">// Already non-nullable.</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** MyTypeDef */</span>
        <span className="pln"> def </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
        <span className="pln"> </span>
        <span className="com">// Not sure if MyTypeDef is nullable.</span>
        <span className="pln"></span>
        <span className="com">
          // Not sure if object (nullable), enum (non-nullable, unless otherwise
        </span>
        <span className="pln"></span>
        <span className="com">
          // specified), or typedef (depends on definition).
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** SomeCamelCaseName */</span>
        <span className="pln"> n </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
      </pre>
      <p className="good">Good:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** ?MyObject */</span>
        <span className="pln"> myObject </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** number */</span>
        <span className="pln"> someNum </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** ?number */</span>
        <span className="pln"> someNullableNum </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** {"{foo: string, bar: number}"} */</span>
        <span className="pln"> record </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !MyTypeDef */</span>
        <span className="pln"> def </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** ?SomeCamelCaseName */</span>
        <span className="pln"> n </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
      </pre>
      <h4 id="jsdoc-type-casts">7.10.2 Type Casts</h4>
      <p>
        In cases where the compiler doesn't accurately infer the type of an
        expression, and the assertion functions in
        <a href="../closure-library/api/goog.asserts.html">goog.asserts</a>{" "}
        cannot remedy it , it is possible to tighten the type by adding a type
        annotation comment and enclosing the expression in parentheses. Note
        that the parentheses are required.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** @type {"{number}"} */</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">x</span>
        <span className="pun">)</span>
      </pre>
      <h4 id="jsdoc-template-parameter-types">
        7.10.3 Template Parameter Types
      </h4>
      <p>
        Always specify template parameters. This way compiler can do a better
        job and it makes it easier for readers to understand what code does.
      </p>
      <p className="bad">Bad:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Object */</span>
        <span className="pln"> users </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{};</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Array */</span>
        <span className="pln"> books </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Promise */</span>
        <span className="pln"> response </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
      </pre>
      <p className="good">Good:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Object&lt;string, !User&gt; */</span>
        <span className="pln"> users </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"};</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Array&lt;string&gt; */</span>
        <span className="pln"> books </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Promise&lt;!Response&gt; */</span>
        <span className="pln"> response </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Promise&lt;undefined&gt; */</span>
        <span className="pln">
          {" "}
          thisPromiseReturnsNothingButParameterIsStillUseful{" "}
        </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">...;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Object&lt;string, *&gt; */</span>
        <span className="pln"> mapOfEverything </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"};</span>
      </pre>
      <p>Cases when template parameters should not be used:</p>
      <ul>
        <li>
          <code>Object</code> is used for type hierarchy and not as map-like
          structure.
        </li>
      </ul>
      <h4 id="jsdoc-function-types">7.10.4 Function type expressions</h4>
      <p>
        <strong>Terminology Note</strong>: <em>function type expression</em>{" "}
        refers to a type annotation for function types with the keyword{" "}
        <code>function</code> in the annotation (see examples below).
      </p>
      <p>
        Where the function definition is given, do not use a function type
        expression. Specify parameter and return types with <code>@param</code>{" "}
        and <code>@return</code>, or with inline annotations (see{" "}
        <a href="#jsdoc-method-and-function-comments">
          7.8 Method and function comments
        </a>
        ). This includes anonymous functions and functions defined and assigned
        to a const (where the function jsdoc appears above the whole assignment
        expression).
      </p>
      <p>
        Function type expressions are needed, for example, inside{" "}
        <code>@typedef</code>, <code>@param</code> or <code>@return</code>. Use
        it also for variables or properties of function type, if they are not
        immediately initialized with the function definition.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln"> </span>
        <span className="com">/** @private {"{function(string): string}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">idGenerator_ </span>
        <span className="pun">=</span>
        <span className="pln"> googFunctions</span>
        <span className="pun">.</span>
        <span className="pln">identity</span>
        <span className="pun">;</span>
      </pre>
      <p>
        When using a function type expression, always specify the return type
        explicitly. Otherwise the default return type is <q>unknown</q> (
        <code>?</code>), which leads to strange and unexpected behavior, and is
        rarely what is actually desired.
      </p>
      <p>Bad - type error, but no warning given:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">/** @param {"{function()}"} generateNumber */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">function</span>
        <span className="pln"> foo</span>
        <span className="pun">(</span>
        <span className="pln">generateNumber</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** number */</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> generateNumber</span>
        <span className="pun">();</span>
        <span className="pln"> </span>
        <span className="com">// No compile-time type error here.</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <br></br>
        <br></br>
        <span className="pln">foo</span>
        <span className="pun">(()</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="str">'clearly not a number'</span>
        <span className="pun">);</span>
      </pre>
      <p className="good">Good:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** <br></br>* @param {"{function(): *}"} inputFunction1 Can return
          any type. <br></br> * @param {"{function(): undefined}"}{" "}
          inputFunction2 Definitely doesn't
          <br></br>return <br></br>* anything. <br></br>* NOTE: the return type
          of `foo` itself is safely implied to be {"{undefined}"}.<br></br> */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">function</span>
        <span className="pln"> foo</span>
        <span className="pun">(</span>
        <span className="pln">inputFunction1</span>
        <span className="pun">,</span>
        <span className="pln"> inputFunction2</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{...}"}</span>
      </pre>
      <h4 id="jsdoc-whitespace">7.10.5 Whitespace</h4>
      <p>
        Within a type annotation, a single space or line break is required after
        each comma or colon. Additional line breaks may be inserted to improve
        readability or avoid exceeding the column limit. These breaks should be
        chosen and indented following the applicable guidelines (e.g.{" "}
        <a href="#formatting-line-wrapping">4.5 Line-wrapping</a> and
        <a href="#formatting-block-indentation">
          4.2 Block indentation: +2 spaces
        </a>
        ). No other whitespace is allowed in type annotations.
      </p>
      <p className="good">Good:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** @type {"{function(string): number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @type {"{{foo: number, bar: number}}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @type {"{number|string}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** @type {"{!Object&lt;string, string&gt;}"} */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** @type{" "}
          {"{function(this: Object&lt;string, string&gt;, number): string}"} */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** <br></br>* @type {"{"}function( <br></br>*
          !SuperDuperReallyReallyLongTypedefThatForcesTheLineBreak, <br></br>*
          !OtherVeryLongTypedef): string{"}"}
          <br></br>*/
        </span>
        <span className="pln"></span>
        <span className="com">
          <br></br>/** <br></br>* @type {"{"}
          !SuperDuperReallyReallyLongTypedefThatForcesTheLineBreak|<br></br> *
          !OtherVeryLongTypedef{"}"}
          */
        </span>
      </pre>
      <p className="bad">Bad:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">// Only put a space after the colon</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @type {"{function(string) : number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Put spaces after colons and commas</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @type {"{{foo:number,bar:number}}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// No space in union types</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @type {"{number | string}"} */</span>
      </pre>
      <h3 id="jsdoc-visibility-annotations">7.11 Visibility annotations</h3>
      <p>
        Visibility annotations (<code>@private</code>, <code>@package</code>,{" "}
        <code>@protected</code>) may be specified in a{" "}
        <code>@fileoverview</code> block, or on any exported symbol or property.
        Do not specify visibility for local variables, whether within a function
        or at the top level of a module. All <code>@private</code> names must
        end with an underscore.
      </p>
    </div>
  );
};

export default JSDocdetail;
