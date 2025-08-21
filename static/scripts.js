const Usuarios = [
    { username: "admin", password: "1234" },
    { username: "user", password: "abcd" }
];

const form = document.getElementById("login");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita refrescar la página

    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contrasena").value;

    // Verifica si existe el usuario
    const validUser = Usuarios.find(u => u.username === username && u.password === password);

    if (validUser) {
    alert("Bienvenido " + validUser.username + " 🎉");
    // Redirigir al blog:
    window.location.href = "blog.html";
    } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
});

// EL JS DEL BLOG UwU
    // Función para truncar texto a 500 caracteres
    function truncateText(text, maxLength = 500) {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength).trim() + '...';
    }

    // Función para aplicar truncado a todas las tarjetas
    function applyTextTruncation() {
      const cardTexts = document.querySelectorAll('.blog-card .card-text');

      cardTexts.forEach(cardText => {
        const fullText = cardText.getAttribute('data-full-text') || cardText.textContent;

        // Guardar el texto completo si no existe
        if (!cardText.getAttribute('data-full-text')) {
          cardText.setAttribute('data-full-text', fullText);
        }

        // Aplicar truncado solo si el texto es muy largo
        if (fullText.length > 500) {
          cardText.textContent = truncateText(fullText, 500);
          cardText.classList.add('truncated');
        } else {
          cardText.classList.remove('truncated');
        }
      });
    }

    // Función para mostrar texto completo en modal
    function showFullContent(modalId, fullText) {
      console.log('Mostrando contenido completo para:', modalId, fullText);
      const modal = document.getElementById(modalId);
      if (modal) {
        const modalBody = modal.querySelector('.post-content');
        if (modalBody) {
          // Buscar el primer párrafo y reemplazarlo con el texto completo
          const firstParagraph = modalBody.querySelector('p:first-of-type');
          if (firstParagraph) {
            firstParagraph.textContent = fullText;
            console.log('Texto actualizado en modal');
          } else {
            console.log('No se encontró párrafo en modal');
          }
        } else {
          console.log('No se encontró post-content en modal');
        }
      } else {
        console.log('Modal no encontrado:', modalId);
      }
    }

    // Aplicar truncado cuando se carga la página
    document.addEventListener('DOMContentLoaded', applyTextTruncation);

    // Aplicar truncado cuando se redimensiona la ventana (responsive)
    window.addEventListener('resize', applyTextTruncation);

    // Event listeners para los botones "Leer más"
    document.addEventListener('DOMContentLoaded', function () {
      console.log('DOM cargado, configurando botones...');

      // Botón del primer post
      const btn1 = document.querySelector('.blog-card[data-bs-target="#post1Modal"] .btn');
      if (btn1) {
        console.log('Botón 1 encontrado, agregando event listener');
        btn1.addEventListener('click', function () {
          console.log('Botón 1 clickeado');
          setTimeout(() => {
            const cardText = document.querySelector('.blog-card[data-bs-target="#post1Modal"] .card-text');
            const fullText = cardText.getAttribute('data-full-text');
            console.log('Texto completo del post 1:', fullText);
            if (fullText) {
              showFullContent('post1Modal', fullText);
            }
          }, 100); // Pequeño delay para que el modal se abra primero
        });
      } else {
        console.log('Botón 1 NO encontrado');
      }

      // Botón del segundo post
      const btn2 = document.querySelector('.blog-card[data-bs-target="#post2Modal"] .btn');
      if (btn2) {
        console.log('Botón 2 encontrado, agregando event listener');
        btn2.addEventListener('click', function () {
          console.log('Botón 2 clickeado');
          setTimeout(() => {
            const cardText = document.querySelector('.blog-card[data-bs-target="#post2Modal"] .card-text');
            const fullText = cardText.getAttribute('data-full-text');
            if (fullText) {
              showFullContent('post2Modal', fullText);
            }
          }, 100);
        });
      }

      // Botón del tercer post
      const btn3 = document.querySelector('.blog-card[data-bs-target="#post3Modal"] .btn');
      if (btn3) {
        console.log('Botón 3 encontrado, agregando event listener');
        btn3.addEventListener('click', function () {
          console.log('Botón 3 clickeado');
          setTimeout(() => {
            const cardText = document.querySelector('.blog-card[data-bs-target="#post3Modal"] .card-text');
            const fullText = cardText.getAttribute('data-full-text');
            if (fullText) {
              showFullContent('post3Modal', fullText);
            }
          }, 100);
        });
      }
    });

