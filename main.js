function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/Icon-${player1}.svg" alt="Bandeira ${player2}" />
              <strong>${hour}</strong>
              <img src="./assets/Icon-${player2}.svg" alt="Bandeira ${player2}" />
            </li>
`
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
  `
}


document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="Logo" />
      </header>

      <main id="cards">
        ${createCard(
          "20/11",
          "domingo",
          createGame("qatar", "13:00", "ecuador")
        )}
        ${createCard(
          "21/11",
          "segunda",
          createGame("england", "10:00", "iran") +
            createGame("senegal", "13:00", "netherlands") +
            createGame("united-states", "16:00", "wales")
        )}
        ${createCard(
          "22/11",
          "terça",
          createGame("argentina", "07:00", "saudi-arabia") +
            createGame("denmark", "10:00", "tunisia") +
            createGame("mexico", "13:00", "poland") +
            createGame("france", "16:00", "australia")
        )}
        ${createCard(
          "23/11",
          "quarta",
          createGame("morocco", "07:00", "croatia") +
            createGame("germany", "10:00", "japan") +
            createGame("spain", "13:00", "costa-rica") +
            createGame("belgium", "16:00", "canada")
        )}
        ${createCard(
          "24/11",
          "quinta",
          createGame("switzerland", "07:00", "cameroon") +
            createGame("uruguay", "10:00", "south-korea") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
        )}
      </main>
`