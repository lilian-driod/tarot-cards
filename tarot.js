const tarotCards = [
    {
      name: "The Fool",
      meaning: "New beginnings, innocence, spontaneity",
      reversed: "Recklessness, Taken advantage of, Inconsideration",
      url: "./images/card1.webp",
    },
    {
      name: "The Magician",
      meaning: "Manifestation, resourcefulness, power",
      reversed: "Trickery, Illusions, Out of touch",
      url: "./images/card2.webp",
    },
    {
      name: "The Hermit",
      meaning: "Contemplation, search for truth, inner guidance",
      reversed: "Loneliness, isolation, lost your way",
      url: "./images/card3.webp",
    },
    {
      name: "The Hierophant",
      meaning: "Tradition, conformity, morality, ethics",
      reversed: "Rebellion, subversiveness, new approaches",
      url: "./images/card4.webp",
    },
    {
      name: "The Lovers",
      meaning: "Partnerships, duality, union",
      reversed: "Loss of balance, one-sidedness, disharmony",
      url: "./images/card5.webp",
    },
    {
      name: "The Chariot",
      meaning: "Direction, control, willpower",
      reversed: "Lack of control, lack of direction, aggression",
      url: "./images/card6.webp",
    },
    {
      name: "The Star",
      meaning: "Hope, faith, rejuvenation",
      reversed: "Faithlessness, discouragement, insecurity",
      url: "./images/card7.webp",
    },
    {
      name: "The High Priestess",
      meaning: "Intuition, unconscious, mystery",
      reversed: "Lack of center, lost inner voice, repressed feelings",
      url: "./images/card8.webp",
    },
    {
      name: "The Empress",
      meaning: "Nurturing, fertility, abundance",
      reversed: "Dependence, smothering, emptiness, nosiness",
      url: "./images/card9.webp",
    },
    {
      name: "The Emperor",
      meaning: "Authority, establishment, structure",
      reversed: "Tyranny, rigidity, coldness",
      url: "./images/card10.webp",
    },
  ];
  
  function selectCard() {
    const randomIndex = Math.round(Math.random() * (tarotCards.length - 1));
    return tarotCards[randomIndex];
  }
  
  function showCard() {
    const selectedCard = selectCard();
    document.getElementById("selected-card").innerHTML = `<div class="card">
    <img src=${selectedCard.url} class="card-img-top" height = "200" alt="...">
    <div class="card-body bg-success">
      <h1 class="card-title fw-light fst-italic text-light">${selectedCard.name}</h1>
      <hr>
      <h3 class="card-text text-light">Meaning  -  ${selectedCard.meaning}</h3><br>
      <h3 class="card-text text-light">Reversed  -  ${selectedCard.reversed}</h3>
    </div>
  </div>`;
  }