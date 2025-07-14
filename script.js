async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/fire');
        response.id='count';
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



function sCategory() {
    const inputEl = document.getElementById('category');
    inputEl.id='category';
    const value = inputEl.value;
    console.log(value);


}


