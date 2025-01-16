import FooterLogo from "/src/assets/img/footer-logo.png";
const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div>
          <img src={FooterLogo} />
        </div>
        <div>
          <h5>Doormat Navigation</h5>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h5>Social Media Links</h5>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
