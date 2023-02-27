const isDinnerTime = true;
const hasFoodInDish = false;
const hasFoodInPantry = false;

// TODO: rewrite to prevent duplication
if (isDinnerTime) {
  console.log('Walk to dog dish');

  if (hasFoodInDish) {
    console.log('Dog eats dinner');
    console.log('Chill until next dinner time');
  } else {
    console.log('Walk to pantry');

    if (hasFoodInPantry) {
      console.log('Scoop food into dog dish');
      console.log('Dog eats dinner');
      console.log('Chill until next dinner time');
    } else {
      console.log('Drive to pet store');
      console.log('Buy dog food');
      console.log('Drive home');
      console.log('Pour food into pantry container');
      console.log('Scoop food into dog dish');
      console.log('Dog eats dinner');
      console.log('Chill until next dinner time');
    }
  }
} else {
  console.log('Chill until next dinner time');
}
