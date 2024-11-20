<script type="module" src="./firebaseconect.js"></script>


import { initializeApp } from "https://www.gstatic.com/firebasejs/13.25.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.25.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDeWpVRlvKE-i6Q-KKtTFfWfGmCApXO-Pw",
  authDomain: "desarrollointegralidsw41.firebaseapp.com",
  projectId: "desarrollointegralidsw41",
  storageBucket: "desarrollointegralidsw41.firebasestorage.app",
  messagingSenderId: "981604055549",
  appId: "1:981604055549:web:d47d3a0f2ec7b9aabc8194",
  measurementId: "G-DZ89EZ8S2G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "./login.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "./index.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "./index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}