<template>
    <div>
        <h2>{{msg}}</h2>
        <p>{{page}}</p>
        <button @click="eve()">Click</button>
    </div>
</template>
<script>
    module.exports={
        data:function(){
            return{
                msg:'title3',
                page:'page3'
            }
        },
        methods:{
            eve:function(){
                alert('3');
            }
        }
    }
</script>