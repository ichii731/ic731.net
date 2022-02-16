<template>
  <div>
    <figure class="snip1559">
      <div class="profile-image">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
          alt="profile-sample6"
        />
      </div>
      <figcaption>
        <h3>Indigo Violet</h3>
        <h5>Public Relations</h5>
        <p>
          The only skills I have the patience to learn are those that have no
          real application in life.
        </p>
        <div class="icons">
          <a href="#"><i class="ion-social-reddit"></i></a>
          <a href="#"> <i class="ion-social-twitter"></i></a>
          <a href="#"> <i class="ion-social-vimeo"></i></a>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://fonts.googleapis.com/css?family=Oswald);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);


.snip1559 {
  font-family: "Lato", Arial, sans-serif;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 10px;
  min-width: 250px;
  max-width: 310px;
  width: 100%;
  background-color: #ffffff;
  color: #2b2b2b;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.snip1559 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.snip1559 .profile-image {
  padding: 15% 10% 0;
}

.snip1559 .profile-image img {
  max-width: 100%;
  vertical-align: top;
  border-radius: 50%;
  max-width: 40%;
  // 中央に表示
  margin: 0 auto;
}

.snip1559 figcaption {
  padding: 5% 10% 15%;
}

.snip1559 h3 {
  font-family: "Oswald";
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
}

.snip1559 h5 {
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 1px;
}

.snip1559 .icons i {
  color: #999;
  display: inline-block;
  margin-right: 5px;
  font-size: 1.5em;
}

.snip1559 .icons i:hover {
  color: #555;
}

.snip1559 .icons i a {
  text-decoration: none;
}
</style>
