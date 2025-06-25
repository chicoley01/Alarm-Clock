export function toggleActiveLink(page) {
    document.querySelectorAll("nav div a[data-page]").forEach(link => {
        link.classList.toggle("active", link.dataset.page === page);
    });
}