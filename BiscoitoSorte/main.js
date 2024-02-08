function startGame() {
    // Esconde o card inicial
    document.getElementById("initial-card").style.display = "none";
    // Mostra o card com a mensagem
    document.getElementById("message-card").style.display = "block";
  }

  function restartGame() {
    // Esconde o card com a mensagem
    document.getElementById("message-card").style.display = "none";
    // Mostra o card inicial
    document.getElementById("initial-card").style.display = "block";
  }