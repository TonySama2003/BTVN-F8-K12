const slidesData = [
    {
        image: "https://picsum.photos/id/25/800/400",
        title: "Slide 1",
    },
    {
        image: "https://picsum.photos/id/27/800/400",
        title: "Slide 2",
    },
    {
        image: "https://picsum.photos/id/28/800/400",
        title: "Slide 3",
    },
    {
        image: "https://picsum.photos/id/29/800/400",
        title: "Slide 4",
    },
];

const sliderContainer = document.querySelector(".slider-container");
const dotsContainer = document.querySelector("#dots");

const prevButton = document.createElement("button");
prevButton.className = "navigation-button prev";
prevButton.innerHTML = "&#10094;";

const nextButton = document.createElement("button");
nextButton.className = "navigation-button next";
nextButton.innerHTML = "&#10095;";

function renderSlider() {
    if (!Array.isArray(slidesData)) return;

    const sliderWrapper = document.createElement("div");
    sliderWrapper.className = "slider-wrapper";

    // Tạo các slide và thêm các điểm điều hướng
    slidesData.forEach((item, index) => {
        const slide = document.createElement("div");
        slide.className = "slide";
        
        // Tạo thẻ img để hiển thị hình ảnh từ data
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        
        slide.appendChild(img);
        sliderWrapper.appendChild(slide);

        const dot = document.createElement("div");
        dot.className = "dot";
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    sliderContainer.append(sliderWrapper, prevButton, nextButton);

    return sliderWrapper;
}

const sliderWrapper = renderSlider();
let currentIndex = 0;

// Thêm class "active" cho dot đầu tiên
dotsContainer.querySelectorAll(".dot")[0].classList.add("active");

function handleSlide() {
    const slides = sliderContainer.querySelectorAll(".slide");
    let slideWidth = slides[0].offsetWidth;

    // Kiểm tra nếu đã đến slide cuối cùng thì quay lại đầu
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
        sliderWrapper.style.transform = `translateX(0px)`;
    } else {
        currentIndex++;
        sliderWrapper.style.transform = `translateX(${slideWidth * -1 * currentIndex}px)`;
    }

    // Cập nhật dot đang active
    dotsContainer.querySelector(".active").classList.remove("active");
    dotsContainer.querySelector(`div[data-index="${currentIndex}"]`).classList.add("active");
}

// Tự động chuyển slide sau 3 giây
let slideInterval = setInterval(handleSlide, 3000);

// Chuyển đến slide tiếp theo khi nhấn nút next
nextButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    handleSlide();
    slideInterval = setInterval(handleSlide, 3000);
});

// Chuyển về slide trước khi nhấn nút prev
prevButton.addEventListener("click", () => {
    clearInterval(slideInterval);

    const slides = sliderContainer.querySelectorAll(".slide");
    let slideWidth = slides[0].offsetWidth;

    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    sliderWrapper.style.transform = `translateX(${slideWidth * -1 * currentIndex}px)`;

    // Cập nhật dot đang active
    dotsContainer.querySelector(".active").classList.remove("active");
    dotsContainer.querySelector(`div[data-index="${currentIndex}"]`).classList.add("active");

    slideInterval = setInterval(handleSlide, 3000);
});
