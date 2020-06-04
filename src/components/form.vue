<template>
<va-form ref="form" :type="type">
    <va-form-item label="NAME"  need>
        <va-input name="name" placeholder="your name" v-model="formname"></va-input>
    </va-form-item>
    <va-form-item label="Favourite" need>
        <va-input name="favourite-food" v-model="favourite"></va-input>
    </va-form-item>
</va-form>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
