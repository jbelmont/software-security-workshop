# Security Misconfiguration

> Good security requires having a secure configuration defined and deployed for the application, frameworks, application server, web server, database server, platform, etc. Secure settings should be defined, implemented, and maintained, as defaults are often insecure. Additionally, software should be kept up to date.

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
| Consider anonymous external attackers as well as authorized users that may attempt to compromise the system. Also consider insiders wanting to disguise their actions. | Attackersaccess default accounts, unused pages, unpatched flaws, unprotected files and directories, etc. to gain unauthorized access to or knowledge of the system. <td colspan="2">Security misconfiguration can happen at any level of an application stack, including the platform, web server, application server, database, frameworks, and custom code. Developers and system administrators need to work together to ensure that the entire stack is configured properly. Automated scanners are useful for detecting missing patches, misconfigurations, use of default accounts, unnecessary services, etc.</td> <td>Such flaws frequently give attackers unauthorized access to some system data or functionality. Occasionally, such flaws result in a complete system compromise.</td><td>The system could be completely compromised without you knowing it. All of your data could be stolen or modified slowly over time. Recovery costs could be expensive.</td> |

## Detecting Vulnerability

Is your application missing the proper security hardening across any part of the application stack? Including:

1. Is any of your software out of date? This software includes the OS, Web/App Server, DBMS, applications, APIs, and all components and libraries.
2. Are any unnecessary features enabled or installed (e.g., ports, services, pages, accounts, privileges)?
3. Are default accounts and their passwords still enabled and unchanged?
4. Does your error handling reveal stack traces or other overly informative error messages to users?
5. Are the security settings in your application servers, application frameworks (e.g., Struts, Spring, ASP.NET), libraries, databases, etc. not set to secure values? Without a concerted, repeatable application security configuration process, systems are at a higher risk.

## Preventing Vulnerability

The primary recommendations are to establish all of the following:

1. A repeatable hardening process that makes it fast and easy to deploy another environment that is properly locked down.
    1. Development, QA, and production environments should all be configured identically (with different passwords used in each environment).
    2. This process should be automated to minimize the effort required to setup a new secure environment.
2. A process for keeping abreast of and deploying all new software updates and patches in a timely manner to each deployed environment. This process needs to include all components and libraries as well.
3. A strong application architecture that provides effective, secure separation between components.
4. An automated process to verify that configurations and settings are properly configured in all environments.


## Example Attack Scenarios

1. The app server admin console is automatically installed and not removed. Default accounts aren’t changed.
    1. Attacker discovers the standard admin pages are on your server, logs in with default passwords, and takes over.
2. Directory listing is not disabled on your web server.
    1. An attacker discovers they can simply list directories to find any file.
    2. The attacker finds and downloads all your compiled Java classes, which they decompile and reverse engineer to get all your custom code.
    3. Attacker then finds a serious access control flaw in your application.
3. App server configuration allows stack traces to be returned to users, potentially exposing underlying flaws such as framework versions that are known to be vulnerable.
4. App server comes with sample applications that are not removed from your production server.
    1. These sample applications have well known security flaws attackers can use to compromise your server

## References

[Configuration](https://www.owasp.org/index.php/Configuration)

[Error Handling](https://www.owasp.org/index.php/Error_Handling)

[Testing for Configuration Management](https://www.owasp.org/index.php/Testing_for_configuration_management)
