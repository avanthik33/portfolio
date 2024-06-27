import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

function App() {
  const projects = [
    {
      projectName: "An movie ticket booking application for Indian Navy",
      projectScreenshots: [
        {
          src: "/movieProject/Screenshot 2024-06-27 143320.png",
          caption: "Screenshot 1",
        },
        {
          src: "/movieProject/Screenshot 2024-06-27 143333.png",
          caption: "Screenshot 2",
        },
        {
          src: "/movieProject/Screenshot 2024-06-27 143352.png",
          caption: "Screenshot 3",
        },
        {
          src: "/movieProject/Screenshot 2024-06-27 143320.png",
          caption: "Screenshot 4",
        },
        {
          src: "/movieProject/Screenshot 2024-06-27 143458.png",
          caption: "Screenshot 5",
        },
      ],
      projectDescription:
        "We developed a comprehensive booking system featuring distinct user roles for administrators and soldiers. The system includes robust functionalities such as QR code generation for secure booking authentication. Additionally, I seamlessly integrated external APIs to fetch detailed movie information and trailers, enhancing the user experience. Technologies employed in this project encompass MongoDB for database management, Express.js and Node.js for server-side operations, React.js for dynamic frontend interfaces, and JWT for secure authentication. The implementation of QR code generation further enhances security and convenience for users interacting with the booking system.",
    },
    {
      projectName: "MyMessenger WebApplication",
      projectScreenshots: [
        {
          src: "/messenger/Screenshot 2024-06-27 152724.png",
          caption: "Screenshot 1",
        },
        {
          src: "/messenger/Screenshot 2024-06-27 152738.png",
          caption: "Screenshot 2",
        },
        {
          src: "/messenger/Screenshot 2024-06-27 152837.png",
          caption: "Screenshot 3",
        },
        {
          src: "/messenger/Screenshot 2024-06-27 152914.png",
          caption: "Screenshot 4",
        },
      ],
      projectDescription:
        "I developed a dynamic real-time chat application utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for seamless communication. The application boasts a responsive design crafted with Tailwind CSS, ensuring optimal user experience across devices. Key features include the integration of email OTP for secure account verification and real-time message updates, facilitated by Socket.IO. State management was optimized using Zustand, enhancing performance and scalability. The deployment was meticulously executed to ensure accessibility and accommodate future growth. Technologies employed also include JWT for authentication and Postman for API testing, ensuring robust functionality and reliability.",
      liveDemoLink: "https://mymessenger-rsvi.onrender.com/",
    },
    {
      projectName: "Campus automation website",
      projectScreenshots: [
        {
          src: "/campus/Screenshot 2024-06-27 164816.png",
          caption: "Screenshot 1",
        },
        {
          src: "/campus/Screenshot 2024-06-27 164835.png",
          caption: "Screenshot 2",
        },
        {
          src: "/campus/Screenshot 2024-06-27 164902.png",
          caption: "Screenshot 3",
        },
        {
          src: "/campus/Screenshot 2024-06-27 164931.png",
          caption: "Screenshot 4",
        },
        {
          src: "/campus/Screenshot 2024-06-27 164947.png",
          caption: "Screenshot 5",
        },
        {
          src: "/campus/Screenshot 2024-06-27 165033.png",
          caption: "Screenshot 6",
        },
      ],
      projectDescription:
        "I streamlined administrative tasks and enhanced communication among students and staff by developing a comprehensive system. This system features robust user authentication and authorization using JWT tokens, ensuring secure access and interactions. To further enhance security, I integrated email verification during the user registration process. The application utilizes MongoDB for efficient database management, providing a reliable foundation for storing and retrieving data. Technologies employed in this project include MongoDB for database management, Express.js and Node.js for server-side operations, React.js for creating dynamic frontend interfaces, JWT for secure authentication, and Postman for API testing.",
      liveDemoLink: "https://campusautomation.onrender.com/",
    },
  ];
  return (
    <div className="App">
      <Welcome />
      <Skills />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
