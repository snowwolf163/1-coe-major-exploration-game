//Class descriptions referenced from https://classes.oregonstate.edu/
import Card from "./Card.js";

export default class CourseCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCard";
    this.displayName = "Course Card";
    this.playerCardSprite = "course-card";
    this.opponentCardSprite = "course-card";
  }
}

// CS courses

export class CourseMTH231 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseMTH231";
    this.displayName = "MTH231 - Discrete Math";
    this.displayDescription = "Experience elementary logic and set theory, proofs, induction and graphs!"
    this.playerCardSprite = "course-MTH231";
    this.opponentCardSprite = "course-MTH231";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS46X extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS46X";
    this.displayName = "CS46X - Capstone";
    this.displayDescription = "Work on a nine month long senior project and build a real world application you can show off at the expo!"
    this.playerCardSprite = "course-CS46X";
    this.opponentCardSprite = "course-CS46X";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS261 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS261";
    this.displayName = "CS261 - Data Structures";
    this.displayDescription = "Learn how to build and make use of various data structures."
    this.playerCardSprite = "course-CS261";
    this.opponentCardSprite = "course-CS261";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS290 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS290";
    this.displayName = "CS290 - Web Dev";
    this.displayDescription = "Learn to build multi-tier web applications with client and server."
    this.playerCardSprite = "course-CS290";
    this.opponentCardSprite = "course-CS290";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS344 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS344";
    this.displayName = "CS374 - Operating Systems";
    this.displayDescription = "Write code closer to hardware with system calls and interrupts."
    this.playerCardSprite = "course-CS344";
    this.opponentCardSprite = "course-CS344";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS361";
    this.displayName = "CS361 - Software Eng 1";
    this.displayDescription = "Visit the front end of the software engineering lifecycle as well as learning project management skills."
    this.playerCardSprite = "course-CS361";
    this.opponentCardSprite = "course-CS361";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS362 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS362";
    this.displayName = "CS362 - Software Eng 2";
    this.displayDescription = "Learn about the back end of the software engineering lifecycle with processess such as verification, debugging and maintenance."
    this.playerCardSprite = "course-CS362";
    this.opponentCardSprite = "course-CS362";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS381";
    this.displayName = "CS381 - Programming Fundies";
    this.displayDescription = "Develop fundamentals in regards to programming by learning new paradigms with languages such as Haskell and Prolog."
    this.playerCardSprite = "course-CS381";
    this.opponentCardSprite = "course-CS381";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS391 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS391";
    this.displayName = "CS391 - Comp Sci Ethics";
    this.displayDescription = "Explore the ethics of what impact computers and AI have on the world."
    this.playerCardSprite = "course-CS391";
    this.opponentCardSprite = "course-CS391";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS444 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS444";
    this.displayName = "CS444 - Operating Systems 2";
    this.displayDescription = "Build your own operating system while learning about the very principles behind them."
    this.playerCardSprite = "course-CS444";
    this.opponentCardSprite = "course-CS444";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS475";
    this.displayName = "CS475 - Parallel Programming";
    this.displayDescription = "Optimize your code and make use of your resources by making programs run on multiple threads or even systems."
    this.playerCardSprite = "course-CS475";
    this.opponentCardSprite = "course-CS475";
    this.majorCardParent = ["majorCS"];
  }
}

// ECE courses

export class CourseCHE444 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE444";
    this.displayName = "CHE444 - Thin Film Material Processing";
    this.displayDescription = "Use thin films to learn about processing thin films which are used in technology such as solid state devices."
    this.playerCardSprite = "course-CHE444";
    this.opponentCardSprite = "course-CHE444";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE271 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE271";
    this.displayName = "ECE271 - Digital Logic Design";
    this.displayDescription = "Research logical circuitry with a real board and use tools such as Verilog to run hardware in real time."
    this.playerCardSprite = "course-ECE271";
    this.opponentCardSprite = "course-ECE271";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE322";
    this.displayName = "ECE322 - Electronics";
    this.displayDescription = "Learn about fundamentals of devices such as diodes, transistors and linear circuitry."
    this.playerCardSprite = "course-ECE322";
    this.opponentCardSprite = "course-ECE322";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE341";
    this.displayName = "ECE341 - Junior Design";
    this.displayDescription = "Learn system design and create an electrical engineering project in a small group."
    this.playerCardSprite = "course-ECE341";
    this.opponentCardSprite = "course-ECE341";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE351 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE351";
    this.displayName = "ECE351 - Signals and Systems";
    this.displayDescription = "Discover techniques for continuous and discrete signal, system, and circuit analysis."
    this.playerCardSprite = "course-ECE351";
    this.opponentCardSprite = "course-ECE351";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE391 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE391";
    this.displayName = "ECE391 - Transmission Lines";
    this.displayDescription = "Applied analysis of transmission line circuits."
    this.playerCardSprite = "course-ECE391";
    this.opponentCardSprite = "course-ECE391";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseENGR201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR201";
    this.displayName = "ENGR201 - Electrical Fundamentals";
    this.displayDescription = "Analyze linear circuits, circuit laws, and operational amplifiers."
    this.playerCardSprite = "course-ENGR201";
    this.opponentCardSprite = "course-ENGR201";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseENGR202 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR202";
    this.displayName = "ENGR202 - Electrical Fundamentals 2";
    this.displayDescription = "Apply circuit analysis for single-phase and three-phase circuitry and plenty more."
    this.playerCardSprite = "course-ENGR202";
    this.opponentCardSprite = "course-ENGR202";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseENGR203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR203";
    this.displayName = "ENGR203 - Electrical Fundies 3";
    this.displayDescription = "Research concepts such as laplace transforms and the Fourier series and how they apply to analyzing circuits."
    this.playerCardSprite = "course-ENGR203";
    this.opponentCardSprite = "course-ENGR203";
    this.majorCardParent = ["majorECE"];
  }
}

export class CoursePH211 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH211";
    this.displayName = "PH211 - General Physics with Calculus 1";
    this.displayDescription = "Use elementary Calculus to build your understanding of the world around you on a deeper level."
    this.playerCardSprite = "course-PH211";
    this.opponentCardSprite = "course-PH211";
    this.majorCardParent = ["majorECE"];
  }
}

