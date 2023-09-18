async function connect(){
    const url = await fetch('http://localhost:3000/videos');
    const videosList = await url.json();

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

    if(!connection.ok){
        throw new Error("Não foi possível enviar o vídeo!");
    }

    const connectionJSON = await connection.json();

    return connectionJSON;
}

async function search(text){
    const connection = await fetch(`http://localhost:3000/videos?q=${text}`);
    
    return connection.json();
}

export const connectAPI = {
    connect,
    addVideo,
    search
}
