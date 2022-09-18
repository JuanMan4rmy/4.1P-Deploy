import InputExampleActionIconButton from "./searchbox";
import city from "./city.jpg";
import CardList from "./cardlist";
import CardList2 from "./cardlist_2";
import Footer from "./Footer/footer";

function Homepage() {
  return (
    <div className="App">
      <body>
        <div class="box_2">
          <label id="searchlabel">DEV@DEAKIN</label>
          <InputExampleActionIconButton />

          <div class="headerbutton">
            <button class="user buttons" type="submit" id="headerbutton">
              Post
            </button>
            <button class="user buttons" type="submit">
              Login
            </button>
          </div>
        </div>

        <div>
          <img src={city} alt="Website Background" width="1920" height="500" />
        </div>

        <br></br>
        <br></br>

        <div>
          <h1>Featured Articles</h1>
        </div>

        <br></br>
        <br></br>

        <div id="center">
          <CardList />
        </div>

        <br></br>
        <br></br>

        <div class="form-box">
          <button class="buttons" type="submit" id="centre">
            See More Articles
          </button>
        </div>

        <br></br>
        <br></br>

        <div>
          <h1>Featured Tutorials</h1>
        </div>

        <br></br>
        <br></br>

        <div id="center">
          <CardList2 />
        </div>

        <br></br>
        <br></br>

        <div class="form-box">
          <button class="buttons" type="submit" id="centre">
            See More Articles
          </button>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div class="box">
          <label>SIGN UP FOR OUR DAILY INSIDER</label>
          <form
            action="/sendemail"
            id="contact-form"
            method="POST"
            onsubmit="setTimeout(function(){window.location.reload();},500);"
          >
            <div class="form-box">
              <input type="email" name="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>

        <Footer />
      </body>
    </div>
  );
}
export default Homepage;
