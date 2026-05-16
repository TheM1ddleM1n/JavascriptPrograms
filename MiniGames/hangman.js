import {createInterface} from "readline";

const categories = {
  programming: [
    "javascript", "developer", "variable", "function", "array", "compiler", "asynchronous", "callback", 
    "boolean", "integer", "string", "object", "recursion", "iteration", "inheritance", "polymorphism",
    "argument", "parameter", "framework", "library", "repository", "deployment", "dependency", "expression",
    "statement", "interface", "constructor", "prototype", "closure", "encapsulation", "abstraction", "exception",
    "asynchrony", "concurrency", "deadlock", "serialization", "deserialization", "instantiation", "mutation"
  ],
  tech: [
    "keyboard", "monitor", "processor", "database", "network", "cloud", "algorithm", "software", 
    "hardware", "firmware", "bandwidth", "firewall", "encryption", "mainframe", "server", "protocol",
    "router", "motherboard", "peripheral", "cybersecurity", "virtualization", "infrastructure", "telemetry", "cryptography",
    "microchip", "supercomputer", "automation", "biometrics", "bandwidth", "storage", "firmware", "hypervisor",
    "mainframe", "workstation", "backplane", "nanotechnology", "telecommunications", "optoelectronics", "semiconductor"
  ],
  general: [
    "adventure", "journey", "horizon", "mystery", "zenith", "vibrant", "phantom", "echo", 
    "wilderness", "monarch", "labyrinth", "odyssey", "eclipse", "pinnacle", "mirage", "solitude",
    "avalanche", "bungalow", "cathedral", "destiny", "elephant", "festival", "gargoyle", "harvest",
    "illusion", "juxtapose", "kaleidoscope", "lantern", "marathon", "nostalgia", "oasis", "paradox",
    "quadrant", "reverie", "silhouette", "tapestry", "umbrella", "vanguard", "whimsical", "yesterday"
  ],
  science: [
    "molecule", "galaxy", "evolution", "gravity", "catalyst", "nebula", "quantum", "organism", 
    "electron", "atmosphere", "mutation", "ecosystem", "spectrum", "fossil", "laboratory", "photosynthesis",
    "chromosome", "heredity", "velocity", "viscosity", "resonance", "radiation", "telescope", "microscope",
    "biodiversity", "thermodynamics", "meteorology", "geology", "astronomy", "hemosphere", "centrifuge", "symbiosis",
    "astrophysics", "biomechanics", "neuroscience", "paleontology", "susceptibility", "nanoparticle", "endocrinology"
  ]
};

const words = Object.values(categories).flat();
const word = words[Math.floor(Math.random() * words.length)];
const guessed = new Set();
let lives = 6;

const rl = createInterface({ input: process.stdin, output: process.stdout });

function display() {
  const masked = word.split("").map(l => (guessed.has(l) ? l : "_")).join(" ");
  console.log(`\\n${masked}  |  Lives: ${lives}`);
}

function turn() {
  display();
  
  if (word.split("").every(l => guessed.has(l))) { 
    console.log(`\\nYou win! The word was: ${word.toUpperCase()}`); 
    return rl.close(); 
  }
  
  if (lives === 0) { 
    console.log(`\\nGame over! The word was: ${word.toUpperCase()}`); 
    return rl.close(); 
  }
  
  rl.question("Guess a letter: ", (input) => {
    const letter = input.trim().toLowerCase();
    
    if (!letter || letter.length !== 1 || !/[a-z]/.test(letter)) {
      console.log("Enter a single valid letter.");
      return turn();
    }
    
    if (guessed.has(letter)) {
      console.log(`You already guessed "${letter}".`);
      return turn();
    }
    
    guessed.add(letter);
    
    if (!word.includes(letter)) {
      lives--;
      console.log(`"${letter}" is not in the word.`);
    } else {
      console.log(`"${letter}" is in the word.`);
    }
    
    turn();
  });
}

console.log("Hangman");
console.log(`The word has ${word.length} letters.`);
turn();
