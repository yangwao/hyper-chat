<template>
    <!-- <div class="clicker-view">
        <form>
        <h1>{{msg}}</h1>
        <input type="text" v-model="msg" placeholder="shout somethin">
        </form>
        <h2>age: {{age}} <button @click="plus">+1</button></h2>
    </div> -->

    <ul class="messages" v-chat-scroll>
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            age: 0,
            message: "",
                messages: [
                    {from: "theomessin", message: "This example demonstrates what the vue-chat-scroll plugin does."},
                    {from: "theomessin", message: "When the v-chat-scroll directive is applied to an element,"},
                    {from: "theomessin", message: "it will be automatically monitored by the plugin."},
                    {from: "theomessin", message: "When a new child is added, the plugin will scroll to the bottom of the element."},
                    {from: "theomessin", message: "Why not try it yourself? Simply type a message below and press enter to send!"}
                ],
                config: {
                    always: true
                }
        }
    },
    created() {
        console.log('created > ' + this.age);
        ++this.age;
    },
    methods: {
        plus() {
            this.age++;
        },
        send: function () {
                if (this.message == "") return;
                this.messages.push({from: "you", message: this.message});
                this.message = "";
            },
    },
};
</script>
