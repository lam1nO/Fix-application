<template>
  <div class="service-instruction rounded-lg pb-5 flex flex-col px-5 pt-4" style="width: 340px; background:rgba(253, 253, 253, 0.4); backdrop-filter: blur(20px);">
      <p class="font-semibold text-xl text-gray-600 pb-8">Получайте высококлассные медицинские услуги при помощи этих простых шагов!</p>
      <div class="instruct-list">
          <div v-for="item in items" :key="item.txt" class="flex items-end">
                <div class="instruct_num flex items-end justify-end pt-2 pb-4 pr-0.5 bg-lightBlue-400 mr-4 relative rounded-md" style="min-width: 40px; min-height: 40px; max-width: 40px;">
                    <p class="text-txt-white text-4xl font-bold text-right absolute -bottom-2">{{item.num}}</p>
                </div>
              <div class="instruct_text text-txt-black text-lg">{{item.txt}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ServiceInstruct",
    data(){
        return {
            items: [
                {
                    num: 1,
                    txt: "Добавьте услугу в заказ",
                }, 
                {
                    num: 2,
                    txt: "Выберите дату и время получения услуги",
                },
                {
                    num: 3,
                    txt: "Выберите место оказания услуги",
                },
                {
                    num: 4,
                    txt: "Получите услуги без очереди",
                },
                {
                    num: 5,
                    txt: "Получите результаты по эл почте"
                }

            ]       
        }
    }

}
</script>

<style>

</style>