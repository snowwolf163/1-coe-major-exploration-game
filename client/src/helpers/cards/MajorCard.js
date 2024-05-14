import Card from "./Card.js";

export class MajorCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCard";
    this.displayName = "Major Card";
    this.displayDescription = "test description";
    this.playerCardSprite = "major-card";
    this.opponentCardSprite = "major-card";
  }
}

export class MajorARE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorARE";
    this.displayName = "Architectural Engineering";
    this.displayDescription = "Architectural engineering is the application of engineering fundamentals to the design of buildings and building systems. In the architectural engineering program, you'll have the chance to learn how to design buildings that are not only visually stunning but also safe, energy-efficient, and supportive of the health and well-being of those who occupy them. You'll gain a deep understanding of electrical, lighting, mechanical, and structural system and learn how building systems interact with each other. With a focus on sustainability and high-performance buildings, you'll be at the forefront of shaping the built environment for a better future. Upon graduation, you'll have highly sought-after skills and the ability to collaborate with architects, urban planners, and civil engineers to bring your visions to life.";
    this.playerCardSprite = "major-ARE";
    this.opponentCardSprite = "major-ARE";
  }
}

export class MajorBEE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorBEE";
    this.displayName = "Ecological Engineering";
    this.displayDescription = "Ecological engineering focuses on integrating human activities into the natural environment to the benefit of both. Ecological engineers emphasize ecological diversity, resilience, and adaptation to maintain sustainability and balance. Their aim is to simultaneously sustain human activities and protect the world in which they occur. They engage in many activities geared to help humans flourish within the natural world, such as restoring rivers and wetlands, improving agricultural water quality, rehabilitating abandoned mines, addressing climate change, designing sustainable industrial and agricultural systems, and recharging aquifers.";
    this.playerCardSprite = "major-BEE";
    this.opponentCardSprite = "major-BEE";
  }
}

export class MajorBIOE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorBIOE";
    this.displayName = "Bioengineering";
    this.displayDescription =
      "Make a difference to human health by studying bioengineering. In this interdisciplinary field, you'll combine biology and engineering to create new materials, devices, and processes for medical applications and biotech industries. You'll learn from leading experts in the field and have opportunities to discover applications in precision health, medical device development, cancer treatment, and more. With a solid foundation in biology, chemistry, physics, and math, underpinning advanced coursework in bioengineering principles, you'll be prepared for a career at the nexus of living systems and human design.";
    this.playerCardSprite = "major-BIOE";
    this.opponentCardSprite = "major-BIOE";
  }
}

export class MajorCE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCE";
    this.displayName = "Civil Engineering";
    this.displayDescription = "As a civil engineer, you'll play a crucial role in designing and maintaining essential public works like roads, bridges, water supply systems, and more. In this program, you'll gain a solid foundation in basic sciences, social sciences, humanities, and engineering sciences and have the flexibility to delve deeper into areas that interest you the most. From geospatial engineering to structural design, transportation engineering to computer programming, studying this major offers advanced coursework to equip you with the skills you need to succeed in this in-demand and rewarding field.";
    this.playerCardSprite = "major-CE";
    this.opponentCardSprite = "major-CE";
  }
}

export class MajorCEM extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCEM";
    this.displayName = "Construction Engineering Management";
    this.displayDescription = "Combine technical knowledge with leadership skills in the construction engineering management program. As a construction engineering manager, you'll bring building projects to life, from homes to commercial buildings, roads to bridges and more. You'll be a versatile problem-solver, ensuring that projects are completed safely, on time, and within budget.";
    this.playerCardSprite = "major-CEM";
    this.opponentCardSprite = "major-CEM";
  }
}

export class MajorCHE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCHE";
    this.displayName = "Chemical Engineering";
    this.displayDescription = "As a chemical engineer, you'll have the power to develop cutting-edge processes that transform matter into useful products, from pharmaceuticals and fuels to semiconductors and nanoparticles. Our program will equip you with a solid foundation in chemistry, thermodynamics, and engineering, underpinning advanced coursework in mass transfer operations, chemical reaction engineering, and chemical plant design. With diverse faculty working on game-changing research, you'll have ample opportunities to explore the many applications of this dynamic field. After graduation, go on to create solutions for global challenges such as renewable energy, carbon capture, clean water, and the development of sustainable and recyclable materials.";
    this.playerCardSprite = "major-CHE";
    this.opponentCardSprite = "major-CHE";
  }
}

export class MajorCS extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCS";
    this.displayName = "Computer Science";
    this.displayDescription = "As a computer science student, you'll learn to use algorithms to develop software and design solutions to real-world problems. Choose between two concentrations: an applied curriculum that lets you customize your academic pathway based on your interests and career goals or a systems curriculum that focuses on developing software and preparing you for an advanced computer science degree.";
    this.playerCardSprite = "major-CS";
    this.opponentCardSprite = "major-CS";
  }
}

