// =========================
// SIMPLE NOTIFICATION
// =========================

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.className =
        "notification";

    notification.innerText =
        message;

    document.body.appendChild(
        notification
    );

    setTimeout(() => {

        notification.remove();

    }, 3000);

}

// =========================
// LOGOUT
// =========================

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure want to logout?"
        );

    if (confirmLogout) {

        window.location.href =
            "index.html";

    }

}