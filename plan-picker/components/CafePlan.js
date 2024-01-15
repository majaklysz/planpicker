app.component('cafe-plan', {
    props:{
        name: {
            type: String,
            required: true
        },
        selected:{
            type: Boolean,
            default: false
        }
    },

    template:
    /*html*/
    `<div class="plan"
     @click="select" 
     :class="{'active-plan': selected}"
     >
    <div class="description">
      <span class="title">
        {{name}}
      </span>
    </div>
  </div>`,


  methods:{
    select(){
        this.$emit('select', this.name)
    }
  },
  

 

})