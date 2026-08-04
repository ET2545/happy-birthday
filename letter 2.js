$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    launchHeartConfetti();
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }

  function launchHeartConfetti() {
    // Defines custom heart shapes for the confetti
    var heart = confetti.shapeFromPath({
      path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
    });

    // Fire confetti bursts from both sides
    confetti({
      shapes: [heart],
      particleCount: 30,
      spread: 60,
      origin: { x: 0.2, y: 0.6 },
      colors: ['#ff4d88', '#ff85b3', '#d9534f', '#ffffff'],
      scalar: 1.5
    });

    confetti({
      shapes: [heart],
      particleCount: 30,
      spread: 60,
      origin: { x: 0.8, y: 0.6 },
      colors: ['#ff4d88', '#ff85b3', '#d9534f', '#ffffff'],
      scalar: 1.5
    });
  }
});
