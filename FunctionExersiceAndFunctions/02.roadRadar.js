


function getLimit(speed, zone) {
    switch (zone) {
        case "motorway":
            return 130;
            break;
        case "interstate":
            return 90;
            break;
        case "city":
            return 50;
            break;
        case "residential":
            return 20;
            break;
    }
}
function getInfractions(speed, limit) {
    let overSpeed = speed - limit;
    if (overSpeed <= 0) {
        return false;
    } else {

    }
}
let limit = getLimit(zone);
let infraction = getInfractions(speed, limit);
if (infraction) {
    console.log(infraction)




} getInfractions(40, "city")
getInfractions([21, "residential"])
getInfractions([120, "interstate"])
getInfractions([200, "motorway"])