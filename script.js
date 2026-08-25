/* =====================================================
   COURSEDIY WEBSITE CONFIGURATION
===================================================== */


/*
    =====================================================
    IMPORTANT

    Replace ONLY the values inside this section.

    You don't need to change the rest of the file.
    =====================================================
*/


const siteConfig = {

    /*
        Google Form for your 1+1 offer
    */

    offerForm:
        "https://docs.google.com/forms/d/e/YOUR-OFFER-FORM-ID/viewform",


    /*
        WhatsApp group
    */

    whatsapp:
        "https://chat.whatsapp.com/YOUR-WHATSAPP-GROUP-LINK",


    /*
        Google Form for 1-on-1 sessions
    */

    oneOnOne:
        "https://docs.google.com/forms/d/e/YOUR-1ON1-FORM-ID/viewform",


    /*
        Your Udemy instructor profile
    */

    udemy:
        "https://www.udemy.com/user/YOUR-UDEMY-USERNAME/",


    /*
        Your YouTube channel
    */

    youtube:
        "https://www.youtube.com/@YOUR-YOUTUBE-CHANNEL"


};


/* =====================================================
   COURSE DATA

   ORDERED BY TOTAL REVENUE

   Revenue is NOT displayed on the website.
===================================================== */


const courses = [


    /* =================================================
       1
    ================================================= */

    {
        id: 1,

        title:
            "GitLab CI/CD Bootcamp | Zero to Hero | Certification",

        category:
            "DevOps",

        image:
            "images/course-01.jpg",

        rating:
            "4.39",

        students:
            "7,185",

        level:
            "Intermediate",

        revenueRank:
            1,

        featured:
            true,

        description:
            "Master GitLab CI/CD with practical pipelines, automation, DevOps workflows and certification preparation.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-01/"
    },


    /* =================================================
       2
    ================================================= */

    {
        id: 2,

        title:
            "Jenkins CI/CD Bootcamp | 25+ Jenkinsfile | Real Projects | 2026",

        category:
            "DevOps",

        image:
            "images/course-02.jpg",

        rating:
            "4.72",

        students:
            "3,913",

        level:
            "Intermediate",

        revenueRank:
            2,

        featured:
            true,

        description:
            "Build real-world Jenkins CI/CD pipelines using practical Jenkinsfiles and project-based learning.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-02/"
    },


    /* =================================================
       3
    ================================================= */

    {
        id: 3,

        title:
            "AWS Certified AI Practitioner: Hands-On + Practice",

        category:
            "AI",

        image:
            "images/course-03.jpg",

        rating:
            "4.41",

        students:
            "3,841",

        level:
            "Beginner",

        revenueRank:
            3,

        featured:
            true,

        description:
            "Prepare for AWS Certified AI Practitioner with hands-on learning, concepts and practice.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-03/"
    },


    /* =================================================
       4
    ================================================= */

    {
        id: 4,

        title:
            "Amazon Kiro HandsOn: Build Apps with AI Agents",

        category:
            "AI",

        image:
            "images/course-04.jpg",

        rating:
            "4.33",

        students:
            "4,857",

        level:
            "Intermediate",

        revenueRank:
            4,

        featured:
            true,

        description:
            "Learn AI-powered application development and build applications using Amazon Kiro.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-04/"
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
            "images/course-05.jpg",

        rating:
            "4.65",

        students:
            "5,046",

        level:
            "Beginner",

        revenueRank:
            5,

        featured:
            true,

        description:
            "Prepare for AWS interviews using a practical Q&A-driven learning approach.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-05/"
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
            "images/course-06.jpg",

        rating:
            "4.39",

        students:
            "4,137",

        level:
            "Intermediate",

        revenueRank:
            6,

        featured:
            true,

        description:
            "Learn AWS AI and Generative AI development using Amazon Q Developer.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-06/"
    },


    /* =================================================
       7
    ================================================= */

    {
        id: 7,

        title:
            "AI | GenAI | AWS | Amazon Q Business | Create AI Solutions",

        category:
            "AI",

        image:
            "images/course-07.jpg",

        rating:
            "4.73",

        students:
            "1,915",

        level:
            "Intermediate",

        revenueRank:
            7,

        featured:
            false,

        description:
            "Explore Generative AI, AWS and Amazon Q Business with practical examples.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-07/"
    },


    /* =================================================
       8
    ================================================= */

    {
        id: 8,

        title:
            "Red Hat OpenShift for Beginners: Complete Beginner Guide",

        category:
            "DevOps",

        image:
            "images/course-08.jpg",

        rating:
            "4.53",

        students:
            "1,769",

        level:
            "Beginner",

        revenueRank:
            8,

        featured:
            false,

        description:
            "Learn OpenShift fundamentals and practical container platform concepts.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-08/"
    },


    /* =================================================
       9
    ================================================= */

    {
        id: 9,

        title:
            "GitHub Foundations Certification | GH-900 | Real Test - 2026",

        category:
            "Git",

        image:
            "images/course-09.jpg",

        rating:
            "4.65",

        students:
            "1,349",

        level:
            "Beginner",

        revenueRank:
            9,

        featured:
            false,

        description:
            "Prepare for GitHub Foundations certification with practical test preparation.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-09/"
    },


    /* =================================================
       10
    ================================================= */

    {
        id: 10,

        title:
            "5 DevOps Project - GitLab, Kubernetes, Docker",

        category:
            "DevOps",

        image:
            "images/course-10.jpg",

        rating:
            "4.73",

        students:
            "1,093",

        level:
            "Intermediate",

        revenueRank:
            10,

        featured:
            false,

        description:
            "Build practical DevOps projects using GitLab, Kubernetes and Docker.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-10/"
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
            "images/course-11.jpg",

        rating:
            "4.51",

        students:
            "902",

        level:
            "Intermediate",

        revenueRank:
            11,

        featured:
            false,

        description:
            "Learn Amazon ECS, Docker, CI/CD and hands-on AWS deployments.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-11/"
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
            "images/course-12.jpg",

        rating:
            "4.40",

        students:
            "1,803",

        level:
            "Intermediate",

        revenueRank:
            12,

        featured:
            false,

        description:
            "Prepare for Claude Certified Architect Foundations with structured learning.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-12/"
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
            "images/course-13.jpg",

        rating:
            "4.86",

        students:
            "1,093",

        level:
            "Intermediate",

        revenueRank:
            13,

        featured:
            false,

        description:
            "Learn Amazon Bedrock and Amazon Q Developer through practical examples.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-13/"
    },


    /* =================================================
       14
    ================================================= */

    {
        id: 14,

        title:
            "5 DevOps Project - Jenkins, K8s, Docker, AWS, SonarQube, Nexus",

        category:
            "DevOps",

        image:
            "images/course-14.jpg",

        rating:
            "4.82",

        students:
            "888",

        level:
            "Advanced",

        revenueRank:
            14,

        featured:
            false,

        description:
            "Build complete DevOps projects using Jenkins, Kubernetes, Docker, AWS and security tools.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-14/"
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
            "images/course-15.jpg",

        rating:
            "4.74",

        students:
            "564",

        level:
            "Beginner to Advanced",

        revenueRank:
            15,

        featured:
            false,

        description:
            "Master Terraform from beginner to advanced level with interview preparation.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-15/"
    },


    /* =================================================
       16
    ================================================= */

    {
        id: 16,

        title:
            "Amazon Bedrock: AWS GenAI for All | No Code",

        category:
            "AI",

        image:
            "images/course-16.jpg",

        rating:
            "4.62",

        students:
            "1,008",

        level:
            "Beginner",

        revenueRank:
            16,

        featured:
            false,

        description:
            "Understand AWS Generative AI and Amazon Bedrock without requiring coding.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-16/"
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
            "images/course-17.jpg",

        rating:
            "4.76",

        students:
            "649",

        level:
            "Beginner",

        revenueRank:
            17,

        featured:
            false,

        description:
            "Learn Git and GitHub through hands-on examples and interview preparation.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-17/"
    },


    /* =================================================
       18
    ================================================= */

    {
        id: 18,

        title:
            "Docker DevOps Bootcamp: Projects, CI/CD, Interview Prep-2026",

        category:
            "Docker",

        image:
            "images/course-18.jpg",

        rating:
            "4.97",

        students:
            "462",

        level:
            "Beginner to Intermediate",

        revenueRank:
            18,

        featured:
            false,

        description:
            "Learn Docker through projects, CI/CD and interview preparation.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-18/"
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
            "images/course-19.jpg",

        rating:
            "4.76",

        students:
            "306",

        level:
            "Intermediate",

        revenueRank:
            19,

        featured:
            false,

        description:
            "Build and deploy containerized applications using Docker and Amazon ECS.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-19/"
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
            "images/course-20.jpg",

        rating:
            "4.75",

        students:
            "354",

        level:
            "Intermediate",

        revenueRank:
            20,

        featured:
            false,

        description:
            "Prepare for Terraform Associate 004 with hands-on practice and tests.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-20/"
    },


    /* =================================================
       21
    ================================================= */

    {
        id: 21,

        title:
            "Docker & Kubernetes for Beginners | HandsOn Fresher Job Prep",

        category:
            "Kubernetes",

        image:
            "images/course-21.jpg",

        rating:
            "4.92",

        students:
            "102",

        level:
            "Beginner",

        revenueRank:
            21,

        featured:
            false,

        description:
            "Start your DevOps journey with Docker and Kubernetes hands-on training.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-21/"
    },


    /* =================================================
       22
    ================================================= */

    {
        id: 22,

        title:
            "Amazon Bedrock: हिंदी में Generative AI सीखें",

        category:
            "AI",

        image:
            "images/course-22.jpg",

        rating:
            "5.00",

        students:
            "24",

        level:
            "Beginner",

        revenueRank:
            22,

        featured:
            false,

        description:
            "Learn Generative AI and Amazon Bedrock in Hindi.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-22/"
    },


    /* =================================================
       23
    ================================================= */

    {
        id: 23,

        title:
            "Kubernetes - हिंदी",

        category:
            "Kubernetes",

        image:
            "images/course-23.jpg",

        rating:
            "5.00",

        students:
            "72",

        level:
            "Beginner",

        revenueRank:
            23,

        featured:
            false,

        description:
            "Learn Kubernetes fundamentals in Hindi with practical examples.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-23/"
    },


    /* =================================================
       24
    ================================================= */

    {
        id: 24,

        title:
            "Terraform 004 Certification - हिंदी में पूरी तैयारी",

        category:
            "Terraform",

        image:
            "images/course-24.jpg",

        rating:
            "New",

        students:
            "16",

        level:
            "Beginner",

        revenueRank:
            24,

        featured:
            false,

        description:
            "Prepare for Terraform Associate 004 certification in Hindi.",

        url:
            "https://www.udemy.com/course/YOUR-COURSE-24/"
    }

];



