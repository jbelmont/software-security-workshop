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

1. The first thing you have to determine is which data is sensitive enough to require extra protection.
    1. For example, passwords, credit card numbers, health records, and personal information should be protected.
    1. For all such data:
        1. Is any of this data stored in clear text long term, including backups of this data?
        2. Is any of this data transmitted in clear text, internally or externally?
        3. Internet traffic is especially dangerous.3.Are any old / weak cryptographic algorithms used?
        4. Are weak crypto keys generated, or is proper key management or rotation missing?
        5. Are any browser security directives or headers missing when sensitive data is provided by / sent to the browser?

## Preventing Vulnerability

* The full perils of unsafe cryptography, SSL/TLS usage, and data protection are well beyond the scope of the Top 10.
* That said, for all sensitive data, do the following, at a minimum:
    * Considering the threats you plan to protect this data from (e.g., insider attack, external user)
        * encrypt all sensitive data at rest and in transit in a manner that defends against these threats.
    * Don’t store sensitive data unnecessarily.
    * Discard it as soon as possible.
    * Data you don’t retain can’t be stolen.
    * Ensure strong standard algorithms and strong keys are used, and proper key management is in place.
    * Consider using FIPS 140 validated cryptographic modules.
    * Ensure passwords are stored with an algorithm specifically designed for password protection, such as bcrypt, PBKDF2, or scrypt.
    * Disable autocomplete on forms requesting sensitive data and disable caching for pages that contain sensitive data

## Example Attack Scenarios

1. An application encrypts credit card numbers in a database using automatic database encryption.
    1. However, this data is automatically when retrieved, allowing an SQL injection flaw to retrieve credit card numbers in clear text.
    2. Alternatives include not storing credit card numbers, using tokenization, or using public key encryption.
2. A site simply doesn’t use TLS for all authenticated pages.
    1. An attacker simply monitors network traffic (like an open wireless network), and steals the user’s session cookie.
    2. The attacker then replays this cookie and hijacks the user’s session, accessing the user’s private data.
3. The password database uses unsalted hashes to store everyone’s passwords.
    1. A file upload flaw allows an attacker to retrieve the password file.
    2. All of the unsalted hashes can be exposed with a rainbow table of precalculated hashes.

## References

[Cryptographic Storage Cheat Sheet](https://www.owasp.org/index.php/Cryptographic_Storage_Cheat_Sheet)

[Password Storage Cheat Sheet](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet)

[Transport Layer Protection Cheat Sheet](https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet)
