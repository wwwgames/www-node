<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="1"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-menu-item index="1">规章制度</el-menu-item>
                <el-menu-item index="2">财务税务</el-menu-item>
                <el-menu-item index="3">组织结构</el-menu-item>
                <el-menu-item index="4">发展历程</el-menu-item>
                <el-menu-item index="5">社会责任</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-card class="card text-left font-size-14">
                <h1 class="text-center">上海伦之信息科技有限公司规章制度</h1>
                <h3>一、收入分配制度</h3>
                <h3>二、信息公开与数字化建设</h3>
                <h3>三、休假与福利</h3>
                <h3>四、员工职业规划</h3>
            </el-card>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl: require('../assets/parents.jpg')
            }
        }
    }
</script>

<style>
    .text-left {
        text-align: left;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }

    .text-indent {
        text-indent: 25px;
    }

    .text-indent-0 {
        text-indent: 0px;
    }

    .font-size-12 {
        font-size: 12px;
    }

    .font-size-14 {
        font-size: 14px;
    }
    .card {
        margin: 0 auto;
        width: 1000px;
    }
</style>