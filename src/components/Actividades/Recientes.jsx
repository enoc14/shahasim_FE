import React from 'react';

const Recientes = () => {
    return(
        <div className="jumbotron p-first bg-white">
            <div className="row">
                <h1 id="actividades">Actividades recientes</h1>
                <hr className="my-2 mb-4" style={{display: "block", width: "100%"}}/>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">9 de Septiembre 2019</div>
                        <div className="card-body">
                            <h4 className="card-title">Visita de asilo</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <img className="img-center img-fluid rounded" src="https://picsum.photos/300/300?random=1" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-secondary mb-3">
                        <div className="card-header">27 de Agosto 2019</div>
                        <div className="card-body">
                            <h4 className="card-title">Limpieza en la playa</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <img className="img-center img-fluid rounded" src="https://picsum.photos/300/300?random=2" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">12 de Julio 2019</div>
                        <div className="card-body">
                            <h4 className="card-title">Día del Conquistador</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <img className="img-center img-fluid rounded" src="https://picsum.photos/300/300?random=3" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recientes;