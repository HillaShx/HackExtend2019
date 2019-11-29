<template>
  <div class="information-container">
    <h1>פחי מידע</h1>

    
    <div class="container-bin">
        <div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
           <div class="bin bin-a"  v-on="on">נייר</div>
                    
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
           הפח הכחול
          </v-card-title>
             פסולת אריזות קרטון ביתי, נייר לבן, מגזינים, ניירות עיתון, מחברות וקרטונים דקים וקטנים כמו קרטוני ביצים, גלילי נייר טואלט, קרטוני פיצה, אריזות של דגני בוקר ושל מוצרי מזון אחרים.
          <v-card-text>
            
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
   
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</div>
      <div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
           <div class="bin bin-b"  v-on="on">מתכת</div>
                    
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
           הפח האפור
          </v-card-title>
             פסולת אריזות קרטון ביתי, נייר לבן, מגזינים, ניירות עיתון, מחברות וקרטונים דקים וקטנים כמו קרטוני ביצים, גלילי נייר טואלט, קרטוני פיצה, אריזות של דגני בוקר ושל מוצרי מזון אחרים.

          <v-card-text>
            
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</div>
 <div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
           <div class="bin bin-c"  v-on="on">פלסטיק</div>
                    
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
           הפח הכתום
          </v-card-title>
             פסולת אריזות קרטון ביתי, נייר לבן, מגזינים, ניירות עיתון, מחברות וקרטונים דקים וקטנים כמו קרטוני ביצים, גלילי נייר טואלט, קרטוני פיצה, אריזות של דגני בוקר ושל מוצרי מזון אחרים.

          <v-card-text>
            
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
             
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</div>
<div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
           <div class="bin bin-d"  v-on="on">זכוכית</div>
                    
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
           הפח הסגול
          </v-card-title>
             פסולת אריזות קרטון ביתי, נייר לבן, מגזינים, ניירות עיתון, מחברות וקרטונים דקים וקטנים כמו קרטוני ביצים, גלילי נייר טואלט, קרטוני פיצה, אריזות של דגני בוקר ושל מוצרי מזון אחרים.

          <v-card-text>
            
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</div>
<div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
           <div class="bin bin-e"  v-on="on">קרטון</div>
                    
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
           קרטונייה
          </v-card-title>
            קרטונים, אריזות קרטון עבה. יש לשטח את הקרטון לפני הכנסתו למיכל
          <v-card-text>
            
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</div>

    </div>
    <!-- <div class="bin bin-a ">נייר</div>
    <div class="bin bin-b">מתכת</div>
    <div class="bin bin-c">פלסטיק</div>

    </div>
    <div class="container-bin">
        <div class="bin bin-d">זכוכית</div>
        <div class="bin bin-e">קרטון</div>
        <div class="bin bin-f">לא מתמחזר</div>
    </div> -->
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