/* ==========================================
   COURSE DATA

   Add/edit your courses here.

   image:
   Path of your course image

   url:
   Your Udemy course URL

   category:
   DevOps / AWS / Kubernetes /
   Terraform / AI

========================================== */


const courses = [

    {
        id: 1,

        title: "Course Title 01",

        category: "DevOps",

        image: "images/course-01.jpg",

        description:
            "Learn DevOps concepts with practical hands-on examples.",

        rating: "4.7",

        students: "10,000+",

        level: "Beginner",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-01/"
    },


    {
        id: 2,

        title: "Course Title 02",

        category: "AWS",

        image: "images/course-02.jpg",

        description:
            "Learn AWS services and cloud architecture through practical examples.",

        rating: "4.8",

        students: "8,000+",

        level: "Beginner",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-02/"
    },


    {
        id: 3,

        title: "Course Title 03",

        category: "Kubernetes",

        image: "images/course-03.jpg",

        description:
            "Master Kubernetes concepts and hands-on administration.",

        rating: "4.8",

        students: "7,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-03/"
    },


    {
        id: 4,

        title: "Course Title 04",

        category: "Terraform",

        image: "images/course-04.jpg",

        description:
            "Learn Infrastructure as Code with Terraform.",

        rating: "4.7",

        students: "6,000+",

        level: "Beginner",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-04/"
    },


    {
        id: 5,

        title: "Course Title 05",

        category: "DevOps",

        image: "images/course-05.jpg",

        description:
            "Build CI/CD pipelines and automate deployments.",

        rating: "4.7",

        students: "5,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-05/"
    },


    {
        id: 6,

        title: "Course Title 06",

        category: "AWS",

        image: "images/course-06.jpg",

        description:
            "Understand AWS architecture and real-world cloud solutions.",

        rating: "4.8",

        students: "5,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-06/"
    },


    {
        id: 7,

        title: "Course Title 07",

        category: "Kubernetes",

        image: "images/course-07.jpg",

        description:
            "Deploy and manage production Kubernetes workloads.",

        rating: "4.8",

        students: "4,000+",

        level: "Advanced",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-07/"
    },


    {
        id: 8,

        title: "Course Title 08",

        category: "Terraform",

        image: "images/course-08.jpg",

        description:
            "Automate cloud infrastructure using Terraform.",

        rating: "4.7",

        students: "4,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-08/"
    },


    {
        id: 9,

        title: "Course Title 09",

        category: "DevOps",

        image: "images/course-09.jpg",

        description:
            "Learn Docker containers and container-based deployments.",

        rating: "4.7",

        students: "4,000+",

        level: "Beginner",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-09/"
    },


    {
        id: 10,

        title: "Course Title 10",

        category: "AWS",

        image: "images/course-10.jpg",

        description:
            "Build scalable applications using AWS services.",

        rating: "4.8",

        students: "3,500+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-10/"
    },


    {
        id: 11,

        title: "Course Title 11",

        category: "AI",

        image: "images/course-11.jpg",

        description:
            "Learn Generative AI concepts and practical applications.",

        rating: "4.8",

        students: "3,000+",

        level: "Beginner",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-11/"
    },


    {
        id: 12,

        title: "Course Title 12",

        category: "DevOps",

        image: "images/course-12.jpg",

        description:
            "Master Jenkins and build automated CI/CD pipelines.",

        rating: "4.7",

        students: "3,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-12/"
    },


    {
        id: 13,

        title: "Course Title 13",

        category: "Kubernetes",

        image: "images/course-13.jpg",

        description:
            "Prepare for Kubernetes administration with hands-on labs.",

        rating: "4.8",

        students: "3,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-13/"
    },


    {
        id: 14,

        title: "Course Title 14",

        category: "AWS",

        image: "images/course-14.jpg",

        description:
            "Explore AWS compute, storage, networking and security.",

        rating: "4.7",

        students: "2,500+",

        level: "Beginner",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-14/"
    },


    {
        id: 15,

        title: "Course Title 15",

        category: "Terraform",

        image: "images/course-15.jpg",

        description:
            "Master Terraform from beginner to advanced concepts.",

        rating: "4.8",

        students: "2,500+",

        level: "Advanced",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-15/"
    },


    {
        id: 16,

        title: "Course Title 16",

        category: "AI",

        image: "images/course-16.jpg",

        description:
            "Explore AWS Generative AI and Amazon Bedrock.",

        rating: "4.8",

        students: "2,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-16/"
    },


    {
        id: 17,

        title: "Course Title 17",

        category: "DevOps",

        image: "images/course-17.jpg",

        description:
            "Learn GitLab CI/CD and modern DevOps automation.",

        rating: "4.7",

        students: "2,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-17/"
    },


    {
        id: 18,

        title: "Course Title 18",

        category: "AWS",

        image: "images/course-18.jpg",

        description:
            "Learn AWS DevOps services and deployment strategies.",

        rating: "4.7",

        students: "2,000+",

        level: "Advanced",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-18/"
    },


    {
        id: 19,

        title: "Course Title 19",

        category: "Kubernetes",

        image: "images/course-19.jpg",

        description:
            "Learn advanced Kubernetes networking and storage.",

        rating: "4.8",

        students: "1,500+",

        level: "Advanced",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-19/"
    },


    {
        id: 20,

        title: "Course Title 20",

        category: "AI",

        image: "images/course-20.jpg",

        description:
            "Learn modern AI engineering and GenAI workflows.",

        rating: "4.8",

        students: "1,500+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-20/"
    },


    {
        id: 21,

        title: "Course Title 21",

        category: "DevOps",

        image: "images/course-21.jpg",

        description:
            "Learn DevSecOps and integrate security into CI/CD.",

        rating: "4.7",

        students: "1,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-21/"
    },


    {
        id: 22,

        title: "Course Title 22",

        category: "Terraform",

        image: "images/course-22.jpg",

        description:
            "Build reusable Terraform modules and infrastructure.",

        rating: "4.8",

        students: "1,000+",

        level: "Advanced",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-22/"
    },


    {
        id: 23,

        title: "Course Title 23",

        category: "AI",

        image: "images/course-23.jpg",

        description:
            "Learn AI-powered development and modern GenAI tools.",

        rating: "4.8",

        students: "1,000+",

        level: "Intermediate",

        price: "$",

        url: "https://www.udemy.com/course/YOUR-COURSE-23/"
    }

];


