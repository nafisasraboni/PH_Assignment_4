type Light = "red"|"yellow"|"green"

function getTrafficAction(light: Light): string {
    return light==="red"? "Stop" : light==="yellow"? "Slow Down" : "Go"
}
console.log(getTrafficAction("green"))
