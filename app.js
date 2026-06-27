// High-fidelity Product & Deals Mock Database
const PRODUCT_DATABASE = [
  {
    id: "prod-1",
    name: "iPhone 15 Pro Max (256GB, Titanium)",
    category: "electronics",
    description: "Features a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front cover that's tougher than any smartphone glass.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    coupon: { code: "IPHONE15", value: 30, desc: "Flat $30.00 discount applied at checkout" },
    valueScore: 9.2,
    verdict: "Strong Value Buy",
    summary: "Today's lowest price is 12% lower than the official manufacturer MSRP of $1,199.00.",
    history: [1199, 1185, 1199, 1150, 1150, 1120, 1120, 1099, 1099, 1079],
    deals: [
      { platform: "Amazon", name: "Amazon US Store", price: 1099, shipping: 0, returnPolicy: "30 Days Free Return", delivery: "Tomorrow, 8 AM" },
      { platform: "Flipkart", name: "Flipkart Retail", price: 1079, shipping: 5, returnPolicy: "7 Days Replacement", delivery: "In 2 days" },
      { platform: "Official Site", name: "Apple Store", price: 1199, shipping: 0, returnPolicy: "14 Days Return", delivery: "Tomorrow, 12 PM" },
      { platform: "BestBuy", name: "BestBuy Outlet", price: 1120, shipping: 0, returnPolicy: "15 Days Return", delivery: "In 3 days" }
    ]
  },
  {
    id: "prod-2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "electronics",
    description: "Industry-leading noise cancellation. Two processors control 8 microphones for unprecedented noise cancellation. Auto NC Optimizer automatically optimizes noise cancellation based on your wearing conditions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    coupon: { code: "SONYSOUND", value: 15, desc: "Flat $15.00 discount applied at checkout" },
    valueScore: 8.6,
    verdict: "Optimal Purchase",
    summary: "Current deals offer savings of up to $50.00 compared to typical retail price points.",
    history: [399, 399, 379, 379, 360, 360, 349, 349, 349, 335],
    deals: [
      { platform: "Amazon", name: "Amazon Digital", price: 349, shipping: 0, returnPolicy: "30 Days Free Return", delivery: "Tomorrow, 2 PM" },
      { platform: "Flipkart", name: "Flipkart SuperCom", price: 335, shipping: 8, returnPolicy: "7 Days Return", delivery: "In 3 days" },
      { platform: "Official Site", name: "Sony Electronics", price: 399, shipping: 0, returnPolicy: "30 Days Return", delivery: "In 2 days" }
    ]
  },
  {
    id: "prod-3",
    name: "Adidas Ultraboost Light Running Shoes",
    category: "footwear",
    description: "Experience epic energy with the new Adidas Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of Adidas BOOST with even more energy return.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    coupon: { code: "RUNLIGHT", value: 10, desc: "Extra 10% Off applied at checkout" },
    valueScore: 7.8,
    verdict: "Standard Deal",
    summary: "Decent current deal, matching average historic pricing averages.",
    history: [190, 190, 185, 185, 180, 180, 180, 175, 175, 168],
    deals: [
      { platform: "Amazon", name: "Amazon Active", price: 175, shipping: 4, returnPolicy: "30 Days Return", delivery: "In 3 days" },
      { platform: "Flipkart", name: "Flipkart Footwear", price: 180, shipping: 0, returnPolicy: "10 Days Exchange", delivery: "In 2 days" },
      { platform: "Myntra", name: "Myntra Fashion Hub", price: 168, shipping: 0, returnPolicy: "14 Days Free Return", delivery: "In 4 days" },
      { platform: "Ajio", name: "Ajio Trends", price: 170, shipping: 0, returnPolicy: "15 Days Return", delivery: "In 3 days" },
      { platform: "Official Site", name: "Adidas India", price: 190, shipping: 0, returnPolicy: "30 Days Return", delivery: "Tomorrow, 6 PM" }
    ]
  },
  {
    id: "prod-4",
    name: "Dyson Airwrap Multi-Styler Complete",
    category: "electronics",
    description: "The only multi-styler to curl, shape and hide flyaways using the Coanda effect – with no extreme heat. Re-engineered attachments harness Enhanced Coanda airflow for faster, easier styling.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    coupon: { code: "DYSONHAIR", value: 50, desc: "Flat $50.00 discount applied at checkout" },
    valueScore: 9.4,
    verdict: "Outstanding Deal",
    summary: "Rare discount on Dyson products. Saves $50.00 off standard retail MSRP.",
    history: [599, 599, 599, 599, 599, 580, 580, 560, 560, 549],
    deals: [
      { platform: "Amazon", name: "Amazon Premium", price: 560, shipping: 0, returnPolicy: "30 Days Return", delivery: "Tomorrow, 10 AM" },
      { platform: "Flipkart", name: "Flipkart Brand Retail", price: 570, shipping: 0, returnPolicy: "7 Days Replacement", delivery: "In 2 days" },
      { platform: "Official Site", name: "Dyson Direct", price: 599, shipping: 0, returnPolicy: "30 Days Free Return", delivery: "Tomorrow, 9 AM" },
      { platform: "Sephora", name: "Sephora Partner", price: 549, shipping: 0, returnPolicy: "30 Days Return", delivery: "In 3 days" }
    ]
  },
  {
    id: "prod-5",
    name: "Nike Air Max Pulse Sneakers",
    category: "footwear",
    description: "The Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and point-loaded cushioning delivers a clean look.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    coupon: { code: "MAXPULSE", value: 12, desc: "Flat $12.00 discount applied at checkout" },
    valueScore: 8.0,
    verdict: "Good Purchase",
    summary: "Saves roughly $15.00 compared to standard retailer list rates.",
    history: [150, 150, 150, 145, 145, 140, 140, 138, 138, 134],
    deals: [
      { platform: "Amazon", name: "Amazon Fashion", price: 138, shipping: 5, returnPolicy: "30 Days Return", delivery: "In 4 days" },
      { platform: "Myntra", name: "Myntra Premium Hub", price: 134, shipping: 0, returnPolicy: "14 Days Return", delivery: "In 3 days" },
      { platform: "Ajio", name: "Ajio Premium", price: 136, shipping: 0, returnPolicy: "15 Days Return", delivery: "In 2 days" },
      { platform: "Official Site", name: "Nike Store", price: 150, shipping: 0, returnPolicy: "30 Days Free Return", delivery: "Tomorrow, 3 PM" }
    ]
  },
  {
    id: "prod-6",
    name: "Zara Oversized Corduroy Shirt",
    category: "apparel",
    description: "Oversized collared shirt made of corduroy fabric. Long sleeves with buttoned cuffs. Patch pocket on the chest. Front button closure.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
    rating: 4.4,
    coupon: { code: "ZARASTYLE", value: 8, desc: "Extra $8.00 Off coupon active" },
    valueScore: 7.2,
    verdict: "Fair Price",
    summary: "Price matches standard season promotions across competing retail platforms.",
    history: [69, 69, 69, 65, 65, 65, 60, 60, 58, 55],
    deals: [
      { platform: "Myntra", name: "Myntra Fashion", price: 58, shipping: 3, returnPolicy: "14 Days Return", delivery: "In 3 days" },
      { platform: "Ajio", name: "Ajio Retail", price: 55, shipping: 2, returnPolicy: "15 Days Return", delivery: "In 4 days" },
      { platform: "Official Site", name: "Zara India", price: 69, shipping: 5, returnPolicy: "30 Days Return", delivery: "In 2 days" }
    ]
  }
];

