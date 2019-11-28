<template>
  <div class="information-container">
    <h1>פחי מידע</h1>
    
    <div class="container-bin">
    <div class="bin bin-a ">נייר</div>
    <div class="bin bin-b">מתכת</div>
    <div class="bin bin-c">פלסטיק</div>

    </div>
    <div class="container-bin">
        <div class="bin bin-d">זכוכית</div>
        <div class="bin bin-e">קרטון</div>
        <div class="bin bin-f">לא מתמחזר</div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
      
    }
};

</script>
<style scoped>
h1 {
  font-size: 200%;
}
.information-container {
  width: 90%;
  height: 600px;
  font-family: "Arial";
  color: #ffffff;
  background-color: rgb(110, 96, 122);
}
.container-bin{
    display: flex;
    justify-content: center;
}
.bin{
    width:100px;
    height:150px;
    background-color: blue;
    border: 5px solid white;
    padding: 5px;
    margin:30px;
}
.bin-a{
    background-color: #4064a9
}
.bin-b{
    background-color: #999999;
}
.bin-c{
    background-color:#E17223 ;
}
.bin-d{
    background-color: #736d9d ;
}
.bin-e{
    background-color: #E7C603
}

.bin-f{
    background-color: #339966;
}

</style>