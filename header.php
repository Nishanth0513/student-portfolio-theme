<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php bloginfo('name'); ?> | <?php bloginfo('description'); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="py-3 bg-primary text-white text-center">
  <div class="container">
    <h1 class="mb-0"><?php bloginfo('name'); ?></h1>
    <p class="lead"><?php bloginfo('description'); ?></p>
  </div>
</header>
