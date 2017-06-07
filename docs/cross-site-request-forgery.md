# Cross-Site Request Forgery

> A CSRF attack forces a logged-on victim’s browser to send a forged HTTP request, including the victim’s session cookie and any other automatically included authentication information, to a vulnerable web application. Such an attack allows the attacker to force a victim’s browser to generate requests the vulnerable application thinks are legitimate requests from the victim.

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
| Consider anyone who can load content into your users’ browsers, and thus force them to submit a request to your website, including any website or other HTML feed that your users visit. | Attackers create forged HTTP requests and trick a victim into submitting them via image tags, iframes, XSS, or various other techniques. If the user is authenticated, the attack succeeds. <td colspan="2">CSRF takes advantage of the fact that most web apps allow attackers to predict all the details of a particular action.Because browsers send credentials like session cookies automatically, attackers can create malicious web pages which generate forged requests that are indistinguishable from legitimate ones.Detection of CSRF flaws is fairly easy via penetration testing or code analysis.</td> <td>Attackers can trick victims into performing any state changing operation the victim is authorized to perform(e.g., updating account details, making purchases, modifying data).</td><td>Consider the business value of the affected data or application functions. Imagine not being sure if users intended to take these actions.Consider the impact to your reputation.</td> |

## Detecting Vulnerability

* To check whether an application is vulnerable, see if any links and forms lack an unpredictable CSRF token.
* Without such a token, attackers can forge malicious requests.
    * An alternate defense is to require the user to prove they intended to submit the request, such as through reauthentication.
* Focus on the links and forms that invoke state-changing functions, since those are the most important CSRF targets.
    * Multistep transactions are not inherently immune.
    * Also be aware that Server-Side Request Forgery (SSRF) is also possible by tricking apps and APIs into generating arbitrary HTTP requests.
* Note that session cookies, source IP addresses, and other information automatically sent by the browser don’t defend against CSRF since they are included in the forged requests.
* OWASP’s [CSRF Tester](https://www.owasp.org/index.php/Category:OWASP_CSRFTester_Project) tool can help generate test cases to demonstrate the dangers of CSRF flaws.

## Preventing Vulnerability

* The preferred option is to use an existing CSRF defense.
    * Many frameworks now include built in CSRF defenses, such as Spring, Play, Django, and AngularJS.
    * Some web development languages, such as .NET do so as well.
    * OWASP's [CSRF Guard](https://www.owasp.org/index.php/Category:OWASP_CSRFGuard_Project) can automatically add CSRF defenses to Java apps.
    * OWASP's [CSRF Protector](https://www.owasp.org/index.php/CSRFProtector_Project) does the same for PHP or as an Apache filter.
* Otherwise, preventing CSRF usually requires the inclusion of an unpredictable token in each HTTP request.
    * Such tokens should, at a minimum, be unique per user session.
    * The preferred option is to include the unique token in a hidden field.
    * This includes the value in the body of the HTTP request, avoiding its exposure in the URL
    * The unique token can also be included in the URL or a parameter.
    * However, this runs the risk that the token will be exposed to an attacker.
    * Consider using the `"SameSite=strict"` flag on all cookies, which is increasingly supported in browsers.

## Example Attack Scenarios

* The application allows a user to submit a state changing request that does not include anything secret.
    * For example:http://example.com/app/transferFunds?amount=1500&destinationAccount=4673243243So, the attacker constructs a request that will transfer money from the victim’s account to the attacker’s account,
    * then embeds this attack in an image request or iframe stored on various sites under the attacker's control:

    `<img src="http://example.com/app/transferFunds?amount=1500&destinationAccount=attackersAcct#“width="0" height="0" />`

* If the victim visits any of the attacker’s sites while already authenticated to example.com, these forged requests will automatically include the user’s session info, authorizing the attacker’s request

## References

[CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))

[CSRF Prevention Cheat Sheet](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)