// Global DOM references
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("search-clear-btn");
const submitBtn = document.getElementById("search-submit-btn");
const suggestionsBox = document.getElementById("suggestions-box");
const categoryChips = document.querySelectorAll(".cat-chip");
const comparisonView = document.getElementById("comparison-view");

// Showcase Elements
const prodCategory = document.getElementById("prod-category");
const prodRating = document.getElementById("prod-rating");
const prodImage = document.getElementById("prod-image");
const prodTitle = document.getElementById("prod-title");
const prodDesc = document.getElementById("prod-desc");
const couponCodeText = document.getElementById("coupon-code-text");
const couponSavingsText = document.getElementById("coupon-savings-text");

// Deals Container
const dealsListContainer = document.getElementById("deals-list-container");

// Score Circle
const scoreCircle = document.getElementById("score-circle");
const dealScoreText = document.getElementById("deal-score");
const dealVerdict = document.getElementById("deal-verdict");
const dealSavingsSummary = document.getElementById("deal-savings-summary");

// Price Alert Form
const alertPriceInput = document.getElementById("alert-price");
const alertEmailInput = document.getElementById("alert-email");
const alertSubmitBtn = document.getElementById("alert-submit-btn");

let currentChart = null;

// Initialize app events
document.addEventListener("DOMContentLoaded", () => {
  setupSearchEvents();
  setupFilterEvents();
  setupAlertForm();
  
  // Load default product on startup (iPhone 15 Pro Max)
  loadProductDeals(PRODUCT_DATABASE[0]);
});

