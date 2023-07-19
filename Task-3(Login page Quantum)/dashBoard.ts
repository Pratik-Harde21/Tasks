const topic1 = document.querySelector(".topic1") as HTMLElement;
const sub1 = document.querySelector(".sub1") as HTMLElement;
const grade1 = document.querySelector(".grade1") as HTMLElement;
const unit1 = document.querySelector(".unit1") as HTMLElement;
const lesson1 = document.querySelector(".lesson1") as HTMLElement;
const sub_topic1 = document.querySelector(".sub_topic1") as HTMLElement;
const class1 = document.querySelector(".class1") as HTMLElement;
const stud1 = document.querySelector(".stud1") as HTMLElement;
const dur1 = document.querySelector(".dur1") as HTMLElement;

const topic2 = document.querySelector(".topic2") as HTMLElement;
const sub2 = document.querySelector(".sub2") as HTMLElement;
const grade2 = document.querySelector(".grade2") as HTMLElement;
const unit2 = document.querySelector(".unit2") as HTMLElement;
const lesson2 = document.querySelector(".lesson2") as HTMLElement;
const sub_topic2 = document.querySelector(".sub_topic2") as HTMLElement;
const class2 = document.querySelector(".class2") as HTMLElement;
const stud2 = document.querySelector(".stud2") as HTMLElement;

const topic3 = document.querySelector(".topic3") as HTMLElement;
const sub3 = document.querySelector(".sub3") as HTMLElement;
const grade3 = document.querySelector(".grade3") as HTMLElement;
const unit3 = document.querySelector(".unit3") as HTMLElement;
const lesson3 = document.querySelector(".lesson3") as HTMLElement;
const sub_topic3 = document.querySelector(".sub_topic3") as HTMLElement;
const class3 = document.querySelector(".class3") as HTMLElement;
const stud3 = document.querySelector(".stud3") as HTMLElement;

const topic4 = document.querySelector(".topic4") as HTMLElement;
const sub4 = document.querySelector(".sub4") as HTMLElement;
const grade4 = document.querySelector(".grade4") as HTMLElement;
const unit4 = document.querySelector(".unit4") as HTMLElement;
const lesson4 = document.querySelector(".lesson3") as HTMLElement;
const sub_topic4 = document.querySelector(".sub_topic4") as HTMLElement;
const class4 = document.querySelector(".class4") as HTMLElement;
const stud4 = document.querySelector(".stud4") as HTMLElement;
const dur4 = document.querySelector(".dur4") as HTMLElement;


const details: {
    Course_Name: string;
    Subject: string;
    Grade: string;
    Units: string;
    Lessons: string;
    Topics: string;
    Class: string;
    Total_Students?: string;
    Duration?: string;
}[] = [
    {
        "Course_Name" : "Acceleration",
        "Subject" : "Physics",
        "Grade" : "7+2",
        "Units" : "4",
        "Lessons" : "18",
        "Topics" : "24",
        "Class" : "Mr. Frank Class B",
        "Total_Students" : "50",
        "Duration" : "21-Jan-2020 - 21-Aug-2020"
    },
    {
        "Course_Name" : "Introduction to Biology: Micro organisms and how they affec...",
        "Subject" : "Physics 2",
        "Grade" : "6+3",
        "Units" : "2",
        "Lessons" : "15",
        "Topics" : "20",
        "Class" : "No Classes"
    },
    {
        "Course_Name" : "Introduction to Biology: Micro organisms and how they affec...",
        "Subject" : "Biology",
        "Grade" : "4+1",
        "Units" : "5",
        "Lessons" : "16",
        "Topics" : "22",
        "Class" : "All Classes",
        "Total_Students" : "300",
    },
    {
        "Course_Name" : "Introduction to High School Mathematics",
        "Subject" : "Mathematics",
        "Grade" : "8+3",
        "Class" : "Mr. Frank Class A",
        "Total_Students" : "44",
        "Duration" : "14-Oct-2019 - 20-Oct-2020"
    }
];

topic1.innerHTML = details[0].Course_Name;
sub1.innerHTML = details[0].Subject;
grade1.innerHTML = details[0].Grade;
unit1.innerHTML = details[0].Units;
lesson1.innerHTML = details[0].Lessons;
sub_topic1.innerHTML = details[0].Topics;
class1.innerHTML = details[0].Class;
stud1.innerHTML = details[0].Total_Students || "";
dur1.innerHTML = details[0].Duration || "";

