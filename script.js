/* =====================================================
   COURSEDIY
   COURSE DATA + WEBSITE LOGIC
===================================================== */


/* =====================================================
   COURSE DATA

   Revenue ranking is used only for ordering.

   Revenue, ratings and student counts are NEVER
   displayed publicly.

   Clicking the course image, title, description or
   "Get Course" button opens the exact Udemy URL.
===================================================== */

const courses = [

    /* =================================================
       1
    ================================================= */

    {
        id: 1,

        title:
            "GitLab CI/CD Bootcamp | Zero to Hero",

        category:
            "DevOps",

        image:
            "images/course-01.svg",

        level:
            "Intermediate",

        description:
            "Master GitLab CI/CD with practical pipelines, automation, DevOps workflows and interview-focused learning.",

        url:
            "https://www.udemy.com/course/gitlab-devops-cicd-pipelines-zero-to-hero-job-ready-2024/?couponCode=JULY2026"
    },


    /* =================================================
       2
    ================================================= */

    {
        id: 2,

        title:
            "Jenkins CI/CD Bootcamp | 25+ Jenkinsfile Projects",

        category:
            "DevOps",

        image:
            "images/course-02.svg",

        level:
            "Intermediate",

        description:
            "Build real-world Jenkins CI/CD pipelines with practical Jenkinsfiles, projects and automation.",

        url:
            "https://www.udemy.com/course/jenkins-cicd-25-jenkinsfile-3-projects-interview-prep/?couponCode=JULY2026"
    },


    /* =================================================
       3
    ================================================= */

    {
        id: 3,

        title:
            "AWS Certified AI Practitioner",

        category:
            "AI",

        image:
            "images/course-03.svg",

        level:
            "Beginner",

        description:
            "Prepare for AWS Certified AI Practitioner with practical concepts, hands-on learning and practice.",

        url:
            "https://www.udemy.com/course/get-aws-ai-certified-handsonquiz-testszero-to-hero-2025/?couponCode=JULY2026"
    },


    /* =================================================
       4
    ================================================= */

    {
        id: 4,

        title:
            "Amazon Kiro Hands-On: Build Apps with AI Agents",

        category:
            "AI",

        image:
            "images/course-04.svg",

        level:
            "Intermediate",

        description:
            "Build applications using AI-powered development and Amazon Kiro with hands-on examples.",

        url:
            "https://www.udemy.com/course/amazon-kiro-handson-build-apps-with-ai-agents-q-developer/?couponCode=JULY2026"
    },


    /* =================================================
       5
    ================================================= */

    {
        id: 5,

        title:
            "AWS Crash Course | Job Interview | World's 1st QnA Style 2026",

        category:
            "AWS",

        image:
            "images/course-05.svg",

        level:
            "Beginner",

        description:
            "Prepare for AWS interviews using a practical Q&A-driven approach covering important AWS concepts.",

        url:
            "https://www.udemy.com/course/aws-crash-course-101-job-guarantee-worlds-1st-qna-style/?couponCode=JULY2026"
    },


    /* =================================================
       6
    ================================================= */

    {
        id: 6,

        title:
            "AWS AI & GenAI: Build with Amazon Q Developer",

        category:
            "AI",

        image:
            "images/course-06.svg",

        level:
            "Intermediate",

        description:
            "Learn AWS AI and Generative AI development using Amazon Q Developer.",

        url:
            "https://www.udemy.com/course/aws-ai-series-amazon-q-developer-your-copilot-2024/?couponCode=JULY2026"
    },


    /* =================================================
       7
    ================================================= */

    {
        id: 7,

        title:
            "AI | GenAI | AWS | Amazon Q Business",

        category:
            "AI",

        image:
            "images/course-07.svg",

        level:
            "Intermediate",

        description:
            "Explore Generative AI, AWS and Amazon Q Business with practical examples and use cases.",

        url:
            "https://www.udemy.com/course/aws-cloud-ai-amazon-q-chatgpt/?couponCode=JULY2026"
    },


    /* =================================================
       8
    ================================================= */

    {
        id: 8,

        title:
            "Red Hat OpenShift for Beginners",

        category:
            "DevOps",

        image:
            "images/course-08.svg",

        level:
            "Beginner",

        description:
            "Learn Red Hat OpenShift fundamentals with practical examples and hands-on learning.",

        url:
            "https://www.udemy.com/course/red-hat-openshift-for-beginners-complete-beginner-guide/?couponCode=JULY2026"
    },


    /* =================================================
       9
    ================================================= */

    {
        id: 9,

        title:
            "GitHub Foundations Certification | GH-900 | Real Test – 2026",

        category:
            "Git",

        image:
            "images/course-09.svg",

        level:
            "Beginner",

        description:
            "Prepare for GitHub Foundations certification with focused preparation and practice.",

        url:
            "https://www.udemy.com/course/github-foundational-certification-prep-practice-tests-2025/?couponCode=JULY2026"
    },


    /* =================================================
       10
    ================================================= */

    {
        id: 10,

        title:
            "5 DevOps Projects – GitLab, Kubernetes, Docker & More",

        category:
            "DevOps",

        image:
            "images/course-10.svg",

        level:
            "Intermediate",

        description:
            "Build practical DevOps projects using GitLab, Kubernetes, Docker and multiple technologies.",

        url:
            "https://www.udemy.com/course/5-gitlab-spa-project-java-nodejs-php-python-handson-only/?couponCode=JULY2026"
    },


    /* =================================================
       11
    ================================================= */

    {
        id: 11,

        title:
            "Amazon ECS for DevOps: Docker, CI/CD & Deployments Hands-On",

        category:
            "AWS",

        image:
            "images/course-11.svg",

        level:
            "Intermediate",

        description:
            "Learn Amazon ECS, Docker, CI/CD and hands-on AWS container deployments.",

        url:
            "https://www.udemy.com/course/elastic-container-service-ecs-aws-devops-docker-2025/?couponCode=JULY2026"
    },


    /* =================================================
       12
    ================================================= */

    {
        id: 12,

        title:
            "Claude Certified Architect Foundations (CCA-F)",

        category:
            "AI",

        image:
            "images/course-12.svg",

        level:
            "Intermediate",

        description:
            "Prepare for Claude Certified Architect Foundations with structured certification preparation.",

        url:
            "https://www.udemy.com/course/claude-certified-architect-foundations-cca/?couponCode=JULY2026"
    },


    /* =================================================
       13
    ================================================= */

    {
        id: 13,

        title:
            "Amazon Bedrock with Amazon Q Developer",

        category:
            "AI",

        image:
            "images/course-13.svg",

        level:
            "Intermediate",

        description:
            "Learn Amazon Bedrock and Amazon Q Developer through practical hands-on examples.",

        url:
            "https://www.udemy.com/course/amazon-bedrock-with-amazon-q-developer-zero-to-hero-python/?couponCode=JULY2026"
    },


    /* =================================================
       14
    ================================================= */

    {
        id: 14,

        title:
            "5 DevOps Projects – Jenkins, Kubernetes, Docker, AWS, SonarQube & Nexus",

        category:
            "DevOps",

        image:
            "images/course-14.svg",

        level:
            "Advanced",

        description:
            "Build complete DevOps projects using Jenkins, Kubernetes, Docker, AWS, SonarQube and Nexus.",

        url:
            "https://www.udemy.com/course/5-devops-project-jenkins-k8s-docker-aws-sonarqubenexus/?couponCode=JULY2026"
    },


    /* =================================================
       15
    ================================================= */

    {
        id: 15,

        title:
            "Terraform: Beginner to Expert Guide | 3-Level Interview Prep",

        category:
            "Terraform",

        image:
            "images/course-15.svg",

        level:
            "Beginner to Advanced",

        description:
            "Master Terraform from beginner to advanced level with practical learning and interview preparation.",

        url:
            "https://www.udemy.com/course/terraform-beginner-to-expert-guide-3-level-interview-prep/?couponCode=JULY2026"
    },


    /* =================================================
       16
    ================================================= */

    {
        id: 16,

        title:
            "Amazon Bedrock: AWS GenAI for All",

        category:
            "AI",

        image:
            "images/course-16.svg",

        level:
            "Beginner",

        description:
            "Learn Amazon Bedrock and Generative AI concepts with a beginner-friendly approach.",

        url:
            "https://www.udemy.com/course/amazon-bedrock-unleash-genai-without-code-100-drag-drop/?couponCode=JULY2026"
    },


    /* =================================================
       17
    ================================================= */

    {
        id: 17,

        title:
            "Git & GitHub Crash Course: Hands-On + Interview Prep Guide",

        category:
            "Git",

        image:
            "images/course-17.svg",

        level:
            "Beginner",

        description:
            "Learn Git and GitHub through hands-on examples and focused interview preparation.",

        url:
            "https://www.udemy.com/course/git-github-bootcamp-with-codespace-tothepoint-job-prep-2025/?couponCode=JULY2026"
    },


    /* =================================================
       18
    ================================================= */

    {
        id: 18,

        title:
            "Docker DevOps Bootcamp: Projects, CI/CD & Interview Prep",

        category:
            "Docker",

        image:
            "images/course-18.svg",

        level:
            "Beginner to Intermediate",

        description:
            "Learn Docker through practical projects, CI/CD workflows and interview preparation.",

        url:
            "https://www.udemy.com/course/docker-bootcamp-job-interview-worlds-1st-qna-style-2025/?couponCode=JULY2026"
    },


    /* =================================================
       19
    ================================================= */

    {
        id: 19,

        title:
            "Docker & Amazon ECS: Build and Deploy Containers on AWS 2026",

        category:
            "Docker",

        image:
            "images/course-19.svg",

        level:
            "Intermediate",

        description:
            "Build and deploy containerized applications using Docker and Amazon ECS on AWS.",

        url:
            "https://www.udemy.com/course/docker-amazon-ecs-zero-to-hero-in-cloud-container-bundle/?couponCode=JULY2026"
    },


    /* =================================================
       20
    ================================================= */

    {
        id: 20,

        title:
            "Terraform Associate (004): Exam Prep + Hands-On + Tests 2026",

        category:
            "Terraform",

        image:
            "images/course-20.svg",

        level:
            "Intermediate",

        description:
            "Prepare for Terraform Associate 004 with hands-on learning, tests and exam preparation.",

        url:
            "https://www.udemy.com/course/hashicorp-certified-terraform-associate-004-with-tests-new/?couponCode=JULY2026"
    },


    /* =================================================
       21
    ================================================= */

    {
        id: 21,

        title:
            "Docker & Kubernetes for Beginners - Level 1",

        category:
            "Kubernetes",

        image:
            "images/course-21.svg",

        level:
            "Beginner",

        description:
            "Start your DevOps journey with Docker and Kubernetes through hands-on learning.",

        url:
            "https://www.udemy.com/course/docker-kubernetes-for-beginners-handson-fresher-job-prep/?referralCode=AE63C6970871C9FAC386"
    },


    /* =================================================
       22
    ================================================= */

    {
        id: 22,

        title:
            "Amazon Bedrock: Generative AI in Hindi",

        category:
            "Hindi",

        image:
            "images/course-22.svg",

        level:
            "Beginner",

        description:
            "Learn Amazon Bedrock and Generative AI concepts in Hindi.",

        url:
            "https://www.udemy.com/course/amazon-bedrock-generative-ai-hindi/?referralCode=0C2732491EBD42E9ED0C"
    },


    /* =================================================
       23
    ================================================= */

    {
        id: 23,

        title:
            "Kubernetes – हिंदी",

        category:
            "Hindi",

        image:
            "images/course-23.svg",

        level:
            "Beginner",

        description:
            "Learn Kubernetes fundamentals in Hindi with practical examples.",

        url:
            "https://www.udemy.com/course/kubernetes-hindi/?couponCode=JULY2026"
    },


    /* =================================================
       24
    ================================================= */

    {
        id: 24,

        title:
            "Terraform 004 Certification – हिंदी में पूरी तैयारी",

        category:
            "Hindi",

        image:
            "images/course-24.svg",

        level:
            "Beginner",

        description:
            "Prepare for Terraform Associate 004 certification in Hindi.",

        url:
            "https://www.udemy.com/course/terraform-004-certification/?referralCode=32D92956CCF2B62694AC"
    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const courseGrid =
    document.getElementById("courseGrid");

const courseCount =
    document.getElementById("courseCount");

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");

const filterButtons =
    document.querySelectorAll(".filter-button");

let currentCategory = "All";


/* =====================================================
   CREATE COURSE CARD
=====================================================

   The following are intentionally NOT shown:

   - Ratings
   - Student count
   - Revenue

   The entire course area links to Udemy.
===================================================== */

function createCourseCard(course) {

    return `

        <article class="course-card">

            <a
                href="${course.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="course-card-link"
                aria-label="Open ${course.title} on Udemy"
            >

                <div class="course-image-container">

                    <img
                        src="${course.image}"
                        alt="${course.title}"
                        class="course-image"
                        loading="lazy"
                    >

                    <span class="course-offer-badge">
                        SPECIAL OFFER
                    </span>

                </div>


                <div class="course-content">

                    <div class="course-category">
                        ${course.category}
                    </div>


                    <h3 class="course-title">
                        ${course.title}
                    </h3>


                    <p class="course-description">
                        ${course.description}
                    </p>

                </div>

            </a>


            <div class="course-footer">

                <span class="course-level">
                    ${course.level}
                </span>


                <a
                    href="${course.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="udemy-button"
                >
                    Get Course →
                </a>

            </div>

        </article>

    `;
}


/* =====================================================
   DISPLAY COURSES
===================================================== */

function displayCourses() {

    if (!courseGrid) {
        return;
    }


    const searchText =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const filteredCourses =
        courses.filter(course => {

            const categoryMatch =
                currentCategory === "All" ||
                course.category === currentCategory;


            const searchableText = (

                course.title +
                " " +
                course.category +
                " " +
                course.description

            ).toLowerCase();


            const searchMatch =
                searchableText.includes(
                    searchText
                );


            return (
                categoryMatch &&
                searchMatch
            );

        });


    courseGrid.innerHTML =
        filteredCourses
            .map(createCourseCard)
            .join("");


    if (courseCount) {

        courseCount.textContent =
            `Showing ${filteredCourses.length} of ${courses.length} courses`;

    }


    if (noResults) {

        noResults.style.display =
            filteredCourses.length === 0
                ? "block"
                : "none";

    }

}


/* =====================================================
   SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        displayCourses
    );

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            displayCourses();


            const coursesSection =
                document.getElementById(
                    "courses"
                );


            if (coursesSection) {

                coursesSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =====================================================
   LEARNING PATHS
===================================================== */

document
    .querySelectorAll(".path-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                currentCategory =
                    link.dataset.path;


                filterButtons.forEach(
                    button => {

                        button.classList.toggle(

                            "active",

                            button.dataset.category ===
                            currentCategory

                        );

                    }
                );


                displayCourses();


                const coursesSection =
                    document.getElementById(
                        "courses"
                    );


                if (coursesSection) {

                    coursesSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =====================================================
   CONFIGURATION LINKS
===================================================== */

function setLink(
    elementId,
    url
) {

    const element =
        document.getElementById(
            elementId
        );


    if (
        element &&
        url &&
        url !== "#"
    ) {

        element.href =
            url;

    }

}


setLink(
    "offerButton",
    siteConfig.offerForm
);


setLink(
    "whatsappButton",
    siteConfig.whatsapp
);


setLink(
    "oneOnOneButton",
    siteConfig.oneOnOne
);


setLink(
    "lifetimeButton",
    siteConfig.lifetime
);


setLink(
    "footerUdemy",
    siteConfig.udemy
);


setLink(
    "footerYouTube",
    siteConfig.youtube
);


setLink(
    "footerWhatsApp",
    siteConfig.whatsapp
);


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );

}


document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }

            }
        );

    });


/* =====================================================
   FOOTER YEAR
===================================================== */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

displayCourses();
