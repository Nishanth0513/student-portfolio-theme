<?php
function student_customize_register($wp_customize) {
  // Hero Title
  $wp_customize->add_setting('hero_title', array(
    'default' => 'Hi, I\'m Your Name',
    'sanitize_callback' => 'sanitize_text_field'
  ));

  $wp_customize->add_control('hero_title', array(
    'label' => __('Hero Title', 'student'),
    'section' => 'title_tagline',
    'type' => 'text'
  ));

  // Hero Subtitle
  $wp_customize->add_setting('hero_subtitle', array(
    'default' => 'Aspiring Web Developer & Final Year Student',
    'sanitize_callback' => 'sanitize_text_field'
  ));

  $wp_customize->add_control('hero_subtitle', array(
    'label' => __('Hero Subtitle', 'student'),
    'section' => 'title_tagline',
    'type' => 'text'
  ));
}
add_action('customize_register', 'student_customize_register');

function student_enqueue_scripts() {
  // Bootstrap CSS
  wp_enqueue_style(
    'bootstrap-css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
  );
  // Bootstrap Icons
wp_enqueue_style(
    'bootstrap-icons',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'
  );
  

  // Your theme’s main stylesheet (style.css)
  wp_enqueue_style('main-style', get_stylesheet_uri());

  // Bootstrap JS Bundle
  wp_enqueue_script(
    'bootstrap-js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    array(),
    null,
    true
  );
}
add_action('wp_enqueue_scripts', 'student_enqueue_scripts');
// AOS (Animate On Scroll)
wp_enqueue_style('aos-css', 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css');
wp_enqueue_script('aos-js', 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js', array(), null, true);