/* =====================================================
   DOM ELEMENTS
===================================================== */

const courseGrid =
    document.getElementById("courseGrid");


const featuredGrid =
    document.getElementById("featuredGrid");


const searchInput =
    document.getElementById("searchInput");


const noResults =
    document.getElementById("noResults");


const courseCount =
    document.getElementById("courseCount");


const filterButtons =
    document.querySelectorAll(".filter-button");


const mobileMenuButton =
    document.getElementById("mobileMenuButton");


const mobileMenu =
    document.getElementById("mobileMenu");



/* =====================================================
   CURRENT FILTER
===================================================== */

let currentCategory =
    "All";



/* =====================================================
   COURSE IMAGE FALLBACK
===================================================== */

function courseImage(image) {

    return image;

}



/* =====================================================
   CREATE COURSE CARD
===================================================== */

function createCourseCard(course) {

    const badge = course.featured
        ? `<span class="course-badge">BEST SELLER</span>`
        : "";


    const ratingHTML =
        course.rating === "New"

        ? `<span class="rating">NEW</span>`

        : `<span class="rating">★ ${course.rating}</span>`;


    return `

        <article class="course-card">


            <div class="course-image-container">

                <img
                    src="${courseImage(course.image)}"
                    alt="${course.title}"
                    class="course-image"
                    loading="lazy"
                    onerror="
                        this.src =
                        'https://placehold.co/800x450/f1f5f9/475569?text=CourseDIY'
                    "
                >

                ${badge}

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


                <div class="course-meta">

                    ${ratingHTML}

                    <span class="students">

                        ${course.students} students

                    </span>

                </div>


                <div class="course-footer">

                    <span class="course-level">

                        ${course.level}

                    </span>


                    <a
                        href="${course.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="udemy-button">

                        View on Udemy →

                    </a>

                </div>

            </div>

        </article>

    `;

}



