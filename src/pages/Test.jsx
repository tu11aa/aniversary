import ImageGallery from 'react-image-gallery';
import kuku from "../assets/jump-character.png"
import guitarboy from "../assets/guitarboy.gif"

const images = [
  {
    original: kuku,
    thumbnail: kuku,
  },
  {
    original: guitarboy,
    thumbnail: guitarboy,
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Test = () => {
    return <div style={{display:"inline-block", minHeight:"90", minWidth:"85vh"}}>
        <ImageGallery items={images} infinite={true}/>
    </div>
}

export default Test