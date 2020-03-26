<template>
  <div id="words-per-minute">
    {{ wpm }} WPM
  </div>
</template>

<script>
    export default {
        props: [
            'typed',
            'enableTimer',
        ],
        watch: {
            enableTimer: function(newValue) {
                if (newValue) {
                    const calculate = () => {
                        const now = new Date().getTime();
                        const end = now - this.startTime;

                        this.endTimeInMin = (end / 1000) / 60;
                    };

                    calculate();

                    this.startTime = new Date().getTime();
                    this.timer = setInterval(calculate, 1000);
                } else { clearInterval(this.timer); }
            }
        },
        data: function () {
            return {
                startTime: 0,
                endTimeInMin: 0.0,
                timer: null,
            };
        },
        computed: {
            wpm: function () { 
                if (this.typed === 0) { return 0; }
                return Math.round((this.typed / 5) / this.endTimeInMin);
            }
        }
    };
</script>

<style scoped>
	#words-per-minute {
    color: #d9be2b;

    width: fit-content;

    position: absolute;
    left: 50%;
    top: 75%;
    transform: translateX(-50%);

    font-family: Arial;
    font-weight: bold;
    font-size: 3.3vw;

    user-select: none;
    cursor: default;
  }
</style>