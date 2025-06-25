export function toggleSPA({ toggleActiveLink }) {
    const contentfield = document.getElementById("content-field")

    const pages = {
        alarm: `<h1>Alarmes</h1><p>Veja seus alarmes!</p>`,
        clock: `<h1>Relógio</h1><p>Hora atual do mundo!</p>`,
        stopwatch: `<h1>Cronometro</h1><p>Veja seus cronometros!</p>`,
        timer: `<h1>Timers</h1><p>Veja seus timers!</p>`
    };

    function navegation(page) {
        if(!(page in pages)) {
            contentfield.innerHTML = `<h1>404</h1>`;
            toggleActiveLink(null);
            return;
        }

        history.pushState({ page }, "", `/${page}`);
        contentfield.innerHTML = pages[page];
        toggleActiveLink(page);
    }

    document.querySelectorAll("nav div a[data-page]").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page;
            navegation(page);
        });     
    });

    window.addEventListener("popstate", e => {
        const page = ( e.state && e.state.page || "clock" )
        contentfield.innerHTML = pages[page] || `<h1>Título</h1><p>Sub-título dskfmksdm</p>`
    });

    let path = window.location.pathname.replace("/", "").toLowerCase();
    if (!(path in pages)) {
        path = "clock";
        history.replaceState({ page: path }, "", `/${path}`);
        toggleActiveLink(path);
    }

    contentfield.innerHTML = pages[path];
    toggleActiveLink(path);
}