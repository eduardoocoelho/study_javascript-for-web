async function connect(){
    const url = await fetch('http://localhost:3000/videos');
    const videosList = await url.json();

    //console.log(videosList);
    return videosList;
}

export const connectAPI = {
    connect
}
