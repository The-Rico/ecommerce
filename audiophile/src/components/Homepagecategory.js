export default function Homepagecategory() {
  return (
    <div className='homePageCategoryContainer'>
      <div className='homePageCategoryContent flex flex-col md:flex-row'>
        <div className='headphonesCategory'>
          <div className='headphonesImage'>
            <img
              alt='headphones'
              className=''
              src='./images//image-category-thumbnail-headphones.png'
            ></img>
          </div>
        </div>
        <div className='speakersCategory'>
          <div className='speakersImage'>
            <img
              alt='headphones'
              className=''
              src='./images//image-category-thumbnail-speakers.png'
            ></img>
          </div>
          <p className='speakerCategoryText'>test</p>
          <p className='productShopLink'>
            Shop<span>></span>
          </p>
        </div>
        <div className='earphonesCategory'>
          <div className='earphonesImage'>
            <img
              alt='headphones'
              className=''
              src='./images//image-category-thumbnail-earphones.png'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
