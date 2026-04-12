// ================== PERCENT COUNTER ==================
function startCounter(id, target) {
    let count = 0;
    let el = document.getElementById(id);

    let interval = setInterval(() => {
        if (count < target) {
            count++;
            el.textContent = count + "%";
        } else {
            clearInterval(interval);
        }
    }, 20);
}


// ================== PRO NUMBER COUNTER ==================
function startNumberCounter(id, target, duration = 2000) {
    const el = document.getElementById(id);
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;

        const progress = currentTime - startTime;
        const percentage = Math.min(progress / duration, 1);

        const value = Math.floor(percentage * target);
        el.textContent = value;

        if (percentage < 1) {
            requestAnimationFrame(animate);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(animate);
}


// ================== RUN ==================

// 🔵 Percent bars
startCounter("percent1", 100);
startCounter("percent2", 97);
startCounter("percent3", 93);

// 🔥 Numbers (clean)
startNumberCounter("projects", 5, 1500);
startNumberCounter("hours", 4, 2000); // 👈 now goes 0 → 4
startNumberCounter("tech", 3, 1200);




const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));





const lenis = new Lenis({
  duration: 1.6,   // 👈 increase = slower (ICE effect)
  smooth: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);