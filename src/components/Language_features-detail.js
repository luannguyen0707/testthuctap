/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Languagefeaturesdetail = () => {
  return (
    <div>
      <h2 id="language-features">5 Language features</h2>
      <h3 id="features-local-variable-declarations">
        5.1 Local variable declarations
      </h3>
      <h3 id="features-local-variable-declarations">
        5.1 Local variable declarations
      </h3>
      <h4 id="features-use-const-and-let">
        5.1.1 Use <code>const</code> and <code>let</code>
      </h4>
      <p>
        Declare all local variables with either <code>const</code> or{" "}
        <code>let</code>. Use const by default, unless a variable needs to be
        reassigned. The <code className="badcode">var</code> keyword must not be
        used.
      </p>
      <h4 id="features-one-variable-per-declaration">
        5.1.2 One variable per declaration
      </h4>
      <p>
        Every local variable declaration declares only one variable:
        declarations such as <code className="badcode">let a = 1, b = 2;</code>{" "}
        are not used.
      </p>
      <h4 id="features-declared-when-needed">
        5.1.3 Declared when needed, initialized as soon as possible
      </h4>
      <p>
        Local variables are <strong>not</strong> habitually declared at the
        start of their containing block or block-like construct. Instead, local
        variables are declared close to the point they are first used (within
        reason), to minimize their scope.
      </p>
      <h4 id="features-declare-types-as-needed">
        5.1.4 Declare types as needed
      </h4>
      <p>
        JSDoc type annotations may be added either on the line above the
        declaration, or else inline before the variable name if no other JSDoc
        is present.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Array {"&lt;number&gt;"} */</span>
        <span className="pln"> data </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
        <span className="pln"></span>
        <span className="com">
          /** * Some description. * @type {"{!Array&lt;number&gt;}"}
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> data </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
      </pre>
      <p>
        Mixing inline and JSDoc styles is not allowed: the compiler will only
        process the first JsDoc and the inline annotations will be lost.
      </p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">/** Some description. */</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** !Array&lt;number&gt; */</span>
        <span className="pln"> data </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
      </pre>
      <p className="tip">
        Tip: There are many cases where the compiler can infer a templatized
        type but not its parameters. This is particularly the case when the
        initializing literal or constructor call does not include any values of
        the template parameter type (e.g., empty arrays, objects,{" "}
        <code>Map</code>s, or <code>Set</code>s), or if the variable is modified
        in a closure. Local variable type annotations are particularly helpful
        in these cases since otherwise the compiler will infer the template
        parameter as unknown.
      </p>
      <h3 id="features-array-literals">5.2 Array literals</h3>
      <h4 id="features-arrays-trailing-comma">5.2.1 Use trailing commas</h4>
      <p>
        Include a trailing comma whenever there is a line break between the
        final element and the closing bracket.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> values </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln"></span>
        <span className="str">'first value'</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="str">'second value'</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="pun">];</span>
      </pre>
      <h4 id="features-arrays-ctor">
        5.2.2 Do not use the variadic <code>Array</code> constructor
      </h4>
      <p>
        The constructor is error-prone if arguments are added or removed. Use a
        literal instead.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> a1 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Array</span>
        <span className="pun">(</span>
        <span className="pln">x1</span>
        <span className="pun">,</span>
        <span className="pln"> x2</span>
        <span className="pun">,</span>
        <span className="pln"> x3</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> a2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Array</span>
        <span className="pun">(</span>
        <span className="pln">x1</span>
        <span className="pun">,</span>
        <span className="pln"> x2</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> a3 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Array</span>
        <span className="pun">(</span>
        <span className="pln">x1</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> a4 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Array</span>
        <span className="pun">();</span>
      </pre>
      <p>
        This works as expected except for the third case: if <code>x1</code> is
        a whole number then
        <code>a3</code> is an array of size <code>x1</code> where all elements
        are <code>undefined</code>. If <code>x1</code> is any other number, then
        an exception will be thrown, and if it is anything else then it will be
        a single-element array.
      </p>
      <p>Instead, write</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> a1 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">x1</span>
        <span className="pun">,</span>
        <span className="pln"> x2</span>
        <span className="pun">,</span>
        <span className="pln"> x3</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> a2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">x1</span>
        <span className="pun">,</span>
        <span className="pln"> x2</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> a3 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">x1</span>
        <span className="pun">];</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> a4 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
      </pre>
      <p>
        Explicitly allocating an array of a given length using{" "}
        <code>new Array(length)</code> is allowed when appropriate.
      </p>
      <h4 id="features-arrays-non-numeric-properties">
        5.2.3 Non-numeric properties
      </h4>
      <p>
        Do not define or use non-numeric properties on an array (other than
        <code>length</code>). Use a <code>Map</code> (or <code>Object</code>)
        instead.
      </p>
      <h4 id="features-arrays-destructuring">5.2.4 Destructuring</h4>
      <p>
        Array literals may be used on the left-hand side of an assignment to
        perform destructuring (such as when unpacking multiple values from a
        single array or iterable). A final <q>rest</q> element may be included
        (with no space between the
        <code>...</code> and the variable name). Elements should be omitted if
        they are unused.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">a</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">,</span>
        <span className="pln"> c</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">rest</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> generateResults</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="kwd">let</span>
        <span className="pln"> </span>
        <span className="pun">[,</span>
        <span className="pln"> b</span>
        <span className="pun">,,</span>
        <span className="pln"> d</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> someArray</span>
        <span className="pun">;</span>
      </pre>
      <p>
        Destructuring may also be used for function parameters (note that a
        parameter name is required but ignored). Always specify <code>[]</code>{" "}
        as the default value if a destructured array parameter is optional, and
        provide default values on the left hand side:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** @param {"{!Array&lt;number&gt;=}"} param1 */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> optionalDestructuring</span>
        <span className="pun">([</span>
        <span className="pln">a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">,</span>
        <span className="pln"> b </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[])</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">…</span>
        <span className="pln"> </span>
        <span className="pun">{"}"};</span>
      </pre>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">function</span>
        <span className="pln"> badDestructuring</span>
        <span className="pun">([</span>
        <span className="pln">a</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">4</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">])</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="pun">…</span>
        <span className="pln"> </span>
        <span className="pun">{"}"};</span>
      </pre>
      <p className="tip">
        Tip: For (un)packing multiple values into a function’s parameter or
        return, prefer object destructuring to array destructuring when
        possible, as it allows naming the individual elements and specifying a
        different type for each.
      </p>
      <h4 id="features-arrays-spread-operator">5.2.5 Spread operator</h4>
      <p>
        Array literals may include the spread operator (<code>...</code>) to
        flatten elements out of one or more other iterables. The spread operator
        should be used instead of more awkward constructs with{" "}
        <code>Array.prototype</code>. There is no space after the
        <code>...</code>.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="pun">[...</span>
        <span className="pln">foo</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="com">
          // preferred over Array.prototype.slice.call(foo)
        </span>
        <span className="pln"></span>
        <span className="pun">[...</span>
        <span className="pln">foo</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">bar</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="com">// preferred over foo.concat(bar)</span>
      </pre>
      <h3 id="features-object-literals">5.3 Object literals</h3>
      <h4 id="features-objects-use-trailing-comma">
        5.3.1 Use trailing commas
      </h4>
      <p>
        Include a trailing comma whenever there is a line break between the
        final property and the closing brace.
      </p>
      <h4 id="features-objects-ctor">
        5.3.2 Do not use the <code>Object</code> constructor
      </h4>
      <p>
        While <code>Object</code> does not have the same problems as{" "}
        <code>Array</code>, it is still disallowed for consistency. Use an
        object literal (<code>{"{}"}</code> or{" "}
        <code>{"{a: 0, b: 1, c: 2}"}</code>) instead.
      </p>
      <h4 id="features-objects-mixing-keys">
        5.3.3 Do not mix quoted and unquoted keys
      </h4>
      <p>
        Object literals may represent either <em>structs</em> (with unquoted
        keys and/or symbols) or <em>dicts</em> (with quoted and/or computed
        keys). Do not mix these key types in a single object literal.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pun">{"{"}</span>
        <span className="pln">width</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// struct-style unquoted key</span>
        <span className="pln"></span>
        <span className="str">'maxWidth'</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">43</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// dict-style quoted key</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        This also extends to passing the property name to functions, like
        <code>hasOwnProperty</code>. In particular, doing so will break in
        compiled code because the compiler cannot rename/obfuscate the string
        literal.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">
          /** @type {"{"}
          {"{"}width: number, maxWidth: (number|undefined){"}"}
          {"}"} */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> o </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">width</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">o</span>
        <span className="pun">.</span>
        <span className="pln">hasOwnProperty</span>
        <span className="pun">(</span>
        <span className="str">'maxWidth'</span>
        <span className="pun">))</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="pun">...</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>This is best implemented as:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** @type {"{{width: number, maxWidth: (number|undefined)}}"} */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> o </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">width</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">{"}"};</span>
        <span className="pln">"</span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">o</span>
        <span className="pun">.</span>
        <span className="pln">maxWidth </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="pun">...</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="features-objects-computed-property-names">
        5.3.4 Computed property names
      </h4>
      <p>
        Computed property names (e.g., <code>{"{['key' + foo()]: 42}"}"</code>)
        are allowed, and are considered dict-style (quoted) keys (i.e., must not
        be mixed with non-quoted keys) unless the computed property is a
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">
          symbol
        </a>{" "}
        (e.g., <code>[Symbol.iterator]</code>). Enum values may also be used for
        computed keys, but should not be mixed with non-enum keys in the same
        literal.
      </p>
      <h4 id="features-objects-method-shorthand">5.3.5 Method shorthand</h4>
      <p>
        Methods can be defined on object literals using the method shorthand (
        <code>
          {"{"}method()
          {"{… }}"}
        </code>
        ) in place of a colon immediately followed by a <code>function</code> or
        arrow function literal.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">stuff</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'candy'</span>
        <span className="pun">,</span>
        <span className="pln">method</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">stuff</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">// Returns 'candy'</span>
        <span className="pln"></span>
        <span className="pun">{"}"},</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
      </pre>
      <p>
        Note that <code>this</code> in a method shorthand or{" "}
        <code>function</code> refers to the object literal itself whereas{" "}
        <code>this</code> in an arrow function refers to the scope outside the
        object literal.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">getObjectLiteral</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">stuff </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'fruit'</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">stuff</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'candy'</span>
        <span className="pun">,</span>
        <span className="pln">method</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">stuff</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="com">// Returns 'fruit'</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="features-objects-shorthand-properties">
        5.3.6 Shorthand properties
      </h4>
      <p>Shorthand properties are allowed on object literals.</p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> foo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> bar </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> obj </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">foo</span>
        <span className="pun">,</span>
        <span className="pln">bar</span>
        <span className="pun">,</span>
        <span className="pln">method</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">foo </span>
        <span className="pun">+</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">bar</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="pun">{"}"},</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
        <span className="pln">assertEquals</span>
        <span className="pun">(</span>
        <span className="lit">3</span>
        <span className="pun">,</span>
        <span className="pln"> obj</span>
        <span className="pun">.</span>
        <span className="pln">method</span>
        <span className="pun">());</span>
      </pre>
      <h4 id="features-objects-destructuring">5.3.7 Destructuring</h4>
      <p>
        Object destructuring patterns may be used on the left-hand side of an
        assignment to perform destructuring and unpack multiple values from a
        single object.
      </p>
      <p>
        Destructured objects may also be used as function parameters, but should
        be kept as simple as possible: a single level of unquoted shorthand
        properties. Deeper levels of nesting and computed properties may not be
        used in parameter destructuring. Specify any default values in the
        left-hand-side of the destructured parameter (
        <code>
          {"{str = 'some default'}"} = {"{}"}
        </code>
        , rather than{" "}
        <code className="badcode">
          {"{str}"} = {"{str: 'some default'}"}
        </code>
        ), and if a destructured object is itself optional, it must default to{" "}
        <code>{}</code>. The JSDoc for the destructured parameter may be given
        any name (the name is unused but is required by the compiler).
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * @param {"{string}"}" ordinary * @param {"{{"}num:
          (number|undefined), str: (string|undefined){"}=}"} param1 * num: The
          number of times to do something. * str: A string to do stuff to. */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> destructured</span>
        <span className="pun">(</span>
        <span className="pln">ordinary</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">num</span>
        <span className="pun">,</span>
        <span className="pln"> str </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'some default'</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{})"}</span>
      </pre>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">
          /** @param {"{{"}x: {"{num"}: (number|undefined), str:
          (string|undefined){"}}}"} param1 */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> nestedTooDeeply</span>
        <span className="pun">({"{"}</span>
        <span className="pln">x</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">num</span>
        <span className="pun">,</span>
        <span className="pln"> str</span>
        <span className="pun">{"}})"}</span>
        <span className="pln"> </span>
        <span className="pun">{};</span>
        <span className="pln"></span>
        <span className="com">
          /** @param {"{{num: (number|undefined), str: (string|undefined)}=}"}{" "}
          param1 */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> nonShorthandProperty</span>
        <span className="pun">({"{"}</span>
        <span className="pln">num</span>
        <span className="pun">:</span>
        <span className="pln"> a</span>
        <span className="pun">,</span>
        <span className="pln"> str</span>
        <span className="pun">:</span>
        <span className="pln"> b</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"})</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"};</span>
        <span className="pln"></span>
        <span className="com">
          /** @param {"{{a: number, b: number}}"} param1 */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> computedKey</span>
        <span className="pun">{"({"}</span>
        <span className="pln">a</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">a </span>
        <span className="pun">+</span>
        <span className="pln"> b</span>
        <span className="pun">]:</span>
        <span className="pln"> c</span>
        <span className="pun">{"}"})</span>
        <span className="pln"> </span>
        <span className="pun">{};</span>
        <span className="pln"></span>
        <span className="com">
          /** @param {"{{a: number, b: string}=}"} param1 */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> nontrivialDefault</span>
        <span className="pun">{"({"}</span>
        <span className="pln">a</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">a</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">{"})"}</span>
        <span className="pln"> </span>
        <span className="pun">{};</span>
      </pre>
      <p>
        Destructuring may also be used for <code>goog.require</code> statements,
        and in this case must not be wrapped: the entire statement occupies one
        line, regardless of how long it is (see{" "}
        <a href="#file-goog-require">
          3.6 goog.require and goog.requireType statements
        </a>
        ).
      </p>
      <h4 id="features-objects-enums">5.3.8 Enums</h4>
      <p>
        Enumerations are defined by adding the <code>@enum</code> annotation to
        an object literal. Additional properties may not be added to an enum
        after it is defined. Enums must be constant, and all enum values must be
        deeply immutable.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Supported temperature scales. * @enum {"{string}"}
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">TemperatureScale</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">CELSIUS</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'celsius'</span>
        <span className="pun">,</span>
        <span className="pln">FAHRENHEIT</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">'fahrenheit'</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
        <span className="pln"></span>
        <span className="com">
          /** * An enum with two options. * @enum {"{number}"}
          */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">Option</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** The option used shall have been the first. */
        </span>
        <span className="pln">FIRST_OPTION</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="com">/** The second among two options. */</span>
        <span className="pln">SECOND_OPTION</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
      </pre>
      <h3 id="features-classNames">5.4 classNames</h3>
      <h4 id="features-classNames-constructors">5.4.1 Constructors</h4>
      <p>
        Constructors are optional. SubclassName constructors must call{" "}
        <code>super()</code> before setting any fields or otherwise accessing{" "}
        <code>this</code>. Interfaces should declare non-method properties in
        the constructor.
      </p>
      <h4 id="features-className-fields">5.4.2 Fields</h4>
      <p>
        Set all of a concrete object’s fields (i.e. all properties other than
        methods) in the constructor. Annotate fields that are never reassigned
        with <code>@const</code> (these need not be deeply immutable). Annotate
        non-public fields with the proper visibility annotation (
        <code>@private</code>, <code>@protected</code>, <code>@package</code>),
        and end all
        <code>@private</code> fields' names with an underscore. Fields are never
        set on a concrete className' <code>prototype</code>.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">constructor</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">/** @private @const {"{!Baz"} */</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">bar_ </span>
        <span className="pun">=</span>
        <span className="pln"> computeBar</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="com">/** @protected @const {"{!Baz"} */</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">baz </span>
        <span className="pun">=</span>
        <span className="pln"> computeBaz</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p className="tip">
        Tip: Properties should never be added to or removed from an instance
        after the constructor is finished, since it significantly hinders VMs’
        ability to optimize. If necessary, fields that are initialized later
        should be explicitly set to
        <code>undefined</code> in the constructor to prevent later shape
        changes. Adding
        <code>@struct</code> to an object will check that undeclared properties
        are not added/accessed. ` ` have this added by default.
      </p>
      <h4 id="features-classNames-computed-properties">
        5.4.3 Computed properties
      </h4>
      <p>
        Computed properties may only be used in className when the property is
        a symbol. Dict-style properties (that is, quoted or computed non-symbol
        keys, as defined in{" "}
        <a href="#features-objects-mixing-keys">
          5.3.3 Do not mix quoted and unquoted keys
        </a>
        ) are not allowed. A<code>[Symbol.iterator]</code> method should be
        defined for any className that are logically iterable. Beyond this,{" "}
        <code>Symbol</code> should be used sparingly.
      </p>
      <p className="tip">
        Tip: be careful of using any other built-in symbols (e.g.,{" "}
        <code>Symbol.isConcatSpreadable</code>) as they are not polyfilled by
        the compiler and will therefore not work in older browsers.
      </p>
      <h4 id="features-classNames-static-methods">5.4.4 Static methods</h4>
      <p>
        Where it does not interfere with readability, prefer module-local
        functions over private static methods.
      </p>
      <p>
        Static methods should only be called on the base className itself.
        Static methods should not be called on variables containing a dynamic
        instance that may be either the constructor or a subclassName
        constructor (and must be defined with
        <code>@nocollapse</code> if this is done), and must not be called
        directly on a subclassName that doesn’t define the method itself.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Base</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="com">/** @nocollapse */</span>
        <span className="pln"> </span>
        <span className="kwd">static</span>
        <span className="pln"> foo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Sub</span>
        <span className="pln"> extends </span>
        <span className="typ">Base</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> callFoo</span>
        <span className="pun">(</span>
        <span className="pln">cls</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> cls</span>
        <span className="pun">.</span>
        <span className="pln">foo</span>
        <span className="pun">();</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="com">
          // discouraged: don't call static methods dynamically
        </span>
        <span className="pln"></span>
        <span className="typ">Sub</span>
        <span className="pun">.</span>
        <span className="pln">foo</span>
        <span className="pun">();</span>
        <span className="pln"> </span>
        <span className="com">
          // Disallowed: don't call static methods on subclassName that don't
          define it themselves
        </span>
      </pre>
      <h4 id="features-className-old-style">
        5.4.5 Old-style className declarations
      </h4>
      <p>
        While ES6 className are preferred, there are cases where ES6
        className may not be feasible. For example:
      </p>
      <ol>
        <li>
          <p>
            If there exist or will exist subclassName, including frameworks
            that create subclassName, that cannot be immediately changed to
            use ES6 className syntax. If such a className were to use ES6
            syntax, all downstream subclassName not using ES6 className syntax
            would need to be modified.
          </p>
        </li>
        <li>
          <p>
            Frameworks that require a known <code>this</code> value before
            calling the superclassName constructor, since constructors with ES6
            super className do not have access to the instance{" "}
            <code>this</code> value until the call to <code>super</code>{" "}
            returns.
          </p>
        </li>
      </ol>
      <p>
        In all other ways the style guide still applies to this code:{" "}
        <code>let</code>, <code>const</code>, default parameters, rest, and
        arrow functions should all be used when appropriate.
      </p>
      <p>
        <code>goog.defineclassName</code> allows for a className-like definition
        similar to ES6 className syntax:
      </p>
      <pre className="language-javascript">
        let C = goog.defineclassName(S, {"{"}
        /** * @param {"{string}"} value */ constructor(value) {"{"}
        S.call(this, 2); /** @const */ this.prop = value;
        {"},"}
        /** * @param {"{string}"} param * @return {"{number}"}
        */ method(param) {"{"}
        return 0;
        {"}"},{"});"}
      </pre>
      <p>
        Alternatively, while <code>goog.defineclassName</code> should be
        preferred for all new code, more traditional syntax is also allowed.
      </p>
      <pre className="language-javascript">
        /** * @constructor @extends {"{S}"}* @param {"{string}"} value */
        function C(value) {"{"}
        S.call(this, 2); /** @const */ this.prop = value;
        {"}"}
        goog.inherits(C, S); /** * @param {"{string}"} param * @return{" "}
        {"{number}"}
        */ C.prototype.method = function(param) {"{"}
        return 0;
        {"};"}
      </pre>
      <p>
        Per-instance properties should be defined in the constructor after the
        call to the super className constructor, if there is a super className.
        Methods should be defined on the prototype of the constructor.
      </p>
      <p>
        Defining constructor prototype hierarchies correctly is harder than it
        first appears! For that reason, it is best to use{" "}
        <code>goog.inherits</code> from{" "}
        <a href="http://code.google.com/closure/library/">
          the Closure Library{" "}
        </a>
        .
      </p>
      <h4 id="features-className-prototypes">
        5.4.6 Do not manipulate <code>prototype</code>s directly
      </h4>
      <p>
        The <code>className</code> keyword allows clearer and more readable
        className definitions than defining <code>prototype</code> properties.
        Ordinary implementation code has no business manipulating these objects,
        though they are still useful for defining className as defined in{" "}
        <a href="#features-className-old-style">
          5.4.5 Old-style className declarations
        </a>
        . Mixins and modifying the prototypes of builtin objects are explicitly
        forbidden.
      </p>
      <p className="exception">
        <strong>Exception</strong>: Framework code (such as Polymer, or Angular)
        may need to use <code>prototype</code>s, and should not resort to
        even-worse workarounds to avoid doing so.
      </p>
      <h4 id="features-className-getters-and-setters">
        5.4.7 Getters and Setters
      </h4>
      <p>
        Do not use{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get">
          JavaScript getter and setter properties
        </a>
        . They are potentially surprising and difficult to reason about, and
        have limited support in the compiler. Provide ordinary methods instead.
      </p>
      <p className="exception">
        <strong>Exception</strong>: there are situations where defining a getter
        or setter is unavoidable (e.g. data binding frameworks such as Angular
        and Polymer, or for compatibility with external APIs that cannot be
        adjusted). In these cases only, getters and setters may be used{" "}
        <em>with caution</em>, provided they are defined with the{" "}
        <code>get</code> and <code>set</code> shorthand method keywords or{" "}
        <code>Object.defineProperties</code> (not
        <code>Object.defineProperty</code>, which interferes with property
        renaming). Getters
        <strong>must not</strong> change observable state.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">get</span>
        <span className="pln"> next</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"> </span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">nextId</span>
        <span className="pun">++;</span>
        <span className="pln"> </span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="features-className-overriding-tostring">
        5.4.8 Overriding toString
      </h4>
      <p>
        The <code>toString</code> method may be overridden, but must always
        succeed and never have visible side effects.
      </p>
      <p className="tip">
        Tip: Beware, in particular, of calling other methods from toString,
        since exceptional conditions could lead to infinite loops.
      </p>
      <h4 id="features-className-interfaces">5.4.9 Interfaces</h4>
      <p>
        Interfaces may be declared with <code>@interface</code> or{" "}
        <code>@record</code>. Interfaces declared with <code>@record</code> can
        be explicitly (i.e. via <code>@implements</code>) or implicitly
        implemented by a className or object literal.
      </p>
      <p>
        All non-static method bodies on an interface must be empty blocks.
        Fields must be declared as uninitialized members in the className
        constructor.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Something that can frobnicate. * @record */
        </span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">Frobnicator</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">constructor</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** @type {"{number}"} The number of attempts before giving up. */
        </span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">attempts</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * Performs the frobnication according to the given strategy. *
          @param {"{!FrobnicationStrategy}"} strategy */
        </span>
        <span className="pln">frobnicate</span>
        <span className="pun">(</span>
        <span className="pln">strategy</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
      </pre>
      <h4 id="features-className-abstract-className">
        5.4.10 Abstract className
      </h4>
      <p>
        Use abstract className when appropriate. Abstract className and
        methods must be annotated with <code>@abstract</code>. Do not use{" "}
        <code>goog.abstractMethod</code>. See{" "}
        <a href="https://github.com/google/closure-compiler/wiki/@abstract-className-and-methods">
          abstract className and methods
        </a>
        .
      </p>
      <h3 id="features-functions">5.5 Functions</h3>
      <h4 id="features-functions-top-level-functions">
        5.5.1 Top-level functions
      </h4>
      <p>
        Top-level functions may be defined directly on the <code>exports</code>{" "}
        object, or else declared locally and optionally exported. See{" "}
        <a href="#file-goog-module-exports">3.3.3 goog.module Exports</a> for
        more on exports.
      </p>
      <p className="examples">Examples:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** @param {"{string}"} str */</span>
        <span className="pln">exports</span>
        <span className="pun">.</span>
        <span className="pln">processString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">str</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">// Process the string.</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
      </pre>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">/** @param {"{string}"} str */</span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> processString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">str</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">// Process the string.</span>
        <span className="pln"></span>
        <span className="pun">{"}"};</span>
        <span className="pln">exports </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">processString</span>
        <span className="pun">{"}"};</span>
      </pre>
      <h4 id="features-functions-nested-functions">
        5.5.2 Nested functions and closures
      </h4>
      <p>
        Functions may contain nested function definitions. If it is useful to
        give the function a name, it should be assigned to a local{" "}
        <code>const</code>.
      </p>
      <h4 id="features-functions-arrow-functions">5.5.3 Arrow functions</h4>
      <p>
        Arrow functions provide a concise function syntax and simplify scoping{" "}
        <code>this</code> for nested functions. Prefer arrow functions over the{" "}
        <code>function</code> keyword, particularly for nested functions (but
        see
        <a href="#features-objects-method-shorthand">5.3.5 Method shorthand</a>
        ).
      </p>
      <p>
        Prefer arrow functions over other <code>this</code> scoping approaches
        such as
        <code>f.bind(this)</code>, <code>goog.bind(f, this)</code>, and{" "}
        <code>const self = this</code>. Arrow functions are particularly useful
        for calling into callbacks as they permit explicitly specifying which
        parameters to pass to the callback whereas binding will blindly pass
        along all parameters.
      </p>
      <p>
        The left-hand side of the arrow contains zero or more parameters.
        Parentheses around the parameters are optional if there is only a single
        non-destructured parameter. When parentheses are used, inline parameter
        types may be specified (see{" "}
        <a href="#jsdoc-method-and-function-comments">
          7.8 Method and function comments
        </a>
        ).
      </p>
      <p className="tip">
        Tip: Always using parentheses even for single-parameter arrow functions
        can avoid situations where adding parameters, but forgetting to add
        parentheses, may result in parseable code which no longer works as
        intended.
      </p>
      <p>
        The right-hand side of the arrow contains the body of the function. By
        default the body is a block statement (zero or more statements
        surrounded by curly braces). The body may also be an implicitly returned
        single expression if either: the program logic requires returning a
        value, or the <code>void</code> operator precedes a single function or
        method call (using <code>void</code> ensures <code>undefined</code> is
        returned, prevents leaking values, and communicates intent). The single
        expression form is preferred if it improves readability (e.g., for short
        or simple expressions).
      </p>
      <p className="examples">Examples:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * Arrow functions can be documented just like normal functions. *
          @param {"{number}"} numParam A number to add. * @param {"{string}"}{" "}
          strParam Another number to add that happens to be a string. * @return{" "}
          {"{number} "}
          The sum of the two parameters. */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> moduleLocalFunc </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">numParam</span>
        <span className="pun">,</span>
        <span className="pln"> strParam</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> numParam </span>
        <span className="pun">+</span>
        <span className="pln"> </span>
        <span className="typ">Number</span>
        <span className="pun">(</span>
        <span className="pln">strParam</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="com">
          // Uses the single expression syntax with `void` because the program
          logic does
        </span>
        <span className="pln"></span>
        <span className="com">// not require returning a value.</span>
        <span className="pln">getValue</span>
        <span className="pun">((</span>
        <span className="pln">result</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="kwd">void</span>
        <span className="pln"> alert</span>
        <span className="pun">(`</span>
        <span className="typ">Got</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">result</span>
        <span className="pun">{"}"}`));</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">CallbackExample</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">constructor</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">/** @private {"{number}"} */</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">cachedValue_ </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="com">
          // For inline callbacks, you can use inline typing for parameters.
        </span>
        <span className="pln"></span>
        <span className="com">
          // Uses a block statement because the value of the single expression
          should
        </span>
        <span className="pln"></span>
        <span className="com">
          // not be returned and the expression is not a single function call.
        </span>
        <span className="pln">getNullableValue</span>
        <span className="pun">((</span>
        <span className="com">/** ?number */</span>
        <span className="pln"> result</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">cachedValue_ </span>
        <span className="pun">=</span>
        <span className="pln"> result </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pln"> </span>
        <span className="pun">?</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pln"> </span>
        <span className="pun">:</span>
        <span className="pln"> result</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"}"});</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="com">
          /** * A function with no params and no returned value. * This single
          expression body usage is illegal because the program logic does * not
          require returning a value and we're missing the `void` operator. */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> moduleLocalFunc </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> anotherFunction</span>
        <span className="pun">();</span>
      </pre>
      <h4 id="features-functions-generators">5.5.4 Generators</h4>
      <p>
        Generators enable a number of useful abstractions and may be used as
        needed.
      </p>
      <p>
        When defining generator functions, attach the <code>*</code> to the{" "}
        <code>function</code> keyword when present, and separate it with a space
        from the name of the function. When using delegating yields, attach the{" "}
        <code>*</code> to the <code>yield</code> keyword.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** @return {"{!Iterator&lt;number&gt;}"} */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pun">*</span>
        <span className="pln"> gen1</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">yield</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="com">
          /** @return {"{!Iterator&lt;number&gt;}"} */
        </span>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> gen2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">function</span>
        <span className="pun">*()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">yield</span>
        <span className="pun">*</span>
        <span className="pln"> gen1</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">SomeclassName</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** @return {"{!Iterator&lt;number&gt;}"}" */
        </span>
        <span className="pln"></span>
        <span className="pun">*</span>
        <span className="pln"> gen</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">yield</span>
        <span className="pln"> </span>
        <span className="lit">42</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="features-functions-parameter-return-types">
        5.5.5 Parameter and return types
      </h4>
      <p>
        Function parameters and return types should usually be documented with
        JSDoc annotations. See{" "}
        <a href="#jsdoc-method-and-function-comments">
          7.8 Method and function comments
        </a>{" "}
        for more information.
      </p>
      <h5 id="features-functions-default-parameters">
        5.5.5.1 Default parameters
      </h5>
      <p>
        Optional parameters are permitted using the equals operator in the
        parameter list. Optional parameters must include spaces on both sides of
        the equals operator, be named exactly like required parameters (i.e.,
        not prefixed with
        <code>opt_</code>), use the <code>=</code> suffix in their JSDoc type,
        come after required parameters, and not use initializers that produce
        observable side effects. All optional parameters for concrete functions
        must have default values, even if that value is <code>undefined</code>.
        In contrast to concrete functions, abstract and interface methods must
        omit default parameter values.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * @param {"{string=}"} required This parameter is always needed. *
          @param {"{string=}"} optional This parameter can be omitted. * @param{" "}
          {"{!Node=}"} node Another optional parameter. */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> maybeDoSomething</span>
        <span className="pun">(</span>
        <span className="pln">required</span>
        <span className="pun">,</span>
        <span className="pln"> optional </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">''</span>
        <span className="pun">,</span>
        <span className="pln"> node </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">undefined</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{}</span>
        <span className="pln"></span>
        <span className="com">/** @interface */</span>
        <span className="pln"></span>
        <span className="kwd">className</span>
        <span className="pln"> </span>
        <span className="typ">MyInterface</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          /** * Interface and abstract methods must omit default parameter
          values. * @param {"{string=}"} optional */
        </span>
        <span className="pln">someMethod</span>
        <span className="pun">(</span>
        <span className="pln">optional</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p>
        Use default parameters sparingly. Prefer destructuring (as in
        <a href="#features-objects-destructuring">5.3.7 Destructuring</a>) to
        create readable APIs when there are more than a small handful of
        optional parameters that do not have a natural order.
      </p>
      <p className="note">
        Note: Unlike Python's default parameters, it is okay to use initializers
        that return new mutable objects (such as <code>{}</code> or{" "}
        <code>[]</code>) because the initializer is evaluated each time the
        default value is used, so a single object won't be shared across
        invocations.
      </p>
      <p className="tip">
        Tip: While arbitrary expressions including function calls may be used as
        initializers, these should be kept as simple as possible. Avoid
        initializers that expose shared mutable state, as that can easily
        introduce unintended coupling between function calls.
      </p>
      <h5 id="features-functions-rest-parameters">5.5.5.2 Rest parameters</h5>
      <p>
        Use a <em>rest</em> parameter instead of accessing{" "}
        <code>arguments</code>. Rest parameters are typed with a{" "}
        <code>...</code> prefix in their JSDoc. The rest parameter must be the
        last parameter in the list. There is no space between the{" "}
        <code>...</code> and the parameter name. Do not name the rest parameter{" "}
        <code>var_args</code>. Never name a local variable or parameter{" "}
        <code>arguments</code>, which confusingly shadows the built-in name.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="com">
          /** * @param {"{!Array&lt;string&gt;}"} array This is an ordinary
          parameter. * @param {"{...number}"} numbers The remainder of arguments
          are all numbers. */
        </span>
        <span className="pln"></span>
        <span className="kwd">function</span>
        <span className="pln"> variadic</span>
        <span className="pun">(</span>
        <span className="pln">array</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">numbers</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
      </pre>
      <h4 id="features-functions-generics">5.5.6 Generics</h4>
      <p>
        Declare generic functions and methods when necessary with{" "}
        <code>@template TYPE</code> in the JSDoc above the function or method
        definition.
      </p>
      <h4 id="features-functions-spread-operator">5.5.7 Spread operator</h4>
      <p>
        Function calls may use the spread operator (<code>...</code>). Prefer
        the spread operator to <code>Function.prototype.apply</code> when an
        array or iterable is unpacked into multiple parameters of a variadic
        function. There is no space after the
        <code>...</code>.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">function</span>
        <span className="pln"> myFunction</span>
        <span className="pun">(...</span>
        <span className="pln">elements</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{}"}</span>
        <span className="pln">myFunction</span>
        <span className="pun">(...</span>
        <span className="pln">array</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">iterable</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">generator</span>
        <span className="pun">());</span>
      </pre>
      <h3 id="features-string-literals">5.6 String literals</h3>
      <h4 id="features-strings-use-single-quotes">5.6.1 Use single quotes</h4>
      <p>
        Ordinary string literals are delimited with single quotes (
        <code>'</code>), rather than double quotes (<code>"</code>).
      </p>
      <p className="tip">
        Tip: if a string contains a single quote character, consider using a
        template string to avoid having to escape the quote.
      </p>
      <p>Ordinary string literals may not span multiple lines.</p>
      <h4 id="features-strings-template-strings">5.6.2 Template literals</h4>
      <p>
        Use template literals (delimited with <code>`</code>) over complex
        string concatenation, particularly if multiple string literals are
        involved. Template literals may span multiple lines.
      </p>
      <p>
        If a template literal spans multiple lines, it does not need to follow
        the indentation of the enclosing block, though it may if the added
        whitespace does not matter.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">function</span>
        <span className="pln"> arithmetic</span>
        <span className="pun">(</span>
        <span className="pln">a</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="pun">`</span>
        <span className="typ">Here</span>
        <span className="pln"> is a table </span>
        <span className="kwd">of</span>
        <span className="pln"> arithmetic operations</span>
        <span className="pun">:</span>
        <span className="pln">$</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">+</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">b</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a </span>
        <span className="pun">+</span>
        <span className="pln"> b</span>
        <span className="pun">{"}"}</span>
        <span className="pln">$</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">-</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">b</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a </span>
        <span className="pun">-</span>
        <span className="pln"> b</span>
        <span className="pun">{"}"}</span>
        <span className="pln">$</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">b</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a </span>
        <span className="pun">*</span>
        <span className="pln"> b</span>
        <span className="pun">{"}"}</span>
        <span className="pln">$</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">/</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">b</span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> $</span>
        <span className="pun">{"{"}</span>
        <span className="pln">a </span>
        <span className="pun">/</span>
        <span className="pln"> b</span>
        <span className="pun">{"}"}`;</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h4 id="features-strings-no-line-continuations">
        5.6.3 No line continuations
      </h4>
      <p>
        Do not use <em>line continuations</em> (that is, ending a line inside a
        string literal with a backslash) in either ordinary or template string
        literals. Even though ES5 allows this, it can lead to tricky errors if
        any trailing whitespace comes after the slash, and is less obvious to
        readers.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> longString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">'</span>
        <span className="typ">This</span>
        <span className="pln"> is a very </span>
        <span className="kwd">long</span>
        <span className="pln"> string that far exceeds the </span>
        <span className="lit">80</span>
        <span className="pln"> \ column limit</span>
        <span className="pun">.</span>
        <span className="pln"> </span>
        <span className="typ">It</span>
        <span className="pln"> unfortunately contains </span>
        <span className="kwd">long</span>
        <span className="pln"> stretches </span>
        <span className="kwd">of</span>
        <span className="pln">
          {" "}
          spaces due \ to how the continued lines are indented
        </span>
        <span className="pun">.</span>
        <span className="str">';</span>
      </pre>
      <p>Instead, write</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> longString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          'This is a very long string that far exceeds the 80 '
        </span>
        <span className="pln"> </span>
        <span className="pun">+</span>
        <span className="pln"></span>
        <span className="str">
          'column limit. It does not contain long stretches of spaces since '
        </span>
        <span className="pln"> </span>
        <span className="pun">+</span>
        <span className="pln"></span>
        <span className="str">'the concatenated strings are cleaner.'</span>
        <span className="pun">;</span>
      </pre>
      <h3 id="features-number-literals">5.7 Number literals</h3>
      <p>
        Numbers may be specified in decimal, hex, octal, or binary. Use exactly{" "}
        <code>0x</code>,<code>0o</code>, and <code>0b</code> prefixes, with
        lowercase letters, for hex, octal, and binary, respectively. Never
        include a leading zero unless it is immediately followed by
        <code>x</code>, <code>o</code>, or <code>b</code>.
      </p>
      <h3 id="features-control-structures">5.8 Control structures</h3>
      <h4 id="features-for-loops">5.8.1 For loops</h4>
      <p>
        With ES6, the language now has three different kinds of <code>for</code>{" "}
        loops. All may be used, though <code>for</code>-<code>of</code> loops
        should be preferred when possible.
      </p>
      <p>
        <code>for</code>-<code>in</code> loops may only be used on dict-style
        objects (see
        <a href="#features-objects-mixing-keys">
          5.3.3 Do not mix quoted and unquoted keys
        </a>
        ), and should not be used to iterate over an array.{" "}
        <code>Object.prototype.hasOwnProperty</code> should be used in{" "}
        <code>for</code>-<code>in</code> loops to exclude unwanted prototype
        properties. Prefer <code>for</code>-<code>of</code> and{" "}
        <code>Object.keys</code> over
        <code>for</code>-<code>in</code> when possible.
      </p>
      <h4 id="features-exceptions">5.8.2 Exceptions</h4>
      <p>
        Exceptions are an important part of the language and should be used
        whenever exceptional cases occur. Always throw <code>Error</code>s or
        subclassName of <code>Error</code>: never throw string literals or
        other objects. Always use <code>new</code> when constructing an
        <code>Error</code>.
      </p>
      <p>
        This treatment extends to <code>Promise</code> rejection values as{" "}
        <code>Promise.reject(obj)</code> is equivalent to{" "}
        <code>throw obj;</code> in async functions.
      </p>
      <p>
        Custom exceptions provide a great way to convey additional error
        information from functions. They should be defined and used wherever the
        native <code>Error</code> type is insufficient.
      </p>
      <p>
        Prefer throwing exceptions over ad-hoc error-handling approaches (such
        as passing an error container reference type, or returning an object
        with an error property).
      </p>
      <h5 id="features-empty-catch-blocks">5.8.2.1 Empty catch blocks</h5>
      <p>
        It is very rarely correct to do nothing in response to a caught
        exception. When it truly is appropriate to take no action whatsoever in
        a catch block, the reason this is justified is explained in a comment.
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> handleNumericResponse</span>
        <span className="pun">(</span>
        <span className="pln">response</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">ok</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          // it's not numeric; that's fine, just continue
        </span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"></span>
        <span className="kwd">return</span>
        <span className="pln"> handleTextResponse</span>
        <span className="pun">(</span>
        <span className="pln">response</span>
        <span className="pun">);</span>
      </pre>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln"> </span>
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln">shouldFail</span>
        <span className="pun">();</span>
        <span className="pln">fail</span>
        <span className="pun">(</span>
        <span className="str">'expected an error'</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">expected</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <p className="tip">
        Tip: Unlike in some other languages, patterns like the above simply
        don’t work since this will catch the error thrown by <code>fail</code>.
        Use <code>assertThrows()</code> instead.
      </p>
      <h4 id="features-switch-statements">5.8.3 Switch statements</h4>
      <p>
        Terminology Note: Inside the braces of a switch block are one or more
        statement groups. Each statement group consists of one or more switch
        labels (either <code>case FOO:</code> or <code>default:</code>),
        followed by one or more statements.
      </p>
      <h5 id="features-switch-fall-through">5.8.3.1 Fall-through: commented</h5>
      <p>
        Within a switch block, each statement group either terminates abruptly
        (with a<code>break</code>, <code>return</code> or <code>throw</code>n
        exception), or is marked with a comment to indicate that execution will
        or might continue into the next statement group. Any comment that
        communicates the idea of fall-through is sufficient (typically{" "}
        <code>// fall through</code>). This special comment is not required in
        the last statement group of the switch block.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint ">
        <span className="kwd">switch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">input</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="kwd">case</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">:</span>
        <span className="pln"></span>
        <span className="kwd">case</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">:</span>
        <span className="pln">prepareOneOrTwo</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="com">// fall through</span>
        <span className="pln"></span>
        <span className="kwd">case</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">:</span>
        <span className="pln">handleOneTwoOrThree</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="kwd">break</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="kwd">default</span>
        <span className="pun">:</span>
        <span className="pln">handleLargeNumber</span>
        <span className="pun">(</span>
        <span className="pln">input</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h5 id="features-switch-default-case">
        5.8.3.2 The <code>default</code> case is present
      </h5>
      <p>
        Each switch statement includes a <code>default</code> statement group,
        even if it contains no code. The <code>default</code> statement group
        must be last.
      </p>
      <h3 id="features-this">5.9 this</h3>
      <p>
        Only use <code>this</code> in className constructors and methods, in
        arrow functions defined within className constructors and methods, or in
        functions that have an explicit
        <code>@this</code> declared in the immediately-enclosing function’s
        JSDoc.
      </p>
      <p>
        Never use <code>this</code> to refer to the global object, the context
        of an <code>eval</code>, the target of an event, or unnecessarily{" "}
        <code>call()</code>ed or <code>apply()</code>ed functions.
      </p>
      <h3 id="features-equality-checks">5.10 Equality Checks</h3>
      <p>
        Use identity operators (<code>===</code>/<code>!==</code>) except in the
        cases documented below.
      </p>
      <h4 id="features-equality-checks-exceptions">
        5.10.1 Exceptions Where Coercion is Desirable
      </h4>
      <p>
        Catching both <code>null</code> and <code>undefined</code> values:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">someObjectOrPrimitive </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="kwd">null</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">{"{"}</span>
        <span className="pln"></span>
        <span className="com">
          // Checking for null catches both null and undefined for objects and
        </span>
        <span className="pln"></span>
        <span className="com">
          // primitives, but does not catch other falsy values like 0 or the
          empty
        </span>
        <span className="pln"></span>
        <span className="com">// string.</span>
        <span className="pln"></span>
        <span className="pun">{"}"}</span>
      </pre>
      <h3 id="disallowed-features">5.11 Disallowed features</h3>
      <h4 id="disallowed-features-with">5.11.1 with</h4>
      <p>
        Do not use the <code>with</code> keyword. It makes your code harder to
        understand and has been banned in strict mode since ES5.
      </p>
      <h4 id="disallowed-features-dynamic-code-evaluation">
        5.11.2 Dynamic code evaluation
      </h4>
      <p>
        Do not use <code>eval</code> or the <code>Function(...string)</code>{" "}
        constructor (except for code loaders). These features are potentially
        dangerous and simply do not work in CSP environments.
      </p>
      <h4 id="disallowed-features-automatic-semicolon-insertion">
        5.11.3 Automatic semicolon insertion
      </h4>
      <p>
        Always terminate statements with semicolons (except function and
        className declarations, as noted above).
      </p>
      <h4 id="disallowed-features-non-standard-features">
        5.11.4 Non-standard features
      </h4>
      <p>
        Do not use non-standard features. This includes old features that have
        been removed (e.g., <code>WeakMap.clear</code>), new features that are
        not yet standardized (e.g., the current TC39 working draft, proposals at
        any stage, or proposed but not-yet-complete web standards), or
        proprietary features that are only implemented in some browsers. Use
        only features defined in the current ECMA-262 or WHATWG standards. (Note
        that projects writing against specific APIs, such as Chrome extensions
        or Node.js, can obviously use those APIs). Non-standard language
        “extensions” (such as those provided by some external transpilers) are
        forbidden.
      </p>
      <h4 id="disallowed-features-wrapper-objects">
        5.11.5 Wrapper objects for primitive types
      </h4>
      <p>
        Never use <code>new</code> on the primitive object wrappers (
        <code>Boolean</code>, <code>Number</code>, <code>String</code>,
        <code>Symbol</code>), nor include them in type annotations.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** Boolean */</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Boolean</span>
        <span className="pun">(</span>
        <span className="kwd">false</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">x</span>
        <span className="pun">)</span>
        <span className="pln"> alert</span>
        <span className="pun">(</span>
        <span className="kwd">typeof</span>
        <span className="pln"> x</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">// alerts 'object' - WAT?</span>
      </pre>
      <p>
        The wrappers may be called as functions for coercing (which is preferred
        over using <code>+</code> or concatenating the empty string) or creating
        symbols.
      </p>
      <p className="example">Example:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="com">/** boolean */</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Boolean</span>
        <span className="pun">(</span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(!</span>
        <span className="pln">x</span>
        <span className="pun">)</span>
        <span className="pln"> alert</span>
        <span className="pun">(</span>
        <span className="kwd">typeof</span>
        <span className="pln"> x</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">// alerts 'boolean', as expected</span>
      </pre>
      <h4 id="disallowed-features-modifying-builtin-objects">
        5.11.6 Modifying builtin objects
      </h4>
      <p>
        Never modify builtin types, either by adding methods to their
        constructors or to their prototypes. Avoid depending on libraries that
        do this. Note that the JSCompiler’s runtime library will provide
        standards-compliant polyfills where possible; nothing else may modify
        builtin objects.
      </p>
      <p>
        Do not add symbols to the global object unless absolutely necessary
        (e.g. required by a third-party API).
      </p>
      <h4 id="disallowed-features-omitting-parents-with-new">
        5.11.7 Omitting <code>()</code> when invoking a constructor
      </h4>
      <p>
        Never invoke a constructor in a <code>new</code> statement without using
        parentheses <code>()</code>.
      </p>
      <p className="disallowed">Disallowed:</p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pun">;</span>
      </pre>
      <p>Use instead:</p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pun">();</span>
      </pre>
      <p>
        Omitting parentheses can lead to subtle mistakes. These two lines are
        not equivalent:
      </p>
      <pre className="language-js prettyprint prettyprinted">
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pun">().</span>
        <span className="typ">Bar</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="kwd">new</span>
        <span className="pln"> </span>
        <span className="typ">Foo</span>
        <span className="pun">.</span>
        <span className="typ">Bar</span>
        <span className="pun">();</span>
      </pre>
    </div>
  );
};

export default Languagefeaturesdetail;
