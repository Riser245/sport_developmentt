const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('lg_admin.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
            <header>
            <!-- Header Inicio -->
            <nav class="navbar navbar-expand-lg p-md-3 bg-body-tertiary navbar-light navbar-dark bg-light gradient-custom">
                <div class="container-fluid">
                    <a href="/sport_development/Html/Admin_html/Mn_admin.html" type="submit" class="btnn">
                        <img src="/sport_development/api/Images/log_admin.png" alt="Bootstrap" width="110" height="60"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="mx-auto ml-1">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href=""></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_catego.html"><i
                                            class="bi bi-tags-fill"></i>Categorias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_clientes.html"><i
                                            class="bi bi-people-fill"></i>Clientes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_producto.html"><i
                                            class="bi bi-box-seam-fill"></i>Productos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_grafico.html"><i
                                            class="bi bi-pie-chart-fill"></i>Graficos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_comentarios.html"><i
                                            class="bi bi-chat-left-text-fill"></i>Comentarios</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </header>
            `);
        } else {
            location.href = 'Mn_admin.html';
        }
    } else {
        // Se agrega el encabezado de la página web antes del contenido principal.
        MAIN.insertAdjacentHTML('beforebegin', `
        <header>
        <!-- Header Inicio -->
        <nav class="navbar navbar-expand-lg p-md-3 bg-body-tertiary navbar-light navbar-dark bg-light gradient-custom">
            <div class="container-fluid">
                <a href="/sport_development/Html/Admin_html/Mn_admin.html" type="submit" class="btnn">
                    <img src="/sport_development/api/Images/log_admin.png" alt="Bootstrap" width="110" height="60"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="mx-auto ml-1">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href=""></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_catego.html"><i
                                        class="bi bi-tags-fill"></i>Categorias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_clientes.html"><i
                                        class="bi bi-people-fill"></i>Clientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_producto.html"><i
                                        class="bi bi-box-seam-fill"></i>Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_grafico.html"><i
                                        class="bi bi-pie-chart-fill"></i>Graficos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link col mx-auto" href="/sport_development/Html/Admin_html/Mn_comentarios.html"><i
                                        class="bi bi-chat-left-text-fill"></i>Comentarios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
    <footer class="pie_de_pagina">
        <nav class="navbar fixed-bottom bg-dark bg-body-tertiary bg-dark border-bottom border-body"
            data-bs-theme="dark">
            <div class="container">
                <div>
                    <p></i>Dashboard</p>
                    <p><a class="nav-link" href="" target="_blank"><i class="bi bi-envelope-fill"></i> Ayuda</p>
                </div>
                <div>
                    <p>Enlaces</p>
                    <p><a class="nav-link" href="/sport_development/Html/Publico_html/Progreso.html" target="_blank"><i class="bi bi-shop"></i> Sitio público</p>
                </div>
            </div>
        </nav>
    </footer>
    `);
}