export class MajorECS extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorECS";
    this.displayName = "Electrical and Computer Engineering";
    this.displayDescription = "Transform the world in virtually any industry as an electrical and computer engineer. As an electrical and computer engineering student at Oregon State, you'll learn to design, build, and support new technologies while refining existing systems, processes, and products. You'll benefit from one of the most innovative and hands-on undergraduate degree programs in the Pacific Northwest, with expert faculty and a cutting-edge curriculum. Paid internships will provide you with the skills to contribute to industries as diverse as agriculture, environmental monitoring, forestry, robotics, and beyond.";
    this.playerCardSprite = "major-ECS";
    this.opponentCardSprite = "major-ECS";
  }
}

export class MajorENVE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorENVE";
    this.displayName = "Environmental Engineering";
    this.displayDescription = "As an environmental engineer, you'll develop new solutions to ensure clean water, air and soil for the health of humans and the environment. This major will teach you how to treat tap water and wastewater, manage stormwater, and protect surface and groundwater sources. With a solid background in chemistry, biology, microbiology and core engineering classes, you will be well-prepared to tackle real-world challenges. After graduation, you'll go on to design technologies to reduce and clean up pollution, recycle waste products, prevent contamination of our water and food supply, and preserve natural resources and habitats.";
    this.playerCardSprite = "major-ENVE";
    this.opponentCardSprite = "major-ENVE";
  }
}

export class MajorESC extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorESC";
    this.displayName = "Engineering Science";
    this.displayDescription = "Engineering science is broad, interdisciplinary field bridging the gap between scientific theory and engineering applications. It emphasizes the integration of mathematics, science, engineering, and the arts. Engineering scientists apply scientific principles and practices to engineering. They work in diverse fields such as biotechnology, chemistry, environmental science, and construction, combining their engineering skills and science knowledge to create solutions for the industry in which they work.";
    this.playerCardSprite = "major-ESC";
    this.opponentCardSprite = "major-ESC";
  }
}

export class MajorESE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorESE";
    this.displayName = "Energy Systems Engineering";
    this.displayDescription = "Studying this major, you'll gain knowledge and skills to tackle the global challenge of sustainable energy consumption and management. The multidisciplinary program, located at the OSU-Cascades campus, combines engineering fundamentals, energy-focused technical classes, basic science and math, and business management courses. You will be part of a community of students and faculty dedicated to positively improving the world through cutting-edge research and education. After graduation, you will have the opportunities to work in the public or private sector and on a wide range of projects, such as improving industrial energy efficiency, developing innovative fuel-cell technology, managing renewable energy resources, and assessing their environmental impact.";
    this.playerCardSprite = "major-ESE";
    this.opponentCardSprite = "major-ESE";
  }
}

export class MajorIE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorIE";
    this.displayName = "Industrial Engineering";
    this.displayDescription = "Industrial engineers work in a wide range of applications, from manufacturing to distribution, transportation and service industries. Industrial engineering blends physical and social sciences knowledge with engineering principles. You'll learn from experts how to design, implement, manage, and enhance complicated organizational processes and systems that involve people, materials, information, equipment, energy, and other components. With this degree, you can tailor your program of study to meet your individual career goals.";
    this.playerCardSprite = "major-IE";
    this.opponentCardSprite = "major-IE";
  }
}

export class MajorME extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorME";
    this.displayName = "Mechanical Engineering";
    this.displayDescription = "Mechanical engineering focuses on designing and developing all types of devices and systems that move. You could be at the forefront of the world's most exciting industries, including aerospace, automotive, robotics, biotechnology, and energy systems. As a mechanical engineering student at Oregon State, you'll receive a comprehensive education with a solid foundation in mathematics, science, and computer science, along with an emphasis on creative problem-solving and design. You'll gain practical experience through classroom projects that will challenge you to invent solutions to real-world problems.";
    this.playerCardSprite = "major-ME";
    this.opponentCardSprite = "major-ME";
  }
}

export class MajorNSE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorNSE";
    this.displayName = "Nuclear Engineering";
    this.displayDescription = "Nuclear engineering focuses on understanding and using nuclear power to provide carbon-free electricity and to produce and use radiation and radioactive materials. Nuclear engineers research and develop new reactor and radiation shielding designs, advanced computational techniques, nuclear fuel recycling and management strategies, and radioisotope technologies for use in research, medicine, industry, and national security.";
    this.playerCardSprite = "major-NSE";
    this.opponentCardSprite = "major-NSE";
  }
}

export class MajorRHP extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorRHP";
    this.displayName = "Radiation Health Physics";
    this.displayDescription = "Radiation health physics involves the study of ionizing radiation and developing systems and methods to protect people and their environments from radiation’s hazards. Radiation health physicists protect us from the potential dangers of exposure to radiation. Their responsibilities may include managing radiation safety at nuclear plants and hospitals; designing radiation shields for industrial and medical applications; designing sophisticated radiation detection systems; researching the effects of radiation on the environment; and providing radiation protection training. Their role is essential to society’s well-being.";
    this.playerCardSprite = "major-RHP";
    this.opponentCardSprite = "major-RHP";
  }
}
