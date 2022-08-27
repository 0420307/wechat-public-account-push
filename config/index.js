export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx830f43727493af86",
    // 公众号appSecret
    appSecret: "17b1d6e15e240d481b5384e9d00a36c5",
    // 模板消息id
    templateId: "Pt9Dy2BvLueO-hGaWT2M5nAHnFyVF7mTSpZ7cOiMJh4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [zhuqiuyun2015],
     
    // 信息配置
    // 所在省份
    province: "河南",
    // 驻马店
    city: "西平",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "妞", "year": "1985", "date": "08-22", "type": 'r'},
    // 结婚纪念日
    marryDate: "2020-02-06"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