/* ==========================================
   VARIABLES
========================================== */

const courseGrid =
    document.getElementById("courseGrid");

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");

const filterButtons =
    document.querySelectorAll(".filter-btn");


let currentCategory = "All";


/* ==========================================
   DISPLAY COURSES
========================================== */

function displayCourses() {

    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredCourses =
        courses.filter(course => {

            const matchesCategory =
                currentCategory === "All" ||
                course.category === currentCategory;


            const matchesSearch =
                course.title
                    .toLowerCase()
                    .includes(searchText) ||

                course.description
                    .toLowerCase()
                    .includes(searchText) ||

                course.category
                    .toLowerCase()
                    .includes(searchText);


            return matchesCategory &&
                   matchesSearch;

        });


    courseGrid.innerHTML = "";


    filteredCourses.forEach(course => {

        const card =
            document.createElement("article");

        card.className =
            "course-card";


        card.innerHTML = `

            <img
                src="${course.image}"
                alt="${course.title}"
                class="course-image"
                loading="lazy"
                onerror="this.src='https://placehold.co/800x450/e2e8f0/475569?text=Course+Image'"
            >


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

                    <span class="course-rating">
                        ★ ${course.rating}
                    </span>

                    <span>
                        ${course.students} students
                    </span>

                    <span>
                        ${course.level}
                    </span>

                </div>


                <div class="course-footer">

                    <div class="course-price">
                        ${course.price}
                    </div>


                    <a
                        href="${course.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="udemy-button">

                        View on Udemy

                    </a>

                </div>

            </div>

        `;


        courseGrid.appendChild(card);

    });


    if (filteredCourses.length === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

    }

}


/* ==========================================
   SEARCH
========================================== */

searchInput.addEventListener(
    "input",
    displayCourses
);


/* ==========================================
   CATEGORY FILTER
========================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            displayCourses();

        }
    );

});


/* ==========================================
   INITIAL LOAD
========================================== */

displayCourses();
