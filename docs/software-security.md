# Software Security

* Software security entails software that continues to function correctly under malicious attack.
* Most engineers acknowledge that security is important but don't know the steps to tackle security
* Software security best practices leverage good software engineering practice
    * Involve thinking about security early in the software lifecycle, knowing and understanding common threats
    * Including language-based flaws and pitfalls
    * designing for security
    * Putting all software components thorough objective risk analyses and testing.

## Difference between Software Security and Application Security

[Gary McGraw](https://www.garymcgraw.com/)

> Gary McGraw maintains that application security is a reactive approach, taking place once software has been deployed. Software security, on the other hand, involves a proactive approach, taking place within the pre-deployment phase.

[Difference between Software Security and Application Security](https://www.synopsys.com/blogs/software-security/application-security-vs-software-security/)

Software security (pre-deployment) activities include:

* Secure software design
* Development of secure coding guidelines for developers to follow
* Development of secure configuration procedures and standards for the deployment phase
* Secure coding that follows established guidelines
* Validation of user input and implementation of a suitable encoding strategy
* User authentication
* User session management
* Function level access control
* Use of strong cryptography to secure data at rest and in transit
* Validation of third-party components
* Arrest of any flaws in software design/architecture

Application security (post-deployment) activities include:

* Post deployment security tests
* Capture of flaws in software environment configuration
* Malicious code detection (implemented by the developer to create backdoor, time bomb)
* Patch/upgrade
    * Meaning that situations like third party software or dependencies needing to be patched
* IP filtering
    * White List Known Good IP addresses instead of leaving a bunch IP addresses open
* Lock down executables
    * This in my mind goes more hand in hand with compiled languages but I could be wrong
* Monitoring of programs at runtime to enforce the software use policy

