document.getElementById("openGift").addEventListener("click", () => {
    const giftContent = document.getElementById("giftContent");
    giftContent.classList.remove("hidden");
  
    // Try to play music
    const music = document.getElementById("bgMusic");
    music.play().catch((err) => {
      console.log("Music play failed:", err);
    });
  
    // Confetti effect
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  
    // Start slideshow
    startSlideshow();
  });
  
  
  let currentSlide = 0;
  function startSlideshow() {
    const slides = document.querySelectorAll("#slideshow img");
  
    setInterval(() => {
      slides.forEach((slide, index) => {
        slide.style.opacity = index === currentSlide ? "1" : "0";
      });
      currentSlide = (currentSlide + 1) % slides.length;
    }, 3000);
  }
  
  document.getElementById("openLetter").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("hidden");
  });
  
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
  
  function updateCountdown() {
    const targetDate = new Date('May 26, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
  
    if (distance < 0) {
      document.getElementById('countdown').innerText = "🎉 Happy Anniversary!";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const seconds = Math.floor((distance / 1000) % 60);
  
    document.getElementById('countdown').innerText =
      `💖 ${days}d ${hours}h ${minutes}m ${seconds}s until our Anniversary!`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown(); // initial call
  

 