any vs unknown vs never in TypeScript
ভূমিকা (Introduction)
TypeScript-এ বিভিন্ন ধরনের Data Handle করার জন্য অনেকগুলো বিশেষ Type রয়েছে।
এর মধ্যে any, unknown এবং never বেশ গুরুত্বপূর্ণ। দেখতে কাছাকাছি মনে
হলেও প্রতিটির কাজ আলাদা। এগুলোর ব্যবহার সম্পর্কে পরিষ্কার ধারণা থাকলে আরও
নিরাপদ ও নির্ভরযোগ্য Code লেখা সম্ভব।
বিস্তারিত আলোচনা (Detailed Discussion)
১. any
any Type ব্যবহার করলে TypeScript নির্দিষ্ট Variable-এর ক্ষেত্রে Type
Checking অনেকটাই বন্ধ করে দেয়। এতে যেকোনো ধরনের Value রাখা যায় এবং Type
Check ছাড়াই বিভিন্ন Operation করা যায়।
let value: any = "Hello";

value = 100;
value.toUpperCase();
এখানে TypeScript কোনো Error দেখাবে না। কিন্তু Runtime-এ ভুল Operation-এর
কারণে Error হতে পারে। তাই প্রয়োজন ছাড়া any ব্যবহার করা উচিত নয়।
২. unknown
unknown হলো any-এর তুলনায় নিরাপদ একটি বিকল্প। এতে যেকোনো ধরনের Value
রাখা যায়। তবে any-এর মতো Type Checking বন্ধ করে দেয় না। কোনো নির্দিষ্ট
Operation করার আগে Value-এর Type যাচাই করতে হয়।
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
এখানে typeof ব্যবহার করে Value-এর Type যাচাই করা হয়েছে। এই প্রক্রিয়াকে
Type Narrowing বলা হয়।

তাহলে unknown কেন any-এর চেয়ে বেশি Preferred?

কারণ any ব্যবহার করলে TypeScript অনেক ক্ষেত্রে ভুল Operation শনাক্ত করতে
পারে না। ফলে Runtime-এ Unexpected Error হওয়ার ঝুঁকি থাকে। অন্যদিকে
unknown Value ব্যবহারের আগে Type Check করতে বাধ্য করে। এতে Type Safety
বজায় থাকে এবং সম্ভাব্য Runtime Error কমানো যায়।

বিশেষ করে API Response, External Data এবং এমন Value-এর ক্ষেত্রে unknown
উপকারী, যার Type আগে থেকে নিশ্চিত নয়।
৩. never
never এমন একটি Type, যা এমন Value নির্দেশ করে যা কখনো স্বাভাবিকভাবে
পাওয়া সম্ভব নয়। সাধারণত যেসব Function সবসময় Error Throw করে অথবা কখনো
স্বাভাবিকভাবে শেষ হয় না, সেগুলোর Return Type হিসেবে never ব্যবহার করা হয়।
function throwError(message: string): never {
  throw new Error(message);
}
Union Type-এর সব সম্ভাব্য Case Handle করা হয়েছে কি না, তা যাচাই করতেও
never ব্যবহার করা যায়।
উপসংহার (Conclusion)
any, unknown এবং never TypeScript-এ ভিন্ন ভিন্ন উদ্দেশ্যে ব্যবহৃত হয়।
any Type Safety কমিয়ে দেয়, unknown Type Checking বাধ্যতামূলক করে
নিরাপত্তা নিশ্চিত করে এবং never এমন Value নির্দেশ করে যা কখনো
স্বাভাবিকভাবে ঘটতে পারে না। তাই নিরাপদ ও নির্ভরযোগ্য TypeScript Application
তৈরি করতে এই তিনটি Type-এর পার্থক্য বোঝা অত্যন্ত গুরুত্বপূর্ণ।