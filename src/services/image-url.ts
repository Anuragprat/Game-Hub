import noimage from '../assets/3592838_average image_image_images_landscape_photography_icon.webp'

const getCroppedImageUrl = (url: string) =>{
    if(!url) return noimage;
    const target = 'media/';
    const index = url.indexOf(target)+target.length;
   return  url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default  getCroppedImageUrl ;