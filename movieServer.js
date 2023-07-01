let express = require("express");
let cors = require("cors");
let app = express();
let passport = require("passport");
let jwt = require("jsonwebtoken");
let JWTStrategy = require("passport-jwt").Strategy;
let ExtractJWT = require("passport-jwt").ExtractJwt;

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header("Access-Control-Expose-Headers", "Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept Authorization"
  );
  next();
});

const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let users = [
  {
    fName: "test",
    lName: "123",
    mobile: 9845345632,
    married: "No",
    email: "test123@gmail.com",
  },
];
let bookedTickets = [
  {
    email: "test123@gmail.com",
    title: "Fast X",
    movieHall: "IMAX Wadala",
    tickets: ["C_A_10", "C_A_13", "C_A_15", "D_A_15", "D_A_13"],
    amount: 1250,
    time: "01:45 PM",
    date: "29 Today",
  },
];
const params = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "jwtsecret23647832",
};
const jwtExpirySeconds = 3000000;

let strategyAll = new JWTStrategy(params, (token, done) => {
  console.log("In JWTStrategy-All", token);
  let user1 = users.find((u) => u.email == token.email);
  console.log("user", user1);
  if (!user1) {
    return done(null, false, { message: "Incorrect username or password" });
  } else return done(null, user1);
});

passport.use("roleAll", strategyAll);

let { moviesData, theatersData, showTimes } = require("./data");

app.get("/movies/:city", (req, res) => {
  let city = req.params.city;
  let { q, lang, format, genre } = req.query;

  console.log(q, lang, format, genre, city);
  let moviesData1 = moviesData.filter((n) => n.cities.includes(city));
  if (q) {
    moviesData1 = moviesData1.filter((n) =>
      n.title.toLowerCase().includes(q.toLowerCase())
    );
  }
  if (lang) {
    lang = lang.split(",");
    moviesData1 = moviesData1.filter((movie) => {
      return lang.some((langItem) => movie.language.includes(langItem));
    });
  }
  if (format) {
    format = format.split(",");
    moviesData1 = moviesData1.filter((movie) => {
      return format.some((formatItem) => movie.formats.includes(formatItem));
    });
  }
  if (genre) {
    genre = genre.split(",");
    moviesData1 = moviesData1.filter((movie) => {
      return genre.some((generItem) => movie.genre.includes(generItem));
    });
  }
  res.send(moviesData1);
});

app.get("/movies/:city/:id", (req, res) => {
  let { city, id } = req.params;
  id1 = +id;
  let movie = moviesData.find((n) => n.id == id1);
  let showTime = showTimes.find((n) => n.movieTitle == movie.title);
  let theaters = theatersData.filter((n) => showTime.theatreId.includes(n.id));
  let theaters1 = theaters.map((n) => n.name);
  let data = { movie: movie, showTime: showTime, theaters: theaters1 };
  res.send(data);
});

app.get("/theater/:name/:title", (req, res) => {
  let name = req.params.name;
  let title = req.params.title;
  console.log(title, name);
  let showTime = showTimes.find((n) => n.movieTitle == title);
  let theater = theatersData.find((theater) => theater.name == name);
  let data = { theater: theater, showTime: showTime };
  res.send(data);
});

app.get(
  "/bookedTickets",
  passport.authenticate("roleAll", { session: false }),
  (req, res) => {
    let bookedTicket = bookedTickets.filter(
      (n) => n.email == "test123@gmail.com"
    );
    res.send(bookedTicket);
  }
);

app.post(
  "/bookSeat",
  passport.authenticate("roleAll", { session: false }),
  (req, res) => {
    let body = req.body;
    bookedTickets.push(body);
    console.log(body);
    res.send("saved tickets");
  }
);

app.post("/login", (req, res) => {
  let email = req.body.email;
  let user = users.find((n) => n.email == email);
  if (user) {
    let payload = { email: user.email };
    let token = jwt.sign(payload, params.secretOrKey, {
      algorithm: "HS256",
      expiresIn: jwtExpirySeconds,
    });
    res.setHeader("Authorization", token);
    res.send({ token: "bearer " + token, user: user });
  } else res.sendStatus(401);
});
