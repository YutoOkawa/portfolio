<template>
    <div class="section">
        <h1 class="content-title"> {{ msg }} </h1>
        <div class="skill">
            <div class="content" v-for="(skill, index) in skills" :key="index">
                <h2 class="skill_name"> {{ skill.name }} </h2>
                <img v-bind:src="skill.logo" class="lang_icon"><br>
                <p class="skill_text"> {{ skill.text }} </p>
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
                    text: '今一番熱心に取り組んでいます。プログラミング言語Go完全入門を一通り勉強し、現在はWebアプリケーションを作成するべく勉強を続けています。',
                },
                {
                    name: 'Python',
                    logo: require('@/assets/image/icons8-python.svg'),
                    text: '楕円曲線暗号でよく用いられるペアリング演算を用いた暗号アルゴリズムの実装や、簡単なプログラムなどに使っています。そのプログラムの書きやすさから、よく利用しています。',
                },
                {
                    name: 'C',
                    logo: require('@/assets/image/c-2975.svg'),
                    text: '大学1回生でプログラミングを始めて最初に習った言語です。授業内演習で擬似シェルのプログラムを書きました。また、スタックオーバーフロー等のCに潜む脆弱性を付く実験を行いました。',
                },
                {
                    name: 'C++',
                    logo: require('@/assets/image/c.svg'),
                    text: 'ペアリング演算の高速なライブラリであるmclを用いるために現在勉強しています。また、Arduinoを用いた実験をするためにも使用しています。',
                },
                {
                    name: 'Java',
                    logo: require('@/assets/image/java-4.svg'),
                    text: 'オブジェクト指向を学ぶ授業の演習でポーカーゲームを作成しました。また、学部3回生の時にAndroidアプリをJavaで作成しました。',
                },
                {
                    name: 'JavaScript',
                    logo: require('@/assets/image/javascript-1.svg'),
                    text: '卒業研究にて扱った、FIDO2(WebAuthn)を利用するために勉強しました。',
                },
                {
                    name: 'Node.js',
                    logo: require('@/assets/image/Node.js_logo.svg'),
                    text: '卒業研究にて提案手法のFIDOに対応した認証サーバを作成しました。WebAuthnの仕様に基づいてFIDO2の実装を行うことができます。',
                },
                {
                    name: 'Vue.js',
                    logo: require('@/assets/image/logo.svg'),
                    text: 'このポートフォリオはVue.jsで作成しました。フロントエンドの知識はまだ浅いですが、このポートフォリオを通して学んでいきたいと思っています。',
                },
                {
                    name: 'Git',
                    logo: require('@/assets/image/git-icon.svg'),
                    text: 'ある程度のプロジェクト管理をこなすことができます。このポートフォリオの開発にも、Gitを用いて管理しています。また、PR方式の開発手法をグループで行ったことがあります。',
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

.skill {
    @include box-wrapper;
}

.content {
    @include box-shadow;
    @include box(40%);
    // background-color: #dbefbc;
}

.skill_name {
    @include box-title;
}

.skill_text {
    @include box-text;
    text-align: left;
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