export class CoursePH212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH212";
    this.displayName = "PH212 - General Physics with Calculus 2";
    this.displayDescription = "Continue your Physics with Calculus journey as you dive deeper into how math builds our world."
    this.playerCardSprite = "course-PH212";
    this.opponentCardSprite = "course-PH212";
    this.majorCardParent = ["majorECE"];
  }
}

export class CoursePH481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH481";
    this.displayName = "PH481 - Physical Optics";
    this.displayDescription = "Study in depth about topics such as diffraction or wave propagation and how they tie into modern optics."
    this.playerCardSprite = "course-PH481";
    this.opponentCardSprite = "course-PH481";
    this.majorCardParent = ["majorECE"];
  }
}

// "multi" courses

export class CourseCH121 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH121";
    this.displayName = "CH121 - General Chemistry";
    this.displayDescription = "Get an introduction to Chemistry without needing prior training."
    this.playerCardSprite = "course-CH121";
    this.opponentCardSprite = "course-CH121";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseCOMM111 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCOMM111";
    this.displayName = "COMM111 - Public Speaking";
    this.displayDescription = "Build communication, delivery, and presentation skills and what it means to be speaking to an audience."
    this.playerCardSprite = "course-COMM111";
    this.opponentCardSprite = "course-COMM111";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseCS161 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS161";
    this.displayName = "CS161 - Intro to Comp Sci 1";
    this.displayDescription = "Learn about fundamental concepts of computer science, including understanding algorithmic design and developing programs."
    this.playerCardSprite = "course-CS161";
    this.opponentCardSprite = "course-CS161";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseCS162 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS162";
    this.displayName = "CS162 - Intro to Comp Sci 2";
    this.displayDescription = "Find further advancement in your programming career as you learn anything from memory management to building small games."
    this.playerCardSprite = "course-CS162";
    this.opponentCardSprite = "course-CS162";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseENGR100 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR100";
    this.displayName = "ENGR100 - The Oregon State Engineering Student";
    this.displayDescription = "Engage in an introduction to Engineering at Oregon State in the first step of the Engineering+ program."
    this.playerCardSprite = "course-ENGR100";
    this.opponentCardSprite = "course-ENGR100";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseENGR102 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR102";
    this.displayName = "ENGR102 - Design Engineering and Problem Solving";
    this.displayDescription = "Follow your engineering journey, work in groups and design for complex real world problems."
    this.playerCardSprite = "course-ENGR102";
    this.opponentCardSprite = "course-ENGR102";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseENGR103 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR103";
    this.displayName = "ENGR103 - Engineering Computation and Algorithmic Thinking";
    this.displayDescription = "In a new alternative to CS161"
    this.playerCardSprite = "course-ENGR103";
    this.opponentCardSprite = "course-ENGR103";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

export class CourseWR121 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseWR121";
    this.displayName = "WR121 - Composition";
    this.displayDescription = "Practice critical thinking, reading, writing, and interpretation skills as you analyze many situations and genres."
    this.playerCardSprite = "course-WR121";
    this.opponentCardSprite = "course-WR121";
    this.majorCardParent = ["majorECE", "majorCS", "majorARE", "majorBEE", "majorBIOE", "majorCE", "majorCEM", "majorCHE", "majorENVE", "majorESE", "majorIE", "majorME", "majorNSE", "majorRHP"];
  }
}

// ARE Courses

export class CourseARE310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE310";
    this.displayName = "ARE310 - Architecture Studio";
    this.displayDescription = "In a studio environment, research design as not just a product but a process with deep thought and iteration behind it."
    this.playerCardSprite = "course-ARE310";
    this.opponentCardSprite = "course-ARE310";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE341";
    this.displayName = "HVAC Fundamentals";
    this.displayDescription = "Inquire theories and knowledge for energy-efficient and sustainable Heating, Ventilating, and Air Conditioning systems."
    this.playerCardSprite = "course-ARE341";
    this.opponentCardSprite = "course-ARE341";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE361";
    this.displayName = "ARE361 - Lighting Design Fundamentals";
    this.displayDescription = "Explore and demonstrate illuminating engineering; applying proper lighting to a built environment."
    this.playerCardSprite = "course-ARE361";
    this.opponentCardSprite = "course-ARE361";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE418 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE418";
    this.displayName = "ARE418 - Pro Architectural Engineering Practice";
    this.displayDescription = "Consider space, form, function and tech as you solve architectural engineering problems in a studio setting."
    this.playerCardSprite = "course-ARE418";
    this.opponentCardSprite = "course-ARE418";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE419 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE419";
    this.displayName = "ARE419 - Architectural Engineering Design";
    this.displayDescription = "Capstone level course featuring Building Information Modeling in design, management, and integrating various systems."
    this.playerCardSprite = "course-ARE419";
    this.opponentCardSprite = "course-ARE419";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE451 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE451";
    this.displayName = "ARE451 - Advanced Building Construction Methods";
    this.displayDescription = "Learn advanced methods of construction such as integrating components in envelopes."
    this.playerCardSprite = "course-ARE451";
    this.opponentCardSprite = "course-ARE451";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE461 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE461";
    this.displayName = "ARE 461 - Lighting Design for the Built Environment 1";
    this.displayDescription = "Inquire further into lighting design techniques, including being able to calculate illuminance with diffuse radiative transfer."
    this.playerCardSprite = "course-ARE461";
    this.opponentCardSprite = "course-ARE461";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE462 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE462";
    this.displayName = "ARE462 - Built Environment Lighting 2";
    this.displayDescription = "Continue photometric and related research as you learn to balance and handle competing criteria such as the visual experience and energy use."
    this.playerCardSprite = "course-ARE462";
    this.opponentCardSprite = "course-ARE462";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseCE381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE381";
    this.displayName = "CE381 - Structural Theory";
    this.displayDescription = "Analyze statically determinate structures, such as beams, frames, trusses, arches, and cables."
    this.playerCardSprite = "course-CE381";
    this.opponentCardSprite = "course-CE381";
    this.majorCardParent = ["majorARE"];
  }
}

// BEE Courses

