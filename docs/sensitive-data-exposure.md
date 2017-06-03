# Sensitive Data Exposure

> Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data deserves extra protection such as encryption at rest or in transit, as well as special precautions when exchanged with the browser.

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
| Consider who can gain access to your sensitive dataand anybackupsof that data.This includes the data at rest, in transit, and evenin your customers’ browsers. Include both external and internal threats. | Attackers typically don’t break crypto directly. They break something else, such as steal keys, do man-in-the-middle attacks, or steal clear text data off the server, while in transit, or from the user’s browser. <td colspan="2">The most common flaw is simply not encrypting sensitive data. When crypto is employed, weak key generation and management, and weak algorithm usage is common, particularly weak password hashing techniques. Browser weaknesses are very common and easy to detect, but hard to exploit on a large scale. External attackers have difficulty detecting server side flaws due to limited access and they are also usually hard to exploit.</td> <td>Failure frequently compromises all data that should have been protected. Typically, this information includes sensitive data such as health records, credentials, personal data, credit cards, etc.</td><td>Consider the business value of the lost dataand impact to your reputation. What is your legal liability if this data is exposed? Also consider the damage to your reputation.</td> |

## Detecting Vulnerability



## Preventing Vulnerability



## Example Attach Scenarios


## References

