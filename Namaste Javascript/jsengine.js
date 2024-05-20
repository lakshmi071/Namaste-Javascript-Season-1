// we need js runtime environment to js code and js runtime environment need js engine

// code goes through three phases
//1> Parsing - code is broken down into tokens, AST(abstract syntax tree) is created then passed to compilation pahse
//2> Compilation - JIT(just in time compilation) -interpretter + compiler - coverts code to byte code
//3> Execution - memory heap and call stack

//astexplorer.net - online link that converts code to AST
//Interpreter -executes code line by line, code is fast
//compiler- code is compiled before it is executed. The original code is optimized to new code then execution starts.More efficiency.
// Js is both interpretter and compiler depends on js engine
//Memory heap uses garbage collector to free up memory
//Garbage collection works on Mark and sweep algorithm, In lining, copy elision,Inline caching
//v8 uses ignition interpretter and turbo fan optimizing compiler and orinoco and oilpan for garbage collecting
