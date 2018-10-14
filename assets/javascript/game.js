// INITIAL VALUES
var crystal = {
  red:
  {
    name: "Red",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
    blue:
    {
      name: "Blue",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };
  

  // SCORING VARIABLES
  let wins = 0;
  let losses = 0;
  let targetScore = 0;
  let userScore = 0;
  
  
  // FUNCTIONS
  
  const randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // RESETS THE GAME
  var gameReset = function() {
  
    userScore = 0;
  
  // SETS TARGET SCORE
    targetScore = randomNum(19, 120);
  
  // SETS CRYSTAL VALUES
    crystal.blue.value = randomNum(1, 12);
    crystal.red.value = randomNum(1, 12);
    crystal.green.value =randomNum(1, 12);
    crystal.yellow.value = randomNum(1, 12);
  
  // UPDATES SCORES TO HTML
    $("#your-score").text(userScore);
    $("#target-score").text(targetScore);
  
    console.log(`Red: ${crystal.red.value}`);
    console.log(`Blue: ${crystal.blue.value}`);
    console.log(`Green: ${crystal.green.value}`);
    console.log(`Yellow: ${crystal.yellow.value}`);
    
 
  };
  



  //RESULT CALCS
  const checkWin = function() {
  
    if (userScore > targetScore) {
      alert("You blew it. Wow, what a loser...");
      losses++;
      $("#loss-count").text(losses);
      gameReset();
  
    }
  
    else if (userScore === targetScore) {
      alert("You, my friend, are a winner. In this game, and in life");
      wins++;
      $("#win-count").text(wins);      
      gameReset();
    }
  
  };
  
  //CRYSTAL VALUE CALCS
  const addValues = function(clickedCrystal) {
  
    // ADD CRYSTAL TO SCORE
    userScore += clickedCrystal.value;
    $("#your-score").text(userScore);
    checkWin();

    console.log(`User Score: ${userScore}`);
    console.log(`Cheater says you have ${targetScore - userScore} left.`);

  };
  
  
  gameReset();
  
  $("#blue").click(function() {
    addValues(crystal.blue);
  });
  
  $("#red").click(function() {
    addValues(crystal.red);
  });
  
  $("#green").click(function() {
    addValues(crystal.green);
  });
  
  $("#yellow").click(function() {
    addValues(crystal.yellow);
  });
  

