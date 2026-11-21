export function initSpaceBackground() {
    const scene = document.getElementById("space-background");
    if (!scene) return () => {};

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let targetScroll = window.scrollY;
    let currentScroll = targetScroll;
    let visible = !document.hidden;

    function render() {
        frame = 0;
        if (!visible) return;
        currentScroll += (targetScroll - currentScroll) * 0.12;
        const shift = currentScroll * -0.22;
        scene.style.setProperty("--space-shift", shift.toFixed(2) + "px");
        scene.style.setProperty("--space-shift-near", (shift * 1.65).toFixed(2) + "px");
        scene.style.setProperty("--space-shift-far", (shift * 0.55).toFixed(2) + "px");
        if (!reducedMotion.matches && Math.abs(targetScroll - currentScroll) > 0.35) {
            frame = window.requestAnimationFrame(render);
        }
    }

    function schedule() {
        if (reducedMotion.matches) {
            currentScroll = targetScroll;
            render();
            return;
        }
        if (!frame && visible) frame = window.requestAnimationFrame(render);
    }

    function onScroll() {
        targetScroll = window.scrollY;
        schedule();
    }

    function onVisibility() {
        visible = !document.hidden;
        if (visible) schedule();
        else if (frame) {
            window.cancelAnimationFrame(frame);
            frame = 0;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener?.("change", schedule);
    scene.style.setProperty("--space-shift", (targetScroll * -0.22).toFixed(2) + "px");
    scene.style.setProperty("--space-shift-near", (targetScroll * -0.36).toFixed(2) + "px");
    scene.style.setProperty("--space-shift-far", (targetScroll * -0.12).toFixed(2) + "px");

    return () => {
        if (frame) window.cancelAnimationFrame(frame);
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("visibilitychange", onVisibility);
        reducedMotion.removeEventListener?.("change", schedule);
    };
}
