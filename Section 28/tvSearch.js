const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const searchTerm = form.elements.query.value;


    const config = { params: { q: searchTerm , someRANDOMSTUFF: 'TOTALLYRANDOM'} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // console.log(;


    makeImages(res.data);

    form.elements.query.value = ''; // Empty text
})


const makeImages = (shows) => {

    for (let result of shows) {

        if (result.show.image) {
            const image = document.createElement('IMG');
            image.src = result.show.image.medium;
            document.body.append(image);
        }
    }
    
}