export class CourseBEE221 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE221";
    this.displayName = "BEE221 - Ecological Engineering Fundies";
    this.displayDescription = "Learn about chemicals in the environment and alternatives that meet our needs."
    this.playerCardSprite = "course-BEE221";
    this.opponentCardSprite = "course-BEE221";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE222 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE222";
    this.displayName = "BEE222 - Ecological Engineering Computation";
    this.displayDescription = "Using the Python programming language, understand how to process and write computations in regards to Ecological Engineering applications."
    this.playerCardSprite = "course-BEE222";
    this.opponentCardSprite = "course-BEE222";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE270 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE270";
    this.displayName = "BEE270 - Ecology for Engineers"
    this.displayDescription = "Study ecology with an engineering context, such as species distribution and the reasons behind it.";
    this.playerCardSprite = "course-BEE270";
    this.opponentCardSprite = "course-BEE270";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE312 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE312";
    this.displayName = "BEE312 - Ecohydraulics";
    this.displayDescription = "With hydraulic systems, utilize theory and design to discover their applications in regards to ecological engineering."
    this.playerCardSprite = "course-BEE312";
    this.opponentCardSprite = "course-BEE312";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE322";
    this.displayName = "BEE322 - Eco-thermodynamics";
    this.displayDescription = "Research transport processes such as heat transfer or fluid flow in regards to both living beings and ecological systems."
    this.playerCardSprite = "course-BEE322";
    this.opponentCardSprite = "course-BEE322";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE361";
    this.displayName = "BEE361 - Eco Engineering Lab";
    this.displayDescription = "Use modern measurement methods in the lab to learn about measuring values such as soil or atmospheric properties. May include field trip."
    this.playerCardSprite = "course-BEE361";
    this.opponentCardSprite = "course-BEE361";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE362 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE362";
    this.displayName = "BEE362 - Eco Engineering Microbial Processes";
    this.displayDescription = "Apply ecological engineering principles in regards to environmental microbial processes."
    this.playerCardSprite = "course-BEE362";
    this.opponentCardSprite = "course-BEE362";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE415";
    this.displayName = "BEE415 - Professional Development";
    this.displayDescription = "Interact with and hear seminars from professionals in the field."
    this.playerCardSprite = "course-BEE415";
    this.opponentCardSprite = "course-BEE415";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE468 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE468";
    this.displayName = "BEE468 - Bioremediation Engineering";
    this.displayDescription = "Exammine strategies to treat contaminants in various areas such as municipal, agricultural, or industrial scenarios."
    this.playerCardSprite = "course-BEE468";
    this.opponentCardSprite = "course-BEE468";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE481";
    this.displayName = "BEE481 - Ecological Engineering Design";
    this.displayDescription = "Work in engineering teams and explore design processes in regards to Ecological Engineering."
    this.playerCardSprite = "course-BEE481";
    this.opponentCardSprite = "course-BEE481";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE482 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE482";
    this.displayName = "BEE482 - Eco Engineering Design 2";
    this.displayDescription = "Build further on logistics of projects and team principles as you apply your skills to Ecological Engineering problems."
    this.playerCardSprite = "course-BEE482";
    this.opponentCardSprite = "course-BEE482";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE483 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE483";
    this.displayName = "BEE483 - Ecological Engineering Design 3";
    this.displayDescription = "Continue the 48x series of Ecological Engineering design, working in teams and progressing in regards to specifications, criteria, and timelines.";
    this.playerCardSprite = "course-BEE483";
    this.opponentCardSprite = "course-BEE483";
    this.majorCardParent = ["majorBEE"];
  }
}

// BIOE Courses
export class CourseBI231 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBI231";
    this.displayName = "BI231 - Anatomy and Physiology";
    this.displayDescription = "Begin a series of introductions to anatomy and physiology, studying gross anatomy, the human skeleton, the muscular system, and more.";
    this.playerCardSprite = "course-BI231";
    this.opponentCardSprite = "course-BI231";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE240 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE240";
    this.displayName = "BIOE240 - Biomedical Signals and Sensors";
    this.displayDescription = "Learn the basis for important medical signals and signal acquisition.";
    this.playerCardSprite = "course-BIOE240";
    this.opponentCardSprite = "course-BIOE240";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE311";
    this.displayName = "BIOE311 - Bioengineering Thermoydynamics";
    this.displayDescription = "Inquire upon thermodynamics as it applies to biological and biophysical systems.";
    this.playerCardSprite = "course-BIOE311";
    this.opponentCardSprite = "course-BIOE311";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE331";
    this.displayName = "BIOE331 - Biotransport";
    this.displayDescription = "Learn about masss and fluid transport with regards to bioengineering, especially in regards to how these affect the body.";
    this.playerCardSprite = "course-BIOE331";
    this.opponentCardSprite = "course-BIOE331";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE340 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE340";
    this.displayName = "BIOE340 - Biomedical Engineering Principles";
    this.displayDescription = "Apply classic engineering concepts such as thermondynamics to cellular and system-level human physiology.";
    this.playerCardSprite = "course-BIOE340";
    this.opponentCardSprite = "course-BIOE340";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE350 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE350";
    this.displayName = "BIOE350 - Bioengineer Math Methods";
    this.displayDescription = "Become introduced to several numerical and analytical methods for bioengineering and biomedical engineering modeling and analysis.";
    this.playerCardSprite = "course-BIOE350";
    this.opponentCardSprite = "course-BIOE350";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE420 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE420";
    this.displayName = "BIOE420 - Social Justice, Ethics, and Engineering";
    this.displayDescription = "Interrogate the profession of engineering by studying the systems of oppression involved to take action towards a just profession.";
    this.playerCardSprite = "course-BIOE420";
    this.opponentCardSprite = "course-BIOE420";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE457 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE457";
    this.displayName = "BIOE457 - Bioreactors";
    this.displayDescription = "Design and analyze microbial cultures to research bioreactors.";
    this.playerCardSprite = "course-BIOE457";
    this.opponentCardSprite = "course-BIOE457";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE465 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE465";
    this.displayName = "BIOE465 - Biomedical Image Processing";
    this.displayDescription = "Learn about image formation, enhancement, and analysis for both medical and biological applications.";
    this.playerCardSprite = "course-BIOE465";
    this.opponentCardSprite = "course-BIOE465";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseCBEE212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCBEE212";
    this.displayName = "CBEE212 - Energy Balances";
    this.displayDescription = "Learn about balancing energy as well as thermochemical math.";
    this.playerCardSprite = "course-CBBE212";
    this.opponentCardSprite = "course-CBBE212";
    this.majorCardParent = ["majorBIOE"];
  }
}

