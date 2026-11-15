
const foods = [
    {
        title: "Соковитий бургер",
        category: "burger",
        price: 120,
        description: "Соковита яловича котлета, плавлений сир, свіжий салат та стиглі помідори.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Бургер із яловичиною",
        category: "burger",
        price: 135,
        description: "Ніжна яловичина, м'яка булочка, хрустка зелень та фірмовий соус.",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Хрусткий курячий бургер",
        category: "burger",
        price: 125,
        description: "Золотиста куряча котлета зі свіжими овочами та ніжною заправкою.",
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Піца Делікатесна",
        category: "pizza",
        price: 180,
        description: "Смачна піца з моцарелою, томатним соусом та свіжим базиліком.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Сирна піца",
        category: "pizza",
        price: 170,
        description: "Класична сирна піца з хрусткою скоринкою та ароматним соусом.",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Вершкова паста",
        category: "pasta",
        price: 155,
        description: "Свіжа паста з вершковим соусом та ароматними травами.",
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Італійська паста",
        category: "pasta",
        price: 160,
        description: "Традиційна італійська паста з насиченим томатним соусом.",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Картопля фрі",
        category: "fries",
        price: 75,
        description: "Хрустка золотиста картопля фрі з невеликою кількістю солі.",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=650&q=80"
    },
    {
        title: "Картопля фрі з соусом",
        category: "fries",
        price: 90,
        description: "Свіжоприготована картопля фрі зі смачним фірмовим соусом.",
        img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=650&q=80"
    }
];

function foodCard(food) {
    return `
        <div class="col-lg-4 col-md-6">
            <div class="card food-card shadow-sm">
                <img src="${food.img}"
                     alt="${food.title}"
                     loading="lazy">

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold">
                        ${food.title}
                    </h5>

                    <p class="card-text">
                        ${food.description}
                    </p>

                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="food-price">
                            ${food.price} грн
                        </span>

                        <a href="#book-table-section"
                           class="btn btn-warning rounded-circle"
                           title="Замовити">
                            <i class="bi bi-cart-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showFoods(category = "all") {
    const container = document.getElementById("all-cards");

    const selectedFoods = category === "all"
        ? foods
        : foods.filter(food => food.category === category);

    container.innerHTML = selectedFoods.map(foodCard).join("");
}

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        showFoods(this.dataset.category);
    });
});

showFoods("all");

const topButton = document.getElementById("backToTopBtn");

function toggleTopButton() {
    topButton.classList.toggle(
        "d-none",
        window.scrollY < 200
    );
}

window.addEventListener("scroll", toggleTopButton);
toggleTopButton();

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Мінімальна дата бронювання
const dateInput = document.getElementById("date");

function updateMinimumDate() {
    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;
}

updateMinimumDate();

document.getElementById("bookingForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("bookingMessage").textContent =
            "Форму успішно перевірено! Це демонстраційний сайт, тому реальне бронювання не створено.";

        this.reset();
    });

document.querySelectorAll(".demo-auth").forEach(form => {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Це демонстраційна форма. Реєстрація та вхід не виконуються."
        );

        this.reset();
    });
});
