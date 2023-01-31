const user = {
  name: "Dohn Doe",
  age: 23,
  maritalStatus: "single",
  address: { zipCode: "00000-000" },
};

const user2 = {
  name: "Jane Doe",
  age: 32,
  maritalStatus: "married",
  address: { zipCode: "11111-111" },
};

console.log("isEmployed" in user);
console.log("age" in user2);
