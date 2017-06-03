# Using Components with Known Vulnerabilities

> Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.

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
| Some vulnerable components (e.g., framework libraries) can be identified and exploited with automated tools, expanding the threat agent pool beyond targeted attackers to include chaotic actors. | Attackers identify a weak component through scanning or manual analysis. They customize the exploit as needed and execute the attack. It gets more difficult if the used component is deep in the application. <td colspan="2">Many applications and APIs have these issues because their development teams don’t focus on ensuring their components and libraries are up to date. In some cases, the developers don’t even know all the components they are using, never mind their versions. Component dependencies make things even worse. Tools are becoming commonly available to help detect components with known vulnerabilities.</td> <td>The full range of weaknesses is possible, including injection, broken access control, XSS, etc. The impact could range from minimalto complete host takeover and data compromise.</td><td>Consider what each vulnerability might mean for the business controlled by the affected application. It could be trivial or it could mean complete compromise.</td> |

## Detecting Vulnerability



## Preventing Vulnerability



## Example Attach Scenarios


## References

