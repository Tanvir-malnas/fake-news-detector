 function toggleMenu() {
      document.getElementById("nav-links").classList.toggle("active");
    }

    function showResult() {
      const resultBox = document.getElementById("resultBox");
      // Demo ke liye random fake/real
      const isFake = Math.random() > 0.5;
      if(isFake) {
        resultBox.innerHTML = "❌ This looks like Fake News!";
        resultBox.style.color = "red";
      } else {
        resultBox.innerHTML = "✅ This looks like Real News!";
        resultBox.style.color = "green";
      }
    }