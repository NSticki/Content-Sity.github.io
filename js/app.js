// Функция для проверки, находится ли элемент в области видимости
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Функция для анимации появления и скрытия блоков .project-card и #about
function handleScroll() {
	const projectCards = document.querySelectorAll('.project-card');
	const aboutSection = document.querySelector('#about');

	// Анимация для блоков .project-card
	projectCards.forEach((card, index) => {
		if (isInViewport(card)) {
			gsap.to(card, {
				opacity: 1, // Делаем блок видимым
				y: 0, // Возвращаем на нормальную позицию
				duration: 0.5, // Длительность анимации
				delay: index * 0.2, // Задержка для каждого элемента
				ease: "power4.out" // Замедление в конце
			});
			card.classList.add('visible');
		} else {
			gsap.to(card, {
				opacity: 0, // Скрываем блок
				y: 100, // Сдвигаем вниз
				duration: 0.5, // Длительность анимации
				ease: "power4.in" // Замедление в начале
			});
			card.classList.remove('visible');
		}
	});

	// Анимация для секции #about
	if (isInViewport(aboutSection)) {
		gsap.to(aboutSection, {
			opacity: 1, // Делаем блок видимым
			y: 0, // Возвращаем на нормальную позицию
			duration: 1.5, // Длительность анимации
			ease: "power4.out" // Замедление в конце
		});
		aboutSection.classList.add('visible');
	} else {
		gsap.to(aboutSection, {
			opacity: 0, // Скрываем блок
			y: 100, // Сдвигаем вниз
			duration: 1, // Длительность анимации
			ease: "power4.in" // Замедление в начале
		});
		aboutSection.classList.remove('visible');
	}
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Выполняем функцию сразу, чтобы проверить, что элементы могут быть видны сразу при загрузке
handleScroll();
