/**
 * @description: 发布订阅模式
 * @member {Object} messageQueue - 消息队列
 * @member {Function} subscribe - 订阅
 * @member {Function} publish - 发布
 * @example
 *      PubsubMode.subscribe("test", (value) => { console.log(value) });
 *      PubsubMode.publish("test", "发布数据");
 */
export const PubsubMode = {
    messageQueue: {},

    subscribe: function(key, callback) {
        if (!this.messageQueue[key]) {
            this.messageQueue[key] = [];
        }
        this.messageQueue[key].push(callback);

        return () => {
            this.messageQueue[key] = null;
        }
    },

    publish: function(key, values) {
        this.messageQueue[key]?.forEach((callback) => {
            callback.call(null, values);
        });
    }
}
