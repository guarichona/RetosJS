famousCats = [
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
];

function findFamousCats(cats) {

  let dataAccumulator = [];
  cats.map((data) => {
    const { followers } = data;
    const { name } = data;

    const SumaSeguidores = followers.reduce((acumulador, valorActual) => {
      return (acumulador + valorActual);
    }, 0);

    dataAccumulator.push({ name, followers: SumaSeguidores });
  })

  const newCatData = dataAccumulator;

  let maxFollowers = 0;
  let TotalNameCat = [];

  newCatData.map((data) => {

    if (maxFollowers < data.followers) {
      maxFollowers = data.followers;
    }
  })

  newCatData.map((data) => {
    while (data.followers === maxFollowers) {
      TotalNameCat.push(data.name);
      break;
    }
  })

  return TotalNameCat;
}

console.log(findFamousCats(famousCats));