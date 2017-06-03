# Broken Authentication and Session Management

> Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities (temporarily or permanently)

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
| Consider anonymous external attackers, as well as authorized users, who may attempt to steal accounts from others. Also consider insiders wanting to disguise their actions. | Attackers use leaksor flaws in the authentication or session management functions (e.g., exposed accounts, passwords, session IDs) to temporarily or permanently impersonate users. <td colspan="2">Developers frequently build custom authentication and session management schemes, but building these correctly is hard. As a result, these custom schemes frequently have flaws in areas such as logout, create account, change password, forgot password, timeouts, remember me, secret question, account update, etc. Finding such flaws can sometimes be difficult, as each implementation is unique.</td> <td>Such flaws may allow some or even allaccounts to be attacked. Once successful, the attacker can do anything the victim could do. Privileged accounts are frequently targeted.</td><td>Consider the business value of the affected data and application functions.Also consider the business impact of public exposure of the vulnerability.</td> |

## Detecting Vulnerability



## Preventing Vulnerability



## Example Attach Scenarios


## References
