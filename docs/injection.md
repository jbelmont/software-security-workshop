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



## Preventing Vulnerability



## Example Attach Scenarios


## References
