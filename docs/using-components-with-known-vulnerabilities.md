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

* The challenge is to continuously monitor the components (both client-side and server-side) you are using for new vulnerability reports.
    * This monitoring can be very difficult because vulnerability reports are not standardized
    * making them hard to find and search for the details you need
    * (e.g., the exact component in a product family that has the vulnerability.
    * Worst of all, many vulnerabilities never get reported to central clearinghouses like [CVE](http://cve.mitre.org/) and [NVD](https://nvd.nist.gov/home).
    * Node.js has [Snyk](https://github.com/Snyk/)
* Determining if you are vulnerable requires searching these databases, as well as keeping abreast of project mailing lists and announcements for anything that might be a vulnerability.
    * This process can be done manually, or with automated tools.
    * If a vulnerability in a component is discovered, carefully evaluate whether you are actually vulnerable.
    * Check to see if your code uses the vulnerable part of the component and whether the flaw could result in an impact you care about.
    * Both checks can be difficult to perform as vulnerability reports can be deliberately vague.

## Preventing Vulnerability

* Most component projects do not create vulnerability patches for old versions.
    * So the only way to fix the problem is to upgrade to the next version, which can require other code changes.
    * Software projects should have a process in place to:
        * Continuously inventory the versions of both client-side and server-side components and their dependencies using tools like versions, DependencyCheck, retire.js, etc.
        * Continuously monitor sources like NVD for vulnerabilities in your components.
        * Use software composition analysis tools to automate the process.
    * Analyze libraries to be sure they are actually invoked at runtime before making changes, as the majority of components are never loaded or invoked.
    * Decide whether to upgrade component (and rewrite application to match if needed) or deploy a virtual patch that analyzes HTTP traffic, data flow, or code execution and prevents vulnerabilities from being exploited

## Example Attack Scenarios

* Components almost always run with the full privilege of the application, so flaws in any component can result in serious impact.
* Such flaws can be accidental (e.g., coding error) or intentional (e.g., backdoor in component).
* Some example exploitable component vulnerabilities discovered are:
    * [Apache CXF Authentication Bypass](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2012-3451)
    * By failing to provide an identity token, attackers could invoke any web service with full permission.
    * (Apache CXF is a services framework, not to be confused with the Apache Application Server.)
    * [Struts 2 Remote Code Execution](https://nvd.nist.gov/vuln/detail/CVE-2017-5638)
        * Sending an attack in the Content-Type header causes the content of that header to be evaluated as an OGNL expression, which enables execution of arbitrary code on the server.
    * Applications using a vulnerable version of either component are susceptible to attack as both components are directly accessible by application users.
    * Other vulnerable libraries, used deeper in an application, may be harder to exploit.

## References

[OWASP Dependency Check](https://www.owasp.org/index.php/OWASP_Dependency_Check)

[Virtual Patching Best Practices](https://www.owasp.org/index.php/Virtual_Patching_Best_Practices)
