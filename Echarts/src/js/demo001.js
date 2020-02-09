// =============================全局属性===============================

let option = {
    title:{
        id:1,                       //  id
        show:true,                 //  是否显示
        text:'Echarts - 入门示例',    //
        link:'https://www.yuque.com/zefulaodi/qbw61n',// 和target 配套使用
        target:'blank',//'self' 当前窗口打开 , 'blank' 新窗口打开
        textStyle:{
            color: '#ff0000',
            fontStyle:'normal',
            fontWeight: 'lighter',
            fontFamily:'楷体',
            fontSize:20,
            lineHeight:20,
            width:70,
            height:70,
            textBorderColor:'#888888',
            textBorderWidth:5,
            textShadowColor:'#3914AF',
            textShadowBlur:60,
            textShadowOffsetX:50,
            textShadowOffsetY:50,
            // rich:{

            // }
        },
        subtext:'这是副标题',
        sublink:'http://www.baidu.com',
        subtarget:'blank',
        subtextStyle:{},
        textAlign:'auto',//可选值：'auto'、'top'、'bottom'、'middle'。
        triggerEvent:false,//是否触发事件。
        padding:[5,10,5,20],
        itemGap:50,//主副标题之间的间距  
    },  
    legend:{
        type: 'plain',//图例的类型,'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。
        id:23,
        show:true,
        itemGap:30,
        itemHeight:20,
        selectedMode:true,
        inactiveColor:'#00ff00',
        selected:{
            '系列1':true,
            '系列2':false
        },
        textStyle:{},
        tooltip:{
            show:true
        },
    }, 
    xAxis:{
        data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis:{},
    series:[
        {
            name:"数量",
            type:'bar',
            data:[5,23,45,32,24,23]
        }
    ]
};

// =============================设置属性===============================

echarts.init(document.getElementById('demo001')).setOption(option);
 

// =============================无参函数===============================

// =============================有参函数===============================
/**
 * 获取元素，根据ID
 * @param {string} id 元素ID 
 */
function getElementById(id){
    return document.getElementById(id);
}
 
 