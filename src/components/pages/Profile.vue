<template>
    <div>
        <h1 class="content-title">
            <font-awesome-icon icon="user-circle" class="icon"/> {{ msg }}
        </h1>
        <div class="profile">
            <div class="content" v-for="(content, index) in contents" :key="index">
                <h1 class="profile_title">
                    <font-awesome-icon :icon="content.icon" class="icon"/> {{ content.title }}
                </h1>
                <h3 v-if="content.url!=null">
                    <a :href="content.url"> {{ content.text }} </a>
                </h3>
                <h3 v-else class="profile_text">
                    {{ content.text }}
                </h3>
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
            text: '暗号とFIDOについて勉強しています。',
            contents: [
                {
                    title: 'Name',
                    icon: 'pen-alt',
                    text: '大川 悠人 (Ookawa Yuto)'
                },
                {
                    title: 'University',
                    icon: 'university',
                    text: '立命館大学院 情報理工学研究科'
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
                },
                {
                    title: 'Facebook',
                    icon: ['fab', 'facebook'],
                    text: 'Ookawa Yuto',
                    url: 'https://www.facebook.com/ookawa.yuuto.1/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';


div.profile {
    @include box-wrapper;
}

div.content {
    @include box(30%)
}

div.profile_title {
    @include box-title;
}

div.profile_text {
    @include box-text;
}

.icon {
    font-size: 1em;
}
</style>