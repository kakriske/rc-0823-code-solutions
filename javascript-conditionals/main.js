/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return true;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH <= 14) {
    if (pH === 7) {
      return 'Neutral';
    } else if (pH < 7) {
      return 'Acid';
    } else {
      return 'Base';
    }
  } else {
    return 'Invalid';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the Warner Bros!";

    case 'Dot':
      return "I'm cute~";

    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Happy Gilmore';
    case 'horror':
      return 'The Thing';
    case 'drama':
      return 'Drive';
    case 'musical':
      return 'Little Shop of Horrors';
    case 'sci-fi':
      return 'Critters';
    default:
      return 'Genre not recognized';
  }
}
