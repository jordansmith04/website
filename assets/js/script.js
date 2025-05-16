//Constants
const email = 'Jordan.asmith04@gmail.com';
const github = 'https://github.com/jordansmith04';
const linked_in = 'https://www.linkedin.com/in/jordan-asmith';
const resume_name = 'Jordan Smith Resume.pdf';

const employmentHistory = [
    { id: 2, 
        title: 'Senior Cloud Engineer', 
        company: 'Peraton', 
        years: '2023 - Current', 
        description: 'Remediate infrastructure pain points, improve processes, and decrease cloud costs',
        project: 'Million Veterans Program' , 
        impact:[
            'Spearheading cloud infrastructure and CI/CD pipeline optimization, cutting cloud costs by 50% and reducing deployment time by 80%',
            'Developing custom applications to monitor infrastructure and application performance.',
            'Identifying performance bottlenecks and leading initiatives to enhance reliability.',
            'Backing up and converting all manually created infrastructure into code.',
            'Enforcing DevOps best practices and code quality.',
            'Focusing on the increasing modularity and reusability of all infrastructure.'
        ] },
    { id: 3, 
        title: 'Backend / Platform Engineer', 
        company: 'Charter Communications', 
        years: '2021 - 2022', 
        description: 'Developing CI/CD for and enhancing software supporting the creation, management and cancellation of service appointments.',
        project: 'Service appointments and equipment management', 
        impact:[
            'Senior code reviewer and defacto lead of our team.',
            'Developed and maintained CI/CD pipelines to Dockerize the application and deploy to Kubernetes clusters in multiple environments.',
            'Produced human-readable, best-practice, modularized code that filfulled the requirements; contributing to future code maintainability.',
            'Designed and implemented large-scale application refactors to improve reliability and development speed.',
            'Discovered and fixed hard to find bugs causing issues between services and a negative user experience',
            "Remediated code dependency vulnerabilies and implemented secure coding practices across all services.",
            'Provided expertise to other teams on infrastructure and development.'
        ]  },
    { id: 4, 
        title: 'Backend Engineer',
        company: 'ICON Plc', 
        years: '2019 - 2021', 
        description: 'Increasing maintainability and usability of the Clinical Trial Management System',
        project: 'Clinical Trial Management System', 
        impact:[
            'Refined vague customer requirements into actionable and concise Jira tickets',
            'Enforced a stringent code review and increased application code clarity',
            'Developed key functionality of the application',
            'Streamlined CI/CD testing and release processes which aided in decreasing development time',
            'Collaborated as part of a high functioning scrum team',
        ]  },
    { id: 5, title: 'Automation and Performance Engineer', 
        company: 'Comcast', 
        years: '2018 - 2019',
        description: 'Developed automation to test a proof-of-concept unified chatbot using Natural Language Processing, ' + 
        'translated to over 20 languages', 
        project: 'Unified Chatbot', 
        impact: ['Architected and coded a user-interface and infrastructure testing framework for use across the company, ' +
            'reducing cloud costs by 20% and discovering many areas needing optimization.',
            'Lead a team of four test engineers to develop comprehensive testing suites covering all languages and functionalities.',
            'Created CI/CD pipelines to automate testing during the deployment process, increasing reliability and reducing overall bugs.',
            'Maintained and documented tests for all features and supported languages'
        ]}
];

// Used on the résumé to make the employment history interactive (each job is clickable)
document.addEventListener('DOMContentLoaded', function () {
    // Placeholder array with employment history data
    const timeline = document.getElementById('timeline');

    // Create timeline entries
    employmentHistory.forEach(job => {
        // Entry container for job
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        // Title header for job
        const header = document.createElement('h4');
        header.className = 'entry-header';
        header.innerText = job.title;

        // Content container for job, initially hidden
        const content = document.createElement('div');
        content.className = 'entry-content';
        let impact_list = '';
        job.impact.forEach(item => {
            impact_list += `<li>${item}</li>`
        });
        content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <strong>Project:</strong> ${job.project}<br>
                             <strong>Description:</strong><br> 
                             <p>${job.description}</p>
                             <strong>Impact:</strong>
                             <ul>${impact_list}</ul>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown) {
                // If it was not shown before, display it
                content.style.display = 'block';
                entry.classList.add('active');
            } // If it was shown, it will be hidden as part of the above loop
        });

        timeline.appendChild(entry);
    });

    //Update email text
    document.getElementById('email_text').textContent=email;

    //Add resume path to resume download
    let resume_link = document.getElementById('resume');
    let resume_href = 'assets/'.concat(resume_name);
    resume_link.setAttribute('href', resume_href);

    //Add email to submit email href
    let email_link = document.getElementById('email-link');
    let href = email_link.getAttribute('href').concat(email);
    email_link.setAttribute('href', href);

    //Add Github link
    let github_link = document.getElementById('github-link');
    github_link.setAttribute('href', github);

    //Add LinkedIn link
    let linked_link = document.getElementById('linkedin-link');
    linked_link.setAttribute('href', linked_in);
});