  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
  //importa a função de autenticação do firebase

  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
  //importa a função de banco de dados do firebase

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA0uTvRzZoLd4POL3FV9pz0DD28v8EvD_U",
    authDomain: "projetofarfarwestwiki.firebaseapp.com",
    projectId: "projetofarfarwestwiki",
    storageBucket: "projetofarfarwestwiki.firebasestorage.app",
    messagingSenderId: "92743379049",
    appId: "1:92743379049:web:b6cc250934711281029af8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //exportar a autenticação
  export const auth = getAuth(app);

  //exportar o nosso db
  export const db = getFirestore(app);

