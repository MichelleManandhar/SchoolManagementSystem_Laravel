<template>
    <div id="sign">
        <div class="left-signin" >
            <img src="../../../public/assets/smartschool.png" class="school-logo" />
            <div class="upper-title">WELCOME TO SMS </div>
            <div class="welcome-message"> Enter your personal detail <br/> and start  your journey with us</div>
            <button type="button"  class="init-button" @click="slide_right" >Sign Up</button>

        </div>
        <!--<div class="left-signin-slide" >-->
            <!--<img src="../../../public/assets/smartschool.png" class="school-logo" />-->
            <!--<div class="upper-title">WELCOME TO SMS </div>-->
            <!--<div class="welcome-message"> Enter your personal detail <br/> and start  your journey with us</div>-->
            <!--<button type="button"  class="init-button" v-on:click="slide_left" >Sign In</button>-->

        <!--</div>-->
        <div class="right-signup">
            <div class="signin-title">Sign in to SMS</div>
            <input type="email" class="input-signin fa3"  placeholder=" Email"/><br/>
            <input type="password" class="input-signin"  placeholder=" Password"/><br/>
            <div class="forget-messgae">Forgot your password!</div>
            <button type="button" class="signin-button"  >Sign in</button>
        </div>
        <!--<div class="right-signup-slide">-->
            <!--<div class="signin-title">Sign up to SMS</div>-->
            <!--<input type="text" class="input-signin fa3"  placeholder=" Fullname"/><br/>-->
            <!--<input type="email" class="input-signin fa3"  placeholder=" Email"/><br/>-->
            <!--<input type="password" class="input-signin"  placeholder=" Password"/><br/>-->
            <!--<button type="button" class="signin-button"  >Sign in</button>-->
        <!--</div>-->
    </div>
</template>

<script>
    // import Vue from 'vue';
    // var Sign  = new  Vue({
    //     el : '#sign',
    //     methods : {
    //         slide_right: function(event){
    //             console.log('subash')
    //             // var leftSignin = this.$el.querySelector('.left-signin');
    //             // var rightSignin = this.$el.querySelector('.left-signin-slide');
    //             // var rightSignup = this.$el.querySelector('.right-signup');
    //             // var leftSignup = this.$el.querySelector('.right-signup-slide');
    //             // leftSignin.style.visibility = false;
    //             // rightSignin.style.visibility = true;
    //             // rightSignup.style.visibility = true;
    //             // leftSignup.style.visibility = false;
    //         },
    //         slide_left : function (event) {
    //             // var leftSignin = this.$el.querySelector('.left-signin');
    //             // var rightSignin = this.$el.querySelector('.left-signin-slide');
    //             // var rightSignup = this.$el.querySelector('.right-signup');
    //             // var leftSignup = this.$el.querySelector('.right-signup-slide');
    //             // leftSignin.style.visibility = false;
    //             // rightSignin.style.visibility = true;
    //             // rightSignup.style.visibility = true;
    //             // leftSignup.style.visibility = false;
    //
    //         }
    //     }
    // });
    // export default Sign;
    //
    export default {
        name: "Sign"
    }




</script>

<style scoped>
        .left-signin{
            position:fixed;
            padding:0;
            margin:0;
            top:0;
            left:0;
            width: 50%;
            height: 100%;
            text-align: center;
            background-image: linear-gradient(#10deff , #094b95);
            font-family: 'Poppins', sans-serif;
            float: left;
            visibility: visible;
        }
        .left-signin-slide{
            position:fixed;
            padding:0;
            margin:0;
            top:0;
            left:0;
            width: 50%;
            height: 100%;
            text-align: center;
            background-image: linear-gradient(#10deff , #094b95);
            font-family: 'Poppins', sans-serif;
            float: right;
            transition: all 0.2s;
            visibility: hidden;
        }

        .right-signup{
            padding:0;
            margin:0;
            top:0;
            left:0;
            width: 50%;
            height: 100%;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            float: right;
            visibility: visible;
        }
        .right-signup-slide{
            padding:0;
            margin:0;
            top:0;
            left:0;
            width: 50%;
            height: 100%;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            float: left;
            visibility: hidden;
        }
        .signin-title{
            margin-top:15%;
            font-size:36px;
            font-weight:bold;
            margin-bottom:15px;
            color:#10deff ;
        }
        .forget-messgae{
            color: #b4b4b4;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 12px;
        }
        .upper-title{
            font-weight: bold;
            font-size: 34px;
            color: #fff;
            margin-bottom: 15px;
        }
        .input-signin{
            height:50px;
            width:350px;
            background-color:#b4ffea;
            border: 1px solid #b4b4b4;
            margin-bottom: 40px;
            border-radius:7px;
            color: #b4b4b4;
            font-size: 12px;
        }
        .init-button{
            border: 2px solid white;
            font-weight: lighter;
            border-radius: 50px;
            font-size: 13px;
            color: #fff;
            height: 50px;
            width: 300px;
            outline:none;
            background-color: transparent !important;
            margin : 15px;
        }


    .signin-button{
        border: 2px solid white;
        font-weight: lighter;
        border-radius: 50px;
        font-size: 13px;
        color: #fff;
        height: 50px;
        width: 300px;
        outline:none;
        background-color: #10deff;
        margin : 15px;
    }
    .welcome-message {
        color: #fff;
        font-size: 15px;

    }
    .school-logo{
        height:100px;
        width: 100px;
        margin-top: 20%;
        margin-bottom: 15px;
    }

</style>