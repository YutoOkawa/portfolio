<template>
    <div>
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="output">
            <div class="content" v-for="(output, index) in outputs" :key="index">
                <a :href="output.url">{{ output.name }}</a>
                <p> {{ output.text }} </p>
                <p>使用言語</p>
                <p>{{ output.lang }}</p>
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
                    name: 'Attribute-Based Signature',
                    text: '属性ベース署名のアルゴリズムをPythonで実装し、Node.jsから呼び出すサンプルプログラム',
                    url: 'https://github.com/YutoOkawa/node_ABS',
                    lang: 'Python, Node.js'
                },
                {
                    name: 'My Portfolio Site',
                    text: '初めてのフロントエンド作成のため、様々なサイトを参考にし作成しました',
                    url: 'https://yutookawa.github.io/portfolio',
                    lang: 'Vue.js'
                },
                {
                    name: 'partDownloader',
                    text: 'メルカリの「プログラミング言語Go完全入門」にて取り組んだ課題で作成したプログラムです。goroutineを用いて、Web上のファイルを高速に取得することができます。',
                    url: 'https://github.com/YutoOkawa/partDownloader',
                    lang: 'golang'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';

div.output {
    @include box-wrapper;
}

div.content {
    // background-color: white;
    // box-shadow: 0px 0px 10px 0px;
    // border-radius: 20px 20px 20px 20px;
    // display: inline-block;
    // margin: 10px;
    // width: 40%;
    @include box-shadow;
    @include box(40%)
}

a {
    font-size: 2em;
}

h3 {
    color: black;
}

p {
    width: 90%;
    display: inline-block;
    text-align: center;
}

</style>