// CE Courses
export class CourseCCE201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE201";
    this.displayName = "CCE201 - CCE Graphic Design";
    this.displayDescription = "Introduce the design process and graphical skills used by professional engineers.";
    this.playerCardSprite = "course-CCE201";
    this.opponentCardSprite = "course-CCE201";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCCE207 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE207";
    this.displayName = "CCE207 - Seminar";
    this.displayDescription = "Visit construction sites and offices as well as engaging with faculty and professionals on various topics and the culture of the industry.";
    this.playerCardSprite = "course-CCE207";
    this.opponentCardSprite = "course-CCE207";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE202 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE202";
    this.displayName = "CE202 - Geospatial Information and GIS";
    this.displayDescription = "Discover design principles with geospatial information at hand for civil engineering.";
    this.playerCardSprite = "course-CE202";
    this.opponentCardSprite = "course-CE202";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE311";
    this.displayName = "CE311 - Fluid Mechanics";
    this.displayDescription = "Utilize and study properties of fluid in regards to civil engineering.";
    this.playerCardSprite = "course-CE311";
    this.opponentCardSprite = "course-CE311";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE313 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE313";
    this.displayName = "CE313 - Hydraulic Engineering";
    this.displayDescription = "Analyze large fluid systems such as multiple reservoirs, turbines, or open channel flow.";
    this.playerCardSprite = "course-CE313";
    this.opponentCardSprite = "course-CE313";
    this.majorCardParent = ["majorCE","majorENVE"];
  }
}

export class CourseCE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE361";
    this.displayName = "CE361 - Surveying Theory";
    this.displayDescription = "Use equipment, Gaussian error theory, and more as well as get an introduction to GPS.";
    this.playerCardSprite = "course-CE361";
    this.opponentCardSprite = "course-CE361";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE372 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE372";
    this.displayName = "CE372 - Geotechnical Engineering 2";
    this.displayDescription = "Apply soil mechanics to various analyses such as slope stability.";
    this.playerCardSprite = "course-CE372";
    this.opponentCardSprite = "course-CE372";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE412 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE412";
    this.displayName = "CE412 - Hydrology";
    this.displayDescription = "Learn fundamentals such as the hydrologic cycle or streamflow.";
    this.playerCardSprite = "course-CE412";
    this.opponentCardSprite = "course-CE412";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE481";
    this.displayName = "CE481 - Reinforced Concrete";
    this.displayDescription = "Utilize principles of reinforced concrete and design for specifications such as flexure and shear.";
    this.playerCardSprite = "course-CE481";
    this.opponentCardSprite = "course-CE481";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE491 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE491";
    this.displayName = "CE491 - Transportation Engineering";
    this.displayDescription = "Learn characteristics of transportation systems, such as traffic estimation, highway operations, or intelligent transportation.";
    this.playerCardSprite = "course-CE491";
    this.opponentCardSprite = "course-CE491";
    this.majorCardParent = ["majorCE"];
  }
}
// CEM Courses

export class CourseCCE203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE203";
    this.displayName = "CCE203 - Virtual Design/Construction";
    this.displayDescription = "Learn basic principles of VDC to generate 3D information models.";
    this.playerCardSprite = "course-CCE203";
    this.opponentCardSprite = "course-CCE203";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCCE321 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE321";
    this.displayName = "CCE321 - Civil and Construction Engineering Materials";
    this.displayDescription = "Classify attributes and properties of connstruction materials.";
    this.playerCardSprite = "course-CCE321";
    this.opponentCardSprite = "course-CCE321";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCE427 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE427";
    this.displayName = "CE427 - Temporary Construction Structures";
    this.displayDescription = "Focus on design and construction of temporary structures.";
    this.playerCardSprite = "course-CE427";
    this.opponentCardSprite = "course-CE427";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM341";
    this.displayName = "CEM341 - Construction Estimating";
    this.displayDescription = "Study the fundamentals of estimating and bidding projects in the realm of construction.";
    this.playerCardSprite = "course-CEM341";
    this.opponentCardSprite = "course-CEM341";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM381";
    this.displayName = "CEM381 - Structures";
    this.displayDescription = "Research analysis and design of steel structures.";
    this.playerCardSprite = "course-CEM381";
    this.opponentCardSprite = "course-CEM381";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM441 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM441";
    this.displayName = "CEM441 - Heavy Civil Construction Management";
    this.displayDescription = "Explore heavy civil construction, such as equipment type, capability, and costs, as well as estimates for production and projects.";
    this.playerCardSprite = "course-CEM441";
    this.opponentCardSprite = "course-CEM441";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM471 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM471";
    this.displayName = "CEM471 - Electrical Facilities";
    this.displayDescription = "Learn principles and applications of electrical components within constructed facilities.";
    this.playerCardSprite = "course-CEM471";
    this.opponentCardSprite = "course-CEM471";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM472 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM472";
    this.displayName = "CEM472 - Mechanical Facilities";
    this.displayDescription = "Research mechanical components of facilities such as HVAC.";
    this.playerCardSprite = "course-CEM472";
    this.opponentCardSprite = "course-CEM472";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseECON201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECON201";
    this.displayName = "ECON201 - Microeconomics";
    this.displayDescription = "Study the microeconomic principles of society such as price theory, scarcity, and consumer behavior.";
    this.playerCardSprite = "course-ECON201";
    this.opponentCardSprite = "course-ECON201";
    this.majorCardParent = ["majorCEM"];
  }
}

