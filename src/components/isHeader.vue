<template>
  <div id="header">
      <div class="navbar">
        <a class="logo" href="">
            <img src="../assets/logo.png" alt="">
        </a>
        <a class="list" href="">home</a>
        <a class="list" href="">projects</a>
        <a class="list" href="">about me</a>
        <a class="list" href="">contact</a>
      </div>
  </div>
</template>

<script>
export default {
    name: "isHeader",

}
</script>

<style>
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
     display: flex;


}
 .navbar{
    color: white;
    width: 60%;
    
    display: felx;


    height: 40px;
    margin: auto;
    height: auto;
 }

.list {
    color: F8F8F8;
    text-decoration: none;
    display: felx;

    color: white;
    height: auto;
    padding: 0px 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    float: right;


 }
.logo img {
    height: 40px;
    width: 40px;
    float: left;
    display: flex;

    

}
</style>