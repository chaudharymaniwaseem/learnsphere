// Reserved for future use// ══════════════════════════════════════════════════════
//  LearnSphere — Seed Content Database
//  Later this will move to Firestore (Firebase)
// ══════════════════════════════════════════════════════

export const FIELDS = [
  { id: 'se', name: 'Software Engineering', icon: '💻' },
  { id: 'cs', name: 'Computer Science', icon: '🧮' },
  { id: 'medical', name: 'Medical & Health', icon: '🩺' },
  { id: 'business', name: 'Business', icon: '📈' },
  { id: 'engineering', name: 'Engineering', icon: '⚙️' },
  { id: 'languages', name: 'Languages', icon: '🗣️' },
];

export const CONTENT = {
  se: {
    name: 'Software Engineering',
    icon: '💻',
    subjects: [
      {
        id: 'js',
        name: 'JavaScript',
        icon: '🟨',
        desc: 'The language of the web',
        topics: [
          {
            id: 'js-basics',
            title: 'JavaScript Basics',
            level: 'Beginner',
            duration: '25 min',
            notes: `VARIABLES
Use let, const, and (avoid) var to declare variables.

DATA TYPES
String, Number, Boolean, Object, Array, Null, Undefined, Symbol, BigInt.

FUNCTIONS
Reusable blocks of code:
  function greet() { return 'Hi'; }

OPERATORS
+ - * / %  and comparison === !== > <

CONDITIONS
if (x > 5) { ... } else if (x > 0) { ... } else { ... }`,
            videos: [
              { title: 'JavaScript Basics for Beginners', dur: '18 min', url: 'https://www.youtube.com/results?search_query=javascript+basics' },
              { title: 'Variables & Data Types Explained', dur: '12 min', url: 'https://www.youtube.com/results?search_query=javascript+variables' },
            ],
            practice: [
              'Declare a constant PI = 3.14',
              'Write a function add(a, b) that returns the sum',
              'Create an array of 5 fruits and print them',
            ],
            quiz: [
              { q: 'Which keyword declares a constant in JavaScript?', options: ['var', 'let', 'const', 'static'], answer: 2, explain: 'const declares a block-scoped constant.' },
              { q: 'typeof "hello" returns?', options: ['string', 'text', 'char', 'object'], answer: 0, explain: 'Strings return "string".' },
              { q: 'Which method adds to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], answer: 0, explain: 'push() appends to the end.' },
            ],
          },
          {
            id: 'js-dom',
            title: 'DOM Manipulation',
            level: 'Intermediate',
            duration: '30 min',
            notes: `THE DOM
Document Object Model — a tree of your HTML that JS can read/modify.

SELECTING ELEMENTS
  document.getElementById('id')
  document.querySelector('.class')

EVENTS
  element.addEventListener('click', handler)

MODIFYING
  el.textContent = 'New text'
  el.style.color = 'red'`,
            videos: [
              { title: 'DOM Crash Course', dur: '25 min', url: 'https://www.youtube.com/results?search_query=dom+manipulation' },
            ],
            practice: [
              'Change text of an h1 on button click',
              'Create a list item dynamically',
            ],
            quiz: [
              { q: 'Which selects the first matching element?', options: ['getElementById', 'querySelector', 'getElementsByClassName', 'all()'], answer: 1, explain: 'querySelector returns the first match.' },
              { q: 'Which adds an event listener?', options: ['onEvent()', 'addEventListener()', 'listen()', 'bind()'], answer: 1, explain: 'addEventListener is the modern standard.' },
            ],
          },
          {
            id: 'js-async',
            title: 'Async JavaScript',
            level: 'Advanced',
            duration: '35 min',
            notes: `CALLBACKS → PROMISES → ASYNC/AWAIT

PROMISE
  fetch(url).then(res => res.json())

ASYNC/AWAIT
  async function load() {
    const res = await fetch(url);
    const data = await res.json();
  }`,
            videos: [
              { title: 'Async JavaScript Explained', dur: '20 min', url: 'https://www.youtube.com/results?search_query=async+await+javascript' },
            ],
            practice: ['Fetch data from a public API', 'Chain two promises'],
            quiz: [
              { q: 'Which keyword pauses execution until a promise resolves?', options: ['wait', 'await', 'pause', 'sync'], answer: 1, explain: 'await pauses the async function.' },
            ],
          },
        ],
      },
      {
        id: 'db',
        name: 'Database Systems',
        icon: '🗄️',
        desc: 'Store and query data',
        topics: [
          {
            id: 'sql-basics',
            title: 'SQL Basics',
            level: 'Beginner',
            duration: '30 min',
            notes: `WHAT IS SQL?
Structured Query Language for relational databases.

SELECT
  SELECT * FROM users WHERE age > 18;

INSERT
  INSERT INTO users (name, age) VALUES ('Ali', 20);

UPDATE
  UPDATE users SET age = 21 WHERE name = 'Ali';

DELETE
  DELETE FROM users WHERE id = 5;`,
            videos: [
              { title: 'SQL in 1 Hour', dur: '60 min', url: 'https://www.youtube.com/results?search_query=sql+tutorial' },
            ],
            practice: ['Write a SELECT query', 'Insert a new row', 'Update a value'],
            quiz: [
              { q: 'Which clause filters rows?', options: ['SELECT', 'WHERE', 'ORDER BY', 'GROUP BY'], answer: 1, explain: 'WHERE filters rows before grouping.' },
              { q: 'Which JOIN returns only matching rows?', options: ['LEFT', 'RIGHT', 'INNER', 'FULL'], answer: 2, explain: 'INNER JOIN returns only matching rows.' },
            ],
          },
          {
            id: 'sql-joins',
            title: 'SQL Joins',
            level: 'Intermediate',
            duration: '25 min',
            notes: `JOIN TYPES
INNER — only matching rows
LEFT — all left + matching right
RIGHT — all right + matching left
FULL — all rows from both sides

EXAMPLE
  SELECT u.name, o.total
  FROM users u
  INNER JOIN orders o ON o.user_id = u.id;`,
            videos: [
              { title: 'SQL Joins Explained', dur: '22 min', url: 'https://www.youtube.com/results?search_query=sql+joins' },
            ],
            practice: ['Join users and orders', 'Use LEFT JOIN to find users with no orders'],
            quiz: [
              { q: 'Which JOIN keeps all rows from the left table?', options: ['INNER', 'LEFT', 'RIGHT', 'CROSS'], answer: 1, explain: 'LEFT JOIN keeps all left-side rows.' },
            ],
          },
        ],
      },
      {
        id: 'web',
        name: 'Web Development',
        icon: '🌐',
        desc: 'HTML, CSS, and modern frameworks',
        topics: [
          {
            id: 'html-basics',
            title: 'HTML Fundamentals',
            level: 'Beginner',
            duration: '20 min',
            notes: `HTML STRUCTURE
  <!DOCTYPE html>
  <html>
    <head><title>Page</title></head>
    <body><h1>Hello</h1></body>
  </html>

COMMON TAGS
h1-h6, p, div, span, a, img, ul, li, button, input, form`,
            videos: [
              { title: 'HTML Crash Course', dur: '30 min', url: 'https://www.youtube.com/results?search_query=html+tutorial' },
            ],
            practice: ['Create a simple webpage with a heading and paragraph'],
            quiz: [
              { q: 'Which tag creates a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], answer: 1, explain: '<a> creates links.' },
            ],
          },
          {
            id: 'css-basics',
            title: 'CSS Fundamentals',
            level: 'Beginner',
            duration: '25 min',
            notes: `CSS SYNTAX
  selector {
    property: value;
  }

SELECTORS
.class, #id, tag, [attr]

BOX MODEL
content → padding → border → margin`,
            videos: [
              { title: 'CSS Crash Course', dur: '40 min', url: 'https://www.youtube.com/results?search_query=css+tutorial' },
            ],
            practice: ['Style a button with color and padding'],
            quiz: [
              { q: 'Which property changes text color?', options: ['font-color', 'text-color', 'color', 'text-style'], answer: 2, explain: 'The color property changes text color.' },
            ],
          },
        ],
      },
    ],
  },

  medical: {
    name: 'Medical & Health',
    icon: '🩺',
    subjects: [
      {
        id: 'anatomy',
        name: 'Anatomy',
        icon: '🦴',
        desc: 'Structure of the human body',
        topics: [
          {
            id: 'skeletal',
            title: 'Skeletal System',
            level: 'Beginner',
            duration: '30 min',
            notes: `OVERVIEW
The adult human skeleton has 206 bones.

FUNCTIONS
• Support
• Protection (skull, ribs)
• Movement (with muscles)
• Mineral storage (calcium)
• Blood cell production (bone marrow)

REGIONS
Axial skeleton (80 bones): skull, spine, ribcage
Appendicular skeleton (126 bones): limbs, girdles`,
            videos: [
              { title: 'Skeletal System Overview', dur: '15 min', url: 'https://www.youtube.com/results?search_query=skeletal+system' },
            ],
            practice: ['Name the 5 regions of the vertebral column', 'Identify the longest bone'],
            quiz: [
              { q: 'How many bones in adult human body?', options: ['186', '206', '226', '246'], answer: 1, explain: 'Adults have 206 bones.' },
              { q: 'Longest bone in the body?', options: ['Tibia', 'Femur', 'Humerus', 'Fibula'], answer: 1, explain: 'The femur is the longest.' },
            ],
          },
          {
            id: 'cardiovascular',
            title: 'Cardiovascular System',
            level: 'Beginner',
            duration: '25 min',
            notes: `THE HEART
4 chambers: 2 atria (top), 2 ventricles (bottom).

BLOOD FLOW
Right atrium → right ventricle → lungs → left atrium → left ventricle → body

BLOOD VESSELS
Arteries — carry blood AWAY from heart
Veins — carry blood TO heart
Capillaries — exchange site`,
            videos: [
              { title: 'Cardiovascular System', dur: '18 min', url: 'https://www.youtube.com/results?search_query=cardiovascular+system' },
            ],
            practice: ['Trace blood flow through the heart'],
            quiz: [
              { q: 'How many chambers does the human heart have?', options: ['2', '3', '4', '5'], answer: 2, explain: 'The heart has 4 chambers.' },
            ],
          },
        ],
      },
    ],
  },

  business: {
    name: 'Business',
    icon: '📈',
    subjects: [
      {
        id: 'marketing',
        name: 'Marketing',
        icon: '📣',
        desc: 'Reaching and persuading customers',
        topics: [
          {
            id: 'mkt-basics',
            title: 'Marketing Fundamentals',
            level: 'Beginner',
            duration: '25 min',
            notes: `THE 4 Ps
• Product — what you sell
• Price — what you charge
• Place — where you sell
• Promotion — how you tell people

STP FRAMEWORK
Segmentation — divide market
Targeting — choose segments
Positioning — how you want to be seen`,
            videos: [
              { title: 'Marketing 101', dur: '20 min', url: 'https://www.youtube.com/results?search_query=marketing+basics' },
            ],
            practice: ['Define 4 Ps with examples for a coffee brand'],
            quiz: [
              { q: 'Which is NOT one of the 4 Ps?', options: ['Product', 'Price', 'People', 'Promotion'], answer: 2, explain: 'Classic 4 Ps: Product, Price, Place, Promotion.' },
            ],
          },
        ],
      },
    ],
  },

  engineering: {
    name: 'Engineering',
    icon: '⚙️',
    subjects: [],
  },

  cs: {
    name: 'Computer Science',
    icon: '🧮',
    subjects: [],
  },

  languages: {
    name: 'Languages',
    icon: '🗣️',
    subjects: [],
  },
};

// Helper — get all subjects across all fields (for search)
export function getAllSubjects() {
  const result = [];
  Object.entries(CONTENT).forEach(([fieldId, field]) => {
    (field.subjects || []).forEach(subj => {
      result.push({ ...subj, fieldId, fieldName: field.name });
    });
  });
  return result;
}

// Helper — find a subject by id
export function findSubject(subjectId) {
  for (const [fieldId, field] of Object.entries(CONTENT)) {
    const subj = (field.subjects || []).find(s => s.id === subjectId);
    if (subj) return { ...subj, fieldId, fieldName: field.name };
  }
  return null;
}

// Helper — find a topic by id
export function findTopic(topicId) {
  for (const [fieldId, field] of Object.entries(CONTENT)) {
    for (const subj of (field.subjects || [])) {
      const topic = subj.topics.find(t => t.id === topicId);
      if (topic) return { ...topic, subject: subj, fieldId, fieldName: field.name };
    }
  }
  return null;
}