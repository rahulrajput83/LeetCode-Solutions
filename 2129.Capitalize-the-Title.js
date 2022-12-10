/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.toLowerCase();
    let array = title.split(" ");
    for(let i = 0; i < array.length; i++) {
        if(array[i].length > 2) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
        }

    }
    return array.join(" ")
};