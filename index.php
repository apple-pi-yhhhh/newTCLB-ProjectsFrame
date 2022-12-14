<?php
// md to html のインポート
require_once("vendor/Michelf/Markdown.inc.php");
use Michelf\Markdown;
// 変換
$md_file = file_get_contents("index.md");
$html = Markdown::defaultTransform($md_file);

?>
<html lang=ja>

<head>
<meta charset="utf-8">
<meta property="og:title" content="{{ タイトル }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ URL }}" />
<meta property="og:image" content="{{ サムネ }}" />
<meta property="og:description" content="{{ 説明 }}" />
<meta property="og:locale" content="ja_JP" />
<meta property="og:locale:alternate" content="ja_JP" />
<meta property="og:site_name" content="" />
<meta name=twitter:card content="summary_large_image">
<meta name=twitter:site content="@tech_chiba">
<meta name=twitter:creator content="@tech_chiba">
<title>{{ タイトル }}</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>

<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
<script src="https://www.gstatic.com/firebasejs/5.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/ui/3.5.2/firebase-ui-auth__ja.js"></script>
<script src="./js/config.js"></script>

<link rel="stylesheet" href="./css/main.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./js/tool.js"></script>
<script src="./js/tech.js"></script>
<script src="./js/main.js"></script>
</head>

<body>
<header>
    <a href=""><img src="https://www.tclb.cf/img/logo/logo.svg"></a>
    <h1 id="headerText"> ヘッダーテキスト </h1>
    <nav>
        <ul>
            <li><a href="" class="action">企画</a></li>
            <li><a href="">ブログ</a></li>
            <li><a href="">技術科部ついて</a></li>
            <li><a href="">お問い合わせ</a></li>
        </ul>
    </nav>
</header>
<progress value="0"></progress>
<main>
    <div id="markdown">
        <?php echo $html; ?>
    </div>
</main>
<div id="stickBottom">
    <div id="account">
        <div id="firebaseui-auth-container"></div>
    </div>
</div>
<footer>
    <nav>
        <ul>
            <li><a href="" class="action">企画</a></li><br>
            <li><a href="">ブログ</a></li><br>
            <li><a href="">技術科部ついて</a></li><br>
            <li><a href="">お問い合わせ</a></li>
        </ul>
    </nav>
    <div id="copy">技術科部 © 2022 All Rights Reserved.</div>
</footer>
<style>
main {
    height: 3000;
}
</style>
</body>
</html>