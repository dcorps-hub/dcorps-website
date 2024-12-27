import React from 'react';

function HomePage() {
  return (
    <div className="page-text">
      <h1>Home</h1> <hr />
      <div className="intro-container">
        <div className="intro-text">
          <p>
            dCorps (Decentralized Corporations) is a next-generation blockchain infrastructure that
            enables anyone, anywhere to create and manage corporations or non-profit. By merging
            blockchain transparency, decentralized finance, and borderless accessibility, dCorps
            breaks down traditional barriers, making it perfectly suited for Web3, contributing to
            the globalized digital economy. This pioneering platform also paves the way for an
            interplanetary economy, defining the future of business in a decentralized world.
          </p>
        </div>
        <div className="intro-image">
          <img src="/circles.png" alt="dCorps illustration" />
        </div>
      </div>

      <hr />
      <h4 className="section-one-title">Section One Title</h4>
      <p className="section-one-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod velit quis sapien
        commodo, vel hendrerit libero aliquet. Morbi feugiat congue lectus, et pellentesque nulla
        molestie vel.
      </p>

      <div className="section-one-cards-container" style={{ marginTop: '20px' }}>
        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 1</h5>
          <p className="section-one-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sapien a augue
            volutpat aliquam.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 2</h5>
          <p className="section-one-card-text">
            Etiam tincidunt mi in dui pretium, id ultrices massa aliquet.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 3</h5>
          <p className="section-one-card-text">
            Fusce commodo orci et felis imperdiet, a ullamcorper magna imperdiet.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 4</h5>
          <p className="section-one-card-text">
            Curabitur eget diam ac erat suscipit efficitur in et nisi.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 5</h5>
          <p className="section-one-card-text">
            Suspendisse potenti. Morbi convallis purus purus, quis lobortis arcu imperdiet at.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 6</h5>
          <p className="section-one-card-text">
            Donec vitae tellus vitae justo dignissim congue quis ac risus.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 7</h5>
          <p className="section-one-card-text">
            Quisque pulvinar metus at metus commodo, eget mollis lorem vestibulum.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 8</h5>
          <p className="section-one-card-text">
            Pellentesque fermentum, massa vitae vulputate accumsan, ex libero cursus enim, a
            convallis nisi augue at nulla.
          </p>
        </div>

        <div className="section-one-card">
          <h5 className="section-one-card-title">Card Title 9</h5>
          <p className="section-one-card-text">
            Sed luctus magna in mauris auctor, sed luctus enim scelerisque.
          </p>
        </div>
      </div>

      <hr />
      <h4>Section Two Title</h4>
      <p>
        Quisque tristique suscipit elit, in dapibus erat facilisis a. Phasellus feugiat ex non arcu
        sodales, ac varius odio mollis. Praesent sed lorem a nunc finibus vestibulum.
      </p>
      <img
        src="/sketch.png"
        alt="Sketch - Section Two"
        style={{ marginTop: '20px', maxWidth: '100%' }}
      />
    </div>
  );
}

export default HomePage;
