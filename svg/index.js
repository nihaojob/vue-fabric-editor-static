var fs = require("fs");



const JSONData = {
    data: []
}

const group = [
    // {
    //     label: '卡通',
    //     value: '',
    //     start: 460,
    //     end: 489
    // },
    {
        label: '卡通水果',
        value: 'fruits',
        start: 386,
        end: 409
    },
    {
        label: '体育',
        value: 'sports',
        start: 410,
        end: 459
    },
    {
        label: '秋天',
        value: 'seasons',
        start: 40,
        end: 49
    },
    {
        label: '计算机',
        value: 'eletronics',
        start: 50,
        end: 75
    },
    // {
    //     label: '水果',
    //     value: '',
    //     start: 76,
    //     end: 89
    // },
    // {
    //     label: '衣服',
    //     value: '',
    //     start: 89,
    //     end: 136
    // },
    {
        label: '旗帜',
        value: 'flags',
        start: 137,
        end: 151
    },
    {
        label: '树木',
        value: 'threes',
        start: 152,
        end: 181
    },
    {
        label: '食物',
        value: 'food',
        start: 182,
        end: 201
    },
    {
        label: '服饰',
        value: 'clothes',
        start: 202,
        end: 222
    },
    {
        label: '奖牌',
        value: 'medals',
        start: 223,
        end: 252
    },
    {
        label: '商务',
        value: 'business',
        start: 253,
        end: 261
    },
    {
        label: '活动',
        value: 'activity',
        start: 262,
        end: 270
    },
    // {
    //     label: '卡通水果',
    //     value: '',
    //     start: 271,
    //     end: 300
    // },
    {
        label: '复古',
        value: 'vintage',
        start: 301,
        end: 350
    },
    {
        label: '卡通',
        value: '',
        start: 351,
        end: 385
    },
    {
        label: '动物',
        value: 'animals',
        start: 490,
        end: 519
    },
    {
        label: '手绘',
        value: 'hand_painted',
        start: 0,
        end: 39
    }
]



const baseUrl = 'https://nihaojob.github.io/vue-fabric-editor-static/svg/'
JSONData.data = group.map((item, i) => {
    const list = []
    for (let index = item.start; index < item.end; index++) {
        list.push({
            "label": item.label + index,
            "value": i + '-' + index,
            "tempUrl": baseUrl + index + ".svg",
            "src": baseUrl + index + ".svg"
        })
    }
    return {
        label: item.label,
        value: item.value,
        list
    }
})

fs.writeFile('type.json', JSON.stringify(JSONData), function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('写入成功')
});