// CHE Courses
export class CourseCH231 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH231";
    this.displayName = "CH231 - General Chemistry";
    this.displayDescription = "The beginning of a chemistry sequence for students in the sciences, pharmacy, and chemical engineering.";
    this.playerCardSprite = "course-CH231";
    this.opponentCardSprite = "course-CH231";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCH232 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH232";
    this.displayName = "CH232 - General Chemistry 2";
    this.displayDescription = "The middle course of a chemistry sequence for chemical engineers, including getting to partake within labs.";
    this.playerCardSprite = "course-CH232";
    this.opponentCardSprite = "course-CH232";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCH233 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH233";
    this.displayName = "CH233 - General Chemistry 3";
    this.displayDescription = "The finale of a trilogy of general chemistry courses for chemical engineers.";
    this.playerCardSprite = "course-CH233";
    this.opponentCardSprite = "course-CH233";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCH331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH331";
    this.displayName = "CH331 - Organic Chemistry";
    this.displayDescription = "They cover aliphatic and aromatic chemistry in this course.";
    this.playerCardSprite = "course-CH331";
    this.opponentCardSprite = "course-CH331";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE312 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE312";
    this.displayName = "CHE312 - Chemical Engineering Thermodynamics";
    this.displayDescription = "Learn about thermodynamics as it applies to chemistry, such as how it applies to mixtures of fugacity.";
    this.playerCardSprite = "course-CHE312";
    this.opponentCardSprite = "course-CHE312";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE331";
    this.displayName = "CHE331 - Transport Phenomena";
    this.displayDescription = "Apply momentum and other phenomena to fluid flow for the design of various fields of engineering.";
    this.playerCardSprite = "course-CHE331";
    this.opponentCardSprite = "course-CHE331";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE332 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE332";
    this.displayName = "CHE332 - Transport Phenomena 2";
    this.displayDescription = "Use control volume and heat transfer differential analysis for a unified treatment.";
    this.playerCardSprite = "course-CHE332";
    this.opponentCardSprite = "course-CHE332";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE333 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE333";
    this.displayName = "CHE333 - Transport Phenomena 3";
    this.displayDescription = "Inquire further about transport phenomena in regard to chemistry.";
    this.playerCardSprite = "course-CHE333";
    this.opponentCardSprite = "course-CHE333";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE361";
    this.displayName = "CHE361 - Chemical Process Dynamics";
    this.displayDescription = "Learn fundamental principles for dynamic modeling by controlling variables such as pressure or composition.";
    this.playerCardSprite = "course-CHE361";
    this.opponentCardSprite = "course-CHE361";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE411 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE411";
    this.displayName = "CHE411 - Mass Transfer Operations";
    this.displayDescription = "Research the transfer of mass and processes of separation.";
    this.playerCardSprite = "course-CHE411";
    this.opponentCardSprite = "course-CHE411";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE443 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE443";
    this.displayName = "CHE443 - Chemical Reaction Engineering";
    this.displayDescription = "Investigate the design of chemical reactors, especially in regards to waste minimization.";
    this.playerCardSprite = "course-CHE443";
    this.opponentCardSprite = "course-CHE443";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE461 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE461";
    this.displayName = "CHE461 - Process Control";
    this.displayDescription = "Learn the principles of PID feedback control utilizing models of chemical processes.";
    this.playerCardSprite = "course-CHE461";
    this.opponentCardSprite = "course-CHE461";
    this.majorCardParent = ["majorCHE"];
  }
}

// ENVE Courses
export class CourseENVECE313 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVECE313";
    this.displayName = "CE313 - Hydraulic Engineering";
    this.displayDescription = "Analyze large fluid systems such as multiple reservoirs, turbines, or open channel flow.";
    this.playerCardSprite = "course-ENVECE313";
    this.opponentCardSprite = "course-ENVECE313";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseCHE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE311";
    this.displayName = "CHE311 - Thermodynamics";
    this.displayDescription = "Learn about thermodynamics and concepts such as entrophy or the thermodynamic network.";
    this.playerCardSprite = "course-CHE311";
    this.opponentCardSprite = "course-CHE311";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE322";
    this.displayName = "ENVE322 - Environmental Engineering Fundamentals";
    this.displayDescription = "Apply engineering principals to environmental problems.";
    this.playerCardSprite = "course-ENVE322";
    this.opponentCardSprite = "course-ENVE322";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE415";
    this.displayName = "ENVE415 - Environmental Engineering Lab";
    this.displayDescription = "Utilize theoretical and empirical analysis of several unit operations.";
    this.playerCardSprite = "course-ENVE415";
    this.opponentCardSprite = "course-ENVE415";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE421 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE421";
    this.displayName = "ENVE421 - Drinking Water Treatment";
    this.displayDescription = "Learn about characterization and treatment of drinking water sources, and principles to go along with them.";
    this.playerCardSprite = "course-ENVE421";
    this.opponentCardSprite = "course-ENVE421";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE422 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE422";
    this.displayName = "ENVE422 - Wastewater Treatment";
    this.displayDescription = "Inquire more into water treatment with how wastewater is treated and utilized.";
    this.playerCardSprite = "course-ENVE422";
    this.opponentCardSprite = "course-ENVE422";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE425 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE425";
    this.displayName = "ENVE425 - Air Pollution Control";
    this.displayDescription = "Study the sources and control of air pollution.";
    this.playerCardSprite = "course-ENVE425";
    this.opponentCardSprite = "course-ENVE425";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE431 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE431";
    this.displayName = "ENVE431 - Fate and Transport of Chemicals in Environmental Systems";
    this.displayDescription = "Fundamentals of organic chemistry and engineering principles in regards to xenobiotic compounds.";
    this.playerCardSprite = "course-ENVE431";
    this.opponentCardSprite = "course-ENVE431";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseGEO221 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseGEO221";
    this.displayName = "GEO221 - Environmental Geology";
    this.displayDescription = "Introdutory geology featuring geologic hazards, resources, and associated problems.";
    this.playerCardSprite = "course-GEO221";
    this.opponentCardSprite = "course-GEO221";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseMB230 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseMB230";
    this.displayName = "MB230 - Introductory Microbiology";
    this.displayDescription = "Learn about microbiology and how it impacts our everyday lives.";
    this.playerCardSprite = "course-MB230";
    this.opponentCardSprite = "course-MB230";
    this.majorCardParent = ["majorENVE"];
  }
}

