export const courses = [
  {
    id: 1,
    code: "CSE101",
    title: "Introduction to Computer Science",
    credits: 3,
    instructor: "Dr. Md. Abdur Rahman",
    semester: "1st Year 1st Semester",
    description:
      "This course provides an introduction to the field of computer science, covering basic concepts, history of computing, and an overview of different areas within computer science.",
    prerequisites: [],
    outcomes: [
      "Understand the basic concepts and terminology of computer science",
      "Recognize the historical development of computing",
      "Identify different areas within computer science and their applications",
    ],
    syllabus: [
      "History of Computing",
      "Binary and Number Systems",
      "Introduction to Programming Concepts",
      "Data Representation",
      "Basic Computer Architecture",
      "Introduction to Algorithms",
      "Overview of Operating Systems",
      "Introduction to Databases",
      "Introduction to Networks",
      "Ethical Issues in Computing",
    ],
  },
  {
    id: 2,
    code: "CSE102",
    title: "Structured Programming",
    credits: 4,
    instructor: "Dr. Farzana Akter",
    semester: "1st Year 1st Semester",
    description:
      "This course introduces students to structured programming concepts using C programming language, focusing on problem-solving techniques and algorithm development.",
    prerequisites: [],
    outcomes: [
      "Write well-structured programs using C",
      "Apply problem-solving techniques to develop algorithms",
      "Implement data structures using C",
      "Debug and test programs effectively",
    ],
    syllabus: [
      "Introduction to C Programming",
      "Variables, Data Types, and Operators",
      "Control Structures (if, switch, loops)",
      "Functions and Modular Programming",
      "Arrays and Strings",
      "Pointers",
      "Structures and Unions",
      "File Handling",
      "Dynamic Memory Allocation",
      "Recursion",
    ],
  },
  {
    id: 3,
    code: "CSE203",
    title: "Data Structures",
    credits: 4,
    instructor: "Dr. Kamal Hossain",
    semester: "2nd Year 1st Semester",
    description:
      "This course covers fundamental data structures and algorithms for organizing, searching, and sorting data, with implementation in C/C++.",
    prerequisites: ["CSE102"],
    outcomes: [
      "Understand various data structures and their applications",
      "Analyze the efficiency of algorithms using Big O notation",
      "Implement common data structures in C/C++",
      "Select appropriate data structures for specific problems",
    ],
    syllabus: [
      "Algorithm Analysis and Big O Notation",
      "Arrays and Linked Lists",
      "Stacks and Queues",
      "Trees (Binary Trees, Binary Search Trees, AVL Trees)",
      "Heaps and Priority Queues",
      "Hash Tables",
      "Graphs and Graph Algorithms",
      "Sorting Algorithms",
      "Searching Algorithms",
      "Advanced Data Structures",
    ],
  },
  {
    id: 4,
    code: "CSE205",
    title: "Object-Oriented Programming",
    credits: 4,
    instructor: "Dr. Nusrat Jahan",
    semester: "2nd Year 1st Semester",
    description:
      "This course introduces object-oriented programming concepts using Java, focusing on classes, objects, inheritance, polymorphism, and encapsulation.",
    prerequisites: ["CSE102"],
    outcomes: [
      "Understand object-oriented programming concepts",
      "Design and implement classes and objects in Java",
      "Apply inheritance, polymorphism, and encapsulation",
      "Develop GUI applications using Java",
    ],
    syllabus: [
      "Introduction to OOP Concepts",
      "Classes and Objects",
      "Constructors and Destructors",
      "Inheritance and Polymorphism",
      "Abstraction and Encapsulation",
      "Interfaces and Abstract Classes",
      "Exception Handling",
      "File I/O in Java",
      "Collections Framework",
      "Introduction to GUI Programming",
    ],
  },
  {
    id: 5,
    code: "CSE301",
    title: "Design and Analysis of Algorithms",
    credits: 3,
    instructor: "Dr. Kamal Hossain",
    semester: "3rd Year 1st Semester",
    description:
      "This course focuses on the design and analysis of efficient algorithms, covering various algorithm design techniques and computational complexity.",
    prerequisites: ["CSE203"],
    outcomes: [
      "Analyze the efficiency of algorithms",
      "Apply different algorithm design techniques",
      "Understand computational complexity theory",
      "Design efficient algorithms for various problems",
    ],
    syllabus: [
      "Algorithm Analysis and Asymptotic Notation",
      "Divide and Conquer Algorithms",
      "Greedy Algorithms",
      "Dynamic Programming",
      "Graph Algorithms",
      "Network Flow Algorithms",
      "NP-Completeness",
      "Approximation Algorithms",
      "Randomized Algorithms",
      "Advanced Topics in Algorithms",
    ],
  },
  {
    id: 6,
    code: "CSE303",
    title: "Database Management Systems",
    credits: 4,
    instructor: "Dr. Farzana Akter",
    semester: "3rd Year 1st Semester",
    description:
      "This course covers the principles and practices of database management systems, focusing on relational databases, SQL, and database design.",
    prerequisites: ["CSE203"],
    outcomes: [
      "Design and implement relational database schemas",
      "Write complex SQL queries",
      "Apply normalization techniques",
      "Understand transaction processing and concurrency control",
    ],
    syllabus: [
      "Introduction to Database Systems",
      "Entity-Relationship Model",
      "Relational Model and Algebra",
      "SQL: Data Definition and Manipulation",
      "Database Design and Normalization",
      "Transaction Processing",
      "Concurrency Control",
      "Database Recovery",
      "Query Optimization",
      "NoSQL Databases",
    ],
  },
  {
    id: 7,
    code: "CSE305",
    title: "Computer Networks",
    credits: 4,
    instructor: "Dr. Tanvir Ahmed",
    semester: "3rd Year 2nd Semester",
    description:
      "This course covers the principles and practices of computer networks, focusing on network architectures, protocols, and applications.",
    prerequisites: ["CSE203"],
    outcomes: [
      "Understand network architectures and protocols",
      "Analyze network performance",
      "Configure basic network devices",
      "Design simple network solutions",
    ],
    syllabus: [
      "Introduction to Computer Networks",
      "Physical Layer and Data Link Layer",
      "Network Layer and IP Addressing",
      "Transport Layer Protocols (TCP/UDP)",
      "Application Layer Protocols",
      "Network Security",
      "Wireless Networks",
      "Software-Defined Networking",
      "Cloud Networking",
      "Future of Networking",
    ],
  },
  {
    id: 8,
    code: "CSE307",
    title: "Software Engineering",
    credits: 3,
    instructor: "Dr. Nusrat Jahan",
    semester: "3rd Year 2nd Semester",
    description:
      "This course covers the principles and practices of software engineering, focusing on software development methodologies, requirements engineering, design, testing, and project management.",
    prerequisites: ["CSE205"],
    outcomes: [
      "Apply software development methodologies",
      "Gather and analyze software requirements",
      "Design software architectures",
      "Test and validate software systems",
    ],
    syllabus: [
      "Software Development Life Cycle",
      "Agile and Traditional Methodologies",
      "Requirements Engineering",
      "Software Design Principles",
      "Software Architecture",
      "Software Testing",
      "Software Quality Assurance",
      "Project Management",
      "Software Maintenance",
      "DevOps and Continuous Integration",
    ],
  },
]
