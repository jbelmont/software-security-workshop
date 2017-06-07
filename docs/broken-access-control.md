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

The best way to find out if an application is vulnerable to access control vulnerabilities is to verify that all data and function references have appropriate defenses.

To determine if you are vulnerable, consider:

1. For data references, does the application ensure the user is authorized by using a reference map or access control check to ensure the user is authorized for that data?
2. For non-public function requests, does the application ensure the user is authenticated, and has the required roles or privileges to use that function?

* Code review of the application can verify whether these controls are implemented correctly and are present everywhere they are required.
* Manual testing is also effective for identifying access control flaws.
* Automated tools typically do not look for such flaws because they cannot recognize what requires protection or what is safe or unsafe.

## Preventing Vulnerability

Preventing access control flaws requires selecting an approach for protecting each function and each type of data (e.g., object number, filename).

1. Check access. Each use of a direct reference from an untrusted source must include an access control check to ensure the user is authorized for the requested resource.
2. Use per user or session indirect object references.
    1. This coding pattern prevents attackers from directly targeting unauthorized resources.
    2. For example, instead of using the resource’s database key, a drop down list of six resources authorized for the current user could use the numbers 1 to 6 to indicate which value the user selected.
    3. OWASP’s ESAPI includes both sequential and random access reference maps that developers can use to eliminate direct object references.
3. Automated verification. Leverage automation to verify proper authorization deployment.
    1. This is often custom.

## Example Attack Scenarios

1. The application uses unverified data in a SQL call that is accessing account information:

    `pstmt.setString( 1, request.getParameter("acct"));ResultSet results = pstmt.executeQuery( );`

    An attacker simply modifies the ‘acct’ parameter in the browser to send whatever account number they want.
    If not properly verified, the attacker can access any user’s account.
        http://example.com/app/accountInfo?acct=notmyacct`

2. An attacker simply force browses to target URLs.
    1. Admin rights are also required for access to the admin page.

    `http://example.com/app/getappInfo`

    `http://example.com/app/admin_getappInfo`

    If an unauthenticated user can access either page, it’s a flaw.
    If a non-admin can access the admin page, this is also a flaw

## References

[Indirect Object References](https://www.owasp.org/index.php/Top_10_2007-Insecure_Direct_Object_Reference)

[Function Level Access Control](https://www.owasp.org/index.php/Top_10_2007-Failure_to_Restrict_URL_Access)
