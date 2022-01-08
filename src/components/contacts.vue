<template>
    <section id="contacts">
        <div class="contactsbody">
            <h1>Contact Me</h1>
            <div class="contacts">
                <div class="mail">
                    <img src="../assets/gmail.png" alt="">
                    <p><b>E-mail:</b> matasalzo@gmail.com</p>
                </div>
                <div class="discord">
                    <a href="https://discordapp.com/users/265135962139525123/" target="_blank">
                        <img src="https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png" alt="">
                    </a>
                        <p><b>Discord:</b> K4L#0415</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'contacts'
}
</script>

<style>
.contactsbody {
    margin-top: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.contactsbody h1 {
    color: white;
    margin-bottom: 75px;
}
.contacts {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-self: center;
}
.contacts .mail {
    width: 50%;
}
.contacts .discord {
    width: 50%;
}
.contacts .mail img{
    width: 100px;
}
.contacts .discord img{
    width: 100px;
}
.contacts p {
    margin-top: 35px;
    color: white;
    margin-bottom: 50px;
}
.discord a img {
    transition: transform .1s;
}
.discord a img:hover {
    transform: scale(1.08);
}
</style>