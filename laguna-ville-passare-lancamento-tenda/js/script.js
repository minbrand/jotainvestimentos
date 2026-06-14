 // Slider de Imagens
        let currentSlide = 0;
        function moveSlide(direction) {
            const track = document.getElementById('slider');
            const totalSlides = track.children.length;
            currentSlide += direction;
            
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            else if (currentSlide >= totalSlides) currentSlide = 0;
            
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Navegação de Abas (Planta Baixa)
        function openTab(tabId, event) {
            const contents = document.querySelectorAll('.tab-content');
            const buttons = document.querySelectorAll('.tab-btn');
            
            contents.forEach(c => c.classList.remove('active'));
            buttons.forEach(b => b.classList.remove('active'));
            
            document.getElementById(tabId).classList.add('active');
            event.currentTarget.classList.add('active');
        }

        // Lightbox para Zoom na Planta
        function openLightbox(imgElement) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = imgElement.src;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
        }

        // Fechar lightbox no botão Esc
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") closeLightbox();
        });







        
         // Função para criar um cookie simples (expira em dias)
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        // Função para ler um cookie
        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Verifica se o usuário já aceitou os cookies (cookie "cookiesAccepted")
        window.addEventListener('DOMContentLoaded', function() {
            const banner = document.getElementById('cookieBanner');
            const accepted = getCookie('cookiesAccepted');

            if (!accepted) {
                // Se ainda não aceitou, mostra o banner
                banner.style.display = 'flex';
            } else {
                banner.style.display = 'none';
            }

            // Evento do botão Aceitar
            const acceptBtn = document.getElementById('acceptCookiesBtn');
            acceptBtn.addEventListener('click', function() {
                // Define cookie por 30 dias
                setCookie('cookiesAccepted', 'true', 30);
                // Esconde o banner
                banner.style.display = 'none';
                // Opcional: você pode disparar qualquer outra ação, como carregar scripts de analytics
            });
        });