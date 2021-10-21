# dir-bit
Asynchronously removes  directories and files in nodejs. This module will help you remove or delete an entire directory or many files in just one line code.

## Methods
- `removeDir` This method removes an entire directory asynchronously. It takes two arguments: `path` and `callback`

- `deleteFiles` This method asynchronously deletes files in a directory. It takes three arguments: `path`, `filesArr` and `callback`

- `override_fs` This module uses the `fs` module to perform operations. Use this method to change that behavior.

> ```js
> var dirbit = require("dir-bit");
> function callback(){};
> 
> // Deletes "./unwanted-dir" and everything (direcotories, nested directories or files) in it.
> dirbit.removeDir("./unwanted-dir",callback); //callback is optional.
> 
> // Deletes files in the filesArray from "./unwanted-dir".
> var filesArray = ["somefile.txt","anotherfile.png"];
> dirbit.deleteFiles("./unwanted-dir",filesArray,callback); //callback is optional.
> 
