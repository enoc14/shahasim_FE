import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {
        src: 'https://picsum.photos/400/200',
        thumbnail: 'https://picsum.photos/400/200',
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Servicio a la comunidad"
    },
    {
        src: 'https://picsum.photos/400/200',
        thumbnail: 'https://picsum.photos/400/200',
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Campamento realizado en 2019"
    },
    {
        src: 'https://picsum.photos/400/200',
        thumbnail: 'https://picsum.photos/400/200',
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Campamento realizado en 2018"
    },
    {
        src: 'https://picsum.photos/400/200',
        thumbnail: 'https://picsum.photos/400/202',
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Campamento realizado en 2017"
    },   
]

const Galeria = () => {
    return(
        <div className="jumbotron p-first">
            <h2>Galería de Eventos</h2>
            <hr className="my-2 mb-4" style={{display: "block", width: "100%"}}/>
            <div className="row">
                <div className="col-12">
                    <Gallery images={IMAGES} />
                </div>
            </div>
        </div>
    );
}

export default Galeria;