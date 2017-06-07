# Underprotected Apis

> Modern applications often involve rich client applications and APIs, such as JavaScript in the browser and mobile apps, that connect to an API of some kind (SOAP/XML, REST/JSON, RPC, GWT, etc.). These APIs are often unprotected and contain numerous vulnerabilities.

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
| Consider anyone with the ability to send requests to your APIs. Client software is easily reversed and communications are easily intercepted, so obscurity is no defense for APIs. | Attackers can reverse engineer APIs by examining client code, or simply monitoring communications. Some API vulnerabilities can be automatically discovered, others only by experts. <td colspan="2">Modern web applications and APIs are increasingly composed of rich clients (browser, mobile, desktop) that connect to backend APIs (XML, JSON, RPC, GWT, custom). APIs (microservices, services, endpoints) can be vulnerable to the full range of attacks. Unfortunately, dynamic and sometimes even static tools don’t work well on APIs, and they can be difficult to analyze manually, so these vulnerabilities are often undiscovered.</td> <td>The full range of negative outcomes is possible, including data theft, corruption, and destruction; unauthorized access to the entire application; and complete host takeover.</td><td>Consider the impact of an API attack on the business. Does the API access critical data or functions? Many APIs are mission critical, so also consider the impact of denial of service attacks.</td> |

## Detecting Vulnerability

* Testing your APIs for vulnerabilities should be similar to testing the rest of your application for vulnerabilities.
    * All the different types of injection, authentication, access control, encryption, configuration, and other issues can exist in APIs just as in a traditional application.
* However, because APIs are designed for use by programs (not humans) they frequently lack a UI and also use complex protocols and complex data structures.
    * These factors can make security testing difficult.
    * The use of widely-used formats can help, such as Swagger (OpenAPI), REST, JSON, and XML.
    * Some frameworks like GWT and some RPC implementations use custom formats.
    * Some applications and APIs create their own protocol and data formats, like WebSockets.
    * The breadth and complexity of APIs make it difficult to automate effective security testing, possibly leading to a false sense of security.
* Ultimately, knowing if your APIs are secure means carefully choosing a strategy to test all defenses that matter.

## Preventing Vulnerability

* The key to protecting APIs is to ensure that you fully understand the threat model and what defenses you have
    * Ensure that you have secured communications between the client and your APIs.
    * Ensure that you have a strong authentication scheme for your APIs, and that all credentials, keys, and tokens have been secured.
    * Ensure that whatever data format your requests use, that the parser configuration is hardened against attack.
    * Implement an access control scheme that protects APIs from being improperly invoked, including unauthorized function and data references.
    * Protect against injection of all forms, as these attacks are just as viable through APIs as they are for normal apps.
    * Be sure your security analysis and testing covers all your APIs and your tools can discover and analyze them all effectively.

## Example Attack Scenarios

1. Imagine a mobile banking app that connects to an XML API at the bank for account information and performing transactions.
    1. The attacker reverse engineers the app and discovers that the user account number is passed as part of the authentication request to the server along with the username and password.
    2. The attacker sends legitimate credentials, but another user’s account number, gaining full access to the other user’s account.
2. Imagine a public API offered by an Internet startup for automatically sending text messages.
    1. The API accepts JSON messages that contain a "transactionid" field.
    2. The API parses out this "transactionid" value as a string and concatenates it into a SQL query, without escaping or parameterizing it.
    3. As you can see the API is just as susceptible to SQL injection as any other type of application.
    4. In either of these cases, the vendor may not provide a web UI to use these services, making security testing more difficult.

## References

[Rest Security Cheat Sheet](https://www.owasp.org/index.php/REST_Security_Cheat_Sheet)

[Web Service Security Cheat Sheet](https://www.owasp.org/index.php/Web_Service_Security_Cheat_Sheet)
