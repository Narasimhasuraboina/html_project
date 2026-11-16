let toastTimeoutId = null;

export function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeoutId);
    toastTimeoutId = setTimeout(() => toast.classList.remove("show"), 2400);
}

