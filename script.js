const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to strip out 'a', 'an', 'the' from the band names
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands ignoring articles
const sortedBands = bands.sort((a, b) => {
    return stripArticle(a).localeCompare(stripArticle(b));
});

// Create an unordered list and append sorted bands
const ul = document.getElementById('bands');

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
