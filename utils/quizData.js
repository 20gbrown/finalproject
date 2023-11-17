// utils/quizData.js
const classMapping = {
  a: {
    Barbarian: 3, Fighter: 2, Monk: 2, Rogue: 1, Sorcerer: 2, Cleric: 1, Ranger: 1, Bard: 1, Paladin: 1, Wizard: 0, Warlock: 0, Druid: 0,
  },
  b: {
    Bard: 3, Monk: 2, Paladin: 3, Sorcerer: 2, Wizard: 3, Fighter: 2, Warlock: 2, Cleric: 2, Druid: 3, Barbarian: 0, Rogue: 0, Ranger: 0,
  },
  c: {
    Rogue: 3, Ranger: 3, Wizard: 2, Barbarian: 0, Warlock: 1, Sorcerer: 1, Druid: 2, Bard: 1, Paladin: 0, Fighter: 0, Monk: 0,
  },
};


const QuizBank = [
    {
      question: "What's your preferred playstyle?",
      id: 0,
      answers: [
        { option: 'a', text: 'Aggressive and fearless, always charging into battle!' },
        { option: 'b', text: 'Strategic and calculated, planning every move ahead of time.' },
        { option: 'c', text: 'Sneaky and stealthy, preferring to strike from the shadows.' },
      ],
    },
    {
      question: "How would you handle a dispute in a tavern?",
      id: 1,
      answers: [
        { option: 'a', text: 'Challenge the troublemaker to a duel!' },
        { option: 'b', text: 'Try to negotiate a peaceful resolution.' },
        { option: 'c', text: 'Slip away unseen, avoiding the conflict altogether.' },
      ],
    },
    {
      question: "What's your favorite weapon?",
      id: 2,
      answers: [
        { option: 'a', text: 'Greatsword - the bigger, the better!' },
        { option: 'b', text: 'Longbow - perfect for precision and range.' },
        { option: 'c', text: 'Dagger - small, concealable, and deadly.' },
      ],
    },
    {
      question: "Your ideal adventure location?",
      id: 3,
      answers: [
        { option: 'a', text: 'A massive dungeon filled with challenges and treasures.' },
        { option: 'b', text: 'An ancient library, seeking knowledge and lore.' },
        { option: 'c', text: 'A dense forest, navigating through the mysteries of nature.' },
      ],
    },
    {
      question: "How do you deal with a tricky puzzle?",
      id: 4,
      answers: [
        { option: 'a', text: 'Smash it until it breaks!' },
        { option: 'b', text: 'Analyze and solve it methodically.' },
        { option: 'c', text: 'Let someone else figure it out while you scout the surroundings.' },
      ],
    },
    {
      question: "Choose a magical ability:",
      id: 5,
      answers: [
        { option: 'a', text: 'Fireball - unleash the power of flames!' },
        { option: 'b', text: 'Invisibility - vanish from sight at will.' },
        { option: 'c', text: 'Charm Person - persuade others with your charisma.' },
      ],
    },
    {
      question: "What drives your character's ambitions?",
      id: 6,
      answers: [
        { option: 'a', text: 'Glory and recognition on the battlefield.' },
        { option: 'b', text: 'The pursuit of knowledge and understanding.' },
        { option: 'c', text: 'Wealth and personal gain without attracting too much attention.' },
      ],
    },
    {
      question: "In a party, You're most likely to...",
      id: 7,
      answers: [
        { option: 'a', text: 'Lead the charge into danger.' },
        { option: 'b', text: 'Offer strategic advice and tactics.' },
        { option: 'c', text: 'Scout ahead and handle tasks discreetly.' },
      ],
    },
    {
      question: "When facing a dragon, you...",
      id: 8,
      answers: [
        { option: 'a', text: 'Charge at it with your weapon drawn, ready for a legendary battle!' },
        { option: 'b', text: 'Assess the situation and look for its weak points before engaging.' },
        { option: 'c', text: 'Try to sneak past it, avoiding direct confrontation.' },
      ],
    },
    {
      question: "Your preferred magical item would be...",
      id: 9,
      answers: [
        { option: 'a', text: 'A powerful enchanted sword that glows with mystical energy.' },
        { option: 'b', text: 'A versatile staff that can cast a variety of spells.' },
        { option: 'c', text: 'A cloak of invisibility for those tricky situations.' },
      ],
    },
    {
      question: "What kind of companion would you choose for your adventures?",
      id: 10,
      answers: [
        { option: 'a', text: 'A loyal and fearsome war hound.' },
        { option: 'b', text: 'A wise and ancient owl with magical insights.' },
        { option: 'c', text: 'A mischievous and nimble fox, perfect for stealthy missions.' },
      ],
    },
    {
      question: "Your preferred method of transportation is...",
      id: 11,
      answers: [
        { option: 'a', text: 'A majestic griffin, soaring through the skies.' },
        { option: 'b', text: 'A magical teleportation spell for instant travel.' },
        { option: 'c', text: 'A swift and silent elven steed for traversing the wilderness.' },
      ],
    },
  ];
  
  module.exports = {
    classMapping,
    QuizBank,
  };

//const { classMapping, QuizBank } = require('./utils/quizData');
