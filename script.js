// Data for topics and their content

const topicsContent = {

  "grammar": {

    title: "Grammar and Sentence Structure",

    description: "Understand the rules of grammar and how to construct meaningful sentences.",

    keyConcepts: [

      "Parts of speech",

      "Tenses and verb agreement",

      "Sentence structure",

      "Common grammatical errors"

    ],

    lecture: `

      <h2>Grammar and Sentence Structure</h2>

      <div class="image-container">

        <img src="images/grammar.jpg" alt="Grammar and Sentence Structure" />

      </div>

      <p>Grammar is the set of rules that govern the structure of sentences in a language. Mastering grammar ensures effective communication.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Parts of Speech:</strong> Understand nouns, verbs, adjectives, and more.</li>

        <li><strong>Tenses and Verb Agreement:</strong> Learn the correct use of past, present, and future tenses.</li>

        <li><strong>Sentence Structure:</strong> Build meaningful and grammatically correct sentences.</li>

        <li><strong>Common Errors:</strong> Identify and correct frequent grammar mistakes.</li>

      </ul>

    `

  },

  "comprehension": {

    title: "Comprehension and Summary Writing",

    description: "Learn to read, interpret, and summarize texts effectively.",

    keyConcepts: [

      "Reading for understanding",

      "Context clues",

      "Summarization techniques",

      "Critical analysis"

    ],

    lecture: `

      <h2>Comprehension and Summary Writing</h2>

      <div class="image-container">

        <img src="images/comprehension.jpg" alt="Comprehension and Summary Writing" />

      </div>

      <p>Comprehension skills help readers interpret texts accurately, while summarization focuses on capturing the essence of the text.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Reading for Understanding:</strong> Techniques for extracting meaning from texts.</li>

        <li><strong>Context Clues:</strong> Using surrounding words to deduce meanings of unfamiliar terms.</li>

        <li><strong>Summarization:</strong> Writing concise and accurate summaries.</li>

        <li><strong>Critical Analysis:</strong> Evaluating texts for deeper insights.</li>

      </ul>

    `

  },

  "essay-writing": {

    title: "Essay and Paragraph Development",

    description: "Master the art of crafting essays and developing coherent paragraphs.",

    keyConcepts: [

      "Types of essays",

      "Paragraph structure",

      "Thesis statements",

      "Writing coherence"

    ],

    lecture: `

      <h2>Essay and Paragraph Development</h2>

      <div class="image-container">

        <img src="images/essay-writing.jpg" alt="Essay and Paragraph Development" />

      </div>

      <p>Effective essay writing involves organizing ideas into structured paragraphs with clear arguments and conclusions.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Types of Essays:</strong> Narrative, descriptive, expository, and argumentative essays.</li>

        <li><strong>Paragraph Structure:</strong> Begin with a topic sentence, followed by supporting details.</li>

        <li><strong>Thesis Statements:</strong> Writing a clear central argument or idea.</li>

        <li><strong>Coherence:</strong> Ensuring logical flow and connection between paragraphs.</li>

      </ul>

    `

  },

  "public-speaking": {

    title: "Public Speaking and Oral Communication",

    description: "Develop skills for effective verbal communication and public speaking.",

    keyConcepts: [

      "Speech delivery",

      "Audience engagement",

      "Non-verbal communication",

      "Overcoming stage fright"

    ],

    lecture: `

      <h2>Public Speaking and Oral Communication</h2>

      <div class="image-container">

        <img src="images/public-speaking.jpg" alt="Public Speaking and Oral Communication" />

      </div>

      <p>Public speaking skills are essential for conveying ideas clearly and confidently in front of an audience.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Speech Delivery:</strong> Techniques for clear and impactful speaking.</li>

        <li><strong>Audience Engagement:</strong> Keeping the audience interested and involved.</li>

        <li><strong>Non-Verbal Communication:</strong> The role of gestures, facial expressions, and posture.</li>

        <li><strong>Overcoming Stage Fright:</strong> Building confidence to speak in public.</li>

      </ul>

    `

  }

};

// Elements

const topicsSection = document.getElementById("topics-section");

const topicDetailsSection = document.getElementById("topic-details-section");

const topicContent = document.getElementById("topic-content");

const backButton = document.getElementById("back-button");

// Event listener for topic links

document.querySelectorAll(".topic-link").forEach(link => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const topicId = event.target.dataset.topic;

    loadTopicContent(topicId);

  });

});

// Back button event listener

backButton.addEventListener("click", () => {

  topicsSection.classList.remove("hidden");

  topicDetailsSection.classList.add("hidden");

});

// Function to load topic content dynamically

function loadTopicContent(topicId) {

  const topic = topicsContent[topicId];

  if (topic) {

    topicContent.innerHTML = `

      <h1>${topic.title}</h1>

      <p>${topic.description}</p>

      <h2>Key Concepts</h2>

      <ul>

        ${topic.keyConcepts.map(concept => `<li>${concept}</li>`).join("")}

      </ul>

      <h2>Lecture</h2>

      ${topic.lecture}

    `;

    // Show the topic details section and hide the topics list

    topicsSection.classList.add("hidden");

    topicDetailsSection.classList.remove("hidden");

  }

}