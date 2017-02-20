<template>
    <div class="room">
        <ul class="messages" v-chat-scroll="config">
            <li class="message" v-for="n in messages"><span><b>{{ n.from }}:</b> {{ n.message }}</span></li>
        </ul>
        <input v-model="message" @keydown.enter="send" type="text" class="send-message" placeholder="Type a message...">
        <br>
        <label>
            <input v-model="config.always" type="checkbox">
            Always scroll to bottom
        </label>
    </div>
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
