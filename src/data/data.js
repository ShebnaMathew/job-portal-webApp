/** MOCK DATA - file to be removed in production */
const PYTHON = "Python"
const JAVA = "Java"
const JAVASCRIPT = "Javascript"
const C_SHARP = "C#"
const C = "C"
const MYSQL = "MySQL"

const users = [
    {
        username: "newuser",
        password: "newuser",
        firstname: "NewUser",
        lastname: "",
        onboardingComplete: false,
        search: [],
        listings: [],
        saved: [],
        popularity: []
    },
    {
        username: "expert",
        password: "expert",
        firstname: "Expert",
        lastname: "",
        onboardingComplete: true,
        search: [],
        listings: [],
        popularity: [],
        saved: [
            {
                id: "1",
                type: "Contract",
                url: "job_url",
                created_at: "Wed Mar 17 01:55:17 UTC 2021",
                company: "Art+Logic",
                location: "United States and Canada",
                title: "Senior Full Stack Web Developer (remote US and Canada)",
                description: "<p><strong>Job description</strong></p>\n<p>Art+Logic is looking for Senior Full Stack Web Developers to work with us on interesting custom software projects. We’ve been around since 1991, and we’re still going strong.</p>\n<p>Our ideal developers thrive in the environment of variety and challenge that is inherent to custom software development, working with us in a long-term relationship over many projects for numerous clients.</p>\n<p>Since we do custom software development, the skills and needs for each project can vary widely. This goes beyond just the languages we use, to the industries and problem domains we work in. We look for generalists; most importantly those who are excited to learn and take on new challenges. You can expect to grow both in your strength and your versatility when working here. We want to help you do so.</p>\n<p>We work remotely all over the United States and Canada. We expect you to be able to work well on your own and comfortably with teams. You won’t have someone looking over your shoulder so you'll need to be communicative and reliable, and hold yourself accountable. We depend on each other.</p>\n<p>Art+Logic is run by humans, who work and create using technology. Things can go wrong and we need to respond to the unexpected by being kind, considerate, fair, flexible, and calm. We treat our clients and peers as respectfully as we would like to be treated.</p>\n<p>Here’s an example of some projects we’ve worked on recently, so you can better understand the wide range of projects and challenges we undertake:</p>\n<ul>\n<li>Implementing a Django-based DoD CAC card login</li>\n<li>Writing a data model layer using SQLAlchemy to provide an object-oriented view of a legacy relational database schema. This model layer provides all business rules and data integrity using advanced python3 features. This data model in turn serves a REST API (python-pyramid) consumed by an advanced single-page web application written with Marionette (Backbone)</li>\n<li>Created Windows tablet application to communicate with client's modbus hardware and upload data to Python/Django/Vue webapp for analysis and display</li>\n</ul>\n<p><strong>What we want from you: (aka: skills)</strong></p>\n<p>We currently have a high demand for Python, specifically Django, and JavaScript web framework experience.</p>\n<p>However, more important than that, we are looking for people who are curious and looking for opportunities to learn. People who like learning and creating on their own. Those who are able to drive themselves or even lead others when completing projects. Developers who are able to organize and express their ideas. Communication is paramount here.</p>\n<p><strong>Relationship Details:</strong></p>\n<p>We are looking for Contractors (1099) for long term open-ended relationships. Work hours are flexible; requiring reasonable overlap with normal working hours to support team communications, and not just nights and weekends. Our rates range from $35-$55/hour. We are ONLY looking for people in the United States and Canada.</p>\n<p>We want you to enjoy working for us, and to be able to have a life outside of work. Since you're not commuting you can embrace the freedom of working from where you enjoy living, and use the saved time for your personal life and relationships. We don’t ask our developers to work consistently over 40 hours/week.</p>\n<p>It’s important to us in the hiring process that we allow developers to demonstrate their abilities by actually developing something, because a list of previous employers or educational background aren’t always indicators of what someone can do. All applicants are asked to submit a solution to a programming challenge that emulates a task we might assign on a project.</p>\n<p><strong>About Art &amp; Logic, Inc.</strong></p>\n<ul>\n<li>\n<a href=\"http://artandlogic.com/blog\">http://artandlogic.com/blog</a> (it's a tech blog, not a \"company\" blog)</li>\n<li><a href=\"http://www.facebook.com/artandlogic\">www.facebook.com/artandlogic</a></li>\n<li><a href=\"https://artandlogic.com/careers\">https://artandlogic.com/careers</a></li>\n<li>Visit our Twitter @artandlogic</li>\n</ul>\n",
                languages: [PYTHON]
            },
            {
                id: "7",
                type: "Full Time",
                url: "https://jobs.github.com/positions/afb5f880-8368-4d6b-9904-082b56da6772",
                created_at: "Fri Mar 12 14:19:00 UTC 2021",
                company: "Smart Pricer GmbH ",
                location: "Berlin ",
                title: "Backend Developer - (m/f/d)",
                description: "<p>Smart Pricer is the leading ticket pricing company in Europe. We offer pricing services in the areas of sports, entertainment and ski resorts and are proud to work with partners such as FC Bayern Munich, DFB, Hertha BSC, Sölden ski resort, Zermatt Bergbahnen and many more. Our work is characterized by entrepreneurial thinking, effective transaction management and innovative solutions. We owe our success as one of the world's leading specialists in our field not least to a distinctly team-oriented approach.</p>\n<p>Together we want to grow further and are therefore looking for a</p>\n<p>Backend Developer - (m/f/d)</p>\n<p>to support us as soon as possible.</p>\n<p>With us, you are part of a committed and motivated team that rethinks the way pricing is done with a lot of enthusiasm and drive from Berlin. If you want to take on responsibility from day one and drive our mission forward with your own ideas, then your application is just right with us.</p>\n<p>Your Responsibilities:</p>\n<ul>\n<li>Within the first three months, you will familiarize yourself with our existing services (you have access to documentations and team members)</li>\n<li>You will lead and own the development of our back-end pricing services incl. the design and deployment of APIs to run our services</li>\n<li>Your responsibilities will range - from rapidly building prototypes in product discovery phase, to delivering reliable quality products in delivery phase, to developing our tech architecture further ensuring functionality, scalability, reliability and security (a hands-on mind-set and strategic oversight are essential for this)</li>\n<li>You will define the technical requirements of the company in detail and set up all required processes</li>\n<li>In 6-9 month time you will start to build and manage a small technical team of A-players (including software engineers, data scientists)</li>\n<li>Together with the founders you and your team will continuously iterate our product by developing hypotheses, validating them (e.g. through user research and tests) and shipping new features</li>\n<li>You own the operative KPIs tech and will be the voice of tech in all strategic decisions</li>\n<li>You oversee the monitoring of our live pricing services</li>\n</ul>\n<p>Requirements:</p>\n<ul>\n<li>Software Developer with a degree in a technical related field such as Computer Science, Bio/Informations or similar</li>\n<li>You have at least 3 years experience working in Software Development</li>\n<li>You are skilled in several backend languages (Go, Ruby) and in working with and deploying cloud services in a Unix environment</li>\n<li>Optionally you have some frontend experience in TypeScript and CoffeeScript as well as some data analytics background in Python</li>\n<li>You combine a strong hands-on-attitude (and are happy to develop and maintain code yourself) with strategic thinking and an entrepreneurial mindset</li>\n<li>You have a high focus on customer needs and contribute your best knowledge and experience about technology, products and processes</li>\n<li>You are interested in pricing, data mining, ML</li>\n<li>You are characterized by a sovereign appearance as well as good presentation and communication skills</li>\n<li>You are fluent in English and German</li>\n</ul>\n<p>What We Offer:</p>\n<ul>\n<li>A friendly and respectful team with a family work culture</li>\n<li>A great workplace in Berlin Mitte with a part-time remote work option</li>\n<li>The chance to take over a large area of expertise very quickly and to make a steep entry into a management position</li>\n<li>An attractive compensation package</li>\n<li>Flexible working hours</li>\n<li>A secure employment relationship</li>\n<li>Meaning - our work has direct impact on sports and entertainment pricing across all of Europe</li>\n</ul>\n",
                languages: [PYTHON, JAVA]
            },
            {
                id: "5",
                type: "Full Time",
                url: "https://jobs.github.com/positions/2bbd8791-4e73-42b8-a311-ae726c942c75",
                created_at: "Mon Mar 15 17:25:59 UTC 2021",
                company: "Marketcircle",
                location: "US- Remote",
                title: "Sr. Backend Developer",
                description: "<p>Want to work remotely? Want to make an impact by working for a small company that values autonomy and working collaboratively in a team to solve challenging problems? Love learning new technology? Then you'll fit right into the Marketcircle Team!</p>\n<p>Marketcircle is looking for some Sr. Backend Software Developers. Join as a key member of our team responsible for building and supporting the services and infrastructure for the Daylite CRM Platform.</p>\n<p><strong>Qualified candidates:</strong></p>\n<ul>\n<li>\n<p>Have 8+ years of experience</p>\n</li>\n<li>\n<p>Hold a B.Sc Computer Science or B.Eng Software, or equivalent work experience.</p>\n</li>\n<li>\n<p>Experienced using Postgres, Rails (Ruby), Django (Python), Kubernetes, nginx, Redis, Kafka,</p>\n</li>\n<li>\n<p>HashiCorp Suite, Graylog, Sinatra, Prometheus, istio, grafana, CalDAV &amp; CardDav, AWS, and Elasticsearch</p>\n</li>\n<li>\n<p>Are comfortable working remotely (100% remote work environment) as well as being comfortable working both independently and collaboratively.</p>\n</li>\n</ul>\n<p><strong>Bonus points for:</strong></p>\n<ul>\n<li>\n<p>Experience with infrastructure management tools (like Puppet, Ansible or Chef)</p>\n</li>\n<li>\n<p>Experience with cloud infrastructure providers (like AWS, Google Cloud, Microsoft Azure or DigitalOcean)</p>\n</li>\n<li>\n<p>Knowing your way around the network stack, from HTTP to TCP to IP and have a solid understanding\nof security (TLS/ IPSec/Firewalls)</p>\n</li>\n</ul>\n<p><strong>Things you might be working on:</strong></p>\n<ul>\n<li>\n<p>RESTful interfaces to persist data for our client apps</p>\n</li>\n<li>\n<p>Authentication and payment backends</p>\n</li>\n<li>\n<p>PostgreSQL database(s) with custom extensions</p>\n</li>\n<li>\n<p>Elasticsearch indexing and search</p>\n</li>\n</ul>\n<p>Note: there will be occasional on-call duties.</p>\n<p>Marketcircle Inc. is a fun and distributed tech company. We believe in the power of Kaizen, teamwork, creativity, ownership, and empathy. By embodying these core values we know we impact the lives of our customers, and each other.</p>\n<p>Our mission is to empower small business worldwide which drives us to develop a native macOS and iOS app that helps thousands create organization of what would otherwise be chaos.</p>\n",
                languages: [JAVASCRIPT]
            }
        ]
    }
]


