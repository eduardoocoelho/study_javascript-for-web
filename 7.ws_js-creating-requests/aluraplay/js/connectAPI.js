async function connect(){
    const url = await fetch('http://localhost:3000/videos');
    const videosList = await url.json();

    //console.log(videosList);
    return videosList;
}

async function addVideo(title, description, url, image){
    const connection = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: url,
            imagem: image
        })
    })

    const connectionJSON = await connection.json();

    return connectionJSON;
}

export const connectAPI = {
    connect,
    addVideo
}
