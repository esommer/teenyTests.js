var Demo = function () {
    this.name = '';
    this.status = '';
    //this.emoticons = {};
};

Demo.prototype = {
    initialize : function (name) {
        this.name = name;
        this.status = 'initialized!';
        return this;
    },
    setStatus : function (status) {
        this.status = status;
        return "status set: " + this.status;
    },
    emoteStatus: function () {
        return this.name + " is " + this.status + " " + this.emoticons[this.status];
    },
    addEmoticon : function (status, emoticon) {
        this.emoticon[status] = emoticon;
        return "emoticon added to list: " + JSON.stringify(this.emoticons);
    }
};

module.exports = Demo;
