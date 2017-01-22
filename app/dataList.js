import style from '../app/css/style.css';

let dataList = [
    {
        "icon": "info.png",
        "title": "个人信息",
        "desc": `
            
            <div class=${style.infoRow}>
                <div>姓&emsp;&emsp;名：何一鸣</div>
                <div>出生年月：1992.10</div>
            </div>
            <div class=${style.infoRow}>
                <div>手&emsp;&emsp;机：15271831026</div>
                <div>毕业院校：天津大学</div>
            </div>
            <div class=${style.infoRow}>
                <div>邮&emsp;&emsp;箱：hym826@126.com</div>
                <div>学&emsp;&emsp;历：本科</div>
            </div>
            <div class=${style.infoRow}>
                <div>求职意向：前端开发工程师</div>
            </div>    
        `
    },
    {
        "icon": "edu.png",
        "title": "教育背景",
        "desc": `
            <table class=${style.w100}>
                <tr>
                    <td class=${style.w30}>2010.09 - 2014.07</td>
                    <td class=${style.w40}>天津大学</td>
                    <td class=${style.w30}>过程装备与控制工程</td>
                </tr>
            </table>
        `
    },
    {
        "icon": "job.png",
        "title": "工作经历",
        "desc": `
            <table {style.w100}>
                <tr>
                    <td class=${style.w30}>2014.07 - 2015.08</td>
                    <td class=${style.w40}>中钢集团天澄环保科技股份有限公司</td>
                    <td class=${style.w30}>助理设计师</td>
                </tr>
            </table>
            <br/>  
            <table class=${style.w100}>
                <tr>
                    <td class=${style.w30}>2015.09 - 至今</td>
                    <td class=${style.w40}>杭州尚尚签网络科技有限公司</td>
                    <td class=${style.w30}>前端开发工程师</td>
                </tr>
            </table>
            <ul class=${style.itemUl}>
                <li>负责公司产品（上上签电子签约云平台）用户中心模块的前端开发工作，包括基本信息、签名/印章管理、实名认证流程、计费、账户安全等功能的实现；</li>
                <li>参与公司前端UI框架的制定，规范各种常用组件的样式及弹框、loading、分页器、表单等组件的样式和交互，写了一个简单的SPA将该框架及其说明部署在公司内网上；</li>
                <li>微信公众号里的销售演示demo开发，在微信端实现公司产品基本签约功能，方便销售外出演示；</li>
                <li>负责公司官网及登录注册页、产品中心等静态页面及一些市场活动页面的开发；</li>
            </ul>
        `
    },
    {
        "icon": "skill.png",
        "title": "专业技能",
        "desc": `
            <div style="font-weight: bold">Web前端：</div>
            <ul class=${style.itemUl}>
                <li>熟练使用HTML、CSS，熟悉HTML5、CSS3新特性，使用Sass编译CSS；</li>
                <li>熟悉web前端开发流程，熟练使用JavaScript、jQuery，能够使用ES6进行前端页面开发；</li>
                <li>会使用React，理解redux思想；</li>
                <li>了解Vue、Angular等前端框架；</li>
                <li>熟练使用Photoshop，了解webpack 等前端开发工具；</li>
                <li>熟练使用git；</li>
            </ul>
            <div style="font-weight: bold">其他：</div>
            <ul class=${style.itemUl}>
                <li>大学英语六级（CET-6），汉语言文学双学位；</li>
                <li>熟练使用Office、AutoCAD;</li>
            </ul>
        `
    },
    {
        "icon": "self.png",
        "title": "自我评价",
        "desc": `
            <div style="text-indent:2em">热爱互联网，热爱前端开发。</div>
            <div style="text-indent:2em">性格开朗，待人诚恳，做事认真细心。大学期间辅修汉语言文学双学位，工作后自学前端开发，具有良好的学习和自学能力。对待工作一丝不苟，有恒心有毅力。</div>
        `
    },

];

export  default dataList;