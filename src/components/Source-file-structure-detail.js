/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Sourcefilestructuredetail = () => {
  return (
    <div>
      <h2 id="source-file-structure">3 Source file structure</h2>
      <p>
        All new source files should either be a <code>goog.module</code> file (a
        file containing a<code>goog.module</code> call) or an ECMAScript (ES)
        module (uses <code>import</code> and <code>export</code> statements).
        Files consist of the following, <strong>in order</strong>:
      </p>
      <ol>
        <li>License or copyright information, if present</li>
        <li>
          <code>@fileoverview</code> JSDoc, if present
        </li>
        <li>
          <code>goog.module</code> statement, if a <code>goog.module</code> file
        </li>
        <li>
          ES <code>import</code> statements, if an ES module
        </li>
        <li>
          <code>goog.require</code> and <code>goog.requireType</code> statements
        </li>
        <li>The file’s implementation</li>
      </ol>
      <p>
        <strong>Exactly one blank line</strong> separates each section that is
        present, except the file's implementation, which may be preceded by 1 or
        2 blank lines.
      </p>
      <h3 id="file-copyright">
        3.1 License or copyright information, if present
      </h3>
      <p>
        If license or copyright information belongs in a file, it belongs here.
      </p>
      <h3 id="file-fileoverview">
        3.2 <code>@fileoverview</code> JSDoc, if present
      </h3>
      <p>
        See{" "}
        <a href="#jsdoc-top-file-level-comments">7.5 Top/file-level comments</a>{" "}
        for formatting rules.
      </p>
      <h3 id="file-goog-module">
        3.3 <code>goog.module</code> statement
      </h3>
      <p>
        All <code>goog.module</code> files must declare exactly one{" "}
        <code>goog.module</code> name on a single line: lines containing a{" "}
        <code>goog.module</code> declaration must not be wrapped, and are
        therefore an exception to the 80-column limit.
      </p>
      <p>
        The entire argument to goog.module is what defines a namespace. It is
        the package name (an identifier that reflects the fragment of the
        directory structure where the code lives) plus, optionally, the main
        className/enum/interface that it defines concatenated to the end.
      </p>
      <p>Example</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">(</span>
        <span className="str">'search.urlHistory.UrlHistoryService'</span>
        <span className="pun">);</span>
      </pre>
      <h4 id="naming-hierarchy">3.3.1 Hierarchy</h4>
      <p>
        Module namespaces may never be named as a <em>direct</em> child of
        another module's namespace.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">(</span>
        <span className="str">'foo.bar'</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">// 'foo.bar.qux' would be fine, though</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">(</span>
        <span className="str">'foo.bar.baz'</span>
        <span className="pun">);</span>
      </pre>
      <p>
        The directory hierarchy reflects the namespace hierarchy, so that
        deeper-nested children are subdirectories of higher-level parent
        directories. Note that this implies that owners of “parent” namespace
        groups are necessarily aware of all child namespaces, since they exist
        in the same directory.
      </p>
      <h4 id="file-declare-legacy-namespace">
        3.3.2 <code>goog.module.declareLegacyNamespace</code>
      </h4>
      <p>
        The single <code>goog.module</code> statement may optionally be followed
        by a call to
        <code>goog.module.declareLegacyNamespace();</code>. Avoid
        <code>goog.module.declareLegacyNamespace()</code> when possible.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">(</span>
        <span className="str">'my.test.helpers'</span>
        <span className="pun">);</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">module</span>
        <span className="pun">.</span>
        <span className="pln">declareLegacyNamespace</span>
        <span className="pun">();</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">setTestOnly</span>
        <span className="pun">();</span>
      </pre>
      <p>
        <code>goog.module.declareLegacyNamespace</code> exists to ease the
        transition from traditional object hierarchy-based namespaces but comes
        with some naming restrictions. As the child module name must be created
        after the parent namespace, this name <strong>must not</strong> be a
        child or parent of any other
        <code>goog.module</code> (for example,{" "}
        <code>goog.module('parent');</code> and
        <code>goog.module('parent.child');</code> cannot both exist safely, nor
        can
        <code>goog.module('parent');</code> and{" "}
        <code>goog.module('parent.child.grandchild');</code>).
      </p>
      <h3 id="file-goog-module-exports">
        3.3.3 <code>goog.module</code> Exports
      </h3>
      <p>
        className, enums, functions, constants, and other symbols are exported
        using the
        <code>exports</code> object. Exported symbols may be defined directly on
        the <code>exports</code> object, or else declared locally and exported
        separately. Symbols are only exported if they are meant to be used
        outside the module. Non-exported module-local symbols are not declared{" "}
        <code>@private</code> nor do their names end with an underscore. There
        is no prescribed ordering for exported and module-local symbols.
      </p>
      <p className="examples">Examples:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const </span>
        <span className="com">/** !Array&lt;number&gt; */</span>
        <span className="pln"> exportedArray </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Array&lt;number&gt; */</span>
        <span className="pln"> moduleLocalArray </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">4</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">6</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @return {"{number}"} */</span>
        <br></br>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> moduleLocalFunction</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <br></br>
        <span className="kwd">return</span>
        <span className="pln"> moduleLocalArray</span>
        <span className="pun">.</span>
        <span className="pln">length</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @return {"{number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">function</span>
        <span className="pln"> exportedFunction</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">return</span>
        <span className="pln"> moduleLocalFunction</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <br></br>
        <span className="pln"> exports </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">exportedArray</span>
        <span className="pun">,</span>
        <span className="pln"> exportedFunction</span>
        <span className="pun">{"}"};</span>
      </pre>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** @const {"{number}"} */</span>
        <br></br>
        <span className="pln">exports</span>
        <span className="pun">.</span>
        <span className="pln">CONSTANT_ONE </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <br></br>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @const {"{string}"} */</span>
        <br></br>
        <span className="pln">exports</span>
        <span className="pun">.</span>
        <span className="pln">CONSTANT_TWO </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'Another constant'</span>
        <span className="pun">;</span>
      </pre>
      <p>
        Do not annotate the <code>exports</code> object as <code>@const</code>{" "}
        as it is already treated as a constant by the compiler.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">/** @const */</span>
        <br></br>
        <span className="pln">exports </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">exportedFunction</span>
        <span className="pun">{"}"};</span>
      </pre>
      <h3 id="file-es-modules">3.4 ES modules</h3>
      <p>
        <span id="es6-module-imports"></span>
      </p>
      <h4 id="es-module-imports">3.4.1 Imports</h4>
      <p>
        Import statements must not be line wrapped and are therefore an
        exception to the 80-column limit.
      </p>
      <p>
        <span id="es6-import-paths"></span>
      </p>
      <h5 id="esm-import-paths">3.4.1.1 Import paths</h5>
      <p>
        ES module files must use the <code>import</code> statement to import
        other ES module files. Do not <code>goog.require</code> another ES
        module.
      </p>
      <pre className="language-js prettyprint external prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="str">'./sideeffects.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as goog </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../closure/goog/goog.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as parent </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../parent.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">name</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./sibling.js'</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <span id="es6-import-paths-file-extension"></span>
      </p>
      <h6 id="esm-import-paths-file-extension">
        3.4.1.1.1 File extensions in import paths
      </h6>
      <p>
        The <code>.js</code> file extension is not optional in import paths and
        must always be included.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="str">'../directory/file'</span>
        <span className="pun">;</span>
      </pre>
      <pre className="language-js good prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="str">'../directory/file.js'</span>
        <span className="pun">;</span>
      </pre>
      <h5 id="importing-the-same-file-multiple-times">
        3.4.1.2 Importing the same file multiple times
      </h5>
      <p>
        Do not import the same file multiple times. This can make it hard to
        determine the aggregate imports of a file.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">
          // Imports have the same path, but since it doesn't align it can be
          hard to see.
        </span>
        <br></br>
        <span className="pln"></span>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="kwd">short</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./long/path/to/a/file.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">aLongNameThatBreaksAlignment</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./long/path/to/a/file.js'</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <span id="naming-es6-imports"></span>
      </p>
      <h5 id="naming-esm-imports">3.4.1.3 Naming imports</h5>
      <h6 id="naming-module-imports">3.4.1.3.1 Naming module imports</h6>
      <p>
        Module import names (<code>import * as name</code>) are{" "}
        <code>lowerCamelCase</code> names that are derived from the imported
        file name.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as fileOne </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../file-one.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as fileTwo </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../file_two.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as fileThree </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../filethree.js'</span>
        <span className="pun">;</span>
      </pre>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as libString </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./lib/string.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as math </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./math/math.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as vectorMath </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./vector/math.js'</span>
        <span className="pun">;</span>
      </pre>
      <h6 id="naming-default-imports">3.4.1.3.2 Naming default imports</h6>
      <p>
        Default import names are derived from the imported file name and follow
        the rules in{" "}
        <a href="#naming-rules-by-identifier-type">
          6.2 Rules by identifier type
        </a>
        .
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../my-className.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> myFunction </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../my_function.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> SOME_CONSTANT </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../someconstant.js'</span>
        <span className="pun">;</span>
      </pre>
      <p className="note">
        Note: In general this should not happen as default exports are banned by
        this style guide, see{" "}
        <a href="#named-vs-default-exports">3.4.2.1 Named vs default exports</a>
        . Default imports are only used to import modules that do not conform to
        this style guide.
      </p>
      <h6 id="naming-named-imports">3.4.1.3.3 Naming named imports</h6>
      <p>
        In general symbols imported via the named import (
        <code> import {"{name}"}</code>) should keep the same name. Avoid
        aliasing imports (<code>import {"{SomeThing as SomeOtherThing}"}</code>
        ). Prefer fixing name collisions by using a module import (
        <code>import *</code>) or renaming the exports themselves.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as bigAnimals </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./biganimals.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as domesticatedAnimals </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./domesticatedanimals.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">new</span>
        <span className="pln"> bigAnimals</span>
        <span className="pun">.</span>
        <span className="typ">Cat</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">new</span>
        <span className="pln"> domesticatedAnimals</span>
        <span className="pun">.</span>
        <span className="typ">Cat</span>
        <span className="pun">();</span>
      </pre>
      <p>
        If renaming a named import is needed then use components of the imported
        module's file name or path in the resulting alias.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="typ">Cat</span>
        <span className="pln"> as </span>
        <span className="typ">BigCat</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./biganimals.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="typ">Cat</span>
        <span className="pln"> as </span>
        <span className="typ">DomesticatedCat</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./domesticatedanimals.js'</span>
        <span className="pun">;</span>
        <span className="pln">
          <br></br>
          <br></br>
        </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">BigCat</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">DomesticatedCat</span>
        <span className="pun">();</span>
      </pre>
      <p>
        <span id="es6-module-exports"></span>
      </p>
      <h4 id="es-module-exports">3.4.2 Exports</h4>
      <p>
        Symbols are only exported if they are meant to be used outside the
        module. Non-exported module-local symbols are not declared{" "}
        <code>@private</code> nor do their names end with an underscore. There
        is no prescribed ordering for exported and module-local symbols.
      </p>
      <h5 id="named-vs-default-exports">3.4.2.1 Named vs default exports</h5>
      <p>
        Use named exports in all code. You can apply the <code>export</code>{" "}
        keyword to a declaration, or use the <code>export {"{name}"};</code>{" "}
        syntax.
      </p>
      <p>
        Do not use default exports. Importing modules must give a name to these
        values, which can lead to inconsistencies in naming across modules.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">// Do not use default exports:</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">default</span>
        <span className="pln"> </span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="com">// BAD!</span>
      </pre>
      <pre className="language-js good prettyprint prettyprinted">
        <span className="com">// Use named exports:</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
      </pre>
      <pre className="language-js good prettyprint prettyprinted">
        <span className="com">// Alternate style named exports:</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="typ">Foo</span>
        <span className="pun">{"}"};</span>
      </pre>
      <h5 id="exporting-static-containers">
        3.4.2.2 Exporting static container className and objects
      </h5>
      <p>
        Do not export container className or objects with static methods or
        properties for the sake of namespacing.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">// container.js</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Bad: Container is an exported className that has only static
          methods and fields.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Container</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @return {"{number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">static</span>
        <span className="pln"> bar</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">
          <strong> {"}"} </strong>
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">/** @const {"{number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="typ">Container</span>
        <span className="pun">.</span>
        <span className="pln">FOO </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
      </pre>
      <p>Instead, export individual constants and functions:</p>
      <pre className="language-js good prettyprint prettyprinted">
        <span className="com">/** @return {"{number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pln"> bar</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** number */</span>
        <span className="pln"> FOO </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <span id="es6-exports-mutability"></span>
      </p>
      <h5 id="esm-exports-mutability">3.4.2.3 Mutability of exports</h5>
      <p>
        Exported variables must not be mutated outside of module initialization.
      </p>
      <p>
        There are alternatives if mutation is needed, including exporting a
        constant reference to an object that has mutable fields or exporting
        accessor functions for mutable data.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">
          // Bad: both foo and mutateFoo are exported and mutated.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">let</span>
        <span className="pln"> </span>
        <span className="com">/** number */</span>
        <span className="pln"> foo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com">/** * Mutates foo. */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pln"> mutateFoo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">++</span>
        <span className="pln">foo</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** * @param {"{"}function(number): number {"{"} newMutateFoo */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pln"> setMutateFoo</span>
        <span className="pun">(</span>
        <span className="pln">newMutateFoo</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Exported className and functions can be mutated!
        </span>
        <br></br>
        <span className="pln">mutateFoo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln">foo </span>
        <span className="pun">=</span>
        <span className="pln"> newMutateFoo</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <pre className="language-js good prettyprint prettyprinted">
        <span className="com">
          // Good: Rather than export the mutable variables foo and mutateFoo
          directly,
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // instead make them module scoped and export a getter for foo and a
          wrapper for
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// mutateFooFunc.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">let</span>
        <span className="pln"> </span>
        <span className="com">/** number */</span>
        <span className="pln"> foo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">let</span>
        <span className="pln"> </span>
        <span className="com">/** function(number): number */</span>
        <span className="pln"> mutateFooFunc </span>
        <span className="pun">=</span>
        <span className="pln"> foo </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> foo </span>
        <span className="pun">+</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com">/** @return {"{number}"} */</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pln"> getFoo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">return</span>
        <span className="pln"> foo</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pln"> mutateFoo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln">foo </span>
        <span className="pun">=</span>
        <span className="pln"> mutateFooFunc</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** @param {"{function(number):} number{"}" mutateFoo */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pln"> setMutateFoo</span>
        <span className="pun">(</span>
        <span className="pln">mutateFoo</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <br></br>
        <span className="pln">mutateFooFunc </span>
        <span className="pun">=</span>
        <span className="pln"> mutateFoo</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        <span id="es6-module-circular-dependencies"></span>
      </p>
      <h5 id="es-module-export-from">3.4.2.4 export from</h5>
      <p>
        <code>export from</code> statements must not be line wrapped and are
        therefore an exception to the 80-column limit. This applies to both{" "}
        <code>export from</code> flavors.
      </p>
      <pre className="language-js">
        export {"{specificName}"} from './other.js'; <br></br>
        export * from './another.js';
      </pre>
      <h4 id="es-module-circular-dependencies">
        3.4.3 Circular Dependencies in ES modules
      </h4>
      <p>
        Do not create cycles between ES modules, even though the ECMAScript
        specification allows this. Note that it is possible to create cycles
        with both the <code>import</code> and <code>export</code> statements.
      </p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">// a.js</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="str">'./b.js'</span>
        <span className="pun">;</span>
      </pre>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">// b.js</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="str">'./a.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="com">
          // `export from` can cause circular dependencies too!
        </span>
        <br></br>
        <span className="pln"></span>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">x</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./c.js'</span>
        <span className="pun">;</span>
      </pre>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">// c.js</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="str">'./b.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">let</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <span id="es6-module-closure-interop"></span>
      </p>
      <h4 id="es-module-closure-interop">3.4.4 Interoperating with Closure</h4>
      <p>
        <span id="es6-module-referencing-goog"></span>
      </p>
      <h5 id="es-module-referencing-goog">3.4.4.1 Referencing goog</h5>
      <p>
        To reference the Closure <code>goog</code> namespace, import Closure's{" "}
        <code>goog.js</code>.
      </p>
      <pre className="language-js good prettyprint external prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as goog </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../closure/goog/goog.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> name </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'a.name'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> CONSTANT </span>
        <span className="pun">=</span>
        <span className="pln"> name</span>
        <span className="pun">.</span>
        <span className="pln">compute</span>
        <span className="pun">();</span>
      </pre>
      <p>
        <code>goog.js</code> exports only a subset of properties from the global{" "}
        <code>goog</code> that can be used in ES modules.
      </p>
      <p>
        <span id="goog-require-in-es6-module"></span>
      </p>
      <h5 id="goog-require-in-es-module">3.4.4.2 goog.require in ES modules</h5>
      <p>
        <code>goog.require</code> in ES modules works as it does in{" "}
        <code>goog.module</code> files. You can require any Closure namespace
        symbol (i.e., symbols created by <code>goog.provide</code> or
        <code>goog.module</code>) and <code>goog.require</code> will return the
        value.
      </p>
      <pre className="language-js prettyprint external prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as goog </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../closure/goog/goog.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as anEsModule </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'./anEsModule.js'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">GoogPromise</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.Promise'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> myNamespace </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'my.namespace'</span>
        <span className="pun">);</span>
      </pre>
      <p>
        <span id="closure-module-id-in-es6-module"></span>
      </p>
      <h5 id="closure-module-id-in-es-module">
        3.4.4.3 Declaring Closure Module IDs in ES modules
      </h5>
      <p>
        <code>goog.declareModuleId</code> can be used within ES modules to
        declare a<code>goog.module</code>-like module ID. This means that this
        module ID can be
        <code>goog.require</code>d, <code>goog.module.get</code>d,{" "}
        <code>goog.forwardDeclare</code>'d, etc. as if it were a{" "}
        <code>goog.module</code> that did not call{" "}
        <code>goog.module.declareLegacyNamespace</code>. It does not create the
        module ID as a globally available JavaScript symbol.
      </p>
      <p>
        A <code>goog.require</code> (or <code>goog.module.get</code>) for a
        module ID from
        <code>goog.declareModuleId</code> will always return the module object
        (as if it was
        <code>import *</code>'d). As a result, the argument to{" "}
        <code>goog.declareModuleId</code> should always end with a{" "}
        <code>lowerCamelCaseName</code>.
      </p>
      <p className="note">
        Note: It is an error to call{" "}
        <code>goog.module.declareLegacyNamespace</code> in an ES module, it can
        only be called from <code>goog.module</code> files. There is no direct
        way to associate a <q>legacy</q> namespace with an ES module.
      </p>
      <p>
        <code>goog.declareModuleId</code> should only be used to upgrade Closure
        files to ES modules in place, where named exports are used.
      </p>
      <pre className="language-js prettyprint external prettyprinted">
        <span className="kwd">import</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> as goog </span>
        <span className="kwd">from</span>
        <span className="pln"> </span>
        <span className="str">'../closure/goog.js'</span>
        <span className="pun">;</span>
        <br></br>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">declareModuleId</span>
        <span className="pun">(</span>
        <span className="str">'my.esm'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <span className="kwd">export</span>
        <span className="pln"> </span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">className</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"};</span>
      </pre>
      <h3 id="file-set-test-only">
        3.5 <code>goog.setTestOnly</code>
      </h3>
      <p>
        In a <code>goog.module</code> file the <code>goog.module</code>{" "}
        statement may optionally be followed by a call to{" "}
        <code>goog.setTestOnly()</code>.
      </p>
      <p>
        In an ES module the <code>import</code> statements may optionally be
        followed by a call to
        <code>goog.setTestOnly()</code>.
      </p>
      <h3 id="file-goog-require">
        3.6 <code>goog.require</code> and <code>goog.requireType</code>{" "}
        statements
      </h3>
      <p>
        Imports are done with <code>goog.require</code> and{" "}
        <code>goog.requireType</code> statements. The names imported by a{" "}
        <code>goog.require</code> statement may be used both in code and in type
        annotations, while those imported by a <code>goog.requireType</code> may
        be used in type annotations only.
      </p>
      <p>
        The <code>goog.require</code> and <code>goog.requireType</code>{" "}
        statements form a contiguous block with no empty lines. This block
        follows the <code>goog.module</code> declaration separated
        <a href="#source-file-structure">by a single empty line</a>. The entire
        argument to
        <code>goog.require</code> or <code>goog.requireType</code> is a
        namespace defined by a <code>goog.module</code> in a separate file.{" "}
        <code>goog.require</code> and <code>goog.requireType</code> statements
        may not appear anywhere else in the file.
      </p>
      <p>
        Each <code>goog.require</code> or <code>goog.requireType</code> is
        assigned to a single constant alias, or else destructured into several
        constant aliases. These aliases are the only acceptable way to refer to
        dependencies in type annotations or code. Fully qualified namespaces
        must not be used anywhere, except as an argument to
        <code>goog.require</code> or <code>goog.requireType</code>.
      </p>
      <p className="exception">
        <strong>Exception</strong>: Types, variables, and functions declared in
        externs files have to use their fully qualified name in type annotations
        and code.
      </p>
      <p>
        Aliases must match the final dot-separated component of the imported
        module's namespace.
      </p>
      <p className="exception">
        <strong>Exception</strong>: In certain cases, additional components of
        the namespace can be used to form a longer alias. The resulting alias
        must retain the original identifier's casing such that it still
        correctly identifies its type. Longer aliases may be used to
        disambiguate otherwise identical aliases, or if it significantly
        improves readability. In addition, a longer alias must be used to
        prevent masking native types such as <code>Element</code>,{" "}
        <code>Event</code>, <code>Error</code>,<code>Map</code>, and
        <code>Promise</code> (for a more complete list, see{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">
          Standard Built-in Objects
        </a>{" "}
        and{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API">Web APIs</a>{" "}
        at MDN). When renaming destructured aliases, a space must follow the
        colon as required in{" "}
        <a href="#formatting-horizontal-whitespace">
          4.6.2 Horizontal whitespace
        </a>
        .
      </p>
      <p>
        A file should not contain both a <code>goog.require</code> and a{" "}
        <code>goog.requireType</code> statement for the same namespace. If the
        imported name is used both in code and in type annotations, it should be
        imported by a single <code>goog.require</code> statement.
      </p>
      <p>
        If a module is imported only for its side effects, the call must be a
        <code>goog.require</code> (not a <code>goog.requireType</code>) and
        assignment may be omitted. A comment is required to explain why this is
        needed and suppress a compiler warning.
      </p>
      <p>
        The lines are sorted according to the following rules: All requires with
        a name on the left hand side come first, sorted alphabetically by those
        names. Then destructuring requires, again sorted by the names on the
        left hand side. Finally, any require calls that are standalone
        (generally these are for modules imported just for their side effects).
      </p>
      <p className="tip">
        Tip: There’s no need to memorize this order and enforce it manually. You
        can rely on your IDE to report requires that are not sorted correctly.
      </p>
      <p>
        If a long alias or module name would cause a line to exceed the
        80-column limit, it <strong>must not</strong> be wrapped: require lines
        are an exception to the 80-column limit.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">// Standard alias style.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'some.package.MyclassName'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">MyType</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">requireType</span>
        <span className="pun">(</span>
        <span className="str">'some.package.MyType'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Namespace-based alias used to disambiguate.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">NsMyclassName</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'other.ns.MyclassName'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Namespace-based alias used to prevent masking native type.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">RendererElement</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'web.renderer.Element'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Out of sequence namespace-based aliases used to improve
          readability.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Also, require lines longer than 80 columns must not be wrapped.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">SomeDataStructureModel</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">requireType</span>
        <span className="pun">(</span>
        <span className="str">
          'identical.package.identifiers.models.SomeDataStructure'
        </span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">SomeDataStructureProto</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">
          'proto.identical.package.identifiers.SomeDataStructure'
        </span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Standard alias style.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> asserts </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.asserts'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Namespace-based alias used to disambiguate.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> testingAsserts </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.testing.asserts'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Standard destructuring into aliases.</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">clear</span>
        <span className="pun">,</span>
        <span className="pln"> clone</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.array'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="typ">Rgb</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.color'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Namespace-based destructuring into aliases in order to
          disambiguate.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="typ">SomeType</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="typ">FooSomeType</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">requireType</span>
        <span className="pun">(</span>
        <span className="str">'foo.types'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">clear</span>
        <span className="pun">:</span>
        <span className="pln"> objectClear</span>
        <span className="pun">,</span>
        <span className="pln"> clone</span>
        <span className="pun">:</span>
        <span className="pln"> objectClone</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'goog.object'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // goog.require without an alias in order to trigger side effects.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          /** @suppress {"{extraRequire}"} Initializes MyFramework. */
        </span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'my.framework.initialization'</span>
        <span className="pun">);</span>
      </pre>
      <p className="discouraged">Discouraged:</p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">
          // If necessary to disambiguate, prefer PackageclassName over
          SomeclassName as it is
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// closer to the format of the module name.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">SomeclassName</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'some.package.className'</span>
        <span className="pun">);</span>
      </pre>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js badcode prettyprint prettyprinted">
        <span className="com">
          // Extra terms must come from the namespace.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">MyclassNameForBizzing</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'some.package.MyclassName'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Alias must include the entire final namespace component.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">MyclassName</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'some.package.MyclassNameForBizzing'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Alias must not mask native type (should be `const JspbMap` here).
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">Map</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'jspb.Map'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // Don't break goog.require lines over 80 columns.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">SomeDataStructure</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">
          'proto.identical.package.identifiers.SomeDataStructure'
        </span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Alias must be based on the namespace.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> randomName </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'something.else'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// Missing a space after the colon.</span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="typ">Foo</span>
        <span className="pun">:</span>
        <span className="typ">FooProto</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'some.package.proto.Foo'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// goog.requireType without an alias.</span>
        <br></br>
        <span className="pln">goog</span>
        <span className="pun">.</span>
        <span className="pln">requireType</span>
        <span className="pun">(</span>
        <span className="str">'some.package.with.a.Type'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <br></br>
        <br></br>
        <span className="com">
          /** * @param {"{!some?.unimported?.Dependency}"} param All external
          types used in JSDoc
          <br></br>* annotations must be goog.require'd, unless declared in
          externs. */
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">function</span>
        <span className="pln"> someFunction</span>
        <span className="pun">(</span>
        <span className="pln">param</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">
          // goog.require lines must be at the top level before any other code.
        </span>
        <span className="pln"></span>
        <br></br>
        <span className="kwd">const</span>
        <span className="pln"> alias </span>
        <span className="pun">=</span>
        <span className="pln"> goog</span>
        <span className="pun">.</span>
        <span className="pln">require</span>
        <span className="pun">(</span>
        <span className="str">'my.long.name.alias'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <br></br>
        <span className="com">// ...</span>
        <span className="pln"></span>
        <br></br>
        <span className="pun"> {"}"}</span>
      </pre>
      <h3 id="file-implementation">3.7 The file’s implementation</h3>
      <p>
        The actual implementation follows after all dependency information is
        declared (separated by at least one blank line).
      </p>
      <p>
        This may consist of any module-local declarations (constants, variables,
        classes, functions, etc), as well as any exported symbols.
      </p>
    </div>
  );
};

export default Sourcefilestructuredetail;
