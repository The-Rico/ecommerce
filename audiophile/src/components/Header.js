export default function Header() {
  return (
    <div className='header'>
      <div className='headerContent'>
        <span className='logo'>audiophile</span>
        <ul>
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
        <span className='checkout'>
          <img
            height='20px'
            width='23.33px'
            alt='checkout'
            src='images/icon-cart.svg'
          ></img>
        </span>
      </div>
    </div>
  );
}
