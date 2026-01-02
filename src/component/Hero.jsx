function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          <span className="big">3</span> Easy Steps
        </h1>
        <h2>Sell Used Electronics</h2>
        <p>The Smart Way</p>

        <button className="sell-btn">Sell Now</button>
      </div>

      <div className="hero-right">
        <img src="/fridge.png" alt="electronics" />
      </div>
    </section>
  );
}

export default Hero;
