
    document.addEventListener("DOMContentLoaded", () => {
        const servicesData = [
          {
            title: "Web Design & Development",
            description: "Crafting Dynamic & Responsive User Interfaces Using HTML, CSS, JavaScript, and necessary Web Frameworks",
            features: [
              "Custom Web/App Design",
              "Responsive Web Development",
              "User Experience (UX) Design",
              "Content Management Systems",
            ],
            price: "$100",
          },
          {
            title: "WordPress Customization",
            description:
              "Tailoring your WordPress site to reflect your brand identity, ensuring seamless functionality and a polished user experience.",
            features: [
              "Theme Customization",
              "Plugin Installation & Setup",
              "Page Speed Optimization",
              "E-commerce Integration",
            ],
            price: "$50",
          },
          {
            title: "E-Commerce Development",
            description: "Building scalable and secure e-commerce solutions tailored to your business needs",
            features: [
              "Custom E-Commerce Websites",
              "Payment Gateway Integration",
              "Product Management",
              "Shopping Cart Solutions",
            ],
            price: "$200",
          },
        ];
      
        // Select all existing cards
        const cards = document.querySelectorAll(".s-card");
      
        if (cards.length !== servicesData.length) {
          console.error("Mismatch between number of existing cards and services data!");
          return;
        }
      
        // Update each card with the corresponding service data
        cards.forEach((card, index) => {
          const service = servicesData[index];
      
          // Update title
          const title = card.querySelector(".s-title");
          if (title) title.textContent = service.title;
      
          // Update description
          const description = card.querySelector(".s-description");
          if (description) description.textContent = service.description;
      
          // Update features
          const features = card.querySelector(".s-p");
          if (features) {
            features.innerHTML = `
              <div>
                <p><i class="fas fa-check"></i> ${service.features[0]}</p>
                <p><i class="fas fa-check"></i> ${service.features[1]}</p>
              </div>
              <div>
                <p><i class="fas fa-check"></i> ${service.features[2]}</p>
                <p><i class="fas fa-check"></i> ${service.features[3]}</p>
              </div>
            `;
          }
      
          // Update price
          const price = card.querySelector(".price-value");
          if (price) price.textContent = service.price;
        });
      });
 
      //PRICING SECTION

      document.addEventListener("DOMContentLoaded", () => {
        const pricingData = [
          {
            package: "Basic",
            price: "$100",
            features: [
              { name: "Custom Web/App Design", included: true },
              { name: "Responsive Web Development", included: true },
              { name: "User Experience (UX) Design", included: true },
              { name: "SEO Optimization", included: false },
              { name: "E-Commerce Solutions", included: false },
              { name: "Technical SEO Audits", included: false },
              { name: "Premium Support", included: false },
            ],
            pages: "Up to 3 pages",
            addOns: ["Additional Page: $10/page", "Logo Design: $30"],
            description: "Perfect for small projects and individuals looking for a basic online presence.",
          },
          {
            package: "Standard",
            price: "$250",
            features: [
              { name: "Custom Web/App Design", included: true },
              { name: "Responsive Web Development", included: true },
              { name: "User Experience (UX) Design", included: true },
              { name: "SEO Optimization", included: true },
              { name: "E-Commerce Solutions", included: false },
              { name: "Technical SEO Audits", included: true },
              { name: "Premium Support", included: false },
            ],
            pages: "Up to 7 pages",
            addOns: ["Additional Page: $10/page", "Priority Support: $50/month"],
            description: "Ideal for small businesses and startups aiming to scale their online presence.",
          },
          {
            package: "Premium",
            price: "$450",
            features: [
              { name: "Custom Web/App Design", included: true },
              { name: "Responsive Web Development", included: true },
              { name: "User Experience (UX) Design", included: true },
              { name: "SEO Optimization", included: true },
              { name: "E-Commerce Solutions", included: true },
              { name: "Technical SEO Audits", included: true },
              { name: "Premium Support", included: true },
            ],
            pages: "Unlimited pages",
            addOns: ["Priority Support: $50/month", "Logo Design: $30"],
            description: "Comprehensive solution for growing businesses and e-commerce stores.",
          },
        ];
      
        const pricingContainer = document.querySelector(".pricing-section");
      
        if (!pricingContainer) {
          console.error("Error: Pricing section container not found in HTML!");
          return;
        }
      
        // Generate package cards
        pricingData.forEach((packageData) => {
          const card = document.createElement("div");
          card.classList.add("pricing-card");
      
          card.innerHTML = `
            <div class="pricing-header">
              <h3 class="package-name">${packageData.package} Package</h3>
              <p class="package-price">${packageData.price}</p>
            </div>
            <em class="package-description">${packageData.description}</em>
            <p class="package-pages"><strong>Pages:</strong> ${packageData.pages}</p>
            <ul class="package-features">
              ${packageData.features
                .map(
                  (feature) => `
                    <li>
                      <i class="fas ${feature.included ? "fa-check" : "fa-times"}"></i>
                      ${feature.name}
                    </li>
                  `
                )
                .join("")}
            </ul>
            <div class="package-addons">
              <p><strong>Add-ons:</strong></p>
              <ul>
                ${packageData.addOns.map((addOn) => `<li>${addOn}</li>`).join("")}
              </ul>
            </div>
            <button class="pricing-button">Choose ${packageData.package}</button>
          `;
      
          // Append card to the pricing section
          pricingContainer.appendChild(card);
        });
      });
      
      