const jobs = [
    {
        id: "1",
        type: "Contract",
        url: "job_url",
        created_at: "Wed Mar 17 01:55:17 UTC 2021",
        company: "Art+Logic",
        location: "United States and Canada",
        title: "Senior Full Stack Web Developer (remote US and Canada)",
        description: "<p><strong>Job description</strong></p>\n<p>Art+Logic is looking for Senior Full Stack Web Developers to work with us on interesting custom software projects. We’ve been around since 1991, and we’re still going strong.</p>\n<p>Our ideal developers thrive in the environment of variety and challenge that is inherent to custom software development, working with us in a long-term relationship over many projects for numerous clients.</p>\n<p>Since we do custom software development, the skills and needs for each project can vary widely. This goes beyond just the languages we use, to the industries and problem domains we work in. We look for generalists; most importantly those who are excited to learn and take on new challenges. You can expect to grow both in your strength and your versatility when working here. We want to help you do so.</p>\n<p>We work remotely all over the United States and Canada. We expect you to be able to work well on your own and comfortably with teams. You won’t have someone looking over your shoulder so you'll need to be communicative and reliable, and hold yourself accountable. We depend on each other.</p>\n<p>Art+Logic is run by humans, who work and create using technology. Things can go wrong and we need to respond to the unexpected by being kind, considerate, fair, flexible, and calm. We treat our clients and peers as respectfully as we would like to be treated.</p>\n<p>Here’s an example of some projects we’ve worked on recently, so you can better understand the wide range of projects and challenges we undertake:</p>\n<ul>\n<li>Implementing a Django-based DoD CAC card login</li>\n<li>Writing a data model layer using SQLAlchemy to provide an object-oriented view of a legacy relational database schema. This model layer provides all business rules and data integrity using advanced python3 features. This data model in turn serves a REST API (python-pyramid) consumed by an advanced single-page web application written with Marionette (Backbone)</li>\n<li>Created Windows tablet application to communicate with client's modbus hardware and upload data to Python/Django/Vue webapp for analysis and display</li>\n</ul>\n<p><strong>What we want from you: (aka: skills)</strong></p>\n<p>We currently have a high demand for Python, specifically Django, and JavaScript web framework experience.</p>\n<p>However, more important than that, we are looking for people who are curious and looking for opportunities to learn. People who like learning and creating on their own. Those who are able to drive themselves or even lead others when completing projects. Developers who are able to organize and express their ideas. Communication is paramount here.</p>\n<p><strong>Relationship Details:</strong></p>\n<p>We are looking for Contractors (1099) for long term open-ended relationships. Work hours are flexible; requiring reasonable overlap with normal working hours to support team communications, and not just nights and weekends. Our rates range from $35-$55/hour. We are ONLY looking for people in the United States and Canada.</p>\n<p>We want you to enjoy working for us, and to be able to have a life outside of work. Since you're not commuting you can embrace the freedom of working from where you enjoy living, and use the saved time for your personal life and relationships. We don’t ask our developers to work consistently over 40 hours/week.</p>\n<p>It’s important to us in the hiring process that we allow developers to demonstrate their abilities by actually developing something, because a list of previous employers or educational background aren’t always indicators of what someone can do. All applicants are asked to submit a solution to a programming challenge that emulates a task we might assign on a project.</p>\n<p><strong>About Art &amp; Logic, Inc.</strong></p>\n<ul>\n<li>\n<a href=\"http://artandlogic.com/blog\">http://artandlogic.com/blog</a> (it's a tech blog, not a \"company\" blog)</li>\n<li><a href=\"http://www.facebook.com/artandlogic\">www.facebook.com/artandlogic</a></li>\n<li><a href=\"https://artandlogic.com/careers\">https://artandlogic.com/careers</a></li>\n<li>Visit our Twitter @artandlogic</li>\n</ul>\n",
        languages: [PYTHON]
    },
    {
        id: "2",
        type: "Full Time",
        url: "https://jobs.github.com/positions/dc150b02-4978-47da-998d-caf0bc6ed6e9",
        created_at: "Tue Mar 16 20:06:19 UTC 2021",
        company: "Fred Hutchinson Cancer Research Center",
        location: "Seattle, WA",
        title: "Scientific Computing Manager",
        description: "<p>Cures Start Here. At Fred Hutchinson Cancer Research Center, home to three Nobel laureates, interdisciplinary teams of world-renowned scientists seek new and innovative ways to prevent, diagnose and treat cancer, HIV/AIDS and other life-threatening diseases. Fred Hutch’s pioneering work in bone marrow transplantation led to the development of immunotherapy, which harnesses the power of the immune system to treat cancer. An independent, nonprofit research institute based in Seattle, Fred Hutch houses the nation’s first cancer prevention research program, as well as the clinical coordinating center of the Women’s Health Initiative and the international headquarters of the HIV Vaccine Trials Network. Careers Start Here.</p>\n<p>At Fred Hutch, we believe that the innovation, collaboration, and rigor that result from diversity and inclusion are critical to our mission of eliminating cancer and related diseases. We seek employees who bring different and innovative ways of seeing the world and solving problems. Fred Hutch is in pursuit of becoming an antiracist organization. We are committed to ensuring that all candidates hired share our commitment to diversity, antiracism, and inclusion.</p>\n<p>The Scientific Computing team is a department within Information Technology with a vision to enable researchers to leverage all possible data in the effort to eliminate disease by driving the development of high performance computing infrastructure and solutions, data storage and management solutions, and data science capabilities through strategic partnering and robust engineering, thereby establishing Fred Hutch as a recognized center of excellence in biomedical data science. Your work will assist hundreds of investigators and their research staff in finding cures and eliminating related diseases. The Scientific Computing team, within the Information Technology department, is looking for an engineering manager who is a hands-on team leader with a strong technology background. As a group, we treat each other with respect, work collaboratively, maintain open communication, focus on our supporting our research community, and challenge ourselves and each other to grow, try new things and take risks. If this sounds like your kind of culture and team, we cordially invite you to apply for this exciting role.</p>\n<p>Responsibilities\nThe Scientific Computing Manager will direct and oversee all facets of scientific computing including managing a highly capable engineer team, engineering functions such as design, development, installation, and maintenance of hardware and software, and customer service and support, for the organization. The manager will partner with faculty and stakeholders in the scientific community to test and integrate new analysis pipelines, determine innovative technologies and software to support their research, evangelize new and current solutions, and foster technology and data storage best practices. The manager will participate in strategic planning and align projects and resources for implementation in partnership with the Project Management Office and Business Operations, and other departments.</p>\n<p>Job duties:</p>\n<ul>\n<li>Manage the day-to-day operations of the team, ensuring that engineers have what they need to run a world-class HPC and storage environment</li>\n<li>Provide leadership, coaching, and ongoing career growth and development for talent management</li>\n<li>Partner with the Project Management Office to manage a portfolio of infrastructure projects, balance operational and project commitments, ensure resource availability and allocation to meet operational and project commitments</li>\n<li>Drive innovation and continuous improvement processes</li>\n<li>Optimize processes and manage technical debt to reduce the team's operational burden</li>\n<li>Support of faculty needs and requirements by way of partnership, evangelism, and as a trusted advisor</li>\n<li>Lead and co-chairing the Scientific Computing oversight committee</li>\n<li>Drive documentation efforts to improve the experience of computational researchers of Fred Hutch</li>\n<li>Ensure the success of all Scientific Computing initiatives</li>\n</ul>\n<p>Minimum qualifications:</p>\n<ul>\n<li>5+ years experience in a technical leadership position and/or managing a technical team</li>\n<li>10+ years systems engineering experience (hardware, software, and best practices) managing Linux systems, storage, and cloud infrastructure</li>\n<li>Strong understanding and demonstrated leadership of technology operations and operational excellence best practices including tickets and ticket management systems, systems monitoring, infrastructure management, KPIs and metrics</li>\n<li>Expert troubleshooting and complex problem-solving skills such as Linux performance troubleshooting</li>\n<li>Strong communication, facilitation, and presentation skills at all levels and audiences</li>\n<li>Experience with gathering and documenting analytic/reporting requirements</li>\n<li>Hands-on experience or knowledge of AWS, GCP, or Azure services preferred\n-Work experience in research, grant-funded, or academic settings (including grant writing) preferred</li>\n</ul>\n<p>Familiarity of or experience with any or all of the following is a plus:</p>\n<ul>\n<li>HPC workload managers and schedulers (e.g., Slurm, Moab, Torque, SGE)</li>\n<li>Storage systems and management: NAS, NFS, SMB, POSIX, NTFS, ZFS, and Object Storage (S3)</li>\n<li>Virtualization/Containerization: VMware, KVM, EC2, Docker, Singularity, LXC, Kubernetes</li>\n<li>Workflow engines: Cromwell, Nextflow, Luigi, Airflow, CWL/WDL</li>\n<li>Scripting experience: Bash, Python, or R</li>\n<li>Source code management: Git, GitHub, GitLab, CI/CD</li>\n<li>Configuration management, infrastructure as code: Chef, Ansible and Terraform</li>\n</ul>\n<p>A statement describing your commitment and contributions toward greater diversity, equity, inclusion, and anti-racism in your career or that will be made through work at Fred Hutch is requested of all finalists.</p>\n<p>Our Commitment to Diversity\nWe are proud to be an Equal Employment Opportunity (EEO) and Vietnam Era Veterans Readjustment Assistance Act (VEVRAA) Employer. We are committed to cultivating a workplace in which diverse perspectives and experiences are welcomed and respected. We do not discriminate on the basis of race, color, religion, creed, ancestry, national origin, sex, age, disability (physical or mental), marital or veteran status, genetic information, sexual orientation, gender identity, political ideology, or membership in any other legally protected class. We are an Affirmative Action employer. We encourage individuals with diverse backgrounds to apply and desire priority referrals of protected veterans. If due to a disability you need assistance/and or a reasonable accommodation during the application or recruiting process, please send a request to our Employee Services Center at <a href=\"mailto:hrops@fredhutch.org\">hrops@fredhutch.org</a> or by calling 206-667-4700.</p>\n",
        languages: [JAVA]
        },
    {
        id: "3",
        type: "Full Time",
        url: "https://jobs.github.com/positions/d2805568-a0d3-4dfe-8679-12e0b2dcb7c5",
        created_at: "Tue Mar 16 16:50:06 UTC 2021",
        company: "Otter.ai",
        location: "Los Altos, CA",
        title: "Senior DevOps Engineer",
        description: "<p><strong>About Otter.ai</strong></p>\n<p>Join us at Otter.ai in transforming the way remote teams work and communicate.  Our AI-powered collaborative note-taking app works across Zoom, Google Meet, and Microsoft Teams to help teams record, transcribe, search and share meeting notes.  In addition, we are making virtual meetings accessible to all employees - allowing team members with disabilities to participate in a world that is now dominated by virtual meetings.</p>\n<p>With over 10M users experiencing Otter.ai, we are making an impact at scale and we are growing fast.  Our team is made up of top talent from companies like Google, Facebook, Yahoo!, Microsoft, Pinterest, Spotify, and Plaid.  We are backed by leading investors that include David Cheriton (Google’s first investor), Tim Draper (Draper Associates), Spectrum Equity, Horizons Ventures, GGV Capital, and Duke University.</p>\n<p><strong>What you will work on:</strong></p>\n<ul>\n<li>Automate the deployment process, continuous integration, and testing</li>\n<li>Maintain and manage data infrastructure such as MySQL, Elasticsearch, Redis, Kafka</li>\n<li>Design and implement monitoring systems such as Prometheus and Grafana</li>\n<li>Optimize Linux systems for performance, reliability, and security</li>\n<li>Perform security checks and vulnerability scans and apply security practice</li>\n<li>Configuration management </li>\n<li>Build occasional product features as appropriate</li>\n<li>Dig into logs and monitoring data to find the root of a problem</li>\n</ul>\n<p><strong>Who you are:</strong></p>\n<ul>\n<li>5+ years of relevant technical experience, including significant experience with site reliability, DevOps, or server infrastructure engineering.</li>\n<li>Bachelor's in CS or EE (MS preferred)</li>\n<li>Familiar with AWS</li>\n<li>Familiar with Python and Django</li>\n<li>Familiar with MySQL, Redis, Elastic Search, Kafka</li>\n<li>Experience architecting, developing, and troubleshooting large scale systems</li>\n<li>Experience with data structures and Linux systems internals (e.g., filesystems, system calls) and administration</li>\n<li>Knowledge in containers and orchestration using Kubernetes</li>\n<li>Experience with CI using platforms such as Jenkins</li>\n<li>Familiar with monitoring systems such as Prometheus, Grafana</li>\n<li>Experience with Salt and Ansible</li>\n</ul>\n<p><strong>Employee Benefits:</strong></p>\n<ul>\n<li>Stock. Be a [literal] stakeholder in our company’s future.</li>\n<li>Food. Enjoy catered meals and boundless snacks.</li>\n<li>Fun. We host team lunches weekly and team events bi-quarterly.</li>\n<li>People. Work with talented, collaborative, and friendly people who love what they do.</li>\n<li>Health and Saving. Receive the benefits of comprehensive health, dental, vision and disability insurance.</li>\n</ul>\n<p> </p>\n<p> </p>\n<p><em>Otter.ai is an equal opportunity employer. We proudly celebrate diversity and are dedicated to inclusivity.</em></p>\n<p><em>Please note: Otter.ai does not accept unsolicited resumes from 3rd party recruitment agencies without a written agreement in place for permanent placements. Any resume or other candidate information submitted outside of established candidate submission guidelines (including through our website or via email to any Otter.ai employee) and without a written agreement otherwise will be deemed to be our sole property, and no fee will be paid should we hire the candidate.</em></p>\n",
        languages: [C]
        },
    {
        id: "4",
        type: "Full Time",
        url: "https://jobs.github.com/positions/b135933d-b40e-434c-8455-bf542107415b",
        created_at: "Tue Mar 16 16:45:43 UTC 2021",
        company: "Otter.Ai",
        location: "Los Altos, CA",
        title: "Senior Backend Engineer",
        description: "<p><strong>About Otter.ai:</strong></p>\n<p>Join us at Otter.ai in transforming the way remote teams work and communicate. Our AI-powered collaborative note-taking app works across Zoom, Google Meet, and Microsoft Teams to help teams record, transcribe, search and share meeting notes.  In addition, we are making virtual meetings accessible to all employees - allowing team members with disabilities to participate in a world that is now dominated by virtual meetings.i</p>\n<p>With over 10M users experiencing Otter.ai, we are making an impact at scale and we are growing fast.  Our team is made up of top talent from companies like Google, Facebook, Yahoo!, Microsoft, Pinterest, Spotify, and Plaid.  We are backed by leading investors that include David Cheriton (Google’s first investor), Tim Draper (Draper Associates), Spectrum Equity, Horizons Ventures, GGV Capital, and Duke University.</p>\n<p><strong>About this role:</strong></p>\n<p>We are seeking an experienced <strong>Senior Backend Engineer</strong> to help lead the development, deployment and management of our web services and related infrastructure to join our engineering team. Members of the engineering team work collaboratively as a group and with colleagues in technology, who are devising new speech recognition solutions, and product management to deploy systems and infrastructure to serve the needs of end-user professionals and enterprise clients across a number of verticals.</p>\n<p><strong>Need to Have:</strong></p>\n<ul>\n<li>BS/MS in Computer Science (or EE) from a top school, or have substantial production server experience (or equivalent)</li>\n<li>At least 4+ years of experience in developing/architecting large scale systems </li>\n<li>Hands-on coding and development in Python and C++</li>\n<li>Strong proficiency in building business logic with Web Framework such as Django and MySQL</li>\n<li>Experience with platforms such as Nginx, Kafka, MySQL, Cassandra, Redis, and big data platforms</li>\n<li>Strong ability to write and debug code that is reusable, testable and efficient</li>\n<li>Ability to communicate effectively with peers in design, product management, technology, and engineering to respond to requirements and diagnose problems</li>\n</ul>\n<p><strong>Nice to Have:</strong> </p>\n<ul>\n<li>PhD in Distributed Systems or related fields (including architecture/infrastructure-related) </li>\n</ul>\n<p><strong>Employee Benefits:</strong></p>\n<ul>\n<li>Stock. Be a [literal] stakeholder in our company’s future.</li>\n<li>Food. Enjoy catered meals and boundless snacks.</li>\n<li>Fun. We host team lunches weekly and team events bi-quarterly.</li>\n<li>People. Work with talented, collaborative, and friendly people who love what they do.</li>\n<li>Health and Saving. Receive the benefits of comprehensive health, dental, vision and disability insurance.</li>\n</ul>\n<p><em>Otter.ai is an equal opportunity employer. We proudly celebrate diversity and are dedicated to inclusivity.</em></p>\n<p><em>Please note: Otter.ai does not accept unsolicited resumes from 3rd party recruitment agencies without a written agreement in place for permanent placements. Any resume or other candidate information submitted outside of established candidate submission guidelines (including through our website or via email to any Otter.ai employee) and without a written agreement otherwise will be deemed to be our sole property, and no fee will be paid should we hire the candidate.</em></p>\n",
        languages: [C_SHARP]
        },
    {
        id: "5",
        type: "Full Time",
        url: "https://jobs.github.com/positions/2bbd8791-4e73-42b8-a311-ae726c942c75",
        created_at: "Mon Mar 15 17:25:59 UTC 2021",
        company: "Marketcircle",
        location: "US- Remote",
        title: "Sr. Backend Developer",
        description: "<p>Want to work remotely? Want to make an impact by working for a small company that values autonomy and working collaboratively in a team to solve challenging problems? Love learning new technology? Then you'll fit right into the Marketcircle Team!</p>\n<p>Marketcircle is looking for some Sr. Backend Software Developers. Join as a key member of our team responsible for building and supporting the services and infrastructure for the Daylite CRM Platform.</p>\n<p><strong>Qualified candidates:</strong></p>\n<ul>\n<li>\n<p>Have 8+ years of experience</p>\n</li>\n<li>\n<p>Hold a B.Sc Computer Science or B.Eng Software, or equivalent work experience.</p>\n</li>\n<li>\n<p>Experienced using Postgres, Rails (Ruby), Django (Python), Kubernetes, nginx, Redis, Kafka,</p>\n</li>\n<li>\n<p>HashiCorp Suite, Graylog, Sinatra, Prometheus, istio, grafana, CalDAV &amp; CardDav, AWS, and Elasticsearch</p>\n</li>\n<li>\n<p>Are comfortable working remotely (100% remote work environment) as well as being comfortable working both independently and collaboratively.</p>\n</li>\n</ul>\n<p><strong>Bonus points for:</strong></p>\n<ul>\n<li>\n<p>Experience with infrastructure management tools (like Puppet, Ansible or Chef)</p>\n</li>\n<li>\n<p>Experience with cloud infrastructure providers (like AWS, Google Cloud, Microsoft Azure or DigitalOcean)</p>\n</li>\n<li>\n<p>Knowing your way around the network stack, from HTTP to TCP to IP and have a solid understanding\nof security (TLS/ IPSec/Firewalls)</p>\n</li>\n</ul>\n<p><strong>Things you might be working on:</strong></p>\n<ul>\n<li>\n<p>RESTful interfaces to persist data for our client apps</p>\n</li>\n<li>\n<p>Authentication and payment backends</p>\n</li>\n<li>\n<p>PostgreSQL database(s) with custom extensions</p>\n</li>\n<li>\n<p>Elasticsearch indexing and search</p>\n</li>\n</ul>\n<p>Note: there will be occasional on-call duties.</p>\n<p>Marketcircle Inc. is a fun and distributed tech company. We believe in the power of Kaizen, teamwork, creativity, ownership, and empathy. By embodying these core values we know we impact the lives of our customers, and each other.</p>\n<p>Our mission is to empower small business worldwide which drives us to develop a native macOS and iOS app that helps thousands create organization of what would otherwise be chaos.</p>\n",
        languages: [JAVASCRIPT]
        },
    {
        id: "6",
        type: "Full Time",
        url: "https://jobs.github.com/positions/c057b159-202c-4abb-b03e-7f4ee7856638",
        created_at: "Fri Mar 12 21:40:49 UTC 2021",
        company: "Versiti",
        location: "Indianapolis, IN",
        title: "Sr. Systems Analyst, Applications ",
        description: "<p>POSITION SUMMARY\nUnder the direction and guidance of the Director IT or Manager, this software development/systems professional is responsible for developing and/or supporting a broad range software of applications, integration solutions and systems for Versiti.\nDUTIES AND RESPONSIBILITIES</p>\n<ul>\n<li>Applies expertise in the technical architecture design, development, delivery and support of software application solutions and system interfaces to meet business requirements following departmental standards and best practices</li>\n<li>Develops reports and queries to aid business and service lines</li>\n<li>Performs and/or assists with required maintenance and upgrades of assigned systems/solutions</li>\n<li>Assists in the evaluation and selection of off-the-the shelf solutions and systems, as well as technologies, and plays a key role in implementation, integration, and maintenance of those systems and technologies.</li>\n<li>Establishes strong working and consultative relationships with business partner and users, vendors and internal staff</li>\n<li>Develops estimates for assigned work and manages time and work plans effectively to meet deadlines, provides routine updates to appropriate business and IS teams.</li>\n<li>Working with extended development team and management, assists in establishment of policies, processes, procedures and standards including coding standards, testing, etc.</li>\n<li>Assists peers in design and development efforts by being an active participant in code walkthroughs and design reviews</li>\n<li>Performs other duties as required.</li>\n</ul>\n<p>QUALIFICATIONS</p>\n<p>Education</p>\n<ul>\n<li>BS from an accredited institution; Computer Science, Software Engineering, Management Information Systems degree preferred; equivalent work experience may be considered</li>\n<li>ITIL foundation certification a definite plus</li>\n</ul>\n<p> \nExperience, Skills and Knowledge – Clinical and Research Systems and Software Development</p>\n<ul>\n<li>5-8 years of progressive responsibility and experience in application development and support, with at least 3 years of demonstrated systems analysis and design experience.</li>\n<li>Experience in laboratory, hospital, pharma or healthcare solutions and/or integrations a definite plus</li>\n<li>Demonstrated understanding and appreciation of structure software development and support lifecycle disciplines</li>\n<li>Experience working in a Regulated industry like healthcare, banking etc. with knowledge of privacy and compliance regulations such as HIPAA, GDPR preferred</li>\n<li>Good communication and listening skills, with an ability to translate business requests and requirements into proposed technical solutions</li>\n<li>Understands the need to balance technical solutions with practical business needs and short-term vs long-term approaches</li>\n<li>Strong collaborator and team player, with the ability to partner well with users, peers, internal and external/vendor partners and management</li>\n<li>Motivated, self-starter, self-directed, results-oriented</li>\n</ul>\n<p>Key Development Tools</p>\n<ul>\n<li>Database and report development: MS SQL Server and Oracle; SQL to develop queries, stored procedures, reports and analytics</li>\n<li>Reporting tools: Power BI, Business Objects</li>\n<li>CCL for Cerner</li>\n<li>Java, VBA and/or Python scripting</li>\n</ul>\n<p>Key Application Technologies and Environments in Use/Supported</p>\n<ul>\n<li>Cerner Laboratory</li>\n<li>Surround</li>\n<li>Oracle and MS SQL Server databases</li>\n<li>Operating systems: Unix/Linux and Windows</li>\n</ul>\n<p>PHYSICAL REQUIREMENTS &amp; WORKING CONDITIONS</p>\n<ul>\n<li>This role can require providing system support coverage during off hours.</li>\n</ul>\n<p>This job description reflects the current assignment of essential functions and is not meant to be all-inclusive or in any way construed as an employment contract.  Duties and responsibilities may be assigned or reassigned to this position at any time and may be modified to reasonably accommodate an individual with a disability or for other reasons solely at management’s discretion.  All position descriptions will be reviewed and updated at least once per year when the incumbent is reviewed or as attrition occurs</p>\n",
        languages: [MYSQL]
        },
    {
        id: "7",
        type: "Full Time",
        url: "https://jobs.github.com/positions/afb5f880-8368-4d6b-9904-082b56da6772",
        created_at: "Fri Mar 12 14:19:00 UTC 2021",
        company: "Smart Pricer GmbH ",
        location: "Berlin ",
        title: "Backend Developer - (m/f/d)",
        description: "<p>Smart Pricer is the leading ticket pricing company in Europe. We offer pricing services in the areas of sports, entertainment and ski resorts and are proud to work with partners such as FC Bayern Munich, DFB, Hertha BSC, Sölden ski resort, Zermatt Bergbahnen and many more. Our work is characterized by entrepreneurial thinking, effective transaction management and innovative solutions. We owe our success as one of the world's leading specialists in our field not least to a distinctly team-oriented approach.</p>\n<p>Together we want to grow further and are therefore looking for a</p>\n<p>Backend Developer - (m/f/d)</p>\n<p>to support us as soon as possible.</p>\n<p>With us, you are part of a committed and motivated team that rethinks the way pricing is done with a lot of enthusiasm and drive from Berlin. If you want to take on responsibility from day one and drive our mission forward with your own ideas, then your application is just right with us.</p>\n<p>Your Responsibilities:</p>\n<ul>\n<li>Within the first three months, you will familiarize yourself with our existing services (you have access to documentations and team members)</li>\n<li>You will lead and own the development of our back-end pricing services incl. the design and deployment of APIs to run our services</li>\n<li>Your responsibilities will range - from rapidly building prototypes in product discovery phase, to delivering reliable quality products in delivery phase, to developing our tech architecture further ensuring functionality, scalability, reliability and security (a hands-on mind-set and strategic oversight are essential for this)</li>\n<li>You will define the technical requirements of the company in detail and set up all required processes</li>\n<li>In 6-9 month time you will start to build and manage a small technical team of A-players (including software engineers, data scientists)</li>\n<li>Together with the founders you and your team will continuously iterate our product by developing hypotheses, validating them (e.g. through user research and tests) and shipping new features</li>\n<li>You own the operative KPIs tech and will be the voice of tech in all strategic decisions</li>\n<li>You oversee the monitoring of our live pricing services</li>\n</ul>\n<p>Requirements:</p>\n<ul>\n<li>Software Developer with a degree in a technical related field such as Computer Science, Bio/Informations or similar</li>\n<li>You have at least 3 years experience working in Software Development</li>\n<li>You are skilled in several backend languages (Go, Ruby) and in working with and deploying cloud services in a Unix environment</li>\n<li>Optionally you have some frontend experience in TypeScript and CoffeeScript as well as some data analytics background in Python</li>\n<li>You combine a strong hands-on-attitude (and are happy to develop and maintain code yourself) with strategic thinking and an entrepreneurial mindset</li>\n<li>You have a high focus on customer needs and contribute your best knowledge and experience about technology, products and processes</li>\n<li>You are interested in pricing, data mining, ML</li>\n<li>You are characterized by a sovereign appearance as well as good presentation and communication skills</li>\n<li>You are fluent in English and German</li>\n</ul>\n<p>What We Offer:</p>\n<ul>\n<li>A friendly and respectful team with a family work culture</li>\n<li>A great workplace in Berlin Mitte with a part-time remote work option</li>\n<li>The chance to take over a large area of expertise very quickly and to make a steep entry into a management position</li>\n<li>An attractive compensation package</li>\n<li>Flexible working hours</li>\n<li>A secure employment relationship</li>\n<li>Meaning - our work has direct impact on sports and entertainment pricing across all of Europe</li>\n</ul>\n",
        languages: [PYTHON, JAVA]
        },
    {
        id: "8",
        type: "Full Time",
        url: "https://jobs.github.com/positions/2a2a95ca-0c3d-4e37-8817-67dacefafa50",
        created_at: "Fri Mar 12 12:46:11 UTC 2021",
        company: "Invinity Energy Systems",
        location: "Vancouver",
        title: "Electronics Test Engineer",
        description: "<h2>Company Description</h2>\n<p>The Invinity team is growing rapidly, and we’re looking for people with a passion for renewable energy to join us at this remarkable point in our growth.</p>\n<p>We are an emerging global cleantech leader; well-funded with category-leading technology. Our culture is collaborative, entrepreneurial, and one in which speaking up is encouraged and ideas are chosen on merit not who they come from.</p>\n<p>People love working at Invinity because we know we are empowered to make a meaningful impact. We’re small enough that every team member plays a critical role in our daily business, but large enough that the batteries we build are being deployed at significant scale in landmark clean energy projects around the world.</p>\n<p>Whether you are a cleantech veteran or looking to make a career shift, Invinity offers you a chance to work as part of an expert team located across multiple geographies, aligned in our mission to build a sustainable energy future.</p>\n<p>Invinity is committed to providing equal opportunities in the workplace and follows a comprehensive Equal Opportunities Policy to ensure all employees are valued and can reach their full potential.</p>\n<h2>Job Description</h2>\n<p>As the world transitions to a renewable energy future, large-scale energy storage systems are required to bridge the gap between intervals of renewable energy production. Invinity Energy Systems, listed on the London Stock Exchange, is the leader in vanadium flow batteries, a proven technology addressing the global demand for energy storage.</p>\n<p>Invinity is seeking an Electronics Test Engineer to join its product development team. This role will work closely with the electronics design team to develop and conduct comprehensive verification test plans. You will be responsible for developing and maintaining the testing infrastructure and equipment necessary to verify robust designs and design the test methods. You will work closely with other teams to establish and conduct various integration tests and provide detailed reports back to design teams.</p>\n<p><strong>Responsibilities</strong></p>\n<ul>\n<li>Design, source, and build test electronic test equipment including complex electronic test benches.</li>\n<li>Work with electronics design team to create test plans and conduct tests.</li>\n<li>Support root cause analysis and troubleshooting of field failures of electronic\ncomponents.</li>\n<li>Engage with contract electronic designers, reviewing and auditing test plans.</li>\n<li>Support and conduct product certification testing, working with third-party testing labs to provide equipment.</li>\n</ul>\n<h2>Qualifications</h2>\n<ul>\n<li>5+ years experience testing and/or designing electronic systems and related components.</li>\n<li>Experience working with high voltage AC and DC electronic systems and related test equipment: power supplies, oscilloscopes, dataloggers, etc.</li>\n<li>Strong documentation skills, writing and reviewing test plans and reports.</li>\n<li>Experience working in a structured product development environment.</li>\n<li>Able to read and understand DFMEA and various design documentation.</li>\n<li>Experience working with contract design and development teams. Proficiency working hands-on with electronics and printed circuit board assemblies, capable of reworking through-hole and SMD components.</li>\n</ul>\n<p><strong>Desirable</strong></p>\n<ul>\n<li>Capable of developing interface software programming (LabVIEW, Python, other) to support use and automation of test equipment.</li>\n</ul>\n<h2>Additional Information</h2>\n<p>If the idea of building a world-class development team and helping the world transition to renewable energy is exciting to you. If being a part of a dynamic, global company where the team works with passion but not ego sounds appealing, Invinity may just be where you belong.</p>\n",
        languages: [PYTHON, JAVASCRIPT]
        },
    {
        id: "9",
        type: "Full Time",
        url: "https://jobs.github.com/positions/8a68aad7-c6ae-4b42-a56a-f187f1850207",
        created_at: "Fri Mar 12 11:55:39 UTC 2021",
        company: "ValueWorks GmbH",
        location: "Remote",
        title: "Front-end developer",
        description: "<p>ValueWorks is a management platform to help executives and managers make data-driven management decisions. We enable them to manage and measure the performance of their business by integrating the data from different information systems (JIRA, Salesforce, LinkedIn,) to build KPIs and OKRs.</p>\n<p>We are looking for a front-end developer to build and implement our user interface. You will work with our small team consisting of developers, founders and a UX designer. We provide an opportunity to become full-stack by teaching you python and django.</p>\n<p><strong>Tasks</strong></p>\n<ul>\n<li>Strong knowledge of HTML, CSS &amp; Javascript</li>\n<li>Vue.js and Vuex experience (alternatively React)</li>\n<li>Ability to build responsive, cross-browser user interfaces from design prototype</li>\n<li>Ability to create simple, intuitive web interfaces for complex features.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>No special qualification is needed. Just experience and talent.</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>Bootstrap experience</li>\n<li>Eagerness to become a full stack developer</li>\n<li>Experience working with relational databases</li>\n<li>We are looking forward to your application.</li>\n</ul>\n",
        languages: [JAVA,C_SHARP]
        },
    {
        id: "10",
        type: "Full Time",
        url: "https://jobs.github.com/positions/457c1b76-447a-4b55-b8a5-cb14fe08c626",
        created_at: "Fri Mar 12 10:24:17 UTC 2021",
        company: "Flexoptix GmbH",
        location: "Darmstadt",
        title: "Mobile Software Engineer, Senior",
        description: "<p>We’re looking to grow our product development team!</p>\n<p>Mobile Software Engineer, Senior</p>\n<p>For over twelve years Flexoptix has been a successful provider for transceiver solutions. With over 50 colleagues, we occupy a growing niche that we have successfully disrupted and defined through our unconventional approach.</p>\n<p>You will be part of our development team, not just limited to software development using the latest technologies, but also finding new challenges, as well as solutions for our company.</p>\n<p>We hope for your support with:</p>\n<ul>\n<li>Design of innovative software solutions</li>\n<li>Coding our apps</li>\n</ul>\n<p>What you bring to the table:</p>\n<ul>\n<li>Passion for software development; ideally you’d contribute to open-source projects</li>\n<li>A remote workplace, since we're on a pandemic remote working schedule</li>\n<li>The ability to work at the office in Darmstadt once the pandemic isn't a challenge anymore</li>\n<li>Willingness to shape our self-organizing team</li>\n<li>Skills in Swift and a great interest in SwiftUI and Apple design guidelines</li>\n<li>You want to get into Android development and can tell us if Kotlin is worth considering</li>\n<li>You’re a Linux Guru and know how to use a shell</li>\n<li>You already have experience with one or more of the following scripting languages: Lua,\nJavaScript, Python and Bash</li>\n<li>You are pleased that everything is committed through git and you would like to help us with the\ndocumentation in our Atlassian products</li>\n</ul>\n<p>What you can expect from us:\nWe’re a pragmatic bunch of cowboys who think outside the box, which helps us to find creative solutions for technical problems. We offer a lot of freedom as well as opportunities to Influence our processes, though with great power comes great responsibility. This freedom also includes the choice of tools and materials, as well as ways of personal development (conferences, workshops, teachings, webinars).</p>\n<p>Apply now! We’re looking forward to meeting you in person. 😷</p>\n",
        languages: [MYSQL,JAVASCRIPT]
        }
]

