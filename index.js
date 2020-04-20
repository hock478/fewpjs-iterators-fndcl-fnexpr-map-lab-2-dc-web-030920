const questions = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'how can you implement a Blockchain Web API?',
  'what is Test Driven Development Workflow?',
  'What is NaN and how can we check for it?',
  'What is the difference between stopPropagation and preventDefault?',
  'should you use immutable state and pure functions?',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const capitalizeSentence = () => {

  let cap = questions.map(function(question){
    return question.charAt(0).toUpperCase() + question.slice(1)
  });
  return cap;
  
  // let cap = [
  //   'What does the this keyword mean?',
  //   'What is the Contutorialuctor OO pattern?',
  //   'How can you implement a Blockchain Web API?',
  //   'What is Test Driven Development Workflow?',
  //   'What is NaN and how can we check for it?',
  //   'What is the difference between stopPropagation and preventDefault?',
  //   'Should you use immutable state and pure functions?',
  //   'What is the difference between == and ===?',
  //   'What is the difference between event capturing and bubbling?',
  //   'What is JSONP?'
  // ];
  // return cap;
}


