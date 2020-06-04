<template>
       <footer>
         <va-row>
           <va-column :xs="12" :sm="6" :md="6">
              <div class="logo" align="left">
                <img src="https://easydita.com/wp-content/uploads/2019/09/Metapercept_Logo_Main.png" width="150px"/>
              </div>
           </va-column>
           <va-column :xs="12" :sm="6" :md="6">
              <div class="contact1" align="left">
              <vh><strong>Contact</strong></vh>
              <p class="contact"><va-icon type="envelope"></va-icon> Email: info@metapercept.com</p>
            </div>
           </va-column>
         </va-row>
         <hr class="footer_line">
        <p class="copyright">© Copyright 2020, Metapercept Technology Services</p>
      </footer>
</template>

<script>
export default {
  data () {
    return {
      elevation: 1,
      padding: 5,
      size: 'lg',
      hover: true,
      offset: 500
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact1{
  padding-top:10px;
 padding-left:15px;
}
.footer_line{
  border-color: black;
  border-width: 1px;
}
.contact{
  font-size: 12px;
}
.logo{
  padding-top: 20px;
  padding-left:15px;
}
.copyright{
  font-size:12px;
  text-align:center;
}
</style>
