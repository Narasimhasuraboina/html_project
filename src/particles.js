export function initCinemaParticles() {
    const canvas = document.getElementById("cinema-particles");
    const context = canvas?.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 760px)");
    let width = 0;
    let height = 0;
    let particles = [];

    if (!canvas || !context) return () => {};

    const randomPointInReel = () => {
        const holeCenters = [
            [-0.19, -0.19], [0.19, -0.19], [-0.19, 0.19], [0.19, 0.19], [0, 0]
        ];
        let x;
        let y;

        do {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.sqrt(Math.random()) * 0.52;
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
        } while (holeCenters.some(([holeX, holeY]) => Math.hypot(x - holeX, y - holeY) < 0.075));

        return { x, y };
    };

    function resizeParticles() {
        const nextWidth = Math.round(canvas.clientWidth);
        const nextHeight = Math.round(canvas.clientHeight);
        if (!nextWidth || !nextHeight || (nextWidth === width && nextHeight === height)) return;

        width = nextWidth;
        height = nextHeight;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const count = Math.max(240, Math.min(520, Math.round((width * height) / 2100)));
        particles = Array.from({ length: count }, () => ({
            ...randomPointInReel(),
            angle: Math.random() * Math.PI * 2,
            drift: 0.45 + Math.random(),
            size: 0.65 + Math.random() * 1.35,
            alpha: 0.25 + Math.random() * 0.65
        }));
    }

    return () => {
        if (compactLayout.matches) return;
        resizeParticles();
        if (!particles.length) return;

        const bounds = canvas.getBoundingClientRect();
        const scrollProgress = reducedMotion.matches
            ? 0
            : Math.min(1, Math.max(0, (-bounds.top + height * 0.12) / Math.max(height * 0.88, 1)));
        const spread = scrollProgress * scrollProgress * Math.min(230, width * 0.22);
        const scale = Math.min(width, height) * 0.74;
        const centerX = width * 0.51;
        const centerY = height * 0.5;
        const isLightTheme = document.body.classList.contains("light-theme");

        context.clearRect(0, 0, width, height);
        context.fillStyle = isLightTheme ? "#342e26" : "#f3c78d";

        particles.forEach(particle => {
            const x = centerX + particle.x * scale + Math.cos(particle.angle) * spread * particle.drift;
            const y = centerY + particle.y * scale + Math.sin(particle.angle) * spread * particle.drift * 0.65;
            context.globalAlpha = particle.alpha * (1 - scrollProgress * 0.55);
            context.fillRect(x, y, particle.size, particle.size);
        });

        context.globalAlpha = 1;
    };
}

