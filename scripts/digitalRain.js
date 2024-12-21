"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const backgroundColour = "rgba(247, 247, 247, 0.2)";
    const textColour = "#9CA3AF";
    let width = window.innerWidth;
    let height = window.innerHeight;
    let columns;
    let yPositions;
    const charactersLength = 125;
    const characters = Array.from({ length: charactersLength }, (_, i) => String.fromCharCode(i + 1));
    function initializeCanvas() {
        canvas.width = width;
        canvas.height = height;
        ctx.font = "12px monospace";
        columns = Math.floor(width / 20) + 1;
        yPositions = Array.from({ length: columns }, () => Math.random() * height);
    }
    function drawDigitalRain() {
        ctx.fillStyle = backgroundColour;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = textColour;
        yPositions.forEach((y, index) => {
            const character = characters[Math.floor(Math.random() * charactersLength)];
            const x = index * 20;
            ctx.fillText(character, x, y);
            if (y > height || Math.random() > 0.975) {
                yPositions[index] = 0;
            }
            else {
                yPositions[index] = y + 20;
            }
        });
    }
    initializeCanvas();
    setInterval(drawDigitalRain, 50);
    window.addEventListener("resize", () => {
        width = window.innerWidth;
        height = window.innerHeight;
        initializeCanvas();
    });
});
