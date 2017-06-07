# Injection

> Injection flaws, such as SQL, OS, XXE, and LDAP injection occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

{% flowchart width=750 %}
st=>start: Threat Agents:>https://en.wikipedia.org/wiki/Threat_(computer)
e=>end:>https://www.owasp.org/index.php/OWASP_Risk_Rating_Methodology
op1=>operation: Attack Vectors
op2=>operation: Security Weaknesses
op3=>operation: Technical Impacts
op4=>operation: Business Impacts
st(right)->op1(right)->op2(right)->op3(right)->op4(right)
{% endflowchart %}

| Threat Agents <td>Attack Vectors</td><td colspan="2">Security Weakness</td><td>Technical Impacts</td><td>Business Impacts</td> |
| --- | --- | --- | --- | --- | --- |
| Application Specific | Exploitability => Easy | Prevalence => Common | Detectability => Average | Impact => Severe | App/Business Specific |
| Consider anyone who can send untrusted data to the system, including external users, business partners, other systems, internal users, and administrators | Attackers send simple text-based attacks that exploit the syntax of the targeted interpreter. Almost any source of data can be an injection vector, including internal sources. <td colspan="2">Injection Flaws occur when an application sends untrusted data to an interpreter. Injection flaws are very prevalent, particularly in legacy code.  They are often found in SQL, LDAP, XPath, or NoSQL queries; OS commands; XML parsers, SMTP Headers, expression languages, etc. Injection flaws are easy to discover when examining code, but frequently hard to discover via testing. Scanners and fuzzers can help attackers find injection flaws.</td> <td>Injection can result in data loss or corruption, lack of accountability, or denial of access. Injection can sometimes lead to complete host takeover.</td><td>Consider the business value of the affected data and the platform running the interpreter. All data could be stolen, modified, or deleted.  Could your reputation be harmed?</td> |

## Detecting Vulnerability

* The best way to find out if an application is vulnerable to injection is to verify that all use of interpreters clearly separates untrusted data from the command or query.
* In many cases, it is recommended to avoid the interpreter, or disable it (e.g., XXE), if possible.
* For SQL calls, use bind variables in all prepared statements and stored procedures, or avoid dynamic queries.
* Checking the code is a fast and accurate way to see if the application uses interpreters safely.
* Code analysis tools can help a security analyst find use of interpreters and trace data flow through the application.
* Penetration testers can validate these issues by crafting exploits that confirm the vulnerability.
* Automated dynamic scanning which exercises the application may provide insight into whether some exploitable injection flaws exist.
* Scanners cannot always reach interpreters and have difficulty detecting whether an attack was successful.
* Poor error handling makes injection flaws easier to discover.

## Preventing Vulnerability

Keep untrusted data separate from commands and queries.

1. The preferred option is to use a safe API which avoids the use of the interpreter (Specific Language Interpreter I presume) entirely or provides a parameterized interface.
    1. Be careful with APIs, such as stored procedures, that are parameterized, but can still introduce injection under the hood.
2. If a parameterized API is not available, you should carefully escape special characters using the specific escape syntax for that interpreter.
3. Positive or "white list" input validation is also recommended, but is not a complete defense as many situations require special characters be allowed. Recommend to resort to step 1 and 2 in this case

## Example Attack Scenarios

1. An application uses untrusted data in the construction of the following vulnerable SQL call:

`String query = "SELECT * FROM accounts WHERE custID = '" + request.getParameter("id") + "'";`

2. Similarly, an application’s blind trust in frameworks may result in queries that are still vulnerable

`Query HQLQuery = session.createQuery("FROM accounts WHERE custID='" + request.getParameter("id") + "'");`

In both cases, the attacker modifies the 'id' parameter value in her browser to send:  ' or '1'='1.

`http://example.com/app/accountView?id='or '1'='1`

This changes the meaning of both queries to return all the records from the accounts table.
More dangerous attacks could modify data or even invoke stored procedures.

## Injection Demo

[Injection Demo](https://www.codebashing.com/sql_demo)

## References

[SQL Injection Cheat Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)

[Query Parameterization Cheat Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)

[Command Injection](https://www.owasp.org/index.php/Command_Injection)

[Testing for SQL Injection](https://www.owasp.org/index.php/Testing_for_SQL_Injection_(OTG-INPVAL-005))

