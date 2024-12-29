import "./App.css";
import FooterLogo from "/src/assets/img/footer-logo.png";
import LogoLL from "/src/assets/img/logo 16@4x.png";
import Restraufood from "/src/assets/img/restauranfood.jpg";
function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={LogoLL} alt="Little Lemon Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>

            <li>
              <a href="#"> Order Online</a>
            </li>
            <li>
              <a href="#"> Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container-main">
        <section className="hero">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Indulge in the comforting flavors of Italy with handcrafted
              pastas, stone-baked pizzas, creamy risottos, and rich, savory
              sauces that will transport you to the heart of Tuscany.
            </p>
            <button className="cta-button">Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src={Restraufood} alt="Delicious Italian food" />
          </div>
        </section>
        <section className="specials">
          <h2>This week specials!</h2>
          <div className="card-container">
            <div className="card">
              <div className="placeholder">Image Placeholder</div>
              <h3>Salad</h3>
              <p className="price">$12.6</p>
              <p>Salad is good xmvbvn...</p>
              <button>Order a delivery</button>
            </div>
            <div className="card">
              <div className="placeholder">Image Placeholder</div>
              <h3>Salad</h3>
              <p className="price">$12.6</p>
              <p>Salad is good xmvbvn...</p>
              <button>Order a delivery</button>
            </div>
            <div className="card">
              <div className="placeholder">Image Placeholder</div>
              <h3>Salad</h3>
              <p className="price">$12.6</p>
              <p>Salad is good xmvbvn...</p>
              <button>Order a delivery</button>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="ratings">Ratings</div>
              <div className="image-placeholder"></div>
              <div className="message">Hello</div>
              <div className="name">Hi</div>
            </div>
            <div className="testimonial-card">
              <div className="ratings">Ratings</div>
              <div className="image-placeholder"></div>
              <div className="message">Hello</div>
              <div className="name">Hi</div>
            </div>
            <div className="testimonial-card">
              <div className="ratings">Ratings</div>
              <div className="image-placeholder"></div>
              <div className="message">Hello</div>
              <div className="name">Hi</div>
            </div>
          </div>
        </section>

        <section className="little-lemon">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            sdasd abjsdgkjgas abskhdgkasd absdasld a.sdhlasd ,askhldasd
            ,bashgkdaklsd ,bashbdlkasd ajsdlhlasjdnlkjahsjdhlh
            lasbdjhlbalkjsdbkljalbalkjsd lashdbl
          </p>
          <div className="images-container">
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
          </div>
        </section>
      </main>

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
}

export default App;
