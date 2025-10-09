document.addEventListener('DOMContentLoaded', () => {

    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // 1. Lógica da Animação do Hero (Executa apenas em index.html)
    function animateHeroSection() {
        if (heroTitle && heroSubtitle) { // Verifica se os elementos existem
            // Remove as classes de animação para resetar
            heroTitle.classList.remove('animate-slideInLeft');
            heroSubtitle.classList.remove('animate-slideInRight');

            // Força o navegador a recalcular a renderização
            void heroTitle.offsetWidth;
            void heroSubtitle.offsetWidth;

            // Adiciona as classes de animação novamente
            heroTitle.classList.add('animate-slideInLeft');
            heroSubtitle.classList.add('animate-slideInRight');
        }
    }
    animateHeroSection(); // Inicializa a animação quando a página carrega


    // 2. Lógica do Carrossel A (.carrossel-projetos)
    const carrosselContainerA = document.querySelector('.carrossel-projetos');

    if (carrosselContainerA) { // Executa apenas se o carrossel A existir na página
        const carrosselTrilhaA = carrosselContainerA.querySelector('.carrossel-trilha');
        const botoesA = carrosselContainerA.querySelectorAll('.carrossel-botao');
        let itensA = Array.from(carrosselTrilhaA.children);

        // Clona e anexa itens para efeito de loop infinito
        const clonesIniciaisA = itensA.slice(0, 3).map(item => item.cloneNode(true));
        const clonesFinaisA = itensA.slice(-3).map(item => item.cloneNode(true));

        clonesIniciaisA.forEach(clone => carrosselTrilhaA.appendChild(clone));
        clonesFinaisA.reverse().forEach(clone => carrosselTrilhaA.prepend(clone));

        itensA = Array.from(carrosselTrilhaA.children);
        let currentIndexA = clonesFinaisA.length;

        carrosselTrilhaA.style.transform = `translateX(-${itensA[currentIndexA].offsetLeft}px)`;

        botoesA.forEach(botao => {
            botao.addEventListener('click', () => {
                carrosselTrilhaA.style.transition = 'transform 0.5s ease';
                if (botao.classList.contains('next')) {
                    currentIndexA++;
                } else {
                    currentIndexA--;
                }

                carrosselTrilhaA.style.transform = `translateX(-${itensA[currentIndexA].offsetLeft}px)`;
            });
        });

        carrosselTrilhaA.addEventListener('transitionend', () => {
            if (currentIndexA >= itensA.length - clonesIniciaisA.length) {
                carrosselTrilhaA.style.transition = 'none';
                currentIndexA = clonesIniciaisA.length;
                carrosselTrilhaA.style.transform = `translateX(-${itensA[currentIndexA].offsetLeft}px)`;
            } else if (currentIndexA < clonesFinaisA.length) {
                carrosselTrilhaA.style.transition = 'none';
                currentIndexA = itensA.length - clonesFinaisA.length - 1;
                carrosselTrilhaA.style.transform = `translateX(-${itensA[currentIndexA].offsetLeft}px)`;
            }
        });
    }

    // 3. Lógica do Carrossel B (.carrossel-projetos-b)
    const carrosselContainerB = document.querySelector('.carrossel-projetos-b');

    if (carrosselContainerB) { // Executa apenas se o carrossel B existir na página
        const carrosselTrilhaB = carrosselContainerB.querySelector('.carrossel-trilha-b');
        const botoesB = carrosselContainerB.querySelectorAll('.carrossel-botao-b');
        let itensB = Array.from(carrosselTrilhaB.children);

        // Clona e anexa itens para efeito de loop infinito
        const clonesIniciaisB = itensB.slice(0, 3).map(item => item.cloneNode(true));
        const clonesFinaisB = itensB.slice(-3).map(item => item.cloneNode(true));

        clonesIniciaisB.forEach(clone => carrosselTrilhaB.appendChild(clone));
        clonesFinaisB.reverse().forEach(clone => carrosselTrilhaB.prepend(clone));

        itensB = Array.from(carrosselTrilhaB.children);
        let currentIndexB = clonesFinaisB.length;

        carrosselTrilhaB.style.transform = `translateX(-${itensB[currentIndexB].offsetLeft}px)`;

        botoesB.forEach(botao => {
            botao.addEventListener('click', () => {
                carrosselTrilhaB.style.transition = 'transform 0.5s ease';
                if (botao.classList.contains('next')) {
                    currentIndexB++;
                } else {
                    currentIndexB--;
                }

                carrosselTrilhaB.style.transform = `translateX(-${itensB[currentIndexB].offsetLeft}px)`;
            });
        });

        carrosselTrilhaB.addEventListener('transitionend', () => {
            if (currentIndexB >= itensB.length - clonesIniciaisB.length) {
                carrosselTrilhaB.style.transition = 'none';
                currentIndexB = clonesIniciaisB.length;
                carrosselTrilhaB.style.transform = `translateX(-${itensB[currentIndexB].offsetLeft}px)`;
            } else if (currentIndexB < clonesFinaisB.length) {
                carrosselTrilhaB.style.transition = 'none';
                currentIndexB = itensB.length - clonesFinaisB.length - 1;
                carrosselTrilhaB.style.transform = `translateX(-${itensB[currentIndexB].offsetLeft}px)`;
            }
        });
    }