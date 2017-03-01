<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="<?php print $language->language; ?>" xml:lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="<?php print $language->language; ?>" xml:lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="<?php print $language->language; ?>" xml:lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" xml:lang="<?php print $language->language; ?>" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>" <?php print $rdf_namespaces; ?>> <!--<![endif]-->
  <head>
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <?php print $styles; ?>
    <?php print $scripts; ?>
  </head>
  <body class="<?php print $classes; ?>" <?php print $attributes;?>>
    <div class="access">
    
    <dl class="a-fontsize">
      <dt>Размер шрифта:</dt>
      <dd><a href="#" rel="fontsize-small" class="a-fontsize-small"></a></dd>
      <dd><a rel="fontsize-normal" href="#" class="a-fontsize-normal"></a></dd>
      <dd><a href="#" rel="fontsize-big" class="a-fontsize-big"></a></dd>
    </dl>
    <dl class="a-colors">
      <dt>Цвета сайта</dt>
      <dd><a href="#" rel="color1" class="a-color1"></a></dd>
      <dd><a href="#" rel="color2" class="a-color2"></a></dd>
      <dd><a href="#" rel="color3" class="a-color3"></a></dd>
    </dl>   
    <dl class="a-images">
      <dt>Изображения</dt>
      <dd><a rel="imagesoff" href="#" class="a-imagesoff"></a></dd>
    </dl>
      <p class="a-settings"><a href="#">Параметры</a></p>

    <div class="popped" style="display: none;">
    <h2>Параметры шрифта:</h2>
    
    <p class="choose-font-family">Выберите шрифт <a class="font-family" id="sans-serif" rel="sans-serif" href="#">Arial</a> <a class="font-family" rel="serif" id="serif" href="#">Times New Roman</a></p>
    <p class="choose-letter-spacing">Интервал между символами (кернинг): <a class="letter-spacing" id="spacing-small" rel="spacing-small" href="#">Стандартный</a> <a rel="spacing-normal" class="letter-spacing" id="spacing-normal" href="#">Средний</a> <a rel="spacing-big" class="letter-spacing" id="spacing-big" href="#">Большой</a></p>
    
    <h2>Выбор цветовой схемы:</h2>
    <ul class="choose-colors">
      <li id="color1"><a rel="color1" href="#"><span>—</span>Черным по белому</a></li>
      <li id="color2"><a rel="color2" href="#"><span>—</span>Белым по черному</a></li>
      <li id="color3"><a rel="color3" href="#"><span>—</span>Темно-синим по голубому</a></li>
    </ul>
      <p class="saveit"><a class="closepopped" href="#"><span>Закрыть панель</span></a> <a class="default" href="#"><span>Вернуть стандартные настройки</span></a></p>
    </div>
  </div>
    <!--[if lt IE 7]>
      <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    <div id="skip">
      <a href="#main-menu"><?php print t('Jump to Navigation'); ?></a>
    </div>
    <?php print $page_top; ?>
    <?php print $page; ?>
    <?php print $page_bottom; ?>
  </body>
</html>
