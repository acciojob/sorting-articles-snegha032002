//your JS code here. If required.
// Data for the bands
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
  'Anywhere But Here', 'An Old Dog'
];


const ignoreWords = ['a', 'an', 'the'];


function sortBands(bands) {
  return bands.sort((a, b) => {
  
    const processName = (name) => {
     
      return name.split(' ').filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');
    };


    return processName(a).localeCompare(processName(b));
  });
}


function displaySortedBands() {
  const sortedBands = sortBands(bands);
  const list = document.getElementById('band');
  
 
  list.innerHTML = '';
  
 
  sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    list.appendChild(li);
  });
}


displaySortedBands();

