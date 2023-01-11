/**
 * @description: 发布订阅模式
 * @member {object}: messageQueue - 消息队列
 * @member {function}: subscribe - 订阅
 * @member {function}: publish - 发布
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