/* =====================================================
   DISPLAY FEATURED COURSES
===================================================== */

function displayFeaturedCourses() {

    if (!featuredGrid) {

        return;

    }


    const featured =
        courses.filter(
            course => course.featured
        );


    featuredGrid.innerHTML =
        featured
            .map(createCourseCard)
            .join("");

}



/* =====================================================
   DISPLAY ALL COURSES
===================================================== */

function displayCourses() {

    const searchText =
        searchInput
            .value
            .toLowerCase()
            .trim();


    const filteredCourses =
        courses.filter(course => {


            const matchesCategory =

                currentCategory === "All"

                ||

                course.category
                    .toLowerCase()
                    .includes(
                        currentCategory.toLowerCase()
                    );


            const searchableText = (

                course.title +

                " " +

                course.category +

                " " +

                course.description

            ).toLowerCase();


            const matchesSearch =

                searchableText
                    .includes(searchText);


            return (

                matchesCategory &&

                matchesSearch

            );

        });


    courseGrid.innerHTML =
        filteredCourses
            .map(createCourseCard)
            .join("");


    courseCount.textContent =

        `Showing ${filteredCourses.length} of ${courses.length} courses`;


    if (
        filteredCourses.length === 0
    ) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

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
   CATEGORY FILTERS
===================================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            filterButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            displayCourses();


            document
                .getElementById("courses")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});



/* =====================================================
   LEARNING PATH BUTTONS
===================================================== */

const pathLinks =
    document.querySelectorAll(
        ".path-link"
    );


pathLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {


            const path =
                link.dataset.path;


            currentCategory =
                path;


            filterButtons.forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );


                    if (
                        button.dataset.category ===
                        path
                    ) {

                        button.classList.add(
                            "active"
                        );

                    }

                }
            );


            displayCourses();

        }
    );

});



/* =====================================================
   MOBILE MENU
===================================================== */

if (mobileMenuButton) {

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

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    });



/* =====================================================
   SET EXTERNAL LINKS
===================================================== */

function setLink(
    elementId,
    url
) {

    const element =
        document.getElementById(
            elementId
        );


    if (element) {

        element.href =
            url;

    }

}


setLink(
    "offerButton",
    siteConfig.offerForm
);


setLink(
    "oneOnOneButton",
    siteConfig.oneOnOne
);


setLink(
    "whatsappButton",
    siteConfig.whatsapp
);


setLink(
    "udemyButton",
    siteConfig.udemy
);


setLink(
    "youtubeButton",
    siteConfig.youtube
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
   INITIALIZE WEBSITE
===================================================== */

displayFeaturedCourses();

displayCourses();
