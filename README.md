What are some differences between interfaces and types in TypeScript?

Typescript offers two types of custom types Interface & Type Alieas . They seem like interchangeable there are some key difference on these types

1.Declaration Merging
2.Extends Interaction
3.Compatibility of Object Types
4.Performance

Declaration Merging :

Interface Person {
name : string;
age : number;
}

type Person = {
name : string;
age : number;
}

Extends Interation :

Interfaces use the extends key for inheritance making the perfect match between the types and more explicit

interface Animal {
name: string;
}

interface Dog extends Animal {
breed: string;
}

Type Composition :
There are two type of Interaction is : & and | Operators these type of operator gives more flexibility for complex type operations.

type Admin = Person & {
privileges: string[];
};

type Result = Success | Failure;

TypeScript includes special types for specific scenarios. The "any" type completely bypasses type checking but should be used sparingly. The "unknown" type serves as a type-safe alternative to "any", requiring explicit type checking before use. The "never" type represents values that should never occur, useful for exhaustive type checking and impossible state representations.
Enums allow developers to define sets of named constants. Numeric enums auto-increment values when unspecified and support reverse mapping. String enums provide more readable values that are self-documenting and better for serialization. Both variants improve code clarity over plain numeric or string values.
TypeScript's type inference system automatically determines types when not explicitly annotated. It works for variable initialization, function return types, and contextual patterns. While powerful, explicit types remain valuable for public APIs and complex scenarios where inference might be too specific or unclear.


Understanding Type Inference in TypeScript and Why It Matters?

When you're developing with TypeScript, one of its most powerful features quietly works behind the scenes: type inference. It helps you write cleaner, more reliable code without constantly declaring types everywhere. But what exactly is type inference, and why is it so helpful?Type inference is TypeScript’s ability to automatically determine the type of a variable or expression without you having to explicitly tell it.

let name = "Alice"; 

Here, we didn’t declare name: string—TypeScript looked at the value ("Alice") and figured out the type on its own.

function add(a: number, b: number) {
  return a + b; 
}
Because both inputs are numbers, TypeScript infers the return type of the function without needing a separate annotation.Even without writing types everywhere, TypeScript still knows the types behind the scenes, preventing many common bugs.If you change part of your code, TypeScript can keep track of types and show you where updates are needed, even when types aren't explicitly declared.TypeScript's type inference is like a smart assistant it watches your code and helps keep it safe and clean without demanding too much input. By understanding and trusting type inference, you can write more concise, readable, and maintainable code while still enjoying the benefits of strong typing.
