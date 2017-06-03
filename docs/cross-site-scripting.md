# Cross-Site Scripting

> XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user supplied data using a browser API that can create JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.

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
| Consider anyone who can send untrusted data to the system,including external users, business partners, other systems, internal users, and administrators. | Attackers send text-based attack scripts that exploit the interpreter in the browser. Almost any source of data can be an attack vector, including internal sources such as data from the database. <td colspan="2">XSS flaws occur when an application updates a webpage with attacker controlled data without properly escapingthat content or using a safe JavaScript API. There are two primary categories of XSS flaws: (1) Stored, and (2) Reflected, and each of these can occur on (a) the Serveror (b) on the Client. Detection of most Server XSSflaws is fairly easy via testing or code analysis. Client XSScan be very difficult to identify.</td> <td>Attackers can execute scripts in a victim’s browser to hijack user sessions, deface web sites, insert hostile content, redirect users, hijack the user’s browser using malware, etc.</td><td>Consider the business value of the affected system and all the data it processes.Also consider the business impact of public exposure of the vulnerability.</td> |

## Detecting Vulnerability



## Preventing Vulnerability



## Example Attach Scenarios


## References
