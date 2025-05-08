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
