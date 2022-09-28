const placeList = document.getElementById('place-list');
const searchBar = document.getElementById('searchBar');
let data = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredName = data.filter((obj) => {
        return (
            obj.name.toLowerCase().includes(searchString)
        );
    });
    displayPlaces(filteredName);
});

const loadJSON = async () => {
    try {
        const res = await fetch('example_data.json');
        data = await res.json();
        displayPlaces(data);
    } catch (err) {
        console.error(err);
    }
};

const displayPlaces = (object) => {
    const htmlString = object
        .map((obj) => {
            return `
            <div class="obj">
                <b>${obj.name}</b>
                <p>Rating: ${obj.rating}</p>
                <img src="${obj.profile_image_url}"></img>
            </div>
        `;
        })
        .join('');
    placeList.innerHTML = htmlString;
};

loadJSON();