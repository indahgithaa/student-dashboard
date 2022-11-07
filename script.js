const mode = document.getElementById("mode-icon")
const bell = document.getElementById("bell")
const greetimg = document.getElementById("greet-img")
mode.onclick = () => {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode")) {
        bell.src = "images/4781824_alarm_alert_attention_bell_clock_icon.png"
        mode.src = "images/sun-mode.png"
        greetimg.src = "images/crescent-moon.png"
    } else {
        bell.src = "images/4781824_alarm_alert_attention_bell_clock_icon (1).png"
        mode.src = "images/2205210_dard_moon_night_stars_icon.png"
        greetimg.src = "images/sunshine.png"
    }
}