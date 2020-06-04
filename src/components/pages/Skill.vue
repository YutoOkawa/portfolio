<template>
    <div>
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="skill">
            <div class="content" v-for="(skill, index) in skills" :key="index">
                <h4> {{ skill.name }} </h4>
                <img v-bind:src="skill.logo" class="lang_icon">
                <h4 class="lang_text"> {{ skill.text }} </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data () {
        return {
            msg: 'Skill List',
            skills: [
                {
                    name: 'Golang',
                    logo: require('@/assets/image/Go-Logo_Blue.svg'),
                    text: '今一番熱心に取り組んでいます。プログラミング言語Go完全入門を一通り勉強し、現在はWebアプリケーションを作成するべく勉強を続けています。'
                },
                {
                    name: 'Python',
                    logo: require('@/assets/image/icons8-python.svg'),
                    text: '楕円曲線暗号でよく用いられるペアリング演算を用いた暗号アルゴリズムの実装や、簡単なプログラムを作る際に使っています。2年ほど前から使い始め、今はメインの言語となっています。'
                },
                {
                    name: 'C',
                    logo: require('@/assets/image/c-2975.svg'),
                    text: '大学1回生でプログラミングを始めて最初に習った言語でした。授業でシェルやサーバのプログラムを書きました。また、スタックオーバーフロー等のCに潜む脆弱性を突く実験をしました。'
                },
                {
                    name: 'C++',
                    logo: require('@/assets/image/c.svg'),
                    text: 'ペアリング演算の高速なライブラリであるmclを用いるために現在勉強しています。また、Arduinoのコードを書くためにも使用しています。'
                },
                {
                    name: 'Java',
                    logo: require('@/assets/image/java-4.svg'),
                    text: 'オブジェクト指向を学ぶ授業の演習でポーカーゲームを作成しました。また学部3回生の時にAndroidアプリをJavaで作成しました。'
                },
                {
                    name: 'JavaScript',
                    logo: require('@/assets/image/javascript-1.svg'),
                    text: '卒業研究にて扱った、FIDOを利用するために勉強しました。後述のNode.jsやVue.jsを利用するための土台となっています。'
                },
                {
                    name: 'Node.js',
                    logo: require('@/assets/image/Node.js_logo.svg'),
                    text: '卒業研究にてFIDO認証のサーバを作成しました。また、PythonのプログラムをNode.js上にて呼び出すプログラムを作成し、その機能をFIDOサーバに実装しました。'
                },
                {
                    name: 'Vue.js',
                    logo: require('@/assets/image/logo.svg'),
                    text: '卒業研究にてフロントエンドを用意する必要があったため勉強しました。また、このポートフォリオはVue.jsで記述しています。'
                },
                {
                    name: 'Git',
                    logo: require('@/assets/image/git-icon.svg'),
                    text: 'ある程度のプロジェクト管理をこなすことができます。このポートフォリオの開発にも、Gitを用いて管理しました。PR方式の開発手法をグループで行ったことがあります。'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';

div.skill {
    @include box-wrapper;
}

div.content {
    @include box-shadow;
    @include box(40%)
}

h4.lang_text {
    text-align: left;
    margin: 0 20px;
    word-break: break-all;
}

h1 {
    color: black;
}

p {
    width: 60%;
    display: inline-block;
}

.lang_icon {
    height: 75px;
    width: 75px;
}
</style>