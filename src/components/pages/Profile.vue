<template>
    <div class="section">
        <h1 class="content-title">
            <font-awesome-icon icon="user-circle" class="icon"/> {{ msg }}
        </h1>
        <div class="profile">
            <div class="content" v-for="(content, index) in contents" :key="index">
                <h2 class="profile_title">
                    <font-awesome-icon :icon="content.icon" class="icon"/> {{ content.title }}
                </h2>
                <p v-if="content.url!=null">
                    <a :href="content.url"> {{ content.text }} </a>
                </p>
                <p v-else class="profile_text">
                    {{ content.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data () {
        return {
            msg: 'Profile',
            contents: [
                {
                    title: 'Name',
                    icon: 'pen-alt',
                    text: '大川 悠人 (Ookawa Yuto)'
                },
                {
                    title: 'University',
                    icon: 'university',
                    text: '立命館大学大学院 情報理工学研究科'
                },
                {
                    title: 'Laboratory',
                    icon: 'tag',
                    text: 'サイバーセキュリティ研究室',
                    url: 'http://www.cysec.cs.ritsumei.ac.jp/'
                },
                {
                    title: 'Research Keyword',
                    icon: 'key',
                    text: 'FIDO, WebAuthn, 属性ベース署名'
                },
                {
                    title: 'Github',
                    icon: ['fab', 'github'],
                    text: 'YutoOkawa',
                    url: 'https://github.com/YutoOkawa/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';

.section {
    @include section;
}

.profile {
    @include box-wrapper;
}

.content {
    @include box(30%);
    background-color: #e2fadb;
}

.profile_title {
    @include box-title;
}

.profile_text {
    @include box-text;
    text-align: center;
}

.icon {
    font-size: 1em;
}
</style>