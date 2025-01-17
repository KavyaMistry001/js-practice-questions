let original = {
    name: "kavya",
    address: {
      city: "ahmedabad"
    }
  };
  
  let deepClone = JSON.parse(JSON.stringify(original));
  deepClone.address.city = "mumbai";
  console.log(original.address.city); // ahmedabad
  console.log(deepClone.address.city); // mumbai
  