// ESE Courses
export class CourseBA357 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBA357";
    this.displayName = "BA357 - Operations and Supply Chains";
    this.displayDescription = "An overview of the activites necessary for delivery of goods and services.";
    this.playerCardSprite = "course-BA357";
    this.opponentCardSprite = "course-BA357";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseENGR390 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR390";
    this.displayName = "ENGR390 - Engineering Economy";
    this.displayDescription = "Inquisite the time value of money and study techniques in regards to economics.";
    this.playerCardSprite = "course-ENGR390";
    this.opponentCardSprite = "course-ENGR390";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE330 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE330";
    this.displayName = "ESE330 - Modeling and Analysis of Dynamic Systems";
    this.displayDescription = "Present basic concepts of dynamic behavior and techniques for assessing dynamic behavior.";
    this.playerCardSprite = "course-ESE330";
    this.opponentCardSprite = "course-ESE330";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE355 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE355";
    this.displayName = "ESE355 - Energy Regulation";
    this.displayDescription = "A course for policies and laws in regards to energy generation and transmission within the United States.";
    this.playerCardSprite = "course-ESE355";
    this.opponentCardSprite = "course-ESE355";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE360 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE360";
    this.displayName = "ESE360 - Energy Consumption Analysis";
    this.displayDescription = "Analyze the energy use in key areas such as transportation, residential or industrial sectors to learn how to improve efficiency.";
    this.playerCardSprite = "course-ESE360";
    this.opponentCardSprite = "course-ESE360";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE430 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE430";
    this.displayName = "ESE430 - Feedback Control Systems";
    this.displayDescription = "Understanding linear and continuous time systems in both time and frequency.";
    this.playerCardSprite = "course-ESE430";
    this.opponentCardSprite = "course-ESE430";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE450 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE450";
    this.displayName = "ESE450 - Energy Generation Systems";
    this.displayDescription = "Survey of fundamentals and principles of both conventional and renewable energy conversion systems.";
    this.playerCardSprite = "course-ESE450";
    this.opponentCardSprite = "course-ESE450";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE470 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE470";
    this.displayName = "ESE470 - Energy Distribution Systems";
    this.displayDescription = "Coverage of the electrical energy distribution system";
    this.playerCardSprite = "course-ESE470";
    this.opponentCardSprite = "course-ESE470";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE471 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE471";
    this.displayName = "Energy storage systems";
    this.displayDescription = "Coverage of energy storage techniques down to the electrochemical level.";
    this.playerCardSprite = "course-ESE471";
    this.opponentCardSprite = "course-ESE471";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE497 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE497";
    this.displayName = "ESE497 - MIME Capstone Design";
    this.displayDescription = "Learn product design in a capstone environment with various processes and equipment.";
    this.playerCardSprite = "course-ESE497";
    this.opponentCardSprite = "course-ESE497";
    this.majorCardParent = ["majorESE"];
  }
}

// IE Courses
export class CourseENGR211 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR211";
    this.displayName = "ENGR211 - Statics";
    this.displayDescription = "Analyze loading forces in machines and structures.";
    this.playerCardSprite = "course-ENGR211";
    this.opponentCardSprite = "course-ENGR211";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseENGR212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR212";
    this.displayName = "ENGR212 - Dynamics";
    this.displayDescription = "Learn about kinematics and the laws of motion in regards to engineering systems.";
    this.playerCardSprite = "course-ENGR212";
    this.opponentCardSprite = "course-ENGR212";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE212";
    this.displayName = "IE212 - IE Computational Methods";
    this.displayDescription = "Solve industrial engineering problems with computational methods.";
    this.playerCardSprite = "course-IE212";
    this.opponentCardSprite = "course-IE212";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE355 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE355";
    this.displayName = "IE355 - Quantitve Methods for System Analysis";
    this.displayDescription = "Analyze operational systems by applying statistical inference methods along with various other math utilities such as hypothesis testing or tolerance intervals.";
    this.playerCardSprite = "course-IE355";
    this.opponentCardSprite = "course-IE355";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE366 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE366";
    this.displayName = "IE366 - Work Systems"
    this.displayDescription = "Learn the principles and techniques of work measurement and workplace design, especially in regards to basic human factors such as ergonomics.";
    this.playerCardSprite = "course-IE366";
    this.opponentCardSprite = "course-IE366";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE367 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE367";
    this.displayName = "IE367 - Production Planning and Control"
    this.displayDescription = "Utilize forecasting and inventory analysis for planning production smoothly.";
    this.playerCardSprite = "course-IE367";
    this.opponentCardSprite = "course-IE367";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE412 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE412";
    this.displayName = "IE412 - Infosys Engineering";
    this.displayDescription = "Learn the basic framework for enterprise information systems, or engineering and scientific systems.";
    this.playerCardSprite = "course-IE412";
    this.opponentCardSprite = "course-IE412";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE415";
    this.displayName = "IE415 - Simulation and Decision Support Systems";
    this.displayDescription = "Examine operations and production systems utilizing computer simulation modeling.";
    this.playerCardSprite = "course-IE415";
    this.opponentCardSprite = "course-IE415";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE425 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE425";
    this.displayName = "IE425 - Industrial Systems Optimization";
    this.displayDescription = "Research opterations using methods such as mathematical programming and network optimization.";
    this.playerCardSprite = "course-IE425";
    this.opponentCardSprite = "course-IE425";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE426 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE426";
    this.displayName = "IE426 - Stochastic Models of Industrial Systems";
    this.displayDescription = "Apply probabilistic and stochastic modeling to analyze production and service system performance.";
    this.playerCardSprite = "course-IE426";
    this.opponentCardSprite = "course-IE426";
    this.majorCardParent = ["majorIE"];
  }
}

