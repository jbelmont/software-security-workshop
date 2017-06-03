# Application Level Security

## Definition

* Encompasses measures taken to improve the security of an application
    * By finding, fixing and preventing security vulnerabilities.

## Terms

* Asset
    * Data in a database, money in an account, file on the filesystem or any system resource.
* Vulnerability
    * A gap in security program that can be exploited by threats to gain unauthorized access to an asset.
* Attack
    * An action taken to harm an asset.
* Threat
    * Anything that can exploit a vulnerability and obtain, damage, or destroy an asset.

## Techniques

* Code review
    * Security engineer who understands the application through manually reviewing the source code notices avenues of exploit.
* Blackbox security audit
    * This is testing an application for security vulnerabilities not looking at source code
* Design review
    * Thinking about possible threat models before writing code or using a spec that has it detailed.
* Tooling
    * Automated tools that check security vulnerabilities

## Application threats or attacks

| `Category` | `Threats / Attacks` |
| --- | --- |
| *Input Validation* | Buffer overflow; cross-site scripting; SQL injection; canonicalization |
| *Software Tampering* | Attacker modifies an existing application's runtime behavior to perform unauthorized actions; exploited via binary patching, code substitution, or code extension |
| *Authentication* | Network eavesdropping ; Brute force attack; dictionary attacks; cookie replay; credential theft |
| *Authorization* | Elevation of privilege; disclosure of confidential data; data tampering; luring attacks |
| *Configuration management* | Unauthorized access to administration interfaces; unauthorized access to configuration stores; retrieval of clear text configuration data; lack of individual accountability; over-privileged process and service accounts |
| *Sensitive information* | Access sensitive code or data in storage; network eavesdropping; code/data tampering |
| *Session management* | Session hijacking; session replay; man in the middle |
| *Cryptography* | Poor key generation or key management; weak or custom encryption |
| *Parameter manipulation* | Query string manipulation; form field manipulation; cookie manipulation; HTTP header manipulation |
| *Exception management* | Information disclosure; denial of service |
| *Auditing and logging* | User denies performing an operation; attacker exploits an application without trace; attacker covers his or her tracks |

[Application Security](https://en.wikipedia.org/wiki/Application_security)
