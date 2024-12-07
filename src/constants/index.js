import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg"


export const HERO_CONTENT = `As a passionate full stack developer, I bring a strong foundation in both front-end and back-end technologies to deliver comprehensive solutions. With hands-on experience in designing and developing responsive, user-friendly web applications, I excel at working with modern frameworks and technologies such as React, Spring Boot, and databases like MongoDB and MySQL. I also leverage Bootstrap and Tailwind CSS to create visually appealing, responsive designs. My dedication to clean code, scalability, and a seamless user experience drives me to continuously explore new tools and best practices. I’m always excited to take on new challenges, learn, and contribute to meaningful projects that push the boundaries of web development.`;

export const ABOUT_TEXT = ` I'm Jai Krishna, a passionate full-stack developer with a background in Information Technology from VNR Vignana Jyothi Institute Of Engineering And Technology. I have strong expertise in web development technologies, including React, Spring Boot, MongoDB, MySQL, Bootstrap, and Tailwind CSS. I enjoy building efficient and scalable applications that deliver seamless user experiences. From crafting intuitive front-end interfaces to optimizing complex back-end systems, I take pride in developing solutions that solve real-world problems. I am always eager to embrace new challenges and continuously enhance my skills to create impactful digital experiences.`;


export const PROJECTS = [
  {
    title: " Course Tracking System",
    link: "https://github.com/jaikrishna612/CourseTrackingSystem",
    image: project1,
    description:
      "Admin can add new courses along with author name into the course table through which users can access the courses. During the course user can track the status as ongoing/completed.",
    technologies: ["React.js", "CSS", "Bootstrap", "Springboot", "MYSQL"],
  },
  {
    title: "Quiz App",
    link: "https://github.com/jaikrishna612/Quiz",
    image: project2,
    description:
      "The app has 3 react components for the start, quiz and End Screens. The user can test his basic knowledge on react through this app. Finally the user will be provided with links for learning react if the score of the quiz is less.",
    technologies: ["HTML", "CSS", "Bootstrap","React.js", "Context.api"],
  },
  {
    title: "Chest Disease Segmentation",
    link: "https://github.com/jaikrishna612/Deep-Learning",
    image: project3,
    description:
      "Developed a UNet Deep Learning Model for Classification and Segmentation of images into Covid19, Lung Opacity,Viral Pneumonia and Normal with 98.6 percent accuracy. This model can be used for automating classification the type of disease, identify and visualize the area where the lungs are affected.",
    technologies: ["Python", "tensorflow", "keras", "Matplotlib","UNet Architecture"],
  },
  {
    title: " Maize Leaf disease classification",
    link: "https://github.com/jaikrishna612/Deep-Learning",
    image: project4,
    description:
      "Worked on Streamlined attention model using ResNet50 Architecture , Transfer Learning to detect the maize leaf disease. Analyzed the accuracies of models and improved the accuracy to 95 percent.",
    technologies: ["Python", "Tensorflow", "Keras", "Matpltlib", "Resnet50 Architecture"],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/jaikrishna612",
    image: project5,
    description:
      "A personal portfolio website to show case projects, skills, Technologies and contact information.",
    technologies: ["HTML","React.js","jsx","css","Tailwind css","Framer Motion"]
  },
  {
    title: "Personalized News Aggregator",
    link: "https://github.com/jaikrishna612/DeepKlarity_Assignment",
    image: project6,
    description:
      " Developed a news aggregator that scrapes articles from BBC and Times Of India using Beautiful Soup. Preprocessed and categorized the articles using NLP techniques. Provides a Flask-based REST API with endpoints to retrieve all articles with filters, fetch specific articles by ID,search by keyword.",
    technologies: ["Beautiful Soup","NLP","Flask","css","HTML"]
  }
];

export const CONTACT = {
  address: "Address : Hyderabad, Telangana",
  phoneNo: "PhoneNo : 9121738303 ",
  email: " Email : jaikrishnareddy2002@gmail.com",
};
