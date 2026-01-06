document.addEventListener('DOMContentLoaded', () => {

    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // Animação do Hero (Executa apenas em index.html)
    function animateHeroSection() {
        if (heroTitle && heroSubtitle) {
            heroTitle.classList.remove('animate-slideInLeft');
            heroSubtitle.classList.remove('animate-slideInRight');
            void heroTitle.offsetWidth;
            void heroSubtitle.offsetWidth;
            heroTitle.classList.add('animate-slideInLeft');
            heroSubtitle.classList.add('animate-slideInRight');
        }
    }
    animateHeroSection();


    // ===============================================
    // Lógica do Carrossel A (.carrossel-projetos)
    // ===============================================
    const carrosselContainerA = document.querySelector('.carrossel-projetos');

    if (carrosselContainerA) {
        const carrosselTrilhaA = carrosselContainerA.querySelector('.carrossel-trilha');
        const botoesA = carrosselContainerA.querySelectorAll('.carrossel-botao');
        let itensA = Array.from(carrosselTrilhaA.children);

        // A LARGURA FIXA (500px no CSS)
        const ITEM_WIDTH = 500;

        // Lógica de Clonagem
        const clonesCount = 3; //
        const clonesIniciaisA = itensA.slice(0, clonesCount).map(item => item.cloneNode(true));
        const clonesFinaisA = itensA.slice(-clonesCount).map(item => item.cloneNode(true));

        clonesIniciaisA.forEach(clone => carrosselTrilhaA.appendChild(clone));
        clonesFinaisA.reverse().forEach(clone => carrosselTrilhaA.prepend(clone));

        itensA = Array.from(carrosselTrilhaA.children);
        let currentIndexA = clonesFinaisA.length;


        // Função para posicionar o carrossel corretamente (forçando a leitura da largura)
        function setInitialPositionA() {
            carrosselTrilhaA.style.transition = 'none';
            // Tentativa de ler a largura real, caso 500 não esteja correto, mas mantendo 500 como fallback
            const realItemWidthA = itensA[currentIndexA].offsetWidth > 0 ? itensA[currentIndexA].offsetWidth : ITEM_WIDTH;

            carrosselTrilhaA.style.transform = `translateX(-${currentIndexA * realItemWidthA}px)`;

            // Reativa a transição
            setTimeout(() => {
                carrosselTrilhaA.style.transition = 'transform 0.5s ease';
            }, 50);
        }

        setTimeout(setInitialPositionA, 100);


        botoesA.forEach(botao => {
            botao.addEventListener('click', () => {
                carrosselTrilhaA.style.transition = 'transform 0.5s ease';
                if (botao.classList.contains('next')) {
                    currentIndexA++;
                } else {
                    currentIndexA--;
                }
                carrosselTrilhaA.style.transform = `translateX(-${currentIndexA * ITEM_WIDTH}px)`;
            });
        });

        carrosselTrilhaA.addEventListener('transitionend', () => {
            // Lógica de loop infinito
            if (currentIndexA >= itensA.length - clonesCount) {
                carrosselTrilhaA.style.transition = 'none';
                currentIndexA = clonesCount;
                carrosselTrilhaA.style.transform = `translateX(-${currentIndexA * ITEM_WIDTH}px)`;
            } else if (currentIndexA < clonesCount) {
                carrosselTrilhaA.style.transition = 'none';
                currentIndexA = itensA.length - clonesCount - 1;
                carrosselTrilhaA.style.transform = `translateX(-${currentIndexA * ITEM_WIDTH}px)`;
            }
        });
    }

    // ===============================================
    // 3. Lógica do Carrossel B (.carrossel-projetos-b)
    // ===============================================
    const carrosselContainerB = document.querySelector('.carrossel-projetos-b');

    if (carrosselContainerB) {
        const carrosselTrilhaB = carrosselContainerB.querySelector('.carrossel-trilha-b');
        const botoesB = carrosselContainerB.querySelectorAll('.carrossel-botao-b');
        let itensB = Array.from(carrosselTrilhaB.children);

        // A LARGURA FIXA (500px no CSS)
        const ITEM_WIDTH = 500;

        // Lógica de Clonagem
        const clonesCount = 3;
        const clonesIniciaisB = itensB.slice(0, clonesCount).map(item => item.cloneNode(true));
        const clonesFinaisB = itensB.slice(-clonesCount).map(item => item.cloneNode(true));

        clonesIniciaisB.forEach(clone => carrosselTrilhaB.appendChild(clone));
        clonesFinaisB.reverse().forEach(clone => carrosselTrilhaB.prepend(clone));

        itensB = Array.from(carrosselTrilhaB.children);
        let currentIndexB = clonesFinaisB.length;

        // Função para posicionar o carrossel B corretamente
        function setInitialPositionB() {
            carrosselTrilhaB.style.transition = 'none';
            // Tentativa de ler a largura real para o posicionamento inicial
            const realItemWidthB = itensB[currentIndexB].offsetWidth > 0 ? itensB[currentIndexB].offsetWidth : ITEM_WIDTH;

            carrosselTrilhaB.style.transform = `translateX(-${currentIndexB * realItemWidthB}px)`;

            // Reativa a transição
            setTimeout(() => {
                carrosselTrilhaB.style.transition = 'transform 0.5s ease';
            }, 50);
        }

        // CORREÇÃO CRÍTICA: Executa o posicionamento inicial com um pequeno atraso
        setTimeout(setInitialPositionB, 100);

        botoesB.forEach(botao => {
            botao.addEventListener('click', () => {
                carrosselTrilhaB.style.transition = 'transform 0.5s ease';
                if (botao.classList.contains('next')) {
                    currentIndexB++;
                } else {
                    currentIndexB--;
                }
                // Movimento usa a largura fixa para consistência
                carrosselTrilhaB.style.transform = `translateX(-${currentIndexB * ITEM_WIDTH}px)`;
            });
        });

        carrosselTrilhaB.addEventListener('transitionend', () => {
            // Lógica de loop infinito
            if (currentIndexB >= itensB.length - clonesCount) {
                carrosselTrilhaB.style.transition = 'none';
                currentIndexB = clonesCount;
                carrosselTrilhaB.style.transform = `translateX(-${currentIndexB * ITEM_WIDTH}px)`;
            } else if (currentIndexB < clonesCount) {
                carrosselTrilhaB.style.transition = 'none';
                currentIndexB = itensB.length - clonesCount - 1;
                carrosselTrilhaB.style.transform = `translateX(-${currentIndexB * ITEM_WIDTH}px)`;
            }
        });
    }
});