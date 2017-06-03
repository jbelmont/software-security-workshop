# Language-Based Security

[Language Based Security](https://en.wikipedia.org/wiki/Language-based_security)

> Language-based security (LBS) is a set of techniques that may be used to strengthen the security of applications on a high level by using the properties of programming languages. LBS is considered to enforce computer security on an application-level, making it possible to prevent vulnerabilities which traditional operating system security is unable to handle.

## Objectives of Language Based Security

Objective of Language-based security:

* Preven common programming errors such as allowing buffer overflows and illegal information flows to occur
* Provide some proof to the consumer about the security properties of the software
    * Helps the consumer trust the software without having to check source code for errors.

* A compiler, taking source code as input, performs several language specific operations on the code
    * Lexical analysis, preprocessing, parsing, semantic analysis, code generation, and code optimization
    * By analyzing the source code and gathering best practices for the language
    * The compiler will attempt to correctly translate the high-level code into low-level code
        * Preserving the behavior of the program.

**For Dynamic Libraries such as Javasript/Node.js you can use tools such as eslint that help with static analysis and best practices that you should follow**
