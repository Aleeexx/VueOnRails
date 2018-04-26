<template>
        <router-link :to="{ name: this.componentName, params: this.params }" class="product-tool">
            <icon :name="this.iconName"></icon> {{ this.labelText }}
        </router-link>
</template>

<script>
    export default {
        name: "tools",
        props: {'routerName': String,
                'routerParams': Object,
                'icon': String,
                'label': String
        },
        data () {
            return {
                componentName: this.routerName,
                params: this.routerParams,
                iconName: this.icon,
                labelText: this.label
            }
        }
    }
</script>

<style scoped>
    .product-tool {
        padding: 0 .3em;
    }
</style>