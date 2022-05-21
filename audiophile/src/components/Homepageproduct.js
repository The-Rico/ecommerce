export default function Homepageproduct() {
  return (
    <div className='homePageHeroContainer'>
      <div className='homePageHeroContent'>
        <div className='homeProductDescription'>
          <p className='heroNewProductParagraph'>NEW PRODUCT</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p className='heroProductInfo'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className='seeProductButton'>See product</button>
        </div>
        <div className='homeProductImage '>
          <img className='heroImage' src='./images/image-hero.jpg'></img>
        </div>
      </div>
    </div>
  );
}