// ME Courses
export class CourseENGR248 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR248";
    this.displayName = "ENGR248 - Engineering 3D Graphics";
    this.displayDescription = "Learn graphical communication theory such as freehand sketching techniques and apply theoretical concepts in a practical manner using modeling software.";
    this.playerCardSprite = "course-ENGR248";
    this.opponentCardSprite = "course-ENGR248";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME203";
    this.displayName = "ME203 - Engineering Computational Methods";
    this.displayDescription = "Utilize computation to solve engineering problems, translating concepts into data.";
    this.playerCardSprite = "course-ME203";
    this.opponentCardSprite = "course-ME203";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME217 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME217";
    this.displayName = "ME217 - Mechanical Engineering Dynamics";
    this.displayDescription = "Introduces and applies kinematics and kinetics.";
    this.playerCardSprite = "course-ME217";
    this.opponentCardSprite = "course-ME217";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME310";
    this.displayName = "ME310 - Thermodynamics Introductions";
    this.displayDescription = "Introduce the basic concepts of thermodynamics, such as the first and second laws.";
    this.playerCardSprite = "course-ME310";
    this.opponentCardSprite = "course-ME310";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME316 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME316";
    this.displayName = "ME316 - Material Mechanics";
    this.displayDescription = "Determine stresses and stability of deformable bodies.";
    this.playerCardSprite = "course-ME316";
    this.opponentCardSprite = "course-ME316";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME330 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME330";
    this.displayName = "ME330 - Fluid Mechanics and Heat Transfer";
    this.displayDescription = "Apply conservation equations and dimensionl analysis to solve fluid dynamics and heat transfer problems.";
    this.playerCardSprite = "course-ME330";
    this.opponentCardSprite = "course-ME330";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME351 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME351";
    this.displayName = "ME351 - Instrumentation and Measurement"
    this.displayDescription = "Illustrate the uses of mechanical engineering instruments and statistical analysis.";
    this.playerCardSprite = "course-ME351";
    this.opponentCardSprite = "course-ME351";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME373 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME373";
    this.displayName = "ME373 - Mechanical Engineering Methods";
    this.displayDescription = "Explore methods for mechanical engineering problem solving.";
    this.playerCardSprite = "course-ME373";
    this.opponentCardSprite = "course-ME373";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME382 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME382";
    this.displayName = "ME382 - Design Introduction";
    this.displayDescription = "Apply organization, creativity and optimization in mechanical design problems.";
    this.playerCardSprite = "course-ME382";
    this.opponentCardSprite = "course-ME382";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME383 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME383";
    this.displayName = "ME383 - Mechanical Component Design";
    this.displayDescription = "Explore machine design and the steps in taking loads and stresses.";
    this.playerCardSprite = "course-ME383";
    this.opponentCardSprite = "course-ME383";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME412 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME412";
    this.displayName = "ME412 - Design of Mechanisms";
    this.displayDescription = "Explore the study of mechanisms and build upon kinematic analysis with the context of planar and non-planar mechanisms.";
    this.playerCardSprite = "course-ME412";
    this.opponentCardSprite = "course-ME412";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME414 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME414";
    this.displayName = "ME414 - Manufacturing Design";
    this.displayDescription = "Utilize a project-based experience to understand real world design, including advanced techniques and DIY fabrication.";
    this.playerCardSprite = "course-ME414";
    this.opponentCardSprite = "course-ME414";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME420 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME420";
    this.displayName = "ME420 - Applied Stress Analysis";
    this.displayDescription = "Elasticity and failure here.";
    this.playerCardSprite = "course-ME420";
    this.opponentCardSprite = "course-ME420";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME424 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME424";
    this.displayName = "ME424 - Finite Element Analysis of Mechanical Components";
    this.displayDescription = "Apply modern software to mechanical component design.";
    this.playerCardSprite = "course-ME424";
    this.opponentCardSprite = "course-ME424";
    this.majorCardParent = ["majorME"];
  }
}

// NSE Courses
export class CourseNSE234 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE234";
    this.displayName = "NSE234 - Nuclear and Radiation Physics";
    this.displayDescription = "Learn basic nuclear physics, basic quantum mechanics, and more.";
    this.playerCardSprite = "course-NSE234";
    this.opponentCardSprite = "course-NSE234";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE235 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE235";
    this.displayName = "NSE235 - Nuclear and Radiation Physics 2";
    this.displayDescription = "Research radioactivity, neutron-matter iteractions, and more.";
    this.playerCardSprite = "course-NSE235";
    this.opponentCardSprite = "course-NSE235";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE236 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE236";
    this.displayName = "NSE236 - Radiation Detection and Instrumentation";
    this.displayDescription = "Learn principles and mechanisms in regards to nuclear radiation detection and measurements, such as alpha, beta, gamma, and neutron radiation.";
    this.playerCardSprite = "course-NSE236";
    this.opponentCardSprite = "course-NSE236";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE311";
    this.displayName = "NSE311 - Introduction to Thermal-Fluid Sciences";
    this.displayDescription = "Introduce basics of fluid mechanics and thermodynamics, as well as heat transfer.";
    this.playerCardSprite = "course-NSE311";
    this.opponentCardSprite = "course-NSE311";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE331";
    this.displayName = "NSE331 - Fluid Mechanics";
    this.displayDescription = "Introduce fluid mechanics and dimensional analysis in regards to fluid behavior.";
    this.playerCardSprite = "course-NSE331";
    this.opponentCardSprite = "course-NSE331";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE332 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE332";
    this.displayName = "NSE332 - Heat Transfer";
    this.displayDescription = "Analyze various energy transfers such as convective or radiative and learn to predict transport properties.";
    this.playerCardSprite = "course-NSE332";
    this.opponentCardSprite = "course-NSE332";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE415";
    this.displayName = "NSE415 - Nuclear Rules";
    this.displayDescription = "Introducing the nuclear regulatory agencies, as well as legislation surround nuclear technology.";
    this.playerCardSprite = "course-NSE415";
    this.opponentCardSprite = "course-NSE415";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE435 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE435";
    this.displayName = "NSE435 - Radiation Shielding and Dosimetry";
    this.displayDescription = "Principles for shielding neutron and gamma radiation as well as dosimetry fundamentals.";
    this.playerCardSprite = "course-NSE435";
    this.opponentCardSprite = "course-NSE435";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE451 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE451";
    this.displayName = "NSE451 - Neutronic Analysis";
    this.displayDescription = "Study physical models of neutronic systems and nuclear physics.";
    this.playerCardSprite = "course-NSE451";
    this.opponentCardSprite = "course-NSE451";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE452 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE452";
    this.displayName = "NSE452 - Neutronic Analysis 2";
    this.displayDescription = "Learn further about neutronic analysis, including neutron transport and one speed diffusion theory.";
    this.playerCardSprite = "course-NSE452";
    this.opponentCardSprite = "course-NSE452";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE457 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE457";
    this.displayName = "NSE457 - Nuclear Reactor Laboratory";
    this.displayDescription = "Use the OSU TRIGA reactora nd other facilities as you investigate reactor operation.";
    this.playerCardSprite = "course-NSE457";
    this.opponentCardSprite = "course-NSE457";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE467 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE467";
    this.displayName = "NSE467 - Nuclear reactor thermal hydraulics";
    this.displayDescription = "Learn about hydrodynamics and other heat transfers in nuclear reactor systems, along with thermal hydraulics.";
    this.playerCardSprite = "course-NSE467";
    this.opponentCardSprite = "course-NSE467";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE473 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE473";
    this.displayName = "NSE473 - Nuclear Reactor Systems Analysis";
    this.displayDescription = "Analyze the nuclear light water ractor design and operation as well as other related systems such as the nuclear steam supply system.";
    this.playerCardSprite = "course-NSE473";
    this.opponentCardSprite = "course-NSE473";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE474 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE474";
    this.displayName = "NSE474 - Nuclear Systems Design";
    this.displayDescription = "Begin a two part series on developing the ability to transform nuclear concepts into practical designs.";
    this.playerCardSprite = "course-NSE474";
    this.opponentCardSprite = "course-NSE474";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE475";
    this.displayName = "NSE475 - Nuclear Systems Design 2";
    this.displayDescription = "Continue a two part series in which you design advanced nuclear projects while studying concepts such as thermal hydraulics, power production and economic optimization.";
    this.playerCardSprite = "course-NSE475";
    this.opponentCardSprite = "course-NSE475";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE481";
    this.displayName = "NSE481 - Radiation Protection";
    this.displayDescription = "Learn principles and theory for protection against radiation.";
    this.playerCardSprite = "course-NSE481";
    this.opponentCardSprite = "course-NSE481";
    this.majorCardParent = ["majorNSE"];
  }
}

