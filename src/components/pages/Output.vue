<template>
    <div class="section">
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="output">
            <div class="content" v-for="(output, index) in outputs" :key="index">
                <h2 class="output_title">
                    <a :href="output.url">{{ output.name }}</a>
                </h2>
                <p class="output_text"> {{ output.text }}</p>
                <h2 class="output_title">使用言語</h2>
                <p class="output_langtext">{{ output.lang }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Output',
    data () {
        return {
            msg: 'Output List',
            outputs: [
                {
                    name: 'FIDO2対応認証サーバ',
                    text: 'Go言語にて作成した、FIDO2(WebAuthn)に対応した認証サーバ。WebAuthnについての知見を深めるため、WebAuthnライブラリは用いず、できるだけ仕様に沿ってフルスクラッチで実装することを目指しました。',
                    url: 'https://github.com/YutoOkawa/goFIDOServer',
                    lang: 'Golang'
                },
                {
                    name: 'My Portfolio Site',
                    text: 'このポートフォリオです。初めてのフロントエンド作成のため、Github上にてポートフォリオを公開されている方々のコードを参考に作成しました。',
                    url: 'https://yutookawa.github.io/portfolio',
                    lang: 'Vue.js'
                },
                {
                    name: 'partDownloader',
                    text: 'メルカリの「プログラミング言語Go完全入門」にて取り組んだ課題で作成したプログラムです。goroutineを用いて、Web上のファイルを高速に取得することができます。',
                    url: 'https://github.com/YutoOkawa/partDownloader',
                    lang: 'Golang'
                },
                {
                    name: '属性ベース暗号方式を用いたFIDO2の拡張による代理認証の実現',
                    text: 'SPT2020(オンライン開催)にて発表した論文です。FIDO認証に属性ベース暗号方式を組み込むことで、ユーザの所持する属性によるアクセス制御が可能としました。',
                    url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=203398&item_no=1&page_id=13&block_id=8',
                    lang: '日本語'
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

.output {
    @include box-wrapper;
}

.content {
    @include box-shadow;
    @include box(40%);
    // background-color: #e2b6cf;
}

.output_title {
    @include box-title;
}

.output_text {
    @include box-text;
    text-align: left;
}

.output_langtext {
    @include box-text;
    text-align: center;
}

</style>