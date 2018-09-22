<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.iso">{{ lang.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "the-l10n-changer",
        data() {
            return {langs: [{iso: 'cs', name: 'Čeština'}, {iso: 'en', name: 'English'}]}
        }
    }
</script>

<style scoped>

</style>