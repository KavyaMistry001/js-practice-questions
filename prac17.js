function cookDish(dish, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${dish} is ready!`);
      }, time);
    });
  }
  
  // using Promise.all here
  function prepareMeal() {
    const dish1 = cookDish("Pasta", 2000); 
    const dish2 = cookDish("Salad", 1000); 
    const dish3 = cookDish("Soup", 3000);  
  
    Promise.all([dish1, dish2, dish3])
      .then((results) => {
        console.log("All dishes are ready:");
        console.log(results);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
    prepareMeal();
  