// Setup search autocomplete and enter keys
function setupSearchEvents() {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value.length > 0) {
      clearBtn.style.display = "block";
      showSuggestions(value);
    } else {
      clearBtn.style.display = "none";
      suggestionsBox.style.display = "none";
    }
  });
  
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    suggestionsBox.style.display = "none";
    searchInput.focus();
  });
  
  // Close suggestions box on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      suggestionsBox.style.display = "none";
    }
  });
  
  submitBtn.addEventListener("click", () => {
    executeSearch();
  });
  
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      executeSearch();
    }
  });
}

function showSuggestions(query) {
  const matches = PRODUCT_DATABASE.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.category.toLowerCase().includes(query)
  );
  
  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }
  
  suggestionsBox.innerHTML = "";
  matches.forEach(item => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerHTML = `
      <span class="item-title">${item.name}</span>
      <span class="item-category">${item.category}</span>
    `;
    div.addEventListener("click", () => {
      searchInput.value = item.name;
      suggestionsBox.style.display = "none";
      loadProductDeals(item);
    });
    suggestionsBox.appendChild(div);
  });
  suggestionsBox.style.display = "block";
}

function executeSearch() {
  const query = searchInput.value.toLowerCase().trim();
  if (query.length === 0) return;
  
  const found = PRODUCT_DATABASE.find(item => 
    item.name.toLowerCase().includes(query)
  );
  
  if (found) {
    loadProductDeals(found);
    suggestionsBox.style.display = "none";
  } else {
    alert("SmartDeal Message: No matches found for this search string.");
  }
}

// Category filter chip event handler
function setupFilterEvents() {
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      
      const category = chip.getAttribute("data-category");
      filterDefaultProduct(category);
    });
  });
}

function filterDefaultProduct(category) {
  if (category === "all") {
    loadProductDeals(PRODUCT_DATABASE[0]);
  } else {
    const match = PRODUCT_DATABASE.find(item => item.category === category);
    if (match) {
      loadProductDeals(match);
    }
  }
}

// Populate UI with details and platform comparisons
function loadProductDeals(product) {
  // 1. Details Panel
  prodCategory.textContent = product.category;
  prodRating.textContent = product.rating;
  prodImage.src = product.image;
  prodTitle.textContent = product.name;
  prodDesc.textContent = product.description;
  
  // Coupons
  couponCodeText.textContent = product.coupon.code;
  couponSavingsText.textContent = product.coupon.desc;
  
  // Set alert target default price
  const cheapestPrice = Math.min(...product.deals.map(d => d.price));
  alertPriceInput.value = Math.round(cheapestPrice * 0.95); // 5% below cheapest
  
  // 2. Pricing comparisons rendering
  renderDealsList(product.deals, cheapestPrice);
  
  // 3. Radial Value Score indicator
  renderValueScore(product);
  
  // 4. Line Chart rendering
  renderPriceHistory(product);
}

