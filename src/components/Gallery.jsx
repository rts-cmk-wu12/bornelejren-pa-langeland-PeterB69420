
export default function Gallery() { 
    return (
        <section className="gallery">
            <div className="gallery__content">
                <h1 className="gallery__title">Galleri</h1>
                <div className="gallery__container">
                    <div className="gallery__container-item">
                        <img src="/kitchen.jpg" alt="pool" />
                    </div>
                    <div className="gallery__container-item">
                        <img src="/kitchenangle.jpg" alt="pool" />
                    </div>
                    <div className="gallery__container-item">
                        <img src="/playgroundangle.jpg" alt="pool" />
                    </div>
                </div>
            </div>
        </section>
    )
}