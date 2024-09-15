import "./style.css";

const drinks = [
  {
    name: "Mojito",
    image: "/mojito.webp", 
    description: "A refreshing cocktail with mint, lime, and rum.",
  },
  {
    name: "Martini",
    image: "/martini.webp", 
    description: "A classic cocktail with gin and vermouth.",
  },
  {
    name: "Sex on the Beach",
    image: "/sex-on-the-beach.webp", 
    description:
      "A fruity cocktail with vodka, peach schnapps, cranberry, and orange juice.",
  },
  {
    name: "Tequila Sunrise",
    image: "/tequila-sunrise.webp",
    description:
      "A vibrant cocktail with tequila, orange juice, and grenadine.",
  },
  {
    name: "Cuba Libre",
    image: "/cuba-libre.webp",
    description: "A simple cocktail with rum, cola, and lime.",
  },
  {
    name: "Long Island Iced Tea",
    image: "/long-island-iced-tea.webp",
    description:
      "A strong cocktail with vodka, tequila, rum, gin, triple sec, sour mix, and a splash of cola.",
  },
];

document.querySelector("#app").innerHTML = `
  <div class="drink-container">
    ${drinks
      .map(
        (drink) => `
      <div class="drink-card">
        <img src="${drink.image}" alt="${drink.name}" />
        <div class="content">
        <h3>${drink.name}</h3>
        <p>${drink.description}</p>
        </div>
      </div>
    `
      )
      .join("")}
  </div>
`;
