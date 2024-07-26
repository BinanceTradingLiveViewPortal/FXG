const englishTexts = {
    title: "Executive Dashboard",
    labelDateRange: "Auto date range",
    labelServices: "Services",
    labelPosts: "Posts",
    newWinsTitle: "New Wins",
    trialWinRateTitle: "Trial:Win Rate",
    newMrrTitle: "New MRR",
    pageViewsTitle: "Page Views",
    mrrStatsTitle: "MRR Stats by Country",
    mrrTitle: "MRR"
};

const spanishTexts = {
    title: "Tablero Ejecutivo",
    labelDateRange: "Rango de fechas automático",
    labelServices: "Servicios",
    labelPosts: "Publicaciones",
    newWinsTitle: "Nuevas Ganancias",
    trialWinRateTitle: "Tasa de Prueba:Ganancia",
    newMrrTitle: "Nuevo MRR",
    pageViewsTitle: "Vistas de Página",
    mrrStatsTitle: "Estadísticas MRR por País",
    mrrTitle: "MRR"
};

let isEnglish = true;

function toggleLanguage() {
    const texts = isEnglish ? spanishTexts : englishTexts;
    document.getElementById("title").innerText = texts.title;
    document.getElementById("label-date-range").innerText = texts.labelDateRange;
    document.getElementById("label-services").innerText = texts.labelServices;
    document.getElementById("label-posts").innerText = texts.labelPosts;
    document.getElementById("new-wins-title").innerText = texts.newWinsTitle;
    document.getElementById("trial-win-rate-title").innerText = texts.trialWinRateTitle;
    document.getElementById("new-mrr-title").innerText = texts.newMrrTitle;
    document.getElementById("page-views-title").innerText = texts.pageViewsTitle;
    document.getElementById("mrr-stats-title").innerText = texts.mrrStatsTitle;
    document.getElementById("mrr-title").innerText = texts.mrrTitle;

    document.getElementById("language-button").innerText = isEnglish ? "Español" : "English";
    isEnglish = !isEnglish;
}

// Initialize charts
document.addEventListener('DOMContentLoaded', () => {
    // Page Views Chart
    const ctxPageViews = document.getElementById('pageViewsChart').getContext('2d');
    new Chart(ctxPageViews, {
        type: 'doughnut',
        data: {
            labels: ['Referral', 'Direct', 'Organic Search'],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
            }]
        },
        options: {
            responsive: true,
        }
    });

    // MRR Stats by Country Chart
    const ctxMrrStats = document.getElementById('mrrStatsChart').getContext('2d');
    new Chart(ctxMrrStats, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'United States',
                data: [{x: 300, y: 10, r: 15}],
                backgroundColor: '#ff6384',
            }, {
                label: 'Australia',
                data: [{x: 100, y: 5, r: 10}],
                backgroundColor: '#36a2eb',
            }, {
                label: 'Canada',
                data: [{x: 200, y: 8, r: 12}],
                backgroundColor: '#cc65fe',
            }, {
                label: 'United Kingdom',
                data: [{x: 400, y: 12, r: 20}],
                backgroundColor: '#ffce56',
            }]
        },
        options: {
            responsive: true,
        }
    });

    // MRR Chart
    const ctxMrr = document.getElementById('mrrChart').getContext('2d');
    new Chart(ctxMrr, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'MRR',
                data: [12000, 15000, 10000, 20000, 18000, 22000, 24000, 20000, 23000, 25000, 27000, 29000],
                backgroundColor: '#ff6384',
            }]
        },
        options: {
            responsive: true,
        }
    });
});
