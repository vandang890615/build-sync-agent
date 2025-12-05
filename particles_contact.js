class Starfield {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.config = {
            starCount: 800,
            speed: 0.1, // Base speed
            warpSpeed: 4.0, // Speed when warping
            isWarping: false
        };

        // Center of the screen
        this.cx = window.innerWidth / 2;
        this.cy = window.innerHeight / 2;

        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.background = 'black'; // Deep space background
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Mouse interaction for warp speed
        document.addEventListener('mousedown', () => this.config.isWarping = true);
        document.addEventListener('mouseup', () => this.config.isWarping = false);

        // Also warp on hover over contact form for cool effect? maybe too distracting.
        // Let's stick to constant subtle movement that accelerates slightly with mouse movement?
        // Or just standard classic Starfield.

        this.createStars();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.cx = this.canvas.width / 2;
        this.cy = this.canvas.height / 2;
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.config.starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                z: Math.random() * this.canvas.width // Depth
            });
        }
    }

    animate() {
        // Create trail effect for warp speed
        this.ctx.fillStyle = this.config.isWarping ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const currentSpeed = this.config.isWarping ? this.config.warpSpeed : this.config.speed;

        this.stars.forEach(star => {
            // Move star towards camera (decreasing z)
            star.z -= currentSpeed * 20;

            // Reset star if it passes camera
            if (star.z <= 0) {
                star.z = this.canvas.width;
                star.x = Math.random() * this.canvas.width;
                star.y = Math.random() * this.canvas.height;
            }

            // Project 3D coordinates to 2D screen
            const x = (star.x - this.cx) * (this.canvas.width / star.z) + this.cx;
            const y = (star.y - this.cy) * (this.canvas.width / star.z) + this.cy;

            // Calculate size based on depth
            const size = (1 - star.z / this.canvas.width) * 3;

            // Draw star
            if (x > 0 && x < this.canvas.width && y > 0 && y < this.canvas.height) {
                const brightness = (1 - star.z / this.canvas.width);
                this.ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;

                // Draw streak if warping
                if (this.config.isWarping) {
                    const prevX = (star.x - this.cx) * (this.canvas.width / (star.z + 50)) + this.cx;
                    const prevY = (star.y - this.cy) * (this.canvas.width / (star.z + 50)) + this.cy;

                    this.ctx.beginPath();
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(prevX, prevY);
                    this.ctx.strokeStyle = `rgba(100, 255, 218, ${brightness})`; // Cyan tint
                    this.ctx.lineWidth = size;
                    this.ctx.stroke();
                } else {
                    this.ctx.beginPath();
                    this.ctx.arc(x, y, size, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        });

        // Loop
        requestAnimationFrame(() => this.animate());
    }
}

// Auto-init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Starfield());
} else {
    new Starfield();
}
