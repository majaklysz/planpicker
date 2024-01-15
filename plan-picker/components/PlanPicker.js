app.component('plan-picker', {
    template:
    /*html*/
    `
     <div class="plans">
        <cafe-plan
         v-for="plan in plans"
          :name="plan"
          v-on:select=""
          :selected="plan === selectedPlan"
          ></cafe-plan>
      </div>
      `,
      data(){
        return{
           plans: [
            'The Curious',
            'The Single',
            'The Addict'],
    
            selectedPlan: null
        }

      },
      methods:{
        selectPlan(plan){
            this.selectedPlan = plan
        }
      }
})