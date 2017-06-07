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

* Detecting, responding to, and blocking attacks makes applications dramatically harder to exploit yet almost no applications or APIs have such protection.
* Critical vulnerabilities in both custom code and components are also discovered all the time, yet organizations frequently take weeks or even months to roll out new defenses.
* It should be very obvious if attack detection and response isn’t in place.
* Simply try manual attacks or run a scanner against the application.
* The application or API should identify the attacks, block any viable attacks, and provide details on the attacker and characteristics of the attack.
* If you can’t quickly roll out virtual and/or actual patches when a critical vulnerability is discovered, you are left exposed to attack.
* Be sure to understand what types of attacks are covered by attack protection.
* Is it only XSS and SQL Injection? You can use technologies like WAFs, RASP, and OWASP AppSensorto detect or block attacks, and/or virtually patch vulnerabilities

## Preventing Vulnerability

There are three primary goals for sufficient attack protection:

1. Detect Attacks. Did something occur that is impossible for legitimate users to cause (e.g., an input a legitimate client can’t generate)?
    1. Is the application being used in a way that an ordinary user would never do (e.g., tempo too high, atypical input, unusual usage patterns, repeated requests)?
2. Respond to Attacks. Logs and notifications are critical to timely response.
    1. Decide whether to automatically block requests, IP addresses, or IP ranges.
    2. Consider disabling or monitoring misbehaving user accounts.
3. Patch Quickly. If your dev process can’t push out critical patches in a day, deploy a virtual patchthat analyzes HTTP traffic, data flow, and/or code execution and prevents vulnerabilities from being exploited.

## Example Attack Scenarios

1. Attacker uses automated tool like [OWASP ZAP](https://www.owasp.org/index.php/ZAP) or [SQLMap](http://sqlmap.org/) to detect vulnerabilities and possibly exploit them.
    1. Attack detection should recognize the application is being targeted with unusual requests and high volume.
    2. Automated scans should be easy to distinguish from normal traffic.
2. A skilled human attacker carefully probes for potential vulnerabilities, eventually finding an obscure flaw.
    1. While more difficult to detect, this attack still involves requests that a normal user would never send, such as input not allowed by the UI.
    2. Tracking this attacker may require building a case over time that demonstrates malicious intent.
3. Attacker starts exploiting a vulnerability in your application that your current attack protection fails to block.
    1. How quickly can you deploy a real or virtual patch to block continued exploitation of this vulnerability?

## References

[Intrusion Detection](https://www.owasp.org/index.php/Intrusion_Detection)

[Credential Stuffing Prevention Cheat Sheet](https://www.owasp.org/index.php/Credential_Stuffing_Prevention_Cheat_Sheet)
