<template>
  <div>
    <h2>מה הולך לכל פח?</h2>
    <div class="material-view">
      <v-card class="material-type">
        <v-card-title>נייר</v-card-title>
        <v-card-subtitle>עיתונים, קרטוני ביצים ,ספרים, מחברות</v-card-subtitle>
      </v-card>
      <v-card class="material-type">
       <v-card-title>מתכת</v-card-title>
        <v-card-subtitle> קופסאות שימורים, מכלים של דאודורנטים ושל תרסיסים שונים, אריזות של תחליפי חלב לתינוקות, אריזות של מוצרי טיפוח וכדומה</v-card-subtitle>
      </v-card>
      <v-card class="material-type">
       <v-card-title>אריזות</v-card-title>
        <v-card-subtitle>  פסולת אריזות קרטון ביתי, נייר לבן, מגזינים, ניירות עיתון, מחברות וקרטונים דקים וקטנים כמו קרטוני ביצים, גלילי נייר טואלט, קרטוני פיצה, אריזות של דגני בוקר ושל מוצרי מזון אחרים.</v-card-subtitle>
      </v-card>
      <v-card class="material-type">
       <v-card-title>זכוכית</v-card-title>
        <v-card-subtitle>עיתונים, קרטוני ביצים ,ספרים, מחברות</v-card-subtitle>
      </v-card>
      <v-card class="material-type">
       <v-card-title>קרטוניה</v-card-title>
        <v-card-subtitle>  קרטונים, אריזות קרטון עבה. יש לשטח את הקרטון לפני הכנסתו למיכל</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "min-types-view",
  components: {}
};
</script>

<style>
.material-type {
  background-color: aqua;
  height: 300px;
  margin: 10px;
  text-align: center;
}
.material-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.v-card_title {
  margin: auto;
}
.v-card_subtitle {
  margin: auto;
}
</style>