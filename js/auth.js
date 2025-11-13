document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const goToRegister = document.getElementById("goToRegister");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // TODO: здесь будет реальная авторизация в MAX
      window.location.href = "app.html";
    });
  }

  if (goToRegister) {
    goToRegister.addEventListener("click", () => {
      // Если нужна отдельная страница регистрации:
      // window.location.href = "register.html";
      // Или модалка/экран внутри index.html
      alert("Здесь будет экран регистрации :)");
    });
  }
});
