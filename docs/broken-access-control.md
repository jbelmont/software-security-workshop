# Broken Access Control

> Restrictions on what authenticated users are allowed to do are not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users' accounts, view sensitive files, modify other users’ data, change access rights, etc.

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
| Considerthe types of authorized users of your system. Are users restricted to certain functions and data? Are unauthenticated users allowed access to any functionality or data? | Attackers,who are authorized users, simply change a parameter value to another resource they aren’t authorized for. Is access to this functionality or data granted? <td colspan="2">For data, applications and APIsfrequentlyuse the actual name or key of an object when generating web pages. For functions, URLs and function names are frequently easy to guess. Applications and APIs don’t always verify the user is authorized for the target resource. This results in an access control flaw. Testers can easily manipulate parameters to detect such flaws. Code analysis quickly shows whether authorization is correct.</td> <td>Such flaws can compromise all the functionality or data that is accessible. Unless references are unpredictable,or access control is enforced, data and functionality can be stolen, or abused.</td><td>Consider the business value of the exposed data and functionality. Also consider the business impact of public exposure of the vulnerability.</td> |

## Detecting Vulnerability



## Preventing Vulnerability



## Example Attach Scenarios


## References

