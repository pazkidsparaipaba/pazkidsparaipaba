importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyACwO9-APNq-g30LBCuLsfZNg2Ub3GfsDE",
    authDomain: "pazkids-1d607.firebaseapp.com",
    projectId: "pazkids-1d607",
    storageBucket: "pazkids-1d607.firebasestorage.app",
    messagingSenderId: "246468540718",
    appId: "1:246468540718:web:098f5307a97b66bdce22bf",
    measurementId: "G-65Z0RM05DE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png', // Opcional: adicione um ícone na pasta do projeto
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
