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

Are session management assets like user credentials and session IDs properly protected?

You may be vulnerable if:

1. User authentication credentials aren’t properly protected when stored using hashing or encryption.
2. Credentials can be guessed or overwritten through weak account management functions (e.g., account creation, change password, recover password, weak session IDs).
3. Session IDs are exposed in the URL (e.g., URL rewriting).
4. Session IDs are vulnerable to session fixation attacks.
5. Session IDs don’t timeout, or user sessions or authentication tokens (particularly single sign-on (SSO) tokens) aren’t properly invalidated during logout.
6. Session IDs aren’t rotated after successful login.
7. Passwords, session IDs, and other credentials are sent over unencrypted connections.

## Preventing Vulnerability

1. A single set of strong authentication and session management controls.
    1. Such controls should strive to:
     1. meet all the authentication and session management requirements defined in OWASP’s Application Security Verification Standard(ASVS) areas V2 (Authentication) and V3 (Session Management)
        1. [ASVS](https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project)
     2. have a simple interface for developers. Consider the ESAPI Authenticator and User APIs as good examples to emulate, use, or build upon.
    2. Strong efforts should also be made to avoid XSS flaws which can be used to steal session IDs.


## Example Attack Scenarios

1. A travel reservations application supports URL rewriting, putting session IDs in the URL

    1. `http://example.com/sale/saleitems;jsessionid=2P0OC2JSNDLPSKHCJUN2JV?dest=Hawaii`

    2. An authenticated user of the site wants to let their friends know about the sale.
        1. User e-mails the above link without knowing they are also giving away their session ID.
        2. When the friends use the link they use user’s session and credit card

2. Application’s timeouts aren’t set properly.
    1. User uses a public computer to access site.
    2. Instead of selecting "logout" the user simply closes the browser tab and walks away.
    3. An attacker uses the same browser an hour later, and that browser is still authenticated

3. An attacker gains access to the system's password database.
    1. User passwords are not properly hashed and salted, exposing every users' password.

## References

[Authentication Cheat Sheet](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)

[ASVS](https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project)