// RHP Courses
export class CourseRHPH310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPH310";
    this.displayName = "H310 - Health Field Experiences";
    this.displayDescription = "Receive an introduction in the health field in this internship, which counts for 3 credit hours.";
    this.playerCardSprite = "course-RHP-H310";
    this.opponentCardSprite = "course-RHP-H310";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPH425 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPH425";
    this.displayName = "H425 - Foundations of Epidemiology";
    this.displayDescription = "Explore the foundations of epidemiology, such as disease frequency or study designs.";
    this.playerCardSprite = "course-RHP-H425";
    this.opponentCardSprite = "course-RHP-H425";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPH445 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPH445";
    this.displayName = "H445 - Occupational Health";
    this.displayDescription = "Learn both current and historical occupational health topics, especially those with human health effects.";
    this.playerCardSprite = "course-RHP-H445";
    this.opponentCardSprite = "course-RHP-H445";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE234 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE234";
    this.displayName = "NSE234 - Nuclear and Radiation Physics";
    this.displayDescription = "Learn basic nuclear physics, basic quantum mechanics, and more.";
    this.playerCardSprite = "course-RHP-NSE234";
    this.opponentCardSprite = "course-RHP-NSE234";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE235 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE235";
    this.displayName = "NSE235 - Nuclear and Radiation Physics 2";
    this.displayDescription = "Research radioactivity, neutron-matter iteractions, and more.";
    this.playerCardSprite = "course-RHP-NSE235";
    this.opponentCardSprite = "course-RHP-NSE235";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE236 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE236";
    this.displayName = "NSE236 - Radiation Detection and Instrumentation";
    this.displayDescription = "Learn principles and mechanisms in regards to nuclear radiation detection and measurements, such as alpha, beta, gamma, and neutron radiation.";
    this.playerCardSprite = "course-RHP-NSE236";
    this.opponentCardSprite = "course-RHP-NSE236";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE319 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE319";
    this.displayName = "NSE319 - Societal Aspects of Nuclear Tech";
    this.displayDescription = "Discuss nuclear-related issues and events as they leave a societal impact.";
    this.playerCardSprite = "course-RHP-NSE319";
    this.opponentCardSprite = "course-RHP-NSE319";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE415";
    this.displayName = "NSE415 - Nuclear Rules";
    this.displayDescription = "Introducing the nuclear regulatory agencies, as well as legislation surround nuclear technology.";
    this.playerCardSprite = "course-RHP-NSE415";
    this.opponentCardSprite = "course-RHP-NSE415";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE435 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE435";
    this.displayName = "NSE435 - Radiation Shielding and Dosimetry";
    this.displayDescription = "Principles for shielding neutron and gamma radiation as well as dosimetry fundamentals.";
    this.playerCardSprite = "course-RHP-NSE435";
    this.opponentCardSprite = "course-RHP-NSE435";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE474 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE474";
    this.displayName = "NSE474 - Nuclear Systems Design";
    this.displayDescription = "Begin a two part series on developing the ability to transform nuclear concepts into practical designs.";
    this.playerCardSprite = "course-RHP-NSE474";
    this.opponentCardSprite = "course-RHP-NSE474";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE475";
    this.displayName = "NSE475 - Nuclear Systems Design 2";
    this.displayDescription = "Continue a two part series in which you design advanced nuclear projects while studying concepts such as thermal hydraulics, power production and economic optimization.";
    this.playerCardSprite = "course-RHP-NSE475";
    this.opponentCardSprite = "course-RHP-NSE475";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE481";
    this.displayName = "NSE481 - Radiation Protection";
    this.displayDescription = "Learn principles and theory for protection against radiation.";
    this.playerCardSprite = "course-RHP-NSE481";
    this.opponentCardSprite = "course-RHP-NSE481";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE483 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE483";
    this.displayName = "NSE483 - Radiation Biology";
    this.displayDescription = "Study radiation and its biological effects at molecular and cellular levels.";
    this.playerCardSprite = "course-RHP-NSE483";
    this.opponentCardSprite = "course-RHP-NSE483";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE488 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE488";
    this.displayName = "NSE488 - Radioecology";
    this.displayDescription = "Learn about radionuclides in the environment, how they progress through food chains, and their effect on plants and animals.";
    this.playerCardSprite = "course-RHP-NSE488";
    this.opponentCardSprite = "course-RHP-NSE488";
    this.majorCardParent = ["majorRHP"];
  }
}
