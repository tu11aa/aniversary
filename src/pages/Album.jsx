import ImageGallery from 'react-image-gallery';

const r = require.context("../assets/Ani", false, /\.(png|jpe?g|svg)$/);

const Album = () => {
    const importAll = (r) => {
        return r.keys().map(key => r(key))
    }

    const images = importAll(r, "../assets/Ani").map(image => ({
        original: image,
    }))

    return <div>
        <ImageGallery  autoPlay={true} items={images} infinite={true} showThumbnails={false}/>
        {/* <button onClick={()=>console.log(importAll(r))}>Demo</button> */}
    </div>
}

export default Album