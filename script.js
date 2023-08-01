let isGenerated = false;

let phrases = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
  'No.',
]

function generateResult() {
  let phrase = phrases[Math.floor(Math.random()*phrases.length)];
  const image = document.querySelector(".main img");
  const response = document.querySelector(".response");

  if (!isGenerated) {

    image.classList.add("animate-1");

    setTimeout(function() {
      // removing previous image
      image.classList.remove("animate-1");
      image.style.display = 'none';

      // getting response
      response.style.display = 'unset'
      response.classList.add("animate-2");

      // get text
      document.getElementById('fortune').innerText = phrase;

      // Change button to try again?
      document.getElementById('generate').innerText = 'Try again?';
    }, 2500);

    isGenerated = true;

  } else {
      document.getElementById('generate').innerText = 'Generate your answer!';
      image.style.display = 'unset';
      response.style.display = 'none'

      isGenerated = false;
  }
}
