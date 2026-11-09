# Type vs Interface in TypeScript

## ভূমিকা (Introduction)

TypeScript-এ নিজের মতো করে Data Type তৈরি করার জন্য `type` alias এবং `interface` ব্যবহার করা হয়। দুটিই মূলত Data Structure নির্ধারণ এবং Type Safety নিশ্চিত করতে সাহায্য করে। দেখতে প্রায় একই রকম মনে হলেও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। কখন কোনটি ব্যবহার করতে হবে, তা জানা থাকলে আরও পরিষ্কার ও Maintainable Code লেখা সম্ভব।

## বিস্তারিত আলোচনা (Detailed Discussion)

### ১. Type Alias

`type` alias ব্যবহার করে Primitive Type, Union Type, Tuple এবং Object Structure নির্ধারণ করা যায়।

উদাহরণস্বরূপ, আমরা একটি নিজস্ব ID type তৈরি করতে পারি:

```ts
type ID = number;
```

এছাড়াও একাধিক String Literal নিয়ে Union Type তৈরি করা যায়:

```ts
type Role = "admin" | "user" | "guest";
```

কিন্তু `interface` সরাসরি Primitive Type অথবা Union Type নির্ধারণ করতে পারে না।

### ২. Interface

`interface` সাধারণত Object-এর Structure নির্ধারণ করতে ব্যবহৃত হয়। এটি বলে দেয় একটি Object-এর মধ্যে কী কী Property এবং তাদের Type থাকতে হবে।

```ts
interface User {
  name: string;
  id: number;
  role: "admin" | "user" | "guest";
}
```

`interface`-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য হলো Inheritance। `extends` keyword ব্যবহার করে একটি Interface থেকে অন্য Interface তৈরি করা যায়।

```ts
interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}
```

এছাড়াও একই নামের একাধিক Interface তৈরি করলে TypeScript সেগুলোকে একত্রিত করে। এই বৈশিষ্ট্যকে Declaration Merging বলা হয়।

### ৩. Intersection Type

`type` alias ব্যবহার করে `&` (Intersection) Operator-এর মাধ্যমে একাধিক Type একত্রিত করা যায়।

```ts
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};
```

তবে একই নামে একাধিক `type` alias ঘোষণা করা যায় না।

## উপসংহার (Conclusion)

Type এবং Interface দুটিই TypeScript-এর গুরুত্বপূর্ণ অংশ। আমি সাধারণত Object Structure এবং Inheritance-এর জন্য `interface` ব্যবহার করতে পছন্দ করি। অন্যদিকে Primitive Type, Union, Tuple এবং Intersection-এর জন্য `type` বেশি সুবিধাজনক। তবে উভয়ই Object Structure নির্ধারণ করতে পারে। তাই কোনটি ব্যবহার করব, তা নির্ভর করে Project-এর প্রয়োজনের ওপর।