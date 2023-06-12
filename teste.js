const lucas = {
  firstName: "Lucas",
  lastName: "Garcez",
  email: "lucas@coffstack.com",
  address: {
    country: "Brazil",
    city: "Rio de Janeiro",
  },
};

console.log({ lucas });

const mateus = { ...lucas };
mateus.firstName = "Mateus";
mateus.lastName = "Oliveira";

mateus.address.city = "Brasília";

console.log({ mateus });
console.log({ lucas });
