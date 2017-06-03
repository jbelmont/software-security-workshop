# Insufficient Attack Protection

> The majority of applications and APIs lack the basic ability to detect, prevent, and respond to both manual and automated attacks. Attack protection goes far beyond basic input validation and involves automatically detecting, logging, responding, and even blocking exploit attempts. Application owners also need to be able to deploy patches quickly to protect against attacks.

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
| Consider anyone with network access can send your application a request. Does yourapplication detect and respond to both manual and automated attacks? | Attackers, known users or anonymous, send in attacks. Does the application or API detect the attack? How does it respond? Can it thwart attacks against known vulnerabilities? <td colspan="2">Applications and APIs are attacked all the time. Most applications and APIs detect invalid input, but simply reject it, letting the attacker attack again and again. Such attacks indicate a malicious or compromised user probing or exploiting vulnerabilities. Detecting and blocking both manual and automated attacks, is one of the most effective ways to increase security. How quickly can you patch a critical vulnerability you just discovered?</td> <td>Most successful attacks start with vulnerability probing. Allowing such probes to continue can raise the likelihood of successful exploit to 100%. Not quickly deploying patches aids attackers.</td><td>Consider the impact of insufficient attack protection on the business. Successful attacks may not be prevented, go undiscovered for long periods of time, and expand far beyond their initial footprint.</td> |

## Detecting Vulnerability



## Preventing Vulnerability



## Example Attach Scenarios


## References

