const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");

const usersData = JSON.parse(localStorage.getItem("users")) || [];
console.log(usersData);
function register(e) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rePass = document.getElementById("rePass").value;
  e.preventDefault();
  if (!username || !password || !rePass) {
    showMessage("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password !== rePass) {
    showMessage("Mật khẩu và nhập lại mật khẩu không trùng khớp.");
    return;
  }

  const newUser = {
    username,
    password,
  };
  usersData.push(newUser);
  localStorage.setItem("users", JSON.stringify(usersData));
  showMessage(
    `Đăng ký thành công. Bây giờ bạn có thể <a href="./login.html">Đăng nhập</a>`
  );
}

function login(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username, password);

  if (!username || !password) {
    showMessage("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  const usersDatabase = JSON.parse(localStorage.getItem("users"));
  console.log(usersDatabase);
  const checkUser = usersDatabase.some(
    (item) => item.username === username && item.password === password
  );
  console.log(checkUser);
  if (checkUser) {
    showMessage(
      `Đăng nhập thành công. Bây giờ bạn có thể <strong><a href="./play.html">chơi game</a></strong>`
    );
  } else {
    showMessage(`Sai username hoặc password, vui lòng nhập lại!`);
  }
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  messageElement.classList.remove("hidden");

  // Xóa thông báo sau 5 giây
  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.add("hidden");
  }, 5000);
}

if (formRegister) {
  formRegister.addEventListener("submit", (e) => register(e));
}

if (formLogin) {
  formLogin.addEventListener("submit", (e) => login(e));
}