/** The purpose of the following functions is to mock operations on a real 
 * database. They should accept the same parameters and return the same output 
 * as real database functions.
 */
export const login = (username, password) => {
    for (let user in users) {
        if (username === users[user].username && password === users[user].password)
            return {
                id: user,
                firstname: users[user].firstname,
                onboardingComplete: users[user].onboardingComplete
            };
    }
    return {}
}

export const getPreferences = currentUser => {
    return users[currentUser].search;
}

export const getUserSavedListings = currentUser => {
    return users[currentUser].saved;
}

export const getListings = currentUser => {

    var search = users[currentUser].search
    var listings = []

    jobs.map((job, i) => {
        search.map((language,j) => {
            if (job.languages.includes(language) && !listings.includes(job)) {
                listings.push(job)
            }
        })
    })
    users[currentUser].listings = listings
    return listings
}

export const getUnsortedListings = currentUser => {
    return users[currentUser].listings
}

export const listingsByPopularity = currentUser => {

    const currentListings = users[currentUser].listings
    var listings = new Map()
    var frequency = new Map()
    var counts = []
    var popularity = []
    var currentSaved = []
    const unpopular = []

    jobs.map((job,i) => {
        listings.set(job.id,job)
    })

    users.map((user,i) => {
        user.saved.map((job,j) =>{
            currentSaved.push(job.id)
        })
    })

    currentSaved.map((id) => {
        if(frequency.has(id)) {
            frequency.set(id,frequency[id] + 1)
        } else {
            frequency.set(id, 1)
        }
    })

    var countToJob = new Map()
    for (let [key, value] of frequency) {
        
        if (!counts.includes(value)) {
            counts.push(value)
            }
            
        countToJob[value] = countToJob[value] ? [...countToJob[value],...[key]]:[key]
    }
    
    counts.sort()
    counts.map((count) => {
        countToJob[count].map((each) => {
            currentListings.map((current) => {
                if(each === current.id && !popularity.includes(listings.get(current.id))) {
                    popularity = [...popularity,listings.get(each)]
                } else if (!unpopular.includes(listings.get(current.id))) {
                    unpopular.push(listings.get(current.id))
                }
            })
        })
    })

    unpopular.map((job) => {
        if(!popularity.includes(job)){
            popularity = [...popularity,job]
    }  
    })
    users[currentUser].popularity = popularity
    return popularity
}

export const addPreferenceForUser = (currentUser, preference) => {
    users[currentUser].search = [...users[currentUser].search, preference]
    getListings(currentUser)
    return users[currentUser].listings;
}

export const removePreferenceForUser = (currentUser, preference) => {
    var idx = users[currentUser].search.indexOf(preference);
    users[currentUser].search.splice(idx, 1);
    getListings(currentUser)
    return users[currentUser].listings;
}

export const clearSearchForUser = (currentUser) => {
    users[currentUser].search = []
    users[currentUser].listings = []
    return {
        search: [],
        listings: []
    }
}

export const saveUserListing = (currentUser, listing) => {
    users[currentUser].saved = [...users[currentUser].saved, listing]
    return users[currentUser].saved;
}

export const userCompletedOnboarding = userId => {
    users[userId].onboardingComplete = true;
    return true;
}

export const userNotCompletedOnboarding = userId => {
    users[userId].onboardingComplete = false;
    return false;
}