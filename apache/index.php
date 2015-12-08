<?php


?>

<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Game 4</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://bootswatch.com/cosmo/bootstrap.min.css">
    <link href="css/index.css" rel="stylesheet">

    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
    <script src="js/index.js"></script>
</head>
<body style="margin: 0;">

<div id="header">
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">Game 4 Object Placer</a>
            </div>
            <div id="countBox">
                <a id="grassCount" class="navbar-brand">0</a>
                <a id="rockCount" class="navbar-brand">0</a>
                <a id="woodCount" class="navbar-brand">0</a>
            </div>
            <a id="scoreText" class="navbar-brand" style="float: right;">Score: 0</a>
        </div>
    </nav>
</div>

<div id="body">
    <div id="imgRow">
          <img id="left" class="draggable" src="http://dvm.io/img/grass.png" draggable="true" width="100px" height="auto"/>
          <img id="mid" class="draggable" src="http://dvm.io/img/stone.png" draggable="true"width="100px" height="auto" />
          <img id="right" class="draggable" src="http://dvm.io/img/wood.png" draggable="true" width="100px" height="auto"/>
    </div>

    <img id="player" src="http://dvm.io/img/stone.png" width="100px" height="auto"/>

    <div id="area">
        <img src="img/gameplay.png" style="width: 100%;height: 100%;">
    </div>
</div>

<div id="footer">
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" id="textOutput"></a>
            </div>
        </div>
    </nav>
</div>

</body>
</html>