function renderDealsList(deals, cheapestPrice) {
  dealsListContainer.innerHTML = "";
  
  // Sort deals: cheapest first
  const sortedDeals = [...deals].sort((a, b) => a.price - b.price);
  
  sortedDeals.forEach(deal => {
    const isBest = (deal.price === cheapestPrice);
    const div = document.createElement("div");
    div.className = `deal-item ${isBest ? 'best-deal-active' : ''}`;
    
    div.innerHTML = `
      <div class="deal-platform">
        <span class="platform-dot ${deal.platform.toLowerCase().replace(' ', '')}"></span>
        <span class="platform-name">${deal.platform}</span>
      </div>
      <div class="deal-details">
        <p>Provider: <strong>${deal.name}</strong></p>
        <p>Delivery: <strong>${deal.delivery}</strong> | Returns: <strong>${deal.returnPolicy}</strong></p>
      </div>
      <div class="deal-pricing">
        <span class="original-price">$${Math.round(deal.price * 1.15)}</span>
        <span class="current-price">$${deal.price}</span>
      </div>
      <div class="deal-action">
        <button class="buy-btn" onclick="openLink('${deal.platform}')">
          ${isBest ? 'Grab Best Deal' : 'Buy Now'} 
          <i data-lucide="chevron-right" style="width:14px;height:14px;"></i>
        </button>
      </div>
    `;
    
    dealsListContainer.appendChild(div);
  });
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Open redirect notice
window.openLink = function(platform) {
  alert(`SmartRedirect: Navigating to validated direct affiliate link for ${platform}...`);
};

// Calculate SVG stroke parameters for circular rating meter
function renderValueScore(product) {
  const score = product.valueScore;
  dealScoreText.textContent = score;
  dealVerdict.textContent = product.verdict;
  dealSavingsSummary.textContent = product.summary;
  
  // SVG stroke-dasharray parameters: circumference is ~100
  const dashVal = (score / 10) * 100;
  scoreCircle.style.strokeDasharray = `${dashVal}, 100`;
  
  // Color code the circle border
  if (score >= 9.0) {
    scoreCircle.style.stroke = "var(--accent-green)";
  } else if (score >= 8.0) {
    scoreCircle.style.stroke = "var(--accent-cyan)";
  } else {
    scoreCircle.style.stroke = "var(--accent-orange)";
  }
}

// Chart.js Price History Line Plot
function renderPriceHistory(product) {
  const ctx = document.getElementById("price-history-chart").getContext("2d");
  
  if (currentChart) {
    currentChart.destroy();
  }
  
  // Create labels for last 10 days
  const labels = [];
  for (let i = 9; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i * 3); // 3 day intervals
    labels.push(d.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
  }
  
  const historyData = product.history;
  
  currentChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Price Trend ($)",
        data: historyData,
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6, 182, 212, 0.05)",
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#06b6d4",
        pointBorderColor: "#131724",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0d0f17",
          titleColor: "#f8fafc",
          bodyColor: "#94a3b8",
          borderColor: "#1e2439",
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: "#1e2439" },
          ticks: { color: "#94a3b8", font: { size: 10 } }
        },
        y: {
          grid: { color: "#1e2439" },
          ticks: { color: "#94a3b8", font: { size: 10 } }
        }
      }
    }
  });
}

// Set price drop alerts
function setupAlertForm() {
  alertSubmitBtn.addEventListener("click", () => {
    const price = alertPriceInput.value;
    const email = alertEmailInput.value.trim();
    
    if (!price || !email) {
      alert("Please complete both Email and Price fields to trigger live webhook notification.");
      return;
    }
    
    alert(`Success! Price Drop Webhook activated. We will ping ${email} when the product price falls below $${price}.`);
    alertEmailInput.value = "";
  });
}
