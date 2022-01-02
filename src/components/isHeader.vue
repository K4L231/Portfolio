<head>
<link rel="stylesheet" href="path/to/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>
<template>
  <div id="header">
      <div class="navbar">
          <button class="hamburger" @click="navOn = !navOn">
            <span class="burger">☰</span>
        </button>
        <div class="logo">
            <img class="img" src="../assets/logo.png" alt="">
        </div>
        <ul class="navigation" :class="{show: navOn}">
            <a href="#"><li>home</li></a>
            <a href="#"><li>projects</li></a>
            <a href="#"><li>about me</li></a>
            <a href="#"><li>contact</li></a>
        </ul>
      </div>
            <ul class="navigationburger" :class="{show: navOn}">
            <a href="#"><li>home</li></a>
            <a href="#"><li>projects</li></a>
            <a href="#"><li>about me</li></a>
            <a href="#"><li>contact</li></a>
        </ul>
  </div>
</template>

<script>

export default {
    name: "isHeader",
    data: function (){
        return {
            navOn: false,
        }
    }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    margin-left: 0px;
}
 #header{
     background-color: #232323;
     color: white;
     text-decoration: none;
     height: 60px;
     width: 100%;
     position: fixed;
     top: 0px;
     display: block;
}
.navbar {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
}
.logo {
    float: left;
    height: 100%;
    width: 50px;
    display: grid;
}
.img {
    width: 35px;
    height: 35px;
    margin: auto;
}

.navigation {
    padding: 0 auto;
    padding-top: 0px;
    float: right;
    height: 100%;
}
.navigation a {
    height: 100%;
    display: table;
    float: left;
    padding-left: 25px;
    text-decoration: none;
}
.navigation a li:hover{
    color: #6D83F2;
}
.navigation a li {
    display: table-cell;
    vertical-align: middle;
    color: #f8f8f8;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
}
.navigationburger {
    display: none;
}
.hamburger {
display: none;
}
@media screen and (max-width: 768px) {

}
@media screen and (max-width: 500px) {
    .navigation {
        display: none;
    }
    .navigationburger.show {
        float: right;
        display: grid;
        background-color: #232323;
        border-bottom-left-radius: 5px;
        height: 500px;
        width: 60%;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(8, 1fr);
    }
    .navigationburger.show a{
        text-decoration: none;
        color: #f8f8f8;
        list-style: none;
    }
    .navigationburger.show a:hover{
        color: #6D83F2;
    }

    .hamburger {
    background-color: transparent;
    color: white;
    border: 0;
    float: right;
    height: 100%;
    display: grid;
    cursor: pointer;
    width: 50px;
}
    .hamburger:hover {
        color: #6D83F2;
    }
    .burger {
        margin: auto;
        float: right;
        font-size: 27px;
        
    }
}
@media screen and (max-width: 350px) {
        .navigation a li{
            font-size: 10px;
        }
}

</style>