<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="6"><div style="background-color: #545c64; height: 60px; line-height: 60px; color: white; font-size: 24px" >伦之科技</div></el-col>
                <el-col :span="18">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-menu-item index="1"><router-link tag='a' style="text-decoration: none" :to="'/'" >首页</router-link></el-menu-item>
                        <el-menu-item index="2"><router-link tag='a' style="text-decoration: none" :to="'/us'" >我们</router-link></el-menu-item>
                        <el-menu-item index="3"><router-link tag='a' style="text-decoration: none" :to="'/employ'" >招聘</router-link></el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <p>上海伦之信息科技有限公司 浦东新区（县）泥城镇云汉路979号2楼</p>
            <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502013346" target="_blank"><img src="/gonganbeian.png" style="vertical-align: middle"/><span>沪公网安备 31011502013346号</span></a></p>
            <p><a href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/4028c08b50137eac0150651bc7fa7a9c" target="_blank"><img src="/net_authentication.png" style="width:26px;vertical-align: middle"></a>沪网文[2019]2126-146号 | <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">沪ICP备18044920号-1</a></p>
            <p>增值电信业务经营许可证：沪B2-20190037 | 违规信息举报电话/客服电话：(+86) 16602160709</p>
            <p><a href="http://www.shjbzx.cn/" target="_blank" style="display:inline-block;height:30px;width:64px"><img src="/jubao.png" alt="举报" style="width:100%;height:100%"></a><a href="https://newsxmwb.xinmin.cn/special/mljbzsjs/index.html" target="_blank" style="display:inline-block;margin-left:14px;height:30px;width:46px"><img src="/good_netizens.png" style="width:100%;height:100%"></a></p>
            <p>本公司游戏产品适合18岁以上成年人使用（<router-link tag='a' style="color: red" :to="'/parents'" >家长监护</router-link>）<a href="https://lilithimage.lilithcdn.com/common/self-discipline.pdf" target="_blank">自律公约</a></p>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .el-header {
        height: auto !important;
        float:left !important;
    }

    .el-menu {
        height: 60px;
    }

    .el-footer {
        background-color: #eee;
        color: #333;
        text-align: center;
        font-size: 10px;
        height: auto !important;
    }

    .el-footer p {
        margin: 0.5em
    }
    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        /*line-height: 660px;*/
    }
</style>