topic2.innerHTML = details[1].Course_Name;
sub2.innerHTML = details[1].Subject;
grade2.innerHTML = details[1].Grade;
unit2.innerHTML = details[1].Units;
lesson2.innerHTML = details[1].Lessons;
sub_topic2.innerHTML = details[1].Topics;
class2.innerHTML = details[1].Class;

topic3.innerHTML = details[2].Course_Name;
sub3.innerHTML = details[2].Subject;
grade3.innerHTML = details[2].Grade;
unit3.innerHTML = details[2].Units;
lesson3.innerHTML = details[2].Lessons;
sub_topic3.innerHTML = details[2].Topics;
class3.innerHTML = details[2].Class;
stud3.innerHTML = details[2].Total_Students || "";

topic4.innerHTML = details[3].Course_Name;
sub4.innerHTML = details[3].Subject;
grade4.innerHTML = details[3].Grade;
class4.innerHTML = details[3].Class;
stud4.innerHTML = details[3].Total_Students || "";
dur4.innerHTML = details[3].Duration || "";


const hamBurger = document.querySelector(".hide") as HTMLElement;
const content = document.querySelector("#mrg") as HTMLElement;
const container = document.querySelector("#container") as HTMLElement;

const alertImg = document.querySelector(".alertImg") as HTMLElement;
const alertContent = document.querySelector(".alertt") as HTMLElement;


const announcementImg = document.querySelector(".announcementImg") as HTMLElement;
const notificationContent = document.querySelector(".announcements") as HTMLElement;


const media = () => {
    const q = matchMedia("(max-width: 769px)");
    if (q.matches) {
        hamBurger.addEventListener("mouseover", () => {
            content.style.display = "flex";
            content.style.animationDuration = "1s";
            content.style.animationName = "sampleIn";
            notificationContent.style.display = "none";
            alertContent.style.display = "none";
        });
        container.addEventListener("mouseover", () => {
            content.style.animationDuration = "1s";
            content.style.animationName = "sampleOut";
            setTimeout(() => {
                content.style.display = "none";
            }, 1000);
        });

        alertImg.addEventListener("mouseover", () => {
            alertContent.style.display = "block";
            alertContent.style.animationDuration = "1s";
            alertContent.style.animationName = "sampleIn";
            notificationContent.style.display = "none";
            content.style.display = "none";
        });
        container.addEventListener("mouseover", () => {
            alertContent.style.animationName = "sampleOut";
            alertContent.style.animationDuration = "1s";
            setTimeout(() => {
                alertContent.style.display = "none";
            }, 1000);
        });

        announcementImg.addEventListener("mouseover", () => {
            notificationContent.style.display = "block";
            notificationContent.style.animationDuration = "1s";
            notificationContent.style.animationName = "sampleIn";
            alertContent.style.display = "none";
            content.style.display = "none";
        });
        container.addEventListener("mouseover", () => {
            notificationContent.style.display = "none";
            notificationContent.style.animationName = "sampleOut";
            notificationContent.style.animationDuration = "1s";
            setTimeout(() => {
                notificationContent.style.display = "none";
            }, 1000);
        });
    } else {
        alertImg.addEventListener("mouseover", () => {
            alertContent.style.display = "block";
            alertContent.style.animationDuration = "1s";
            alertContent.style.animationName = "sampleIn";
            notificationContent.style.display = "none";
        });
        container.addEventListener("mouseover", () => {
            alertContent.style.animationName = "sampleOut";
            alertContent.style.animationDuration = "1s";
            setTimeout(() => {
                alertContent.style.display = "none";
            }, 1000);
        });

        announcementImg.addEventListener("mouseover", () => {
            notificationContent.style.display = "block";
            notificationContent.style.animationDuration = "1s";
            notificationContent.style.animationName = "sampleIn";
            alertContent.style.display = "none";
        });
        container.addEventListener("mouseover", () => {
            notificationContent.style.animationName = "sampleOut";
            notificationContent.style.animationDuration = "1s";
            setTimeout(() => {
                notificationContent.style.display = "none";
            }, 1000);
        });
    }
};

window.onload = media;
