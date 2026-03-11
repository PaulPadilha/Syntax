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
    // 3. Lógica do Carrossel c (.carrossel-projetos-c)
    const carrosselContainerC = document.querySelector('.carrossel-projetos-c');

    if (carrosselContainerC) {
        const carrosselTrilhaC = carrosselContainerC.querySelector('.carrossel-trilha-c');
        const botoesC = carrosselContainerC.querySelectorAll('.carrossel-botao-c');
        let itensC = Array.from(carrosselTrilhaC.children);

        const ITEM_WIDTH = 500; // A largura fixa do seu CSS

        // Lógica de Clonagem correta (usando itensC)
        const clonesCount = 3;
        const clonesIniciaisC = itensC.slice(0, clonesCount).map(item => item.cloneNode(true));
        const clonesFinaisC = itensC.slice(-clonesCount).map(item => item.cloneNode(true));

        // Adiciona os clones
        clonesIniciaisC.forEach(clone => carrosselTrilhaC.appendChild(clone));
        clonesFinaisC.reverse().forEach(clone => carrosselTrilhaC.prepend(clone));

        // Atualiza a lista de itens após a clonagem
        itensC = Array.from(carrosselTrilhaC.children);
        let currentIndexC = clonesCount; // Começa após os clones do início

        function updateTransformC() {
            carrosselTrilhaC.style.transform = `translateX(-${currentIndexC * ITEM_WIDTH}px)`;
        }

        function setInitialPositionC() {
            carrosselTrilhaC.style.transition = 'none';
            updateTransformC();

            setTimeout(() => {
                carrosselTrilhaC.style.transition = 'transform 0.5s ease';
            }, 50);
        }

        // Posicionamento inicial
        setTimeout(setInitialPositionC, 100);

        // Evento de clique nos botões (corrigido de botoesB para botoesC)
        botoesC.forEach(botao => {
            botao.addEventListener('click', () => {
                carrosselTrilhaC.style.transition = 'transform 0.5s ease';
                if (botao.classList.contains('next')) {
                    currentIndexC++;
                } else {
                    currentIndexC--;
                }
                updateTransformC();
            });
        });

        // Lógica de loop infinito (corrigido referências B para C)
        carrosselTrilhaC.addEventListener('transitionend', () => {
            if (currentIndexC >= itensC.length - clonesCount) {
                carrosselTrilhaC.style.transition = 'none';
                currentIndexC = clonesCount;
                updateTransformC();
            } else if (currentIndexC < clonesCount) {
                carrosselTrilhaC.style.transition = 'none';
                currentIndexC = itensC.length - (clonesCount * 2);
                // A lógica acima ajusta para o final real antes dos clones
                updateTransformC();
            }
        });
    }
});