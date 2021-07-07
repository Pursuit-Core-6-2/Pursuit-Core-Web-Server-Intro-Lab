const http = require("http");
const port1 = 3000;
const port2 = 3100;

const requestHandlerUsers = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const user = {
    results: [
      {
        gender: "female",
        name: {
          title: "mademoiselle",
          first: "ruth",
          last: "nicolas",
        },
        nat: "CH",
      },
      {
        gender: "female",
        name: {
          title: "miss",
          first: "رها",
          last: "سلطانی نژاد",
        },
        nat: "IR",
      },
      {
        gender: "female",
        name: {
          title: "mrs",
          first: "patricia",
          last: "hale",
        },
        nat: "GB",
      },
      {
        gender: "male",
        name: {
          title: "mr",
          first: "fernando",
          last: "cooper",
        },
        nat: "US",
      },
      {
        gender: "female",
        name: {
          title: "mrs",
          first: "یسنا",
          last: "صدر",
        },
        nat: "IR",
      },
      {
        gender: "male",
        name: {
          title: "mr",
          first: "eino",
          last: "tuomala",
        },
        nat: "FI",
      },
      {
        gender: "female",
        name: {
          title: "ms",
          first: "gonca",
          last: "özkara",
        },
        nat: "TR",
      },
      {
        gender: "male",
        name: {
          title: "mr",
          first: "kyle",
          last: "castillo",
        },
        nat: "US",
      },
      {
        gender: "female",
        name: {
          title: "miss",
          first: "olivia",
          last: "kumar",
        },
        nat: "NZ",
      },
      {
        gender: "male",
        name: {
          title: "monsieur",
          first: "raymond",
          last: "durand",
        },
        nat: "CH",
      },
    ],
  };
  const data = JSON.stringify(user);
  res.end(data);
};

const requestHandlerTrivia = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const trivia = {
    response_code: 0,
    results: [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "HTML is what type of language?",
        correct_answer: "Markup Language",
        incorrect_answers: [
          "Macro Language",
          "Programming Language",
          "Scripting Language",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "In computing terms, typically what does CLI stand for?",
        correct_answer: "Command Line Interface",
        incorrect_answers: [
          "Common Language Input",
          "Control Line Interface",
          "Common Language Interface",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does &quot;LCD&quot; stand for?",
        correct_answer: "Liquid Crystal Display",
        incorrect_answers: [
          "Language Control Design",
          "Last Common Difference",
          "Long Continuous Design",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "Which operating system was released first?",
        correct_answer: "Mac OS",
        incorrect_answers: ["Windows", "Linux", "OS/2"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
          "What does the International System of Quantities refer 1024 bytes as?",
        correct_answer: "Kibibyte",
        incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which programming language was developed by Sun Microsystems in 1995?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "Solaris OS", "C++"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
          "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
        correct_answer: "Transport",
        incorrect_answers: ["Session", "Data link", "Network"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
        correct_answer: "Injection ",
        incorrect_answers: [
          "Broken Authentication",
          "Cross-Site Scripting",
          "Insecure Direct Object References",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does RAID stand for?",
        correct_answer: "Redundant Array of Independent Disks",
        incorrect_answers: [
          "Rapid Access for Indexed Devices",
          "Range of Applications with Identical Designs",
          "Randomized Abstract Identification Description",
        ],
      },
    ],
  };
  const data = JSON.stringify(trivia);
  res.end(data);
};

const server1 = http.createServer(requestHandlerUsers);
const server2 = http.createServer(requestHandlerTrivia);

server1.listen(port1, () => {
  console.log(`Server running on http:localhost:${port1}`);
});

server2.listen(port2, () => {
  console.log(`Server running on http:localhost:${port2}`);
});
