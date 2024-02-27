# JSON Collate

JSON Collate is a tool used to validate two JSON files. It accepts two simple JSON datasets as inputs and checks them for syntactic correctness and structural integrity.

# Installation

You can install the package using npm:

```bash
npm install --save json-collate
```

# Usage

In your JavaScript file, import the package:

```bash
const compareObjects = require("json-collate");
```

Then, pass two JSON objects to the compareObjects function:

```bash
const obj1 = { a: [1, 2, 3], b: 1 };
const obj2 = { a: [1, 2, 3], b: 2 };

const result = compareObjects(obj1, obj2);
console.log(result); // Output: false
```

The compareObjects function will return true if both JSON objects are identical, and false otherwise.
For a more detailed explanation of how JSON Collate works, you can refer to the documentation.
