<div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg font-sans text-gray-800 leading-relaxed">
  <h1 class="text-4xl font-bold text-blue-600 mb-4">📘 Interfaces vs Types in TypeScript</h1>
  <p class="text-lg mb-6">TypeScript offers two powerful tools to define custom types: <strong>Interfaces</strong> and <strong>Type Aliases</strong>. Although they often seem interchangeable, there are key differences that can impact your code design and flexibility.</p>

  <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-2">1️⃣ Declaration Merging</h2>
  <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-4">
    interface Person {<br>
    &nbsp;&nbsp;name: string;<br>
    &nbsp;&nbsp;age: number;<br>
    }
  </div>
  <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-4">
    type Person = {<br>
    &nbsp;&nbsp;name: string;<br>
    &nbsp;&nbsp;age: number;<br>
    }
  </div>
  <p>Interfaces support <strong>declaration merging</strong>, meaning you can define the same interface in multiple places and TypeScript will merge them. Type aliases do not support this.</p>

  <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-2">2️⃣ Extending Interfaces</h2>
  <p>Interfaces use the <code>extends</code> keyword to inherit properties, which is intuitive for object structures.</p>
  <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-4">
    interface Animal {<br>
    &nbsp;&nbsp;name: string;<br>
    }<br><br>
    interface Dog extends Animal {<br>
    &nbsp;&nbsp;breed: string;<br>
    }
  </div>

  <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-2">3️⃣ Type Composition</h2>
  <p>Type aliases offer more powerful composition using <code>&</code> (intersection) and <code>|</code> (union).</p>
  <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-4">
    type Admin = Person & {<br>
    &nbsp;&nbsp;privileges: string[];<br>
    };<br><br>
    type Result = Success | Failure;
  </div>

  <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-2">4️⃣ Other Key Concepts</h2>
  <ul class="list-disc list-inside space-y-1 mb-4">
    <li><strong>any:</strong> Skips all type checks — avoid overusing.</li>
    <li><strong>unknown:</strong> Type-safe alternative to <code>any</code>.</li>
    <li><strong>never:</strong> Represents impossible states — great for exhaustive checks.</li>
    <li><strong>Enums:</strong> Named constants (numeric or string-based).</li>
  </ul>

  <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-2">🎯 Type Inference in TypeScript</h2>
  <p>TypeScript smartly infers types to reduce boilerplate and prevent bugs:</p>
  <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-4">
    let name = "Alice"; // inferred as string
  </div>
  <div class="bg-gray-100 p-4 rounded text-sm font-mono mb-4">
    function add(a: number, b: number) {<br>
    &nbsp;&nbsp;return a + b;<br>
    } // inferred return type: number
  </div>
  <p>This feature helps keep your code concise while still maintaining type safety.</p>

  <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-2">📌 Why It Matters</h2>
  <ul class="list-disc list-inside space-y-2">
    <li>Write clean, maintainable code without declaring every type.</li>
    <li>Fewer bugs thanks to compile-time checks and smart type tracking.</li>
    <li>Confidence during refactors — TypeScript will guide you.</li>
  </ul>

  <div class="mt-8 text-sm text-gray-500 border-t pt-4">
    Written by <strong>Samiun Arno</strong> | <a href="mailto:samiunarnouk@gmail.com" class="text-blue-500 underline">samiunarnouk@gmail.com</a> | <a href="https://github.com/samiunarno" class="text-blue-500 underline">GitHub</a>
  </div>
</div>
