<template>
<div id="components_C">
    <W_search></W_search>
    <W_block></W_block>
    <W_tablelist></W_tablelist>
    <W_footer></W_footer>
</div>   
</template>

<script>
    import W_search from "./index/search.vue"
    import W_block from "./index/block.vue"
    import W_tablelist from "./index/tablelist.vue"
    import W_footer from "./footer/ngfooter.vue"
    export default {
      name:'components_C',
      components: {
        W_search,
        W_block,
        W_tablelist,
        W_footer
      }
    }
</script>