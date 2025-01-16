import { useNavigate } from "react-router-dom";
import Restraufood from "/src/assets/img/restauranfood.jpg";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
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
            <button
              className="cta-button"
              onClick={() => {
                navigate("/table-booking");
              }}
            >
              Reserve a Table
            </button>
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
    </>
  );
};

